import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export default function BusinessTeaser() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={fadeUp}
      style={{ background: '#09090B', padding: '80px 0', textAlign: 'center' }}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-20">
        <h2 style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: '28px', color: '#FAFAFA', marginBottom: '12px' }}>
          We advise startups.
        </h2>
        <p style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '15px', color: '#71717A', marginBottom: '24px', maxWidth: '460px', margin: '0 auto 24px' }}>
          Revenue models, operations, business setup, and growth strategy for startups finding their way.
        </p>
        <Link
          to="/consulting"
          style={{
            fontFamily: 'Plus Jakarta Sans, sans-serif',
            fontSize: '15px',
            fontWeight: 500,
            color: '#2DD4BF',
            textDecoration: 'none',
          }}
        >
          Talk to us →
        </Link>
      </div>
    </motion.section>
  );
}
