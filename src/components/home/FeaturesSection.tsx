import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Search, Lightbulb } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};
const stagger = { visible: { transition: { staggerChildren: 0.12 } } };

const products = [
  {
    icon: Brain,
    tag: 'FLAGSHIP PRODUCT',
    name: 'Vzir',
    tagline: 'AI Hotel Intelligence Platform',
    desc: 'One AI that connects your PMS, accounting, WhatsApp, OTAs, events, flights, weather, and competitor rates. Ask anything in plain English. Get a clear, instant answer from every system — simultaneously.',
    highlights: ['Cloudbeds · Xero · WhatsApp', 'Events · Flights · Weather', 'Read-only · No IT team · 20 min setup'],
    color: '#2DD4BF',
    bg: 'rgba(45,212,191,0.06)',
    border: 'rgba(45,212,191,0.2)',
    link: '/vzir',
    linkText: 'Explore Vzir',
    featured: true,
    status: 'Live — Pilot Open',
    statusColor: '#22C55E',
  },
  {
    icon: Search,
    tag: 'PRODUCT',
    name: 'The Gig Search',
    tagline: 'Smarter Hospitality Job Matching',
    desc: 'A job platform purpose-built for the hospitality industry. Connecting skilled workers with the right roles — faster, smarter, and without the noise of general job boards.',
    highlights: ['Hospitality-first', 'Smart matching', 'UK market'],
    color: '#6366F1',
    bg: 'rgba(99,102,241,0.06)',
    border: 'rgba(99,102,241,0.2)',
    link: '/thegigsearch',
    linkText: 'Learn more',
    featured: false,
    status: 'In Development',
    statusColor: '#F59E0B',
  },
  {
    icon: Lightbulb,
    tag: 'SERVICE',
    name: 'Consulting',
    tagline: 'Strategic Advisory for Startups',
    desc: 'We advise early-stage startups on revenue models, operations, business setup, and growth strategy. We\'ve built a product — we know what works.',
    highlights: ['Revenue modelling', 'Operations setup', 'Growth strategy'],
    color: '#F59E0B',
    bg: 'rgba(245,158,11,0.06)',
    border: 'rgba(245,158,11,0.2)',
    link: '/consulting',
    linkText: 'Work with us',
    featured: false,
    status: 'Available',
    statusColor: '#2DD4BF',
  },
];

export default function FeaturesSection() {
  return (
    <section id="products" className="relative py-24 lg:py-32 bg-[#09090B]" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="max-w-[1300px] mx-auto px-6 lg:px-20">

        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={stagger}
          className="mb-16 lg:mb-20"
        >
          <motion.p variants={fadeUp} className="font-mono text-[10px] tracking-[3px] uppercase text-[#71717A] mb-4">
            What We Build
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-display text-[#FAFAFA]"
            style={{ fontSize: 'clamp(28px, 4vw, 46px)', fontWeight: 700, lineHeight: 1.1, maxWidth: '560px' }}
          >
            Intelligent software for the hospitality industry — and beyond.
          </motion.h2>
        </motion.div>

        {/* Products grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={stagger}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
        >
          {products.map((product) => {
            const Icon = product.icon;
            return (
              <motion.div
                key={product.name}
                variants={fadeUp}
                style={{
                  background: product.featured ? product.bg : 'rgba(255,255,255,0.02)',
                  border: `1px solid ${product.featured ? product.border : 'rgba(255,255,255,0.06)'}`,
                  borderRadius: '20px',
                  padding: 'clamp(28px, 3vw, 40px)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                  position: 'relative',
                  overflow: 'hidden',
                }}
                whileHover={{ y: -6, borderColor: product.border, transition: { duration: 0.35 } }}
              >
                {/* Featured glow */}
                {product.featured && (
                  <div style={{ position: 'absolute', top: 0, right: 0, width: '200px', height: '200px', borderRadius: '50%', background: `${product.color}`, filter: 'blur(80px)', opacity: 0.06, pointerEvents: 'none' }} />
                )}

                {/* Tag + status */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '9px', fontWeight: 700, letterSpacing: '1.5px', color: product.color, textTransform: 'uppercase' }}>{product.tag}</span>
                  <span style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '10px', color: product.statusColor, background: `${product.statusColor}15`, border: `1px solid ${product.statusColor}30`, padding: '2px 8px', borderRadius: '4px' }}>{product.status}</span>
                </div>

                {/* Icon */}
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: `${product.color}12`, border: `1px solid ${product.color}25`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Icon size={22} style={{ color: product.color }} />
                </div>

                {/* Name + tagline */}
                <div>
                  <h3 style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: 'clamp(20px, 2vw, 26px)', color: '#FAFAFA', marginBottom: '4px' }}>{product.name}</h3>
                  <p style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '13px', color: product.color, fontWeight: 500 }}>{product.tagline}</p>
                </div>

                {/* Description */}
                <p style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '14px', color: '#A1A1AA', lineHeight: 1.7, flex: 1 }}>{product.desc}</p>

                {/* Highlights */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {product.highlights.map(h => (
                    <div key={h} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: product.color, flexShrink: 0 }} />
                      <span style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '12px', color: '#71717A' }}>{h}</span>
                    </div>
                  ))}
                </div>

                {/* Link */}
                <Link
                  to={product.link}
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '13px', fontWeight: 600, color: product.color, textDecoration: 'none', marginTop: '4px', paddingTop: '14px', borderTop: '1px solid rgba(255,255,255,0.05)' }}
                >
                  {product.linkText} <ArrowRight size={14} />
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
