import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Clock, Layers, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

const conversations = [
  {
    q: 'Should I raise rates this weekend?',
    sources: ['Events API', 'Competitors'],
    a: 'Yes — a 15,000-person music festival is 800m away Saturday. Your 3 nearest competitors are already sold out. Recommend +22% on Saturday night. 6 rooms still open.',
  },
  {
    q: 'Give me today\'s morning briefing.',
    sources: ['PMS', 'Housekeeping', 'Revenue'],
    a: '12 arrivals today, 3 VIPs (Ms. Chen in 401 celebrating anniversary — champagne recommended). Rooms 205, 318 dirty — priority before 2pm. Yesterday: £4,240 revenue (+12% vs last week).',
  },
  {
    q: 'What does next weekend look like?',
    sources: ['Forecasting', 'Flights', 'Events'],
    a: 'Strong demand. 3 fully-booked flights arrive Friday night. Local Premier League match Saturday (60k cap). Competitors averaging £180/night. You\'re at 40% occupancy — estimated uplift at £160: +£820.',
  },
];

type Phase = 'question' | 'typing' | 'answer';

function TypingDots() {
  return (
    <div style={{ display: 'flex', gap: '4px', padding: '10px 14px', alignItems: 'center' }}>
      {[0, 1, 2].map((i) => (
        <motion.div key={i} style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#2DD4BF' }}
          animate={{ opacity: [0.3, 1, 0.3], y: [0, -4, 0] }}
          transition={{ duration: 0.9, delay: i * 0.18, repeat: Infinity }} />
      ))}
    </div>
  );
}

function LiveChat() {
  const [idx, setIdx] = useState(0);
  const [phase, setPhase] = useState<Phase>('question');

  useEffect(() => {
    let t: ReturnType<typeof setTimeout>;
    if (phase === 'question') t = setTimeout(() => setPhase('typing'), 1300);
    else if (phase === 'typing') t = setTimeout(() => setPhase('answer'), 2000);
    else t = setTimeout(() => { setIdx(i => (i + 1) % conversations.length); setPhase('question'); }, 4500);
    return () => clearTimeout(t);
  }, [phase, idx]);

  const c = conversations[idx];

  return (
    <div style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 40px 100px rgba(0,0,0,0.5)' }}>
      {/* Chrome */}
      <div style={{ padding: '14px 20px', borderBottom: '1px solid rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', gap: '10px', background: 'rgba(255,255,255,0.02)' }}>
        <div style={{ display: 'flex', gap: '6px', marginRight: '4px' }}>
          {['#FF5F57','#FEBC2E','#28C840'].map(c => <div key={c} style={{ width: '10px', height: '10px', borderRadius: '50%', background: c }} />)}
        </div>
        <div style={{ width: '30px', height: '30px', borderRadius: '50%', background: 'rgba(45,212,191,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg width="13" height="13" viewBox="0 0 80 80" fill="none"><polyline points="10,10 40,70 70,10" stroke="#2DD4BF" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </div>
        <div>
          <div style={{ fontFamily: 'Sora, sans-serif', fontSize: '13px', fontWeight: 600, color: '#FAFAFA' }}>Vzir</div>
          <div style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '10px', color: '#22C55E' }}>● All systems connected</div>
        </div>
      </div>

      {/* Messages */}
      <div style={{ padding: '20px', minHeight: '240px', display: 'flex', flexDirection: 'column', gap: '10px', justifyContent: 'flex-end' }}>
        <AnimatePresence mode="wait">
          <motion.div key={`tags-${idx}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={{ display: 'flex', gap: '5px', flexWrap: 'wrap' }}>
            <span style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '9px', color: '#71717A' }}>Querying:</span>
            {c.sources.map(s => <span key={s} style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '9px', color: '#2DD4BF', background: 'rgba(45,212,191,0.07)', border: '1px solid rgba(45,212,191,0.18)', padding: '2px 7px', borderRadius: '4px' }}>{s}</span>)}
          </motion.div>
        </AnimatePresence>

        <AnimatePresence mode="wait">
          <motion.div key={`q-${idx}`} initial={{ opacity: 0, x: 14 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.35 }} style={{ alignSelf: 'flex-end', maxWidth: '82%' }}>
            <div style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '14px 14px 4px 14px', padding: '10px 14px' }}>
              <p style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '13px', color: '#FAFAFA', margin: 0 }}>{c.q}</p>
            </div>
          </motion.div>
        </AnimatePresence>

        <AnimatePresence mode="wait">
          {phase === 'typing' && (
            <motion.div key="typing" initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }} style={{ alignSelf: 'flex-start', background: 'rgba(45,212,191,0.05)', border: '1px solid rgba(45,212,191,0.12)', borderRadius: '4px 14px 14px 14px', display: 'inline-block' }}>
              <TypingDots />
            </motion.div>
          )}
          {phase === 'answer' && (
            <motion.div key={`a-${idx}`} initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }} style={{ alignSelf: 'flex-start', maxWidth: '92%' }}>
              <div style={{ background: 'rgba(45,212,191,0.05)', border: '1px solid rgba(45,212,191,0.12)', borderRadius: '4px 14px 14px 14px', padding: '12px 16px' }}>
                <p style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '13px', color: '#E2E8F0', margin: 0, lineHeight: 1.65 }}>{c.a}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Input */}
      <div style={{ padding: '12px 18px', borderTop: '1px solid rgba(255,255,255,0.06)', display: 'flex', gap: '8px', alignItems: 'center' }}>
        <div style={{ flex: 1, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '8px', padding: '8px 12px', color: '#71717A', fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '12px' }}>Ask your hotel anything…</div>
        <div style={{ width: '34px', height: '34px', borderRadius: '8px', background: '#14B8A6', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#09090B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
        </div>
      </div>

      {/* Dots */}
      <div style={{ display: 'flex', gap: '6px', justifyContent: 'center', padding: '10px 0 14px' }}>
        {conversations.map((_, i) => (
          <div key={i} style={{ width: i === idx ? '20px' : '6px', height: '6px', borderRadius: '3px', background: i === idx ? '#2DD4BF' : 'rgba(255,255,255,0.15)', transition: 'all 0.3s ease' }} />
        ))}
      </div>
    </div>
  );
}

const differentiators = [
  {
    icon: Layers,
    title: '10+ data sources. One answer.',
    desc: 'PMS, accounting, OTAs, WhatsApp, inbound flights, local events, weather, competitor rates — all connected. Vzir reasons across every source simultaneously.',
    color: '#2DD4BF',
  },
  {
    icon: Clock,
    title: 'Saves 1–4 hours every morning.',
    desc: 'Hotel managers waste hours switching between disconnected systems. Vzir ends that. One question, one answer, all the data.',
    color: '#6366F1',
  },
  {
    icon: Zap,
    title: 'Up in 20 minutes. Read-only.',
    desc: 'No IT team. No migration. No write access to your systems. Connect your credentials, link your PMS, and start asking questions.',
    color: '#F59E0B',
  },
];

export default function VzirSection() {
  return (
    <section id="vzir" style={{ background: '#0C0C0F', borderTop: '1px solid rgba(255,255,255,0.05)' }}>

      {/* Part 1: Problem + Demo */}
      <div className="py-24 lg:py-32">
        <div className="max-w-[1300px] mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

            {/* Left copy */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={stagger}
            >
              <motion.p variants={fadeUp} className="font-mono text-[10px] tracking-[3px] uppercase text-[#2DD4BF] mb-4">
                Our Flagship Product
              </motion.p>

              <motion.h2
                variants={fadeUp}
                className="font-display text-[#FAFAFA] mb-5"
                style={{ fontSize: 'clamp(28px, 4vw, 46px)', fontWeight: 700, lineHeight: 1.1 }}
              >
                Your hotel runs on 5 systems.<br />
                <span style={{ color: '#2DD4BF' }}>Vzir connects all of them.</span>
              </motion.h2>

              <motion.p
                variants={fadeUp}
                className="font-body text-[#A1A1AA] mb-5"
                style={{ fontSize: 'clamp(15px, 1.5vw, 17px)', lineHeight: 1.75 }}
              >
                Every morning, hotel managers log into their PMS, accounting software, OTA dashboard, housekeeping app, and guest inbox — then manually piece everything together before they can make a single decision.
              </motion.p>

              <motion.p
                variants={fadeUp}
                className="font-body mb-8"
                style={{ fontSize: 'clamp(15px, 1.5vw, 17px)', lineHeight: 1.75, color: '#FAFAFA' }}
              >
                <span style={{ color: '#EF4444', fontWeight: 600 }}>That's 1–4 hours wasted every single day.</span>
                {' '}Vzir ends that. Connect your systems once. Ask anything in plain English. Get one clear answer — from every system, simultaneously.
              </motion.p>

              {/* Data sources */}
              <motion.div variants={fadeUp} style={{ marginBottom: '28px' }}>
                <p style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '12px', color: '#71717A', marginBottom: '10px' }}>Connects to:</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {['PMS', 'Xero', 'Booking.com', 'WhatsApp', 'Flights', 'Events', 'Weather', 'Competitors'].map(s => (
                    <span key={s} style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '11px', color: '#A1A1AA', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', padding: '4px 10px', borderRadius: '6px' }}>{s}</span>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3">
                <Link
                  to="/vzir"
                  className="inline-flex items-center justify-center gap-2 font-body font-semibold text-sm px-8 py-4 rounded-xl cursor-pointer transition-all duration-200"
                  style={{ background: 'linear-gradient(135deg, #2DD4BF, #0891B2)', color: '#09090B', minHeight: '48px', textDecoration: 'none' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; }}
                >
                  See the full product <ArrowRight size={15} />
                </Link>
                <a
                  href="mailto:info@armtechnologies.ltd"
                  className="inline-flex items-center justify-center font-body font-semibold text-sm px-8 py-4 rounded-xl border transition-all duration-200"
                  style={{ background: 'transparent', color: '#FAFAFA', border: '1px solid rgba(255,255,255,0.12)', minHeight: '48px', textDecoration: 'none' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.05)'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }}
                >
                  Request a demo
                </a>
              </motion.div>
            </motion.div>

            {/* Right: live chat */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, delay: 0.15 }}
            >
              <LiveChat />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Part 2: 3 differentiators */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', padding: 'clamp(60px, 8vw, 100px) 0' }}>
        <div className="max-w-[1300px] mx-auto px-6 lg:px-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {differentiators.map((d) => {
              const Icon = d.icon;
              return (
                <motion.div
                  key={d.title}
                  variants={fadeUp}
                  style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}
                >
                  <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: `${d.color}10`, border: `1px solid ${d.color}25`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Icon size={20} style={{ color: d.color }} />
                  </div>
                  <h3 style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: 'clamp(16px, 1.5vw, 19px)', color: '#FAFAFA', lineHeight: 1.3 }}>{d.title}</h3>
                  <p style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '14px', color: '#A1A1AA', lineHeight: 1.7 }}>{d.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>

    </section>
  );
}
