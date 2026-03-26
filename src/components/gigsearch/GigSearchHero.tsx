import { motion } from 'framer-motion';
import { Clock, Shield, Calendar, Users } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
};
const stagger = { visible: { transition: { staggerChildren: 0.12 } } };

export default function GigSearchHero() {
  return (
    <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'url(https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }} />
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(9,9,11,0.82)' }} />

      <div className="relative z-10 w-full max-w-[900px] mx-auto px-5 lg:px-20 text-center py-32">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0' }}
        >
          <motion.div variants={fadeUp} style={{ marginBottom: '24px' }}>
            <span className="font-mono uppercase" style={{
              fontSize: '10px', background: 'rgba(45,212,191,0.08)', color: '#2DD4BF',
              padding: '6px 16px', borderRadius: '9999px', letterSpacing: '3px',
            }}>
              HOSPITALITY STAFFING PLATFORM
            </span>
          </motion.div>

          <motion.h1 variants={fadeUp} style={{
            fontFamily: 'Sora, sans-serif', fontWeight: 700,
            fontSize: 'clamp(34px, 6vw, 64px)',
            color: '#FAFAFA', lineHeight: 1.08, marginBottom: '16px',
          }}>
            TheGigSearch
          </motion.h1>

          <motion.p variants={fadeUp} style={{
            fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: 'clamp(16px, 2vw, 20px)',
            color: '#A1A1AA', marginBottom: '12px',
          }}>
            Flexible staffing for UK hospitality.
          </motion.p>

          <motion.p variants={fadeUp} style={{
            fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 300, fontSize: '15px',
            color: '#71717A', marginBottom: '40px', maxWidth: '600px', lineHeight: 1.7,
          }}>
            Real-time shift matching, compliance management, and workforce tools. Built for the way hospitality actually works.
          </motion.p>

          <motion.div variants={fadeUp} style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '100%', maxWidth: '360px' }}>
            <a
              href="https://thegigsearch.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: 'Sora, sans-serif', fontWeight: 600, fontSize: '14px',
                color: '#09090B', background: '#14B8A6',
                padding: '16px 36px', borderRadius: '12px',
                textDecoration: 'none', display: 'block', textAlign: 'center',
                transition: 'background 0.3s, transform 0.3s',
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
              Visit TheGigSearch &rarr;
            </a>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#22C55E' }} />
              <span style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '12px', color: '#22C55E', textTransform: 'uppercase', letterSpacing: '1px' }}>
                Live
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

const features = [
  { icon: Clock, title: 'Real-time shift matching', description: 'Post a shift, get matched with verified workers instantly. No agencies, no delays.' },
  { icon: Shield, title: 'Built-in compliance', description: 'Document verification, right-to-work checks, and audit trails handled automatically.' },
  { icon: Calendar, title: 'Workforce dashboard', description: 'See who is working where, track hours, manage schedules — all in one view.' },
  { icon: Users, title: 'For workers too', description: 'Flexible workers browse shifts, set availability, and get paid on time. Fair for everyone.' },
];

export function GigSearchFeatures() {
  return (
    <section style={{ background: '#09090B', padding: 'clamp(60px, 8vw, 120px) 0', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="max-w-[1200px] mx-auto px-5 lg:px-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={stagger}
          style={{ textAlign: 'center', marginBottom: '56px' }}
        >
          <motion.p variants={fadeUp} className="font-mono" style={{ fontSize: '11px', color: '#71717A', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '16px' }}>
            WHAT IT DOES
          </motion.p>
          <motion.h2 variants={fadeUp} style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: 'clamp(24px, 3.5vw, 40px)', color: '#FAFAFA' }}>
            Staffing that actually works.
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={i}
                variants={fadeUp}
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: '16px',
                  padding: 'clamp(20px, 3vw, 32px)',
                  transition: 'border-color 0.4s, transform 0.4s',
                }}
                whileHover={{ y: -6, transition: { duration: 0.4 } }}
              >
                <Icon style={{ color: '#2DD4BF', marginBottom: '16px' }} size={28} />
                <h3 style={{ fontFamily: 'Sora, sans-serif', fontWeight: 600, fontSize: '18px', color: '#FAFAFA', marginBottom: '10px' }}>
                  {feature.title}
                </h3>
                <p style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '14px', color: '#A1A1AA', lineHeight: 1.6, margin: 0 }}>
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export function GigSearchCTA() {
  return (
    <section style={{ background: '#09090B', padding: 'clamp(60px, 8vw, 120px) 0', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div style={{ maxWidth: '600px', margin: '0 auto', padding: '0 20px', textAlign: 'center' }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={stagger}
        >
          <motion.h2 variants={fadeUp} style={{
            fontFamily: 'Sora, sans-serif', fontWeight: 700,
            fontSize: 'clamp(24px, 3.5vw, 36px)', color: '#FAFAFA', marginBottom: '32px',
          }}>
            Ready to simplify your staffing?
          </motion.h2>

          <motion.div variants={fadeUp} style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center' }}>
            <a
              href="https://thegigsearch.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: 'Sora, sans-serif', fontWeight: 600, fontSize: '14px',
                color: '#09090B', background: '#14B8A6',
                padding: '16px 40px', borderRadius: '12px',
                textDecoration: 'none', display: 'inline-block',
                transition: 'background 0.3s',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#0D9488'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = '#14B8A6'; }}
            >
              Visit TheGigSearch &rarr;
            </a>
            <a
              href="mailto:hello@armtechnologies.ltd"
              style={{
                fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '14px',
                color: '#2DD4BF', textDecoration: 'none',
              }}
            >
              Or contact us about workforce solutions &rarr;
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
