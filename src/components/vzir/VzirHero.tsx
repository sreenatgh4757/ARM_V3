import { motion } from 'framer-motion';

export default function VzirHero() {
  const scrollToPilot = () => {
    const el = document.getElementById('pilot');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToSources = () => {
    const el = document.getElementById('data-sources');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'url(https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920)',
        backgroundSize: 'cover', backgroundPosition: 'center',
      }} />
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(9,9,11,0.88)' }} />

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-5 lg:px-20 py-32">
        <div style={{ maxWidth: '650px' }}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ marginBottom: '32px' }}
          >
            <span className="font-mono uppercase" style={{
              fontSize: '10px', background: 'rgba(45,212,191,0.08)', color: '#2DD4BF',
              padding: '6px 16px', borderRadius: '9999px', letterSpacing: '3px',
              display: 'inline-block',
            }}>
              HOTEL INTELLIGENCE PLATFORM
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{
              fontFamily: 'Sora, sans-serif', fontWeight: 700,
              fontSize: 'clamp(34px, 5vw, 56px)',
              lineHeight: 1.1, color: '#FAFAFA', marginBottom: '24px',
            }}
          >
            Ask your hotel anything.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{
              fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 300,
              fontSize: 'clamp(15px, 2vw, 17px)', color: '#A1A1AA',
              lineHeight: 1.7, maxWidth: '520px', marginBottom: '28px',
            }}
          >
            Vzir connects Multiple data sources into one AI — your PMS, bookings, revenue, guest messages, flights, events, weather, competitors, trends, and guest requests — and answers any question instantly.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '36px' }}
          >
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#2DD4BF', display: 'inline-block', flexShrink: 0 }} />
            <span style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '13px', color: '#71717A' }}>
              60-day pilot · Now onboarding UK hotels
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4"
          >
            <button
              onClick={scrollToPilot}
              className="w-full sm:w-auto"
              style={{
                fontFamily: 'Sora, sans-serif', fontWeight: 600, fontSize: '14px',
                color: '#09090B', background: '#14B8A6',
                padding: '16px 36px', borderRadius: '12px', border: 'none',
                cursor: 'pointer', transition: 'background 0.2s, transform 0.2s',
                minHeight: '52px',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.background = '#0D9488';
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.background = '#14B8A6';
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
              }}
            >
              Apply for the pilot &darr;
            </button>
            <button
              onClick={scrollToSources}
              className="w-full sm:w-auto"
              style={{
                fontFamily: 'Sora, sans-serif', fontWeight: 600, fontSize: '14px',
                color: '#FAFAFA', background: 'transparent',
                border: '1px solid rgba(255,255,255,0.15)',
                padding: '16px 36px', borderRadius: '12px',
                cursor: 'pointer', transition: 'background 0.2s',
                minHeight: '52px',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.05)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }}
            >
              Watch it work &darr;
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
