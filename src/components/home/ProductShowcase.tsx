import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Building2, Globe, Calculator, MessageSquare,
  Plane, Calendar, Cloud, TrendingUp, BarChart2, Users
} from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
};
const stagger = { visible: { transition: { staggerChildren: 0.12 } } };

const dataSources = [
  { icon: Building2, label: 'PMS' },
  { icon: Globe, label: 'OTAs' },
  { icon: Calculator, label: 'Revenue' },
  { icon: MessageSquare, label: 'WhatsApp' },
  { icon: Plane, label: 'Flights' },
  { icon: Calendar, label: 'Events' },
  { icon: Cloud, label: 'Weather' },
  { icon: TrendingUp, label: 'Competitors' },
  { icon: BarChart2, label: 'Trends' },
  { icon: Users, label: 'Requests' },
];

function VzirMark() {
  return (
    <div style={{
      background: 'rgba(255,255,255,0.03)',
      border: '1px solid rgba(255,255,255,0.07)',
      borderRadius: '16px',
      minHeight: 'clamp(240px, 30vw, 340px)',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center', gap: '16px',
      position: 'relative', overflow: 'hidden',
      width: '100%',
    }}>
      <div style={{
        position: 'absolute', width: '200px', height: '200px', borderRadius: '50%',
        background: 'rgba(45,212,191,0.06)', filter: 'blur(40px)',
      }} />
      <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <polyline points="10,10 40,70 70,10" stroke="#2DD4BF" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
      <span style={{ fontFamily: 'Sora, sans-serif', fontWeight: 600, fontSize: '24px', color: '#2DD4BF' }}>Vzir</span>
    </div>
  );
}

function DataSourcesCard() {
  return (
    <div style={{
      background: 'rgba(255,255,255,0.03)',
      border: '1px solid rgba(255,255,255,0.07)',
      borderRadius: '16px',
      padding: 'clamp(20px, 3vw, 28px)',
      width: '100%',
    }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0' }}>
        {dataSources.map((source, i) => {
          const Icon = source.icon;
          return (
            <div key={i} style={{
              display: 'flex', alignItems: 'center', gap: '10px',
              padding: '11px 0',
              borderBottom: i < dataSources.length - 2 ? '1px solid rgba(255,255,255,0.05)' : 'none',
              paddingRight: '8px',
            }}>
              <Icon size={15} style={{ color: '#2DD4BF', flexShrink: 0 }} />
              <span style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '13px', color: '#A1A1AA' }}>
                {source.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function ChatMockup() {
  return (
    <div style={{
      background: 'rgba(255,255,255,0.03)',
      border: '1px solid rgba(255,255,255,0.07)',
      borderRadius: '16px',
      padding: 'clamp(20px, 3vw, 28px)',
      width: '100%',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px', paddingBottom: '14px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'rgba(45,212,191,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <svg width="14" height="14" viewBox="0 0 80 80" fill="none">
            <polyline points="10,10 40,70 70,10" stroke="#2DD4BF" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          </svg>
        </div>
        <span style={{ fontFamily: 'Sora, sans-serif', fontSize: '13px', fontWeight: 600, color: '#FAFAFA' }}>Vzir</span>
        <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', color: '#22C55E', background: 'rgba(34,197,94,0.1)', padding: '2px 8px', borderRadius: '4px', marginLeft: 'auto' }}>LIVE</span>
      </div>

      <div style={{ border: '1px solid rgba(255,255,255,0.08)', borderRadius: '10px 10px 10px 2px', padding: '12px 14px', marginBottom: '14px', maxWidth: '85%', marginLeft: 'auto', background: 'rgba(255,255,255,0.05)' }}>
        <p style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '13px', color: '#FAFAFA', margin: 0 }}>
          How should I prepare for this weekend?
        </p>
      </div>

      <div style={{ background: 'rgba(45,212,191,0.05)', border: '1px solid rgba(45,212,191,0.1)', borderRadius: '2px 10px 10px 10px', padding: '12px 14px', maxWidth: '95%' }}>
        <p style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '13px', color: '#A1A1AA', lineHeight: 1.6, margin: 0 }}>
          This weekend looks strong. You're at <span style={{ color: '#2DD4BF' }}>87% occupancy</span> with 12 rooms still available. A music festival nearby on Saturday will drive walk-ins, consider increasing Saturday rates by 15%. Three competitor hotels are already sold out.
        </p>
      </div>
    </div>
  );
}

export default function ProductShowcase() {
  const pills1 = ['PMS · OTAs · Revenue', 'Flights · Events · Weather', 'Competitors · Trends · WhatsApp'];

  return (
    <section style={{ background: '#09090B', padding: 'clamp(60px, 8vw, 120px) 0' }}>
      <div className="max-w-[1400px] mx-auto px-5 lg:px-20">

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={stagger}
          className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 mb-16 lg:mb-[120px]"
        >
          <motion.div variants={fadeUp} className="w-full lg:w-[55%]">
            <VzirMark />
          </motion.div>
          <motion.div variants={stagger} className="w-full lg:w-[45%]">
            <motion.p variants={fadeUp} className="font-mono" style={{ fontSize: '10px', color: '#2DD4BF', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '14px' }}>
              FLAGSHIP PRODUCT
            </motion.p>
            <motion.h2 variants={fadeUp} style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: 'clamp(24px, 3vw, 36px)', color: '#FAFAFA', lineHeight: 1.2, marginBottom: '16px' }}>
              An AI that knows everything about your hotel.
            </motion.h2>
            <motion.p variants={fadeUp} style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: 'clamp(14px, 1.5vw, 16px)', color: '#A1A1AA', lineHeight: 1.7, marginBottom: '24px' }}>
              Vzir connects to your PMS, booking channels, accounting, WhatsApp, flight data, local events, weather, and competitor ratesand then answers any question in plain English. Like having a genius colleague who never sleeps.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Link to="/vzir" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 500, fontSize: '15px', color: '#2DD4BF', textDecoration: 'none' }}>
                Explore Vzir →
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={stagger}
          className="flex flex-col lg:flex-row-reverse items-center gap-10 lg:gap-16 mb-16 lg:mb-[120px]"
        >
          <motion.div variants={fadeUp} className="w-full lg:w-[55%]">
            <DataSourcesCard />
          </motion.div>
          <motion.div variants={stagger} className="w-full lg:w-[45%]">
            <motion.p variants={fadeUp} className="font-mono" style={{ fontSize: '10px', color: '#71717A', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '14px' }}>
             DATA SOURCES
            </motion.p>
            <motion.h2 variants={fadeUp} style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: 'clamp(22px, 2.8vw, 32px)', color: '#FAFAFA', lineHeight: 1.2, marginBottom: '16px' }}>
              Your hotel. Your city. One AI.
            </motion.h2>
            <motion.p variants={fadeUp} style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: 'clamp(14px, 1.5vw, 16px)', color: '#A1A1AA', lineHeight: 1.7, marginBottom: '20px' }}>
              Vzir doesn't just read your PMS - it tracks flights into your area, monitors local events, watches competitor pricing, and checks the weather forecast. Every answer considers the full picture.
            </motion.p>
            <motion.div variants={fadeUp} style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {pills1.map(pill => (
                <span key={pill} style={{
                  fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '12px', color: '#71717A',
                  background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)',
                  padding: '5px 10px', borderRadius: '6px',
                }}>{pill}</span>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={stagger}
          className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16"
        >
          <motion.div variants={fadeUp} className="w-full lg:w-[55%]">
            <ChatMockup />
          </motion.div>
          <motion.div variants={stagger} className="w-full lg:w-[45%]">
            <motion.p variants={fadeUp} className="font-mono" style={{ fontSize: '10px', color: '#71717A', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '14px' }}>
              PLAIN ENGLISH
            </motion.p>
            <motion.h2 variants={fadeUp} style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: 'clamp(22px, 2.8vw, 32px)', color: '#FAFAFA', lineHeight: 1.2, marginBottom: '16px' }}>
              Stop searching. Start asking.
            </motion.h2>
            <motion.p variants={fadeUp} style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: 'clamp(14px, 1.5vw, 16px)', color: '#A1A1AA', lineHeight: 1.7, marginBottom: '24px' }}>
              No dashboards. No reports. No spreadsheets.
Just ask Vzir and get answers from all your systems instantly.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Link to="/vzir" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 500, fontSize: '15px', color: '#2DD4BF', textDecoration: 'none' }}>
                See what you can ask →
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
