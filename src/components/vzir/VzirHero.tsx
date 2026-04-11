import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const QUESTIONS = [
  'How many check-ins do we have today?',
  'Should I raise rates this weekend?',
  'Which rooms still need cleaning?',
  "What's affecting our occupancy next month?",
  'How are we tracking against last month?',
  'Any local events I should know about?',
];

export default function VzirHero() {
  const [qIndex, setQIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setQIndex((i) => (i + 1) % QUESTIONS.length), 2800);
    return () => clearInterval(t);
  }, []);

  const scrollToPilot = () => {
    document.getElementById('pilot')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToDemo = () => {
    document.getElementById('ai-demo')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div
      style={{
        position: 'relative', minHeight: '100vh',
        display: 'flex', alignItems: 'center', overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'url(https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920)',
          backgroundSize: 'cover', backgroundPosition: 'center',
        }}
      />
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(9,9,11,0.90)' }} />

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-5 lg:px-20 py-32">
        <div style={{ maxWidth: '680px' }}>

          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            style={{ marginBottom: '32px' }}
          >
            <span
              className="font-mono uppercase"
              style={{
                fontSize: '10px', background: 'rgba(45,212,191,0.08)',
                color: '#2DD4BF', padding: '6px 16px', borderRadius: '9999px',
                letterSpacing: '3px', display: 'inline-flex', alignItems: 'center', gap: '8px',
              }}
            >
              <span
                style={{
                  width: '7px', height: '7px', borderRadius: '50%', background: '#2DD4BF',
                  display: 'inline-block', animation: 'vzirPulse 1.6s ease-in-out infinite',
                }}
              />
              HOTEL INTELLIGENCE PLATFORM
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{
              fontFamily: 'Sora, sans-serif', fontWeight: 700,
              fontSize: 'clamp(36px, 5.5vw, 62px)',
              lineHeight: 1.08, color: '#FAFAFA', marginBottom: '24px',
            }}
          >
            Ask your hotel{' '}
            <span style={{ color: '#2DD4BF' }}>anything.</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{
              marginBottom: '28px',
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '12px',
              padding: '14px 18px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              maxWidth: '100%',
            }}
          >
            <svg width="14" height="14" viewBox="0 0 80 80" fill="none" style={{ flexShrink: 0 }}>
              <polyline points="10,10 40,70 70,10" stroke="#2DD4BF" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div style={{ overflow: 'hidden', height: '22px', flex: 1 }}>
              <AnimatePresence mode="wait">
                <motion.span
                  key={qIndex}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -14 }}
                  transition={{ duration: 0.35 }}
                  style={{
                    fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '14px',
                    color: '#E2E8F0', display: 'block', whiteSpace: 'nowrap',
                  }}
                >
                  "{QUESTIONS[qIndex]}"
                </motion.span>
              </AnimatePresence>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            style={{
              fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 300,
              fontSize: 'clamp(15px, 1.8vw, 17px)', color: '#A1A1AA',
              lineHeight: 1.75, maxWidth: '540px', marginBottom: '28px',
            }}
          >
            Vzir connects your PMS, bookings, revenue, guest messages, flights, local events, weather, and competitor rates into one AI — and answers any question in plain English, instantly.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '36px' }}
          >
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#22C55E', display: 'inline-block', flexShrink: 0 }} />
            <span style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '13px', color: '#71717A' }}>
              60-day pilot · Now onboarding UK hotels · Read-only access
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4"
          >
            <button
              onClick={scrollToPilot}
              className="w-full sm:w-auto"
              style={{
                fontFamily: 'Sora, sans-serif', fontWeight: 600, fontSize: '14px',
                color: '#09090B', background: '#14B8A6',
                padding: '16px 36px', borderRadius: '12px', border: 'none',
                cursor: 'pointer', transition: 'background 0.2s, transform 0.2s', minHeight: '52px',
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = '#0D9488'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = '#14B8A6'; (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; }}
            >
              Apply for the pilot ↓
            </button>
            <button
              onClick={scrollToDemo}
              className="w-full sm:w-auto"
              style={{
                fontFamily: 'Sora, sans-serif', fontWeight: 600, fontSize: '14px',
                color: '#FAFAFA', background: 'transparent',
                border: '1px solid rgba(255,255,255,0.15)',
                padding: '16px 36px', borderRadius: '12px',
                cursor: 'pointer', transition: 'background 0.2s', minHeight: '52px',
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.05)'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }}
            >
              See it in action ↓
            </button>
          </motion.div>
        </div>
      </div>

      <style>{`
        @keyframes vzirPulse {
          0%, 100% { opacity: 1; box-shadow: 0 0 0 0 rgba(45,212,191,0.6); }
          50% { opacity: 0.6; box-shadow: 0 0 0 5px rgba(45,212,191,0); }
        }
      `}</style>
    </div>
  );
}
