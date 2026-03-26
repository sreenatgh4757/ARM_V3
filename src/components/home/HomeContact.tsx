import { useState } from 'react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
};
const stagger = { visible: { transition: { staggerChildren: 0.12 } } };

const inputStyle = {
  width: '100%',
  background: 'rgba(255,255,255,0.04)',
  border: '1px solid rgba(255,255,255,0.07)',
  borderRadius: '8px',
  padding: '12px 16px',
  color: '#FAFAFA',
  fontFamily: 'Plus Jakarta Sans, sans-serif',
  fontSize: '16px',
  outline: 'none',
  transition: 'border-color 0.2s',
  boxSizing: 'border-box' as const,
};

export default function HomeContact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" style={{ position: 'relative', padding: 'clamp(60px, 8vw, 120px) 0', overflow: 'hidden' }}>
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920)',
        backgroundSize: 'cover', backgroundPosition: 'center',
      }} />
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(9,9,11,0.88)' }} />

      <div className="relative z-10 max-w-[1400px] mx-auto px-5 lg:px-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={stagger}
          style={{ textAlign: 'center', marginBottom: '48px' }}
        >
          <motion.h2 variants={fadeUp} style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: 'clamp(28px, 4vw, 40px)', color: '#FAFAFA', marginBottom: '16px' }}>
            Let's build something.
          </motion.h2>
          <motion.p variants={fadeUp} style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: 'clamp(14px, 1.5vw, 16px)', color: '#A1A1AA', maxWidth: '480px', margin: '0 auto', lineHeight: 1.6 }}>
            Whether you're a hotel exploring Vzir, a PMS provider looking to partner, or a business that needs custom software.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
          style={{
            maxWidth: '480px', margin: '0 auto',
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.07)',
            borderRadius: '16px',
            padding: 'clamp(24px, 4vw, 40px)',
          }}
        >
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '24px 0' }}>
              <div style={{
                width: '48px', height: '48px', borderRadius: '50%',
                background: 'rgba(45,212,191,0.1)', border: '1px solid rgba(45,212,191,0.2)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px',
              }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2DD4BF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h3 style={{ fontFamily: 'Sora, sans-serif', fontWeight: 600, fontSize: '20px', color: '#FAFAFA', marginBottom: '8px' }}>Message sent.</h3>
              <p style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '14px', color: '#71717A' }}>We'll be in touch soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <input type="text" placeholder="Name" required value={formData.name}
                onChange={e => setFormData(d => ({ ...d, name: e.target.value }))} style={inputStyle}
                onFocus={e => { (e.target as HTMLElement).style.borderColor = '#2DD4BF'; }}
                onBlur={e => { (e.target as HTMLElement).style.borderColor = 'rgba(255,255,255,0.07)'; }} />
              <input type="email" placeholder="Email" required value={formData.email}
                onChange={e => setFormData(d => ({ ...d, email: e.target.value }))} style={inputStyle}
                onFocus={e => { (e.target as HTMLElement).style.borderColor = '#2DD4BF'; }}
                onBlur={e => { (e.target as HTMLElement).style.borderColor = 'rgba(255,255,255,0.07)'; }} />
              <textarea placeholder="Message" required rows={4} value={formData.message}
                onChange={e => setFormData(d => ({ ...d, message: e.target.value }))}
                style={{ ...inputStyle, resize: 'vertical' }}
                onFocus={e => { (e.target as HTMLElement).style.borderColor = '#2DD4BF'; }}
                onBlur={e => { (e.target as HTMLElement).style.borderColor = 'rgba(255,255,255,0.07)'; }} />
              <button type="submit" style={{
                width: '100%', background: '#14B8A6', color: '#09090B',
                fontFamily: 'Sora, sans-serif', fontWeight: 600, fontSize: '14px',
                padding: '14px', borderRadius: '8px', border: 'none', cursor: 'pointer',
                transition: 'background 0.2s', marginTop: '4px', minHeight: '48px',
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#0D9488'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = '#14B8A6'; }}
              >
                Send message →
              </button>
            </form>
          )}
          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <a href="mailto:info@armtechnologies.ltd" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '13px', color: '#2DD4BF', textDecoration: 'none' }}>
              info@armtechnologies.ltd
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
