import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
};
const stagger = { visible: { transition: { staggerChildren: 0.12 } } };

type Msg = { from: 'vzir' | 'guest'; text: string };

const stages: {
  stage: string;
  time: string;
  color: string;
  emoji: string;
  msgs: Msg[];
}[] = [
  {
    stage: 'Pre-Arrival',
    time: '24h before check-in',
    color: '#6366F1',
    emoji: '✈️',
    msgs: [
      {
        from: 'vzir',
        text: "Hi James! 👋 Your check-in at The Meridian is tomorrow at 3pm. Reply YES to confirm, or let us know if your plans change.",
      },
      { from: 'guest', text: 'YES, see you tomorrow!' },
      {
        from: 'vzir',
        text: "Perfect! Parking is available from 2pm. Anything we can prepare for you?",
      },
    ],
  },
  {
    stage: 'Check-In',
    time: 'Arrival day',
    color: '#2DD4BF',
    emoji: '🔑',
    msgs: [
      {
        from: 'vzir',
        text: "Welcome, James! 🔑 Your room is ready — Room 312, 3rd floor, lift on the right. Breakfast 7–10am daily. Need anything?",
      },
      { from: 'guest', text: 'Thanks, looks great!' },
    ],
  },
  {
    stage: 'In-Stay',
    time: 'Day 2',
    color: '#22C55E',
    emoji: '☀️',
    msgs: [
      {
        from: 'vzir',
        text: "Good morning James! ☀️ Today: Sunny, 22°C. The local food market is on nearby until 2pm. Need anything from us?",
      },
      { from: 'guest', text: 'Could we get extra towels?' },
      { from: 'vzir', text: "On their way — 10 minutes. Enjoy your day! 🏖️" },
    ],
  },
  {
    stage: 'Departure + Review',
    time: 'Check-out day',
    color: '#F59E0B',
    emoji: '⭐',
    msgs: [
      {
        from: 'vzir',
        text: "Good morning! 🙏 Thanks for staying with us, James. Check-out is at 11am — reply LATE if you'd like a late check-out.",
      },
      {
        from: 'vzir',
        text: "Your Google review means the world to us: [Leave a review ↗] We hope to see you again!",
      },
    ],
  },
];

export default function VzirWhatsApp() {
  const [activeStage, setActiveStage] = useState(0);
  const current = stages[activeStage];

  return (
    <section
      style={{
        background: '#09090B',
        padding: 'clamp(80px, 10vw, 130px) 0',
        borderTop: '1px solid rgba(255,255,255,0.05)',
      }}
    >
      <div className="max-w-[1400px] mx-auto px-5 lg:px-20">

        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={stagger}
          style={{ textAlign: 'center', marginBottom: '64px' }}
        >
          <motion.p
            variants={fadeUp}
            className="font-mono"
            style={{ fontSize: '11px', color: '#71717A', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px' }}
          >
            GUEST MESSAGING
          </motion.p>
          <motion.h2
            variants={fadeUp}
            style={{
              fontFamily: 'Sora, sans-serif', fontWeight: 700,
              fontSize: 'clamp(26px, 4vw, 44px)', color: '#FAFAFA',
              lineHeight: 1.12, marginBottom: '18px',
            }}
          >
            The entire guest journey,<br />automated on WhatsApp.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            style={{
              fontFamily: 'Plus Jakarta Sans, sans-serif',
              fontSize: 'clamp(14px, 1.5vw, 17px)',
              color: '#A1A1AA', maxWidth: '480px', margin: '0 auto', lineHeight: 1.65,
            }}
          >
            From confirmation to review request — Vzir handles every guest touchpoint so your team can focus on service.
          </motion.p>
        </motion.div>

        <div
          className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start"
          style={{ justifyContent: 'center' }}
        >
          {/* Stage selector */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '100%', maxWidth: '280px' }}>
            {stages.map((s, i) => (
              <motion.button
                key={i}
                onClick={() => setActiveStage(i)}
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
                style={{
                  display: 'flex', alignItems: 'center', gap: '14px',
                  padding: '16px 18px', borderRadius: '14px',
                  border: `1px solid ${activeStage === i ? s.color + '44' : 'rgba(255,255,255,0.07)'}`,
                  background: activeStage === i ? `${s.color}11` : 'rgba(255,255,255,0.02)',
                  cursor: 'pointer', textAlign: 'left',
                  transition: 'all 0.25s ease',
                }}
              >
                <span style={{ fontSize: '22px' }}>{s.emoji}</span>
                <div>
                  <div
                    style={{
                      fontFamily: 'Sora, sans-serif', fontWeight: 600, fontSize: '14px',
                      color: activeStage === i ? '#FAFAFA' : '#A1A1AA',
                    }}
                  >
                    {s.stage}
                  </div>
                  <div style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '11px', color: '#71717A' }}>
                    {s.time}
                  </div>
                </div>
                {activeStage === i && (
                  <div
                    style={{
                      marginLeft: 'auto', width: '6px', height: '6px',
                      borderRadius: '50%', background: s.color, flexShrink: 0,
                    }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* WhatsApp phone mockup */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7 }}
            style={{
              flex: 1, maxWidth: '440px',
              background: '#111B21',
              borderRadius: '24px',
              overflow: 'hidden',
              border: '1px solid rgba(255,255,255,0.08)',
              boxShadow: '0 40px 100px rgba(0,0,0,0.5)',
            }}
          >
            {/* WhatsApp header */}
            <div
              style={{
                background: '#1F2C33',
                padding: '14px 18px',
                display: 'flex', alignItems: 'center', gap: '12px',
                borderBottom: '1px solid rgba(255,255,255,0.05)',
              }}
            >
              <div
                style={{
                  width: '38px', height: '38px', borderRadius: '50%',
                  background: 'rgba(45,212,191,0.15)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                }}
              >
                <svg width="16" height="16" viewBox="0 0 80 80" fill="none">
                  <polyline points="10,10 40,70 70,10" stroke="#2DD4BF" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <div style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 600, fontSize: '14px', color: '#E9EDEF' }}>
                  The Meridian · Vzir
                </div>
                <div style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '11px', color: '#8696A0' }}>
                  Automated · Hotel Guest Assistant
                </div>
              </div>
              <div style={{ marginLeft: 'auto' }}>
                <span
                  style={{
                    fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '10px',
                    color: '#25D366', background: 'rgba(37,211,102,0.1)',
                    padding: '3px 8px', borderRadius: '4px', fontWeight: 600,
                  }}
                >
                  ● LIVE
                </span>
              </div>
            </div>

            {/* Messages */}
            <div
              style={{
                padding: '20px 16px',
                minHeight: '320px',
                display: 'flex', flexDirection: 'column', gap: '10px',
                background: '#0B141A',
              }}
            >
              {/* Stage label */}
              <div style={{ textAlign: 'center', marginBottom: '8px' }}>
                <span
                  style={{
                    fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '11px',
                    color: '#8696A0', background: 'rgba(134,150,160,0.1)',
                    padding: '4px 12px', borderRadius: '8px',
                  }}
                >
                  {current.stage} · {current.time}
                </span>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStage}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}
                >
                  {current.msgs.map((msg, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.18, duration: 0.4 }}
                      style={{
                        alignSelf: msg.from === 'guest' ? 'flex-end' : 'flex-start',
                        maxWidth: '82%',
                      }}
                    >
                      <div
                        style={{
                          background: msg.from === 'guest' ? '#005C4B' : '#1F2C33',
                          borderRadius: msg.from === 'guest'
                            ? '12px 12px 2px 12px'
                            : '12px 12px 12px 2px',
                          padding: '10px 14px',
                        }}
                      >
                        <p
                          style={{
                            fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '13px',
                            color: '#E9EDEF', margin: 0, lineHeight: 1.55,
                          }}
                        >
                          {msg.text}
                        </p>
                        <div
                          style={{
                            fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '10px',
                            color: '#8696A0', marginTop: '4px', textAlign: 'right',
                          }}
                        >
                          {msg.from === 'vzir' ? 'Vzir ✓✓' : 'James'}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Input bar */}
            <div
              style={{
                background: '#1F2C33', padding: '12px 14px',
                display: 'flex', gap: '10px', alignItems: 'center',
                borderTop: '1px solid rgba(255,255,255,0.05)',
              }}
            >
              <div
                style={{
                  flex: 1, background: '#2A3942', borderRadius: '20px',
                  padding: '9px 14px', color: '#8696A0',
                  fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '13px',
                }}
              >
                Message
              </div>
              <div
                style={{
                  width: '38px', height: '38px', borderRadius: '50%',
                  background: '#00A884', display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                  <path d="M2 21l21-9L2 3v7l15 2-15 2v7z" />
                </svg>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '13px',
            color: '#71717A', textAlign: 'center', marginTop: '52px',
            maxWidth: '480px', margin: '52px auto 0',
          }}
        >
          All messages sent through the official WhatsApp Business API.
          Every conversation is visible and manageable inside Vzir.
        </motion.p>

      </div>
    </section>
  );
}
