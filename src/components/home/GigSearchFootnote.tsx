import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function GigSearchFootnote() {
  return (
    <section style={{ borderTop: '1px solid rgba(255,255,255,0.06)', padding: '24px 0', background: '#09090B' }}>
      <div className="max-w-[1400px] mx-auto px-5 lg:px-20">
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
          <span style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '13px', color: '#71717A' }}>
            Also by A.R.M Technologies:
          </span>
          <Link
            to="/thegigsearch"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '14px', fontWeight: 500, color: '#FAFAFA', textDecoration: 'none' }}
          >
            TheGigSearch
          </Link>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#22C55E', display: 'inline-block' }} />
            <span style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '11px', color: '#22C55E' }}>Live</span>
          </span>
          <span style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '13px', color: '#71717A' }}>
            · UK hospitality staffing ·
          </span>
          <Link
            to="/thegigsearch"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '13px', color: '#2DD4BF', textDecoration: 'none' }}
          >
            Explore →
          </Link>
        </div>
      </div>
    </section>
  );
}
