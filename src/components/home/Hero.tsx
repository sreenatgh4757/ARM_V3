import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const ROTATING_WORDS = [
  'your revenue.',
  'your guests.',
  'your operations.',
  'everything.',
];

const COL1_CARDS = [
  { label: 'Dashboard', color: '#2DD4BF', bg: 'rgba(45,212,191,0.07)', border: 'rgba(45,212,191,0.15)', height: 100 },
  { label: 'Analytics', color: '#8B5CF6', bg: 'rgba(139,92,246,0.07)', border: 'rgba(139,92,246,0.15)', height: 100 },
  { label: 'Global', color: '#3B82F6', bg: 'rgba(59,130,246,0.07)', border: 'rgba(59,130,246,0.15)', height: 90 },
  { label: 'Messaging', color: '#F59E0B', bg: 'rgba(245,158,11,0.07)', border: 'rgba(245,158,11,0.15)', height: 110 },
];

const COL2_CARDS = [
  { label: 'Forecast', color: '#EC4899', bg: 'rgba(236,72,153,0.07)', border: 'rgba(236,72,153,0.15)', height: 95 },
  { label: 'Events', color: '#22C55E', bg: 'rgba(34,197,94,0.07)', border: 'rgba(34,197,94,0.15)', height: 105 },
  { label: 'Aviation', color: '#6366F1', bg: 'rgba(99,102,241,0.07)', border: 'rgba(99,102,241,0.15)', height: 88 },
  { label: 'Alerts', color: '#EAB308', bg: 'rgba(234,179,8,0.07)', border: 'rgba(234,179,8,0.15)', height: 100 },
];

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);
  return isMobile;
}

function ScrollCard({ card }: any) {
  return (
    <div
      style={{
        width: '140px',
        height: `${card.height}px`,
        borderRadius: '14px',
        background: card.bg,
        border: `1px solid ${card.border}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: card.color,
        fontSize: '12px',
        fontFamily: 'Plus Jakarta Sans',
      }}
    >
      {card.label}
    </div>
  );
}

function DesktopCards() {
  const col1 = [...COL1_CARDS, ...COL1_CARDS];
  const col2 = [...COL2_CARDS, ...COL2_CARDS];

  return (
    <div
      style={{
        position: 'absolute',
        right: '5%',
        top: '50%',
        transform: 'translateY(-50%)',
        width: '320px',
        height: '500px',
        overflow: 'hidden',
        maskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)',
      }}
    >
      <div style={{ display: 'flex', gap: '12px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', animation: 'scrollUp 25s linear infinite' }}>
          {col1.map((c, i) => <ScrollCard key={i} card={c} />)}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', animation: 'scrollDown 30s linear infinite' }}>
          {col2.map((c, i) => <ScrollCard key={i} card={c} />)}
        </div>
      </div>
    </div>
  );
}

function TextContent({ isMobile, wordIndex }: any) {
  return (
    <div style={{ maxWidth: isMobile ? '100%' : '580px', textAlign: isMobile ? 'center' : 'left' }}>
      
      {/* FIXED BADGE */}
      <span
        style={{
          fontSize: isMobile ? '8px' : '10px',
          background: 'rgba(45,212,191,0.08)',
          color: '#2DD4BF',
          padding: '6px 14px',
          borderRadius: '9999px',
          letterSpacing: isMobile ? '2px' : '3px',
          display: 'inline-block',
          whiteSpace: 'normal',
          marginBottom: '20px',
        }}
      >
        BUILDING THE FUTURE OF HOTEL INTELLIGENCE
      </span>

      {/* HEADLINE */}
      <h1
        style={{
          fontFamily: 'Sora',
          fontWeight: 700,
          fontSize: isMobile ? '34px' : 'clamp(42px,5vw,64px)',
          color: '#FAFAFA',
          lineHeight: 1.1,
        }}
      >
        We build software
        <br />
        that thinks for
        <br />
        <span style={{ color: '#2DD4BF' }}>
          <AnimatePresence mode="wait">
            <motion.span key={wordIndex}>
              {ROTATING_WORDS[wordIndex]}
            </motion.span>
          </AnimatePresence>
        </span>
      </h1>

      {/* TEXT */}
      <p style={{ color: '#A1A1AA', marginTop: '20px', lineHeight: 1.7 }}>
        A.R.M Technologies builds AI-powered products for the hospitality industry.
        Vzir connects to every system your hotel uses and answers questions in plain English.
      </p>

      {/* BUTTONS */}
      <div style={{ marginTop: '28px', display: 'flex', gap: '12px', flexDirection: isMobile ? 'column' : 'row' }}>
        <Link to="/vzir" style={{ background: '#14B8A6', padding: '14px 28px', borderRadius: '10px', color: '#000' }}>
          Explore Vzir →
        </Link>
        <button style={{ border: '1px solid #333', padding: '14px 28px', borderRadius: '10px', color: '#fff' }}>
          Get in touch →
        </button>
      </div>
    </div>
  );
}

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const isMobile = useIsMobile();

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex(i => (i + 1) % ROTATING_WORDS.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <style>{`
        @keyframes scrollUp {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        @keyframes scrollDown {
          0% { transform: translateY(-50%); }
          100% { transform: translateY(0); }
        }
      `}</style>

      <div style={{ position: 'relative', minHeight: '100vh', background: '#09090B', display: 'flex', alignItems: 'center' }}>
        
        {/* BG */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url(https://images.unsplash.com/photo-1639322537228-f710d846310a?w=1920)',
          backgroundSize: 'cover'
        }} />

        {/* OVERLAY */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: isMobile
            ? 'rgba(9,9,11,0.92)'
            : 'linear-gradient(to right, rgba(9,9,11,0.97), rgba(9,9,11,0.6))'
        }} />

        {/* CONTENT */}
        <div style={{
          position: 'relative',
          zIndex: 10,
          width: '100%',
          maxWidth: '1400px',
          margin: '0 auto',
          padding: isMobile ? '0 20px' : '0 8%',
          paddingTop: '100px'
        }}>
          <TextContent isMobile={isMobile} wordIndex={wordIndex} />
        </div>

        {/* CARDS */}
        {!isMobile && <DesktopCards />}
      </div>
    </>
  );
}