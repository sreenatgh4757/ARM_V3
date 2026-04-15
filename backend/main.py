from fastapi import FastAPI, Request, HTTPException, BackgroundTasks
from fastapi.responses import PlainTextResponse
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import httpx
import os
import anthropic
from dotenv import load_dotenv

load_dotenv()

app = FastAPI(title="ARM Technologies WhatsApp Bot")

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "https://armtechnologies.ltd",
        "https://www.armtechnologies.ltd",
        "http://localhost:5173",
        "http://localhost:3000",
    ],
    allow_methods=["*"],
    allow_headers=["*"],
)

WHATSAPP_TOKEN = os.getenv("WHATSAPP_TOKEN")
PHONE_NUMBER_ID = os.getenv("PHONE_NUMBER_ID")
VERIFY_TOKEN = os.getenv("VERIFY_TOKEN", "arm_whatsapp_verify_2024")
ANTHROPIC_API_KEY = os.getenv("ANTHROPIC_API_KEY")

WHATSAPP_API_URL = f"https://graph.facebook.com/v19.0/{PHONE_NUMBER_ID}/messages"

claude_client = anthropic.Anthropic(api_key=ANTHROPIC_API_KEY)

SYSTEM_PROMPT = """You are the AI assistant for ARM Technologies, a UK-based software company based in Bournemouth building AI-powered products for the hospitality industry. You're responding via WhatsApp.

## About ARM Technologies
- UK SaaS company, Bournemouth
- Building intelligent software for hospitality
- Email: info@armtechnologies.ltd
- Website: armtechnologies.ltd

## Our Products

### Vzir (Flagship — In Development, Pilot Open)
AI Hotel Intelligence Platform for independent hotel managers.
- Connects PMS (Cloudbeds), Xero accounting, WhatsApp, OTAs (Booking.com), events APIs, flights, weather, competitor rates
- Hotel manager asks any question in plain English → Vzir queries all systems simultaneously → one clear answer
- Read-only access — never writes to hotel systems, data stays safe
- 20-minute setup, no IT team required
- Saves 1–4 hours every morning
- 90-day FREE pilot available
- Market: £11B+ UK hospitality market

### The Gig Search (Live)
Hospitality job matching platform — live at thegigsearch.com
Connecting skilled hospitality workers with the right roles, faster than general job boards.

### Consulting (Available)
Strategic advisory for early-stage startups — revenue models, operations, growth strategy.

## Pilot Application
If anyone is interested in Vzir pilot: encourage them to email info@armtechnologies.ltd with subject "Vzir Pilot" or visit armtechnologies.ltd

## Your Tone
- Friendly, concise, conversational — this is WhatsApp not email
- Max 3-4 sentences per reply
- Use *bold* for emphasis where appropriate
- Don't use bullet points excessively — keep it natural
- If you don't know something specific, say so and offer to connect them with the team
"""

# In-memory conversation store (per phone number)
conversation_store: dict[str, list] = {}


async def send_whatsapp_message(to: str, message: str):
    """Send a free-form WhatsApp text message"""
    phone = to.replace("+", "").replace(" ", "").replace("-", "")
    headers = {
        "Authorization": f"Bearer {WHATSAPP_TOKEN}",
        "Content-Type": "application/json",
    }
    payload = {
        "messaging_product": "whatsapp",
        "to": phone,
        "type": "text",
        "text": {"body": message},
    }
    async with httpx.AsyncClient() as client:
        resp = await client.post(WHATSAPP_API_URL, json=payload, headers=headers)
        return resp.json()


async def get_ai_reply(user_message: str, from_number: str) -> str:
    """Send message to Claude with conversation history"""
    history = conversation_store.get(from_number, [])
    messages = history + [{"role": "user", "content": user_message}]

    response = claude_client.messages.create(
        model="claude-sonnet-4-6",
        max_tokens=400,
        system=SYSTEM_PROMPT,
        messages=messages,
    )
    reply = response.content[0].text

    # Update history (keep last 10 turns)
    updated = messages + [{"role": "assistant", "content": reply}]
    conversation_store[from_number] = updated[-10:]

    return reply


# ─── Contact Form ─────────────────────────────────────────────────────────────

class ContactForm(BaseModel):
    name: str
    phone: str
    interest: str = "Vzir"


@app.post("/contact")
async def contact(form: ContactForm, background_tasks: BackgroundTasks):
    """
    Website form submission → sends initial WhatsApp message to the visitor.
    Note: WhatsApp Cloud API requires an approved template for the first outbound
    message. The initial message is sent as free-form (works within Meta's 24h window
    or if the number has previously messaged the business).
    """
    phone = form.phone.strip().replace(" ", "").replace("-", "")
    if not phone.startswith("+"):
        phone = "+" + phone

    initial_message = (
        f"Hi {form.name}! 👋 Thanks for reaching out to *ARM Technologies*.\n\n"
        f"I'm your AI assistant. You mentioned you're interested in *{form.interest}* — "
        f"I'd love to tell you more.\n\n"
        f"What would you like to know? Feel free to ask me anything!"
    )

    background_tasks.add_task(send_whatsapp_message, phone, initial_message)

    return {"success": True, "message": "WhatsApp message sent to your number."}


# ─── WhatsApp Webhook ─────────────────────────────────────────────────────────

@app.get("/webhook")
async def verify_webhook(request: Request):
    """Meta webhook verification handshake — must return challenge as plain text"""
    params = dict(request.query_params)
    mode = params.get("hub.mode")
    token = params.get("hub.verify_token")
    challenge = params.get("hub.challenge")

    if mode == "subscribe" and token == VERIFY_TOKEN:
        return PlainTextResponse(content=challenge, status_code=200)

    raise HTTPException(status_code=403, detail="Webhook verification failed")


@app.post("/webhook")
async def receive_message(request: Request, background_tasks: BackgroundTasks):
    """Receive incoming WhatsApp messages → Claude → reply"""
    body = await request.json()

    try:
        entry = body["entry"][0]
        changes = entry["changes"][0]["value"]

        if "messages" not in changes:
            return {"status": "ok"}

        msg = changes["messages"][0]
        from_number = msg["from"]
        msg_type = msg.get("type")

        if msg_type != "text":
            # Acknowledge non-text messages gracefully
            background_tasks.add_task(
                send_whatsapp_message,
                from_number,
                "Thanks for your message! I can only handle text right now. Type your question and I'll answer right away. 😊",
            )
            return {"status": "ok"}

        user_text = msg["text"]["body"]

        # Get AI response in background
        async def reply():
            ai_text = await get_ai_reply(user_text, from_number)
            await send_whatsapp_message(from_number, ai_text)

        background_tasks.add_task(reply)

    except (KeyError, IndexError):
        pass

    return {"status": "ok"}


# ─── Health ───────────────────────────────────────────────────────────────────

@app.get("/health")
async def health():
    return {"status": "healthy", "service": "ARM Technologies WhatsApp Bot"}
