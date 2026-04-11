import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

const stagger = { visible: { transition: { staggerChildren: 0.12 } } };

export default function VzirSection() {
  return (
    <section id="vzir" className="relative py-24 lg:py-32 bg-gradient-to-b from-[#09090B] to-[#0F0F13]">
      <div className="max-w-6xl mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={stagger}
          >
            <motion.p
              variants={fadeUp}
              className="font-body text-[12px] tracking-[3px] uppercase text-[#2DD4BF] mb-4"
            >
              Our Flagship Product
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="font-display text-[#FAFAFA] mb-6"
              style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 700, lineHeight: 1.1 }}
            >
              Vzir: Hotel Intelligence Platform
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="font-body text-[#A1A1AA] mb-6"
              style={{ fontSize: 'clamp(15px, 1.5vw, 17px)', lineHeight: 1.7 }}
            >
              Vzir connects your entire hotel ecosystem—from property management systems to
              booking channels, accounting software, guest communications, and external data
              sources like flights, events, and weather.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="font-body text-[#71717A] mb-8"
              style={{ fontSize: 'clamp(14px, 1.4vw, 16px)', lineHeight: 1.7 }}
            >
              Ask natural language questions and get instant, intelligent answers backed by
              all your data. No more switching between dashboards or waiting for reports.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/vzir"
                className="inline-flex items-center justify-center gap-2 font-body font-semibold text-sm px-8 py-4 rounded-xl border-none cursor-pointer transition-all duration-200"
                style={{
                  background: 'linear-gradient(135deg, #2DD4BF, #0891B2)',
                  color: '#09090B',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                }}
              >
                Explore Vzir
                <ArrowRight size={16} />
              </Link>

              <a
                href="mailto:info@armtechnologies.ltd"
                className="inline-flex items-center justify-center font-body font-semibold text-sm px-8 py-4 rounded-xl border transition-all duration-200"
                style={{
                  background: 'transparent',
                  color: '#FAFAFA',
                  border: '1px solid rgba(255,255,255,0.12)',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.05)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = 'transparent';
                }}
              >
                Request Demo
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeUp}
            className="relative"
          >
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.06)',
                minHeight: '400px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '40px 20px',
              }}
            >
              <svg
                width="80"
                height="80"
                viewBox="0 0 80 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ marginBottom: '24px', opacity: 0.7 }}
              >
                <polyline
                  points="10,10 40,70 70,10"
                  stroke="#2DD4BF"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </svg>

              <h3 className="font-display text-[#FAFAFA] text-2xl font-bold mb-4 text-center">
                Vzir
              </h3>

              <p className="font-body text-[#71717A] text-center text-sm mb-8 max-w-xs">
                Real-time intelligence from every system your hotel uses
              </p>

              <div className="space-y-3 w-full max-w-xs">
                {['PMS Integration', 'Live Analytics', 'Guest Intelligence', 'Predictive Insights'].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{ background: '#2DD4BF' }}
                    />
                    <span className="font-body text-sm text-[#A1A1AA]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
