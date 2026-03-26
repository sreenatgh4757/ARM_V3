import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
};
const stagger = { visible: { transition: { staggerChildren: 0.12 } } };

const steps = [
  { num: '01', title: 'Connect', desc: 'Link your PMS, OTAs, and accounting. No IT team needed.' },
  { num: '02', title: 'Learn', desc: 'Vzir reads your data and connects it with flights, events, weather, and competitors.' },
  { num: '03', title: 'Ask', desc: 'Type any question in plain English. Get an instant answer backed by all 10 sources.' },
];

const trustPills = ['Read-only access', 'No IT team', 'Any device'];

export default function VzirHowItWorks() {
  return (
    <section style={{ background: '#09090B', padding: 'clamp(60px, 8vw, 120px) 0', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="max-w-[1400px] mx-auto px-5 lg:px-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={stagger}
          style={{ textAlign: 'center', marginBottom: '48px' }}
        >
          <motion.p variants={fadeUp} className="font-mono" style={{ fontSize: '11px', color: '#71717A', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px' }}>
            HOW IT WORKS
          </motion.p>
          <motion.h2 variants={fadeUp} style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: 'clamp(24px, 3.5vw, 36px)', color: '#FAFAFA' }}>
            Three steps. Everything connected.
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10"
        >
          {steps.map((step, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: '16px',
                padding: 'clamp(24px, 3vw, 36px) clamp(20px, 2.5vw, 28px)',
                transition: 'border-color 0.4s cubic-bezier(0.25,0.4,0.25,1), transform 0.4s cubic-bezier(0.25,0.4,0.25,1)',
              }}
              whileHover={{ y: -6, borderColor: 'rgba(45,212,191,0.2)', transition: { duration: 0.4 } }}
            >
              <div style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: '48px', color: 'rgba(45,212,191,0.12)', lineHeight: 1, marginBottom: '20px' }}>
                {step.num}
              </div>
              <h3 style={{ fontFamily: 'Sora, sans-serif', fontWeight: 600, fontSize: '18px', color: '#FAFAFA', marginBottom: '10px' }}>
                {step.title}
              </h3>
              <p style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '14px', color: '#71717A', lineHeight: 1.6, margin: 0 }}>
                {step.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
          style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center' }}
        >
          {trustPills.map(pill => (
            <span key={pill} style={{
              fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '13px', color: '#71717A',
              background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)',
              padding: '8px 16px', borderRadius: '8px',
            }}>
              {pill}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
