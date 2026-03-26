import { useState } from 'react';
import { motion } from 'framer-motion';
import { DollarSign, Settings, MapPin } from 'lucide-react';

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

function CardVisual({ number, icon: Icon }: { number: string; icon: React.ElementType }) {
  return (
    <div style={{
      background: 'rgba(255,255,255,0.03)',
      border: '1px solid rgba(255,255,255,0.07)',
      borderRadius: '16px',
      padding: 'clamp(32px, 4vw, 48px) clamp(24px, 3vw, 40px)',
      width: '100%',
      minHeight: 'clamp(200px, 22vw, 280px)',
      display: 'flex', flexDirection: 'column',
      alignItems: 'flex-start', justifyContent: 'space-between',
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', top: '-20px', right: '-20px',
        fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: 'clamp(80px, 12vw, 120px)',
        color: 'rgba(45,212,191,0.06)', lineHeight: 1, userSelect: 'none',
      }}>
        {number}
      </div>
      <div style={{
        width: '52px', height: '52px', borderRadius: '12px',
        background: 'rgba(45,212,191,0.08)', border: '1px solid rgba(45,212,191,0.15)',
        display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
      }}>
        <Icon size={24} style={{ color: '#2DD4BF' }} />
      </div>
      <div style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: 'clamp(40px, 8vw, 56px)', color: 'rgba(45,212,191,0.12)', lineHeight: 1 }}>
        {number}
      </div>
    </div>
  );
}

function ConsultingHero() {
  const scrollToContact = () => {
    const el = document.getElementById('consulting-contact');
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
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} style={{ marginBottom: '32px' }}>
            <span className="font-mono uppercase" style={{ fontSize: '10px', background: 'rgba(45,212,191,0.08)', color: '#2DD4BF', padding: '6px 16px', borderRadius: '9999px', letterSpacing: '3px', display: 'inline-block' }}>
              STARTUP CONSULTING
            </span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }} style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: 'clamp(34px, 5vw, 52px)', lineHeight: 1.08, color: '#FAFAFA', marginBottom: '24px' }}>
            From idea to operation.
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }} style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 300, fontSize: 'clamp(15px, 2vw, 17px)', color: '#A1A1AA', lineHeight: 1.7, maxWidth: '520px', marginBottom: '40px' }}>
            We help startups figure out the hard parts — revenue models, operational structure, market entry, and how to actually set up and run a business.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.45 }}>
            <button onClick={scrollToContact} className="w-full sm:w-auto" style={{
              fontFamily: 'Sora, sans-serif', fontWeight: 600, fontSize: '14px',
              color: '#09090B', background: '#14B8A6',
              padding: '16px 36px', borderRadius: '12px', border: 'none', cursor: 'pointer',
              transition: 'background 0.2s, transform 0.2s', minHeight: '52px',
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#0D9488'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = '#14B8A6'; (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; }}
            >
              Start a conversation &rarr;
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

const blocks = [
  { number: '01', icon: DollarSign, title: 'Revenue & business models', description: 'How will your startup make money? We help you design pricing strategies, subscription models, marketplace economics, and unit economics that actually work — before you build anything.', imageLeft: true },
  { number: '02', icon: Settings, title: 'Operations & setup', description: "Where to register, how to structure your team, what tools to use, compliance requirements, hiring strategy, and the operational playbook to go from zero to running. We've done it ourselves with A.R.M Technologies — we know what works.", imageLeft: false },
  { number: '03', icon: MapPin, title: 'Location & market entry', description: "Thinking about launching in a new city or country? We research the market, assess competition, map local regulations, and help you build an entry strategy — whether it's the UK, India, Fiji, or anywhere else.", imageLeft: true },
];

function WhatWeHelpWith() {
  return (
    <section style={{ background: '#09090B', padding: 'clamp(60px, 8vw, 120px) 0' }}>
      <div className="max-w-[1400px] mx-auto px-5 lg:px-20">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger} style={{ marginBottom: '64px' }}>
          <motion.p variants={fadeUp} className="font-mono" style={{ fontSize: '11px', color: '#71717A', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px' }}>
            WHAT WE HELP WITH
          </motion.p>
          <motion.h2 variants={fadeUp} style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: 'clamp(24px, 3.5vw, 40px)', color: '#FAFAFA', maxWidth: '560px', lineHeight: 1.2 }}>
            The decisions that make or break a startup.
          </motion.h2>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(48px, 8vw, 100px)' }}>
          {blocks.map((block) => (
            <motion.div
              key={block.number}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={stagger}
              className={`flex flex-col ${block.imageLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-start gap-10 lg:gap-16`}
            >
              <motion.div variants={fadeUp} className="w-full lg:w-[45%]">
                <CardVisual number={block.number} icon={block.icon} />
              </motion.div>
              <motion.div variants={stagger} className="w-full lg:w-[55%]">
                <motion.h3 variants={fadeUp} style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: 'clamp(22px, 2.8vw, 32px)', color: '#FAFAFA', marginBottom: '16px', lineHeight: 1.2 }}>
                  {block.title}
                </motion.h3>
                <motion.p variants={fadeUp} style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: 'clamp(14px, 1.5vw, 16px)', color: '#A1A1AA', lineHeight: 1.7 }}>
                  {block.description}
                </motion.p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const proofCards = [
  { name: 'Vzir', description: 'Designed the revenue model, market entry strategy, and operational structure for an AI hotel intelligence platform — from concept to pilot.' },
  { name: 'TheGigSearch', description: 'Built the marketplace model, pricing strategy, and go-to-market plan for a UK hospitality staffing platform — now live.' },
];

function ProofSection() {
  return (
    <section style={{ background: '#09090B', padding: 'clamp(48px, 6vw, 80px) 0 clamp(60px, 8vw, 120px)', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="max-w-[1400px] mx-auto px-5 lg:px-20">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger}>
          <motion.h2 variants={fadeUp} style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: 'clamp(22px, 3vw, 32px)', color: '#FAFAFA', marginBottom: '40px' }}>
            We practice what we advise.
          </motion.h2>
          <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {proofCards.map((card) => (
              <motion.div
                key={card.name}
                variants={fadeUp}
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: '16px',
                  padding: 'clamp(20px, 3vw, 32px)',
                }}
                whileHover={{ y: -6, transition: { duration: 0.4, ease: [0.25, 0.4, 0.25, 1] } }}
              >
                <div style={{
                  display: 'inline-block', fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: '14px', color: '#2DD4BF',
                  background: 'rgba(45,212,191,0.08)', border: '1px solid rgba(45,212,191,0.15)',
                  padding: '4px 14px', borderRadius: '6px', marginBottom: '16px',
                }}>
                  {card.name}
                </div>
                <p style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '15px', color: '#A1A1AA', lineHeight: 1.7, margin: 0 }}>
                  {card.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function ConsultingContact() {
  const [formData, setFormData] = useState({ name: '', email: '', startup: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="consulting-contact" style={{ background: '#09090B', padding: 'clamp(60px, 8vw, 120px) 0', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="max-w-[1400px] mx-auto px-5 lg:px-20">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger} style={{ textAlign: 'center', marginBottom: '48px' }}>
          <motion.h2 variants={fadeUp} style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: 'clamp(26px, 3.5vw, 36px)', color: '#FAFAFA', marginBottom: '16px' }}>
            Let's talk about your startup.
          </motion.h2>
        </motion.div>
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={fadeUp}
          style={{ maxWidth: '480px', margin: '0 auto', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '16px', padding: 'clamp(24px, 4vw, 40px)' }}
        >
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '24px 0' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(45,212,191,0.1)', border: '1px solid rgba(45,212,191,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2DD4BF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
              </div>
              <h3 style={{ fontFamily: 'Sora, sans-serif', fontWeight: 600, fontSize: '20px', color: '#FAFAFA', marginBottom: '8px' }}>Conversation started.</h3>
              <p style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '14px', color: '#71717A' }}>We'll be in touch soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <input type="text" placeholder="Name" required value={formData.name} onChange={e => setFormData(d => ({ ...d, name: e.target.value }))} style={inputStyle}
                onFocus={e => { (e.target as HTMLElement).style.borderColor = '#2DD4BF'; }} onBlur={e => { (e.target as HTMLElement).style.borderColor = 'rgba(255,255,255,0.07)'; }} />
              <input type="email" placeholder="Email" required value={formData.email} onChange={e => setFormData(d => ({ ...d, email: e.target.value }))} style={inputStyle}
                onFocus={e => { (e.target as HTMLElement).style.borderColor = '#2DD4BF'; }} onBlur={e => { (e.target as HTMLElement).style.borderColor = 'rgba(255,255,255,0.07)'; }} />
              <input type="text" placeholder="Startup name (optional)" value={formData.startup} onChange={e => setFormData(d => ({ ...d, startup: e.target.value }))} style={inputStyle}
                onFocus={e => { (e.target as HTMLElement).style.borderColor = '#2DD4BF'; }} onBlur={e => { (e.target as HTMLElement).style.borderColor = 'rgba(255,255,255,0.07)'; }} />
              <textarea placeholder="What do you need help with?" required rows={4} value={formData.message} onChange={e => setFormData(d => ({ ...d, message: e.target.value }))} style={{ ...inputStyle, resize: 'vertical' }}
                onFocus={e => { (e.target as HTMLElement).style.borderColor = '#2DD4BF'; }} onBlur={e => { (e.target as HTMLElement).style.borderColor = 'rgba(255,255,255,0.07)'; }} />
              <button type="submit" style={{
                width: '100%', background: '#14B8A6', color: '#09090B',
                fontFamily: 'Sora, sans-serif', fontWeight: 600, fontSize: '14px',
                padding: '14px', borderRadius: '8px', border: 'none', cursor: 'pointer',
                transition: 'background 0.2s', marginTop: '4px', minHeight: '48px',
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#0D9488'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = '#14B8A6'; }}
              >
                Start a conversation &rarr;
              </button>
            </form>
          )}
          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <a href="mailto:hello@armtechnologies.ltd" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '13px', color: '#2DD4BF', textDecoration: 'none' }}>
              hello@armtechnologies.ltd
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function ConsultingPage() {
  return (
    <>
      <ConsultingHero />
      <WhatWeHelpWith />
      <ProofSection />
      <ConsultingContact />
    </>
  );
}
