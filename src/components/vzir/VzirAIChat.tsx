import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const conversations = [
  {
    q: 'How many check-ins do we have today?',
    sources: ['PMS', 'Guest Profiles'],
    a: '12 arrivals today. 3 are marked VIP — Ms. Sarah Chen (Room 401) is celebrating her anniversary; champagne placement is recommended. First guest expected at 2pm. All have confirmed.',
  },
  {
    q: 'Should I raise rates this weekend?',
    sources: ['Events API', 'Competitor Rates', 'Occupancy'],
    a: 'Strong signals say yes. A 15,000-person music festival is 800m away this Saturday. Your 3 nearest competitors are already sold out. Recommend +22% on Saturday night — you still have 6 rooms open.',
  },
  {
    q: 'Which rooms still need cleaning?',
    sources: ['Housekeeping', 'PMS'],
    a: 'Rooms 205, 318, and 421 are still dirty. Staff are on 205 now — ETA 20 minutes. Rooms 318 and 421 are priority: both guests arrive at 3pm.',
  },
  {
    q: 'How are we tracking against last month?',
    sources: ['Xero', 'OTAs', 'Channel Manager'],
    a: 'This month: £47,200 revenue — up 18% vs last month. RevPAR is £89.40, above your £82 target. Biggest driver: direct bookings up 31%, saving £3,200 in OTA commission.',
  },
];

function TypingDots() {
  return (
    <div style={{ display: 'flex', gap: '5px', padding: '14px 18px', alignItems: 'center' }}>
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#2DD4BF' }}
          animate={{ opacity: [0.3, 1, 0.3], y: [0, -5, 0] }}
          transition={{ duration: 0.9, delay: i * 0.18, repeat: Infinity }}
        />
      ))}
    </div>
  );
}

type Phase = 'question' | 'typing' | 'answer';

export default function VzirAIChat() {
  const [convIndex, setConvIndex] = useState(0);
  const [phase, setPhase] = useState<Phase>('question');

  useEffect(() => {
    let t: ReturnType<typeof setTimeout>;
    if (phase === 'question') {
      t = setTimeout(() => setPhase('typing'), 1400);
    } else if (phase === 'typing') {
      t = setTimeout(() => setPhase('answer'), 2200);
    } else {
      t = setTimeout(() => {
        setPhase('question');
        setConvIndex((i) => (i + 1) % conversations.length);
      }, 4500);
    }
    return () => clearTimeout(t);
  }, [phase, convIndex]);

  const conv = conversations[convIndex];

  const jumpTo = (i: number) => {
    setConvIndex(i);
    setPhase('question');
  };

  return (
    <section
      style={{
        background: '#09090B',
        padding: 'clamp(80px, 10vw, 130px) 0',
        borderTop: '1px solid rgba(255,255,255,0.05)',
      }}
    >
      <div className="max-w-[1400px] mx-auto px-5 lg:px-20">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: '64px' }}
        >
          <p
            className="font-mono"
            style={{ fontSize: '11px', color: '#71717A', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px' }}
          >
            LIVE DEMO
          </p>
          <h2
            style={{
              fontFamily: 'Sora, sans-serif', fontWeight: 700,
              fontSize: 'clamp(26px, 4vw, 44px)', color: '#FAFAFA', marginBottom: '16px',
            }}
          >
            Ask anything. Get everything.
          </h2>
          <p
            style={{
              fontFamily: 'Plus Jakarta Sans, sans-serif',
              fontSize: 'clamp(14px, 1.5vw, 17px)',
              color: '#A1A1AA', maxWidth: '460px', margin: '0 auto', lineHeight: 1.6,
            }}
          >
            Vzir pulls from every connected system and gives you one clear, instant answer.
          </p>
        </motion.div>

        {/* Chat window */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            width: '100%', maxWidth: '780px', margin: '0 auto',
            background: 'rgba(255,255,255,0.025)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '20px',
            overflow: 'hidden',
            boxShadow: '0 40px 120px rgba(0,0,0,0.5)',
          }}
        >
          {/* Window chrome */}
          <div
            style={{
              padding: '16px 22px',
              borderBottom: '1px solid rgba(255,255,255,0.06)',
              display: 'flex', alignItems: 'center', gap: '12px',
              background: 'rgba(255,255,255,0.02)',
            }}
          >
            <div style={{ display: 'flex', gap: '7px', marginRight: '8px' }}>
              {['#FF5F57', '#FEBC2E', '#28C840'].map((c) => (
                <div key={c} style={{ width: '12px', height: '12px', borderRadius: '50%', background: c }} />
              ))}
            </div>
            <div
              style={{
                width: '34px', height: '34px', borderRadius: '50%',
                background: 'rgba(45,212,191,0.12)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
              }}
            >
              <svg width="15" height="15" viewBox="0 0 80 80" fill="none">
                <polyline points="10,10 40,70 70,10" stroke="#2DD4BF" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div>
              <div style={{ fontFamily: 'Sora, sans-serif', fontSize: '13px', fontWeight: 600, color: '#FAFAFA' }}>Vzir</div>
              <div style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '11px', color: '#22C55E' }}>
                ● Online · All systems connected
              </div>
            </div>
          </div>

          {/* Messages area */}
          <div style={{ padding: '28px 24px', minHeight: '270px', display: 'flex', flexDirection: 'column', gap: '14px', justifyContent: 'flex-end' }}>

            {/* Source tags */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`tags-${convIndex}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}
              >
                <span style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '10px', color: '#71717A', alignSelf: 'center' }}>
                  Querying:
                </span>
                {conv.sources.map((s) => (
                  <span
                    key={s}
                    style={{
                      fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '10px', color: '#2DD4BF',
                      background: 'rgba(45,212,191,0.07)', border: '1px solid rgba(45,212,191,0.18)',
                      padding: '3px 8px', borderRadius: '5px', letterSpacing: '0.02em',
                    }}
                  >
                    {s}
                  </span>
                ))}
              </motion.div>
            </AnimatePresence>

            {/* User question bubble */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`q-${convIndex}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                style={{ alignSelf: 'flex-end', maxWidth: '80%' }}
              >
                <div
                  style={{
                    background: 'rgba(255,255,255,0.08)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '16px 16px 4px 16px',
                    padding: '12px 18px',
                  }}
                >
                  <p style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '14px', color: '#FAFAFA', margin: 0 }}>
                    {conv.q}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Vzir response */}
            <AnimatePresence mode="wait">
              {phase === 'typing' && (
                <motion.div
                  key="typing"
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    alignSelf: 'flex-start',
                    background: 'rgba(45,212,191,0.05)',
                    border: '1px solid rgba(45,212,191,0.14)',
                    borderRadius: '4px 16px 16px 16px',
                    display: 'inline-block',
                  }}
                >
                  <TypingDots />
                </motion.div>
              )}

              {phase === 'answer' && (
                <motion.div
                  key={`a-${convIndex}`}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  style={{ alignSelf: 'flex-start', maxWidth: '90%' }}
                >
                  <div
                    style={{
                      background: 'rgba(45,212,191,0.05)',
                      border: '1px solid rgba(45,212,191,0.14)',
                      borderRadius: '4px 16px 16px 16px',
                      padding: '14px 18px',
                    }}
                  >
                    <p
                      style={{
                        fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '14px',
                        color: '#E2E8F0', margin: 0, lineHeight: 1.7,
                      }}
                    >
                      {conv.a}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Input bar */}
          <div
            style={{
              padding: '16px 22px',
              borderTop: '1px solid rgba(255,255,255,0.06)',
              display: 'flex', gap: '10px', alignItems: 'center',
            }}
          >
            <div
              style={{
                flex: 1, background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '10px', padding: '10px 14px',
                color: '#71717A', fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '13px',
              }}
            >
              Ask your hotel anything…
            </div>
            <div
              style={{
                width: '40px', height: '40px', borderRadius: '10px',
                background: '#14B8A6', display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0, cursor: 'pointer',
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#09090B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </div>
          </div>
        </motion.div>

        {/* Conversation dot indicators */}
        <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', marginTop: '28px' }}>
          {conversations.map((c, i) => (
            <button
              key={i}
              onClick={() => jumpTo(i)}
              style={{
                width: i === convIndex ? '28px' : '8px',
                height: '8px', borderRadius: '4px',
                background: i === convIndex ? '#2DD4BF' : 'rgba(255,255,255,0.15)',
                border: 'none', cursor: 'pointer',
                transition: 'all 0.35s ease', padding: 0,
              }}
              aria-label={c.q}
            />
          ))}
        </div>

        {/* Question labels */}
        <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', marginTop: '16px', flexWrap: 'wrap' }}>
          {conversations.map((c, i) => (
            <button
              key={i}
              onClick={() => jumpTo(i)}
              style={{
                fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '12px',
                color: i === convIndex ? '#2DD4BF' : '#71717A',
                background: i === convIndex ? 'rgba(45,212,191,0.07)' : 'transparent',
                border: `1px solid ${i === convIndex ? 'rgba(45,212,191,0.2)' : 'rgba(255,255,255,0.07)'}`,
                padding: '5px 12px', borderRadius: '6px',
                cursor: 'pointer', transition: 'all 0.25s',
              }}
            >
              {c.q}
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}
