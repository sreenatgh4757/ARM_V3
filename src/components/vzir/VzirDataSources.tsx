import { motion } from 'framer-motion';
import { Building2, Globe, Calculator, MessageSquare, Plane, Calendar, Cloud, TrendingUp, BarChart2, Users } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
};
const stagger = { visible: { transition: { staggerChildren: 0.12 } } };

const internalSources = [
  { icon: Building2, name: 'PMS', desc: 'Live bookings, occupancy, guest profiles' },
  { icon: Globe, name: 'OTAs', desc: 'Rates across Booking.com, Expedia, direct' },
  { icon: Calculator, name: 'Revenue', desc: 'Financials from Xero or QuickBooks' },
  { icon: MessageSquare, name: 'WhatsApp', desc: 'Automated guest messaging 24/7' },
];

const externalSources = [
  { icon: Plane, name: 'Flights', desc: 'Inbound travel demand to your area' },
  { icon: Calendar, name: 'Events', desc: 'Festivals, conferences, concerts nearby' },
  { icon: Cloud, name: 'Weather', desc: 'Impact on bookings and guest plans' },
  { icon: TrendingUp, name: 'Competitors', desc: 'Nearby hotel rates and availability' },
  { icon: BarChart2, name: 'Trends', desc: 'Seasonal tourism and demand patterns' },
  { icon: Users, name: 'Requests', desc: 'Guest in-app messages to front desk' },
];

function SourceCard({ sources }: { sources: typeof internalSources }) {
  return (
    <div style={{
      background: 'rgba(255,255,255,0.03)',
      border: '1px solid rgba(255,255,255,0.07)',
      borderRadius: '16px',
      padding: 'clamp(20px, 3vw, 28px)',
      width: '100%',
    }}>
      {sources.map((source, i) => {
        const Icon = source.icon;
        return (
          <div key={i} style={{
            display: 'flex', alignItems: 'flex-start', gap: '14px',
            padding: '14px 0',
            borderBottom: i < sources.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none',
          }}>
            <div style={{
              width: '36px', height: '36px', borderRadius: '8px',
              background: 'rgba(45,212,191,0.08)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
            }}>
              <Icon size={18} style={{ color: '#2DD4BF' }} />
            </div>
            <div>
              <div style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '15px', fontWeight: 500, color: '#FAFAFA', marginBottom: '2px' }}>
                {source.name}
              </div>
              <div style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '13px', color: '#71717A' }}>
                {source.desc}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function VzirDataSources() {
  return (
    <section id="data-sources" style={{ background: '#09090B', padding: 'clamp(60px, 8vw, 120px) 0' }}>
      <div className="max-w-[1400px] mx-auto px-5 lg:px-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={stagger}
          style={{ textAlign: 'center', marginBottom: '64px' }}
        >
          <motion.p variants={fadeUp} className="font-mono" style={{ fontSize: '11px', color: '#71717A', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px' }}>
            WHAT VZIR KNOWS
          </motion.p>
          <motion.h2 variants={fadeUp} style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: 'clamp(26px, 4vw, 40px)', color: '#FAFAFA', marginBottom: '16px' }}>
            Everything connected. One answer.
          </motion.h2>
          <motion.p variants={fadeUp} style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: 'clamp(14px, 1.5vw, 16px)', color: '#A1A1AA', maxWidth: '480px', margin: '0 auto', lineHeight: 1.6 }}>
            Every system your hotel relies on — connected in one place.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={stagger}
          className="flex flex-col lg:flex-row items-start gap-10 lg:gap-16 mb-16"
        >
          <motion.div variants={fadeUp} className="w-full lg:w-[55%]">
            <SourceCard sources={internalSources} />
          </motion.div>
          <motion.div variants={stagger} className="w-full lg:w-[45%]">
            <motion.h3 variants={fadeUp} style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: 'clamp(22px, 2.8vw, 32px)', color: '#FAFAFA', marginBottom: '20px', lineHeight: 1.2 }}>
              Every system your hotel already uses.
            </motion.h3>
            <motion.p variants={fadeUp} style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: 'clamp(14px, 1.5vw, 16px)', color: '#A1A1AA', lineHeight: 1.7 }}>
              Vzir connects to your existing systems and no migration, no new tools.
Get started in minutes. Vzir handles the rest.
            </motion.p>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={stagger}
          className="flex flex-col lg:flex-row-reverse items-start gap-10 lg:gap-16"
        >
          <motion.div variants={fadeUp} className="w-full lg:w-[55%]">
            <SourceCard sources={externalSources} />
          </motion.div>
          <motion.div variants={stagger} className="w-full lg:w-[45%]">
            <motion.h3 variants={fadeUp} style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: 'clamp(22px, 2.8vw, 32px)', color: '#FAFAFA', marginBottom: '20px', lineHeight: 1.2 }}>
              Plus everything happening around you.
            </motion.h3>
            <motion.p variants={fadeUp} style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: 'clamp(14px, 1.5vw, 16px)', color: '#A1A1AA', lineHeight: 1.7 }}>
              Vzir tracks inbound flights, local events, weather patterns, competitor pricing, seasonal trends, and guest requests — so every answer considers what's happening in your city, not just your hotel.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
