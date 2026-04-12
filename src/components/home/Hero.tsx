import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import { Link } from 'react-router-dom';

const TAGLINES = [
  'thinks for your hotel.',
  'never misses an opportunity.',
  'connects every system you have.',
  'answers before you ask.',
];

type Phase = 'question' | 'typing' | 'answer';

const chatItems = [
  {
    q: 'Should I raise rates this weekend?',
    sources: ['Events', 'Competitors'],
    a: 'Yes. A 15,000-person festival is 800m away Saturday. Your 3 nearest competitors are already sold out. Recommend +22% on Saturday — 6 rooms still open.',
  },
  {
    q: 'Give me today\'s morning briefing.',
    sources: ['PMS', 'Housekeeping', 'Revenue'],
    a: '12 arrivals today, 3 VIPs. Rooms 205, 318 still dirty — priority before 2pm check-ins. Yesterday revenue: £4,240 (+12% vs same day last week). No alerts outstanding.',
  },
];

function MiniChat() {
  const [idx, setIdx] = useState(0);
  const [phase, setPhase] = useState<Phase>('question');

  useEffect(() => {
    let t: ReturnType<typeof setTimeout>;
    if (phase === 'question') t = setTimeout(() => setPhase('typing'), 1000);
    else if (phase === 'typing') t = setTimeout(() => setPhase('answer'), 1600);
    else t = setTimeout(() => { setIdx(i => (i + 1) % chatItems.length); setPhase('question'); }, 4500);
    return () => clearTimeout(t);
  }, [phase, idx]);

  const c = chatItems[idx];

  return (
    <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '18px', overflow: 'hidden', boxShadow: '0 40px 100px rgba(0,0,0,0.5)' }}>
      {/* Header */}
      <div style={{ padding: '12px 18px', borderBottom: '1px solid rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', gap: '10px', background: 'rgba(255,255,255,0.02)' }}>
        <div style={{ display: 'flex', gap: '5px' }}>
          {['#FF5F57','#FEBC2E','#28C840'].map(c => <div key={c} style={{ width: '9px', height: '9px', borderRadius: '50%', background: c }} />)}
        </div>
        <div style={{ width: '26px', height: '26px', borderRadius: '50%', background: 'rgba(45,212,191,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg width="11" height="11" viewBox="0 0 80 80" fill="none"><polyline points="10,10 40,70 70,10" stroke="#2DD4BF" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </div>
        <div>
          <div style={{ fontFamily: 'Sora, sans-serif', fontSize: '11px', fontWeight: 600, color: '#FAFAFA' }}>Vzir</div>
          <div style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '9px', color: '#22C55E' }}>● Live</div>
        </div>
      </div>

      {/* Messages */}
      <div style={{ padding: '16px', minHeight: '190px', display: 'flex', flexDirection: 'column', gap: '8px', justifyContent: 'flex-end', background: '#09090B' }}>
        <AnimatePresence mode="wait">
          <motion.div key={`tag-${idx}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={{ display: 'flex', gap: '4px', flexWrap: 'wrap' }}>
            <span style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '8px', color: '#71717A' }}>Querying:</span>
            {c.sources.map(s => <span key={s} style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '8px', color: '#2DD4BF', background: 'rgba(45,212,191,0.07)', border: '1px solid rgba(45,212,191,0.18)', padding: '1px 6px', borderRadius: '3px' }}>{s}</span>)}
          </motion.div>
        </AnimatePresence>

        <AnimatePresence mode="wait">
          <motion.div key={`q-${idx}`} initial={{ opacity: 0, x: 12 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} style={{ alignSelf: 'flex-end', maxWidth: '80%' }}>
            <div style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px 12px 3px 12px', padding: '9px 13px' }}>
              <p style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '12px', color: '#FAFAFA', margin: 0 }}>{c.q}</p>
            </div>
          </motion.div>
        </AnimatePresence>

        <AnimatePresence mode="wait">
          {phase === 'typing' && (
            <motion.div key="t" initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }} style={{ alignSelf: 'flex-start', background: 'rgba(45,212,191,0.05)', border: '1px solid rgba(45,212,191,0.12)', borderRadius: '3px 12px 12px 12px', padding: '9px 13px', display: 'flex', gap: '4px' }}>
              {[0,1,2].map(i => <motion.div key={i} style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#2DD4BF' }} animate={{ opacity: [0.3,1,0.3], y: [0,-3,0] }} transition={{ duration: 0.8, delay: i*0.15, repeat: Infinity }} />)}
            </motion.div>
          )}
          {phase === 'answer' && (
            <motion.div key={`a-${idx}`} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }} style={{ alignSelf: 'flex-start', maxWidth: '92%' }}>
              <div style={{ background: 'rgba(45,212,191,0.05)', border: '1px solid rgba(45,212,191,0.12)', borderRadius: '3px 12px 12px 12px', padding: '10px 14px' }}>
                <p style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '12px', color: '#E2E8F0', margin: 0, lineHeight: 1.6 }}>{c.a}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Input */}
      <div style={{ padding: '10px 14px', borderTop: '1px solid rgba(255,255,255,0.06)', display: 'flex', gap: '8px', alignItems: 'center', background: 'rgba(255,255,255,0.01)' }}>
        <div style={{ flex: 1, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '7px', padding: '7px 11px', color: '#71717A', fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '11px' }}>Ask your hotel anything…</div>
        <div style={{ width: '30px', height: '30px', borderRadius: '7px', background: '#14B8A6', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#09090B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  const [tagIdx, setTagIdx] = useState(0);
  const heroRef = useRef<HTMLElement>(null);

  // Cursor glow (base44-style)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const glowX = useSpring(mouseX, { stiffness: 60, damping: 20 });
  const glowY = useSpring(mouseY, { stiffness: 60, damping: 20 });

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const rect = heroRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  }, [mouseX, mouseY]);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    el.addEventListener('mousemove', handleMouseMove);
    return () => el.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  useEffect(() => {
    const t = setInterval(() => setTagIdx(i => (i + 1) % TAGLINES.length), 2600);
    return () => clearInterval(t);
  }, []);

  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden bg-[#09090B]">
      {/* Cursor glow — base44 style */}
      <motion.div
        className="pointer-events-none absolute z-0"
        style={{
          left: glowX,
          top: glowY,
          x: '-50%',
          y: '-50%',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(45,212,191,0.13) 0%, rgba(8,145,178,0.07) 40%, transparent 70%)',
          filter: 'blur(1px)',
        }}
      />

      {/* Background hotel image */}
      <div className="absolute inset-0" style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=1920&q=80)',
        backgroundSize: 'cover', backgroundPosition: 'center',
        opacity: 0.10,
      }} />
      <div className="absolute inset-0 bg-gradient-to-r from-[#09090B] via-[#09090B]/95 to-[#09090B]/70" />

      {/* Subtle grid */}
      <div className="absolute inset-0" style={{
        backgroundImage: 'linear-gradient(rgba(45,212,191,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(45,212,191,0.025) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }} />

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-20 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">

          {/* Left — company copy */}
          <div>
            {/* Company badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              style={{ marginBottom: '28px', display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}
            >
              <span style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '11px', color: '#71717A', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', padding: '5px 14px', borderRadius: '999px', letterSpacing: '1px' }}>
                A.R.M Technologies · Bournemouth, UK
              </span>
              <span style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '11px', color: '#2DD4BF', background: 'rgba(45,212,191,0.07)', border: '1px solid rgba(45,212,191,0.2)', padding: '5px 14px', borderRadius: '999px' }}>
                AI · Hospitality · SaaS
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: 'clamp(36px, 5vw, 60px)', lineHeight: 1.08, color: '#FAFAFA', marginBottom: '16px' }}
            >
              We build software that{' '}
              <span style={{ display: 'block', color: '#2DD4BF', minHeight: '1.15em', overflow: 'hidden' }}>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={tagIdx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    style={{ display: 'block' }}
                  >
                    {TAGLINES[tagIdx]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: 'clamp(15px, 1.6vw, 18px)', color: '#A1A1AA', lineHeight: 1.75, maxWidth: '520px', marginBottom: '32px' }}
            >
              A.R.M Technologies is a UK software company building AI-powered products for the hospitality industry. Our flagship product, <strong style={{ color: '#FAFAFA', fontWeight: 500 }}>Vzir</strong>, connects every system your hotel uses and answers any question in plain English — instantly.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '40px' }}
            >
              <Link
                to="/vzir"
                style={{ fontFamily: 'Sora, sans-serif', fontWeight: 600, fontSize: '14px', color: '#09090B', background: '#14B8A6', padding: '14px 32px', borderRadius: '12px', textDecoration: 'none', display: 'inline-block', transition: 'all 0.2s', minHeight: '50px', lineHeight: '22px' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#0D9488'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = '#14B8A6'; (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; }}
              >
                Explore Vzir →
              </Link>
              <button
                onClick={scrollToProducts}
                style={{ fontFamily: 'Sora, sans-serif', fontWeight: 600, fontSize: '14px', color: '#FAFAFA', background: 'transparent', border: '1px solid rgba(255,255,255,0.15)', padding: '14px 32px', borderRadius: '12px', cursor: 'pointer', transition: 'background 0.2s', minHeight: '50px' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.05)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }}
              >
                What we build ↓
              </button>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              style={{ display: 'flex', gap: '28px', flexWrap: 'wrap', paddingTop: '28px', borderTop: '1px solid rgba(255,255,255,0.06)' }}
            >
              {[
                { n: 'UK', l: 'Based in Bournemouth' },
                { n: '£11B+', l: 'Market size' },
                { n: '90-day', l: 'Free pilot' },
                { n: '20 min', l: 'Setup time' },
              ].map(stat => (
                <div key={stat.l}>
                  <div style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: '20px', color: '#2DD4BF' }}>{stat.n}</div>
                  <div style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '11px', color: '#71717A', marginTop: '2px' }}>{stat.l}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — live Vzir chat */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div style={{ marginBottom: '14px', textAlign: 'right' }}>
              <span style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '11px', color: '#71717A', fontStyle: 'italic' }}>
                Vzir — live demo
              </span>
            </div>
            <MiniChat />
            <p style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '12px', color: '#71717A', textAlign: 'center', marginTop: '14px' }}>
              Real questions. Real answers. Every system connected.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
