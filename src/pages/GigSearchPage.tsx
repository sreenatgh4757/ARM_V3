import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function GigSearchPage() {
  return (
    <section
      className="min-h-screen flex items-center justify-center"
      style={{ background: '#09090B', paddingTop: '80px' }}
    >
      <div className="max-w-[640px] mx-auto px-6 text-center">

        {/* Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          style={{
            width: '64px', height: '64px', borderRadius: '16px',
            background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.25)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            margin: '0 auto 28px',
          }}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#6366F1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </motion.div>

        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{ marginBottom: '20px' }}
        >
          <span style={{
            fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '11px',
            color: '#22C55E', background: 'rgba(34,197,94,0.1)',
            border: '1px solid rgba(34,197,94,0.25)', padding: '4px 12px',
            borderRadius: '999px',
          }}>
            ● Live
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          style={{
            fontFamily: 'Sora, sans-serif', fontWeight: 700,
            fontSize: 'clamp(32px, 5vw, 52px)', lineHeight: 1.1,
            color: '#FAFAFA', marginBottom: '20px',
          }}
        >
          The Gig Search
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.22 }}
          style={{
            fontFamily: 'Plus Jakarta Sans, sans-serif',
            fontSize: 'clamp(15px, 1.5vw, 17px)', color: '#A1A1AA',
            lineHeight: 1.75, marginBottom: '40px',
          }}
        >
          A job platform purpose-built for the hospitality industry.
          Connecting skilled workers with the right roles — faster, smarter, and without the noise of general job boards.
        </motion.p>

        {/* Tags */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '44px' }}
        >
          {['Hospitality-first', 'Smart matching', 'UK market'].map(t => (
            <span key={t} style={{
              fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '12px',
              color: '#6366F1', background: 'rgba(99,102,241,0.07)',
              border: '1px solid rgba(99,102,241,0.2)', padding: '5px 14px',
              borderRadius: '6px',
            }}>{t}</span>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.a
          href="https://www.thegigsearch.com"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            fontFamily: 'Sora, sans-serif', fontWeight: 600, fontSize: '15px',
            color: '#09090B', background: '#6366F1',
            padding: '16px 40px', borderRadius: '12px',
            textDecoration: 'none', transition: 'all 0.2s',
          }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'; (e.currentTarget as HTMLElement).style.background = '#4F46E5'; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLElement).style.background = '#6366F1'; }}
        >
          Visit thegigsearch.com <ArrowUpRight size={16} />
        </motion.a>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '12px', color: '#52525B', marginTop: '28px' }}
        >
          An A.R.M Technologies product
        </motion.p>

      </div>
    </section>
  );
}
