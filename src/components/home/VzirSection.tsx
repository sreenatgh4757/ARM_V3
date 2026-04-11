import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};
const stagger = { visible: { transition: { staggerChildren: 0.12 } } };

const conversations = [
  {
    q: 'Should I raise rates this weekend?',
    sources: ['Events API', 'Competitors'],
    a: 'Yes — a 15,000-person music festival is 800m away Saturday. Your 3 nearest competitors are already sold out. Recommend +22% on Saturday night. You still have 6 rooms open.',
  },
  {
    q: 'How many check-ins do we have today?',
    sources: ['PMS', 'Guest Profiles'],
    a: '12 arrivals today. 3 are VIPs — Ms. Sarah Chen (Room 401) celebrates her anniversary. Champagne placement recommended. First arrival expected at 2pm.',
  },
  {
    q: 'How are we tracking vs last month?',
    sources: ['Xero', 'Channel Manager'],
    a: 'This month: £47,200 — up 18% vs last month. RevPAR at £89.40, above your £82 target. Direct bookings up 31%, saving £3,200 in OTA commission.',
  },
];

type Phase = 'question' | 'typing' | 'answer';

function TypingDots() {
  return (
    <div style={{ display: 'flex', gap: '4px', padding: '10px 14px', alignItems: 'center' }}>
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#2DD4BF' }}
          animate={{ opacity: [0.3, 1, 0.3], y: [0, -4, 0] }}
          transition={{ duration: 0.9, delay: i * 0.18, repeat: Infinity }}
        />
      ))}
    </div>
  );
}

function LiveChatMockup() {
  const [convIndex, setConvIndex] = useState(0);
  const [phase, setPhase] = useState<Phase>('question');

  useEffect(() => {
    let t: ReturnType<typeof setTimeout>;
    if (phase === 'question') t = setTimeout(() => setPhase('typing'), 1200);
    else if (phase === 'typing') t = setTimeout(() => setPhase('answer'), 1800);
    else t = setTimeout(() => { setPhase('question'); setConvIndex((i) => (i + 1) % conversations.length); }, 4000);
    return () => clearTimeout(t);
  }, [phase, convIndex]);

  const conv = conversations[convIndex];

  return (
    <div
      style={{
        background: 'rgba(255,255,255,0.025)',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: '20px',
        overflow: 'hidden',
        boxShadow: '0 40px 80px rgba(0,0,0,0.4)',
      }}
    >
      {/* Header */}
      <div style={{ padding: '14px 20px', borderBottom: '1px solid rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', gap: '10px', background: 'rgba(255,255,255,0.02)' }}>
        <div style={{ display: 'flex', gap: '6px', marginRight: '6px' }}>
          {['#FF5F57', '#FEBC2E', '#28C840'].map((c) => (
            <div key={c} style={{ width: '10px', height: '10px', borderRadius: '50%', background: c }} />
          ))}
        </div>
        <div style={{ width: '30px', height: '30px', borderRadius: '50%', background: 'rgba(45,212,191,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <svg width="13" height="13" viewBox="0 0 80 80" fill="none">
            <polyline points="10,10 40,70 70,10" stroke="#2DD4BF" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div>
          <div style={{ fontFamily: 'Sora, sans-serif', fontSize: '12px', fontWeight: 600, color: '#FAFAFA' }}>Vzir</div>
          <div style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '10px', color: '#22C55E' }}>● All systems connected</div>
        </div>
      </div>

      {/* Messages */}
      <div style={{ padding: '20px', minHeight: '220px', display: 'flex', flexDirection: 'column', gap: '10px', justifyContent: 'flex-end' }}>
        <AnimatePresence mode="wait">
          <motion.div key={`tags-${convIndex}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={{ display: 'flex', gap: '5px', flexWrap: 'wrap' }}>
            <span style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '9px', color: '#71717A' }}>Querying:</span>
            {conv.sources.map((s) => (
              <span key={s} style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '9px', color: '#2DD4BF', background: 'rgba(45,212,191,0.07)', border: '1px solid rgba(45,212,191,0.18)', padding: '2px 7px', borderRadius: '4px' }}>{s}</span>
            ))}
          </motion.div>
        </AnimatePresence>

        <AnimatePresence mode="wait">
          <motion.div key={`q-${convIndex}`} initial={{ opacity: 0, x: 14 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.35 }} style={{ alignSelf: 'flex-end', maxWidth: '82%' }}>
            <div style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '14px 14px 4px 14px', padding: '10px 14px' }}>
              <p style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '13px', color: '#FAFAFA', margin: 0 }}>{conv.q}</p>
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
            <motion.div key={`a-${convIndex}`} initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }} style={{ alignSelf: 'flex-start', maxWidth: '92%' }}>
              <div style={{ background: 'rgba(45,212,191,0.05)', border: '1px solid rgba(45,212,191,0.12)', borderRadius: '4px 14px 14px 14px', padding: '12px 16px' }}>
                <p style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '13px', color: '#E2E8F0', margin: 0, lineHeight: 1.65 }}>{conv.a}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Input bar */}
      <div style={{ padding: '12px 18px', borderTop: '1px solid rgba(255,255,255,0.06)', display: 'flex', gap: '8px', alignItems: 'center' }}>
        <div style={{ flex: 1, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '8px', padding: '8px 12px', color: '#71717A', fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '12px' }}>
          Ask your hotel anything…
        </div>
        <div style={{ width: '34px', height: '34px', borderRadius: '8px', background: '#14B8A6', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#09090B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
          </svg>
        </div>
      </div>

      {/* Progress dots */}
      <div style={{ display: 'flex', gap: '6px', justifyContent: 'center', padding: '10px 0 14px' }}>
        {conversations.map((_, i) => (
          <div key={i} style={{ width: i === convIndex ? '20px' : '6px', height: '6px', borderRadius: '3px', background: i === convIndex ? '#2DD4BF' : 'rgba(255,255,255,0.15)', transition: 'all 0.3s ease' }} />
        ))}
      </div>
    </div>
  );
}

export default function VzirSection() {
  return (
    <section id="vzir" className="relative py-24 lg:py-32 bg-gradient-to-b from-[#09090B] to-[#0F0F13]">
      <div className="max-w-[1300px] mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* Left — copy */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={stagger}
          >
            <motion.p variants={fadeUp} className="font-body text-[11px] tracking-[3px] uppercase text-[#2DD4BF] mb-4">
              Our Flagship Product
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="font-display text-[#FAFAFA] mb-5"
              style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 700, lineHeight: 1.1 }}
            >
              One AI for your entire hotel.
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="font-body text-[#A1A1AA] mb-4"
              style={{ fontSize: 'clamp(15px, 1.5vw, 17px)', lineHeight: 1.7 }}
            >
              Hotel managers today log into 5 different systems before they can make one decision. Vzir ends that — it connects everything and lets you ask questions in plain English.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="font-body text-[#71717A] mb-6"
              style={{ fontSize: 'clamp(13px, 1.3vw, 15px)', lineHeight: 1.7 }}
            >
              PMS · Booking.com · Xero · WhatsApp · Flights · Events · Weather · Competitors
            </motion.p>

            {/* Stats */}
            <motion.div variants={fadeUp} className="flex gap-8 mb-8">
              {[
                { num: '10+', label: 'Data sources' },
                { num: '2 hrs', label: 'Saved daily' },
                { num: '60 days', label: 'Free pilot' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: '22px', color: '#2DD4BF' }}>{stat.num}</div>
                  <div style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '12px', color: '#71717A' }}>{stat.label}</div>
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3">
              <Link
                to="/vzir"
                className="inline-flex items-center justify-center gap-2 font-body font-semibold text-sm px-8 py-4 rounded-xl border-none cursor-pointer transition-all duration-200"
                style={{ background: 'linear-gradient(135deg, #2DD4BF, #0891B2)', color: '#09090B', minHeight: '48px' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; }}
              >
                See Vzir in full <ArrowRight size={15} />
              </Link>
              <a
                href="mailto:info@armtechnologies.ltd"
                className="inline-flex items-center justify-center font-body font-semibold text-sm px-8 py-4 rounded-xl border transition-all duration-200"
                style={{ background: 'transparent', color: '#FAFAFA', border: '1px solid rgba(255,255,255,0.12)', minHeight: '48px' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.05)'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }}
              >
                Request a demo
              </a>
            </motion.div>
          </motion.div>

          {/* Right — live animated chat */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <LiveChatMockup />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
