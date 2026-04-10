import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
};
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

const systems = [
  { name: 'PMS', emoji: '🏨', time: '22 min', desc: 'Arrivals, availability' },
  { name: 'Xero', emoji: '💰', time: '18 min', desc: 'Revenue, invoices' },
  { name: 'WhatsApp', emoji: '💬', time: '25 min', desc: 'Guest messages' },
  { name: 'Booking.com', emoji: '🌐', time: '15 min', desc: 'Rates, reviews' },
  { name: 'Spreadsheet', emoji: '📊', time: '35 min', desc: 'Manual reports' },
];

export default function VzirProblem() {
  return (
    <section
      style={{
        background: '#0C0C0F',
        padding: 'clamp(80px, 10vw, 140px) 0',
        borderTop: '1px solid rgba(255,255,255,0.05)',
      }}
    >
      <div className="max-w-[1400px] mx-auto px-5 lg:px-20">

        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={stagger}
          style={{ textAlign: 'center', marginBottom: '72px' }}
        >
          <motion.p
            variants={fadeUp}
            className="font-mono"
            style={{ fontSize: '11px', color: '#71717A', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px' }}
          >
            THE PROBLEM
          </motion.p>
          <motion.h2
            variants={fadeUp}
            style={{
              fontFamily: 'Sora, sans-serif', fontWeight: 700,
              fontSize: 'clamp(28px, 4.5vw, 52px)',
              color: '#FAFAFA', lineHeight: 1.12, marginBottom: '20px',
            }}
          >
            You open 5 different apps<br />
            before you can make <span style={{ color: '#EF4444' }}>one decision</span>.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            style={{
              fontFamily: 'Plus Jakarta Sans, sans-serif',
              fontSize: 'clamp(15px, 1.8vw, 18px)',
              color: '#A1A1AA', maxWidth: '520px',
              margin: '0 auto', lineHeight: 1.7,
            }}
          >
            Every morning, hotel managers waste 2+ hours just collecting data
            across disconnected systems — before any real work begins.
          </motion.p>
        </motion.div>

        {/* System cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={stagger}
          style={{
            display: 'flex', gap: '14px', flexWrap: 'wrap',
            justifyContent: 'center', marginBottom: '72px',
          }}
        >
          {systems.map((sys, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ y: -4, borderColor: 'rgba(239,68,68,0.3)', transition: { duration: 0.3 } }}
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '16px',
                padding: '28px 22px',
                width: 'clamp(130px, 14vw, 165px)',
                display: 'flex', flexDirection: 'column',
                alignItems: 'center', gap: '10px',
                cursor: 'default',
              }}
            >
              <span style={{ fontSize: '30px' }}>{sys.emoji}</span>
              <span style={{ fontFamily: 'Sora, sans-serif', fontWeight: 600, fontSize: '14px', color: '#FAFAFA' }}>
                {sys.name}
              </span>
              <span style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '11px', color: '#71717A' }}>
                {sys.desc}
              </span>
              <span style={{
                fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '11px',
                color: '#EF4444', background: 'rgba(239,68,68,0.08)',
                border: '1px solid rgba(239,68,68,0.15)',
                padding: '3px 9px', borderRadius: '6px', fontWeight: 600,
              }}>
                ~{sys.time}/day
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Total time callout */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
          style={{
            background: 'rgba(45,212,191,0.04)',
            border: '1px solid rgba(45,212,191,0.18)',
            borderRadius: '20px',
            padding: 'clamp(32px, 4vw, 52px) clamp(24px, 4vw, 56px)',
            maxWidth: '740px',
            margin: '0 auto',
            textAlign: 'center',
          }}
        >
          <div
            style={{
              fontFamily: 'Sora, sans-serif', fontWeight: 700,
              fontSize: 'clamp(20px, 3vw, 30px)',
              color: '#FAFAFA', marginBottom: '14px', lineHeight: 1.3,
            }}
          >
            That's <span style={{ color: '#2DD4BF' }}>115 minutes every single morning</span><br />
            just to answer one question:
          </div>
          <div
            style={{
              fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 400,
              fontSize: 'clamp(15px, 1.8vw, 19px)', color: '#71717A',
              fontStyle: 'italic', marginBottom: '24px',
            }}
          >
            "How is my hotel doing right now?"
          </div>
          <div
            style={{
              fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '15px',
              color: '#A1A1AA',
            }}
          >
            Vzir answers that — and every question like it — in{' '}
            <span style={{ color: '#2DD4BF', fontWeight: 600 }}>seconds</span>.
          </div>
        </motion.div>

      </div>
    </section>
  );
}
