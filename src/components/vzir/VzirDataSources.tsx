import { motion } from 'framer-motion';
import {
  Building2, Globe, Calculator, MessageSquare,
  Plane, Calendar, Cloud, TrendingUp, BarChart2, Users,
} from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};
const stagger = { visible: { transition: { staggerChildren: 0.08 } } };

const sources = [
  { icon: Building2, name: 'PMS', desc: 'Live bookings, occupancy & guest profiles' },
  { icon: Globe, name: 'OTAs', desc: 'Rates across Booking.com, Expedia & direct' },
  { icon: Calculator, name: 'Revenue', desc: 'Financials from Xero or QuickBooks' },
  { icon: MessageSquare, name: 'WhatsApp', desc: 'Automated guest messaging 24/7' },
  { icon: Plane, name: 'Flights', desc: 'Inbound travel demand to your area' },
  { icon: Calendar, name: 'Events', desc: 'Festivals, conferences & concerts nearby' },
  { icon: Cloud, name: 'Weather', desc: 'Impact on bookings and guest plans' },
  { icon: TrendingUp, name: 'Competitors', desc: 'Nearby hotel rates and availability' },
  { icon: BarChart2, name: 'Trends', desc: 'Seasonal tourism and demand patterns' },
  { icon: Users, name: 'Requests', desc: 'Guest in-app messages to front desk' },
];

export default function VzirDataSources() {
  return (
    <section
      id="data-sources"
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ background: '#09090B' }}
    >
      <div className="max-w-[1200px] mx-auto px-6 lg:px-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={stagger}
          className="text-center mb-16"
        >
          <motion.p
            variants={fadeUp}
            className="font-mono text-[10px] tracking-[3px] uppercase text-[#71717A] mb-4"
          >
            10 Data Sources
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-display text-[#FAFAFA] mb-4"
            style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 700, lineHeight: 1.1 }}
          >
            Everything connected.
            <br />
            One answer.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="font-body text-[#A1A1AA] max-w-md mx-auto"
            style={{ fontSize: 'clamp(15px, 1.5vw, 17px)', lineHeight: 1.7 }}
          >
            Vzir reads every system your hotel relies on — internal operations
            and external market signals — unified in a single intelligence layer.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={stagger}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4"
        >
          {sources.map((source) => {
            const Icon = source.icon;
            return (
              <motion.div
                key={source.name}
                variants={fadeUp}
                className="group rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.06)',
                }}
                whileHover={{ borderColor: 'rgba(45,212,191,0.2)' }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-3"
                  style={{
                    background: 'rgba(45,212,191,0.08)',
                    border: '1px solid rgba(45,212,191,0.12)',
                  }}
                >
                  <Icon size={18} className="text-[#2DD4BF]" />
                </div>
                <h3 className="font-display text-[#FAFAFA] text-sm font-semibold mb-1">
                  {source.name}
                </h3>
                <p className="font-body text-[#71717A] text-xs leading-relaxed">
                  {source.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
