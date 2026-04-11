import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};
const stagger = { visible: { transition: { staggerChildren: 0.15 } } };

export default function VzirAbout() {
  const scrollToPilot = () => {
    const el = document.getElementById('pilot');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToSources = () => {
    const el = document.getElementById('data-sources');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="vzir-about"
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ background: '#09090B' }}
    >
      <div className="max-w-[1200px] mx-auto px-6 lg:px-20">
        <div className="flex flex-col lg:flex-row items-start gap-16 lg:gap-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={stagger}
            className="w-full lg:w-1/2"
          >
            <motion.p
              variants={fadeUp}
              className="font-mono text-[10px] tracking-[3px] uppercase text-[#2DD4BF] mb-4"
            >
              The Product
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-display text-[#FAFAFA] mb-6"
              style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 700, lineHeight: 1.1 }}
            >
              Ask your hotel
              <br />
              anything.
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="font-body text-[#A1A1AA] mb-4"
              style={{ fontSize: 'clamp(15px, 1.5vw, 17px)', lineHeight: 1.7 }}
            >
              Vzir is a hotel intelligence platform built by A.R.M Technologies.
              It connects to your PMS, booking channels, accounting, WhatsApp,
              flight data, local events, weather, and competitor rates — then
              answers any question in plain English.
            </motion.p>
            <motion.p
              variants={fadeUp}
              className="font-body text-[#71717A] mb-8"
              style={{ fontSize: 'clamp(14px, 1.4vw, 16px)', lineHeight: 1.7 }}
            >
              Like having a genius colleague who never sleeps, never forgets,
              and always has the full picture.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={scrollToPilot}
                className="font-display font-semibold text-sm px-7 py-3.5 rounded-xl border-none cursor-pointer transition-all duration-200 hover:bg-[#0D9488] hover:-translate-y-0.5"
                style={{ background: '#14B8A6', color: '#09090B' }}
              >
                Apply for the pilot
              </button>
              <button
                onClick={scrollToSources}
                className="font-display font-semibold text-sm px-7 py-3.5 rounded-xl cursor-pointer transition-all duration-200 hover:bg-white/5"
                style={{
                  background: 'transparent',
                  color: '#FAFAFA',
                  border: '1px solid rgba(255,255,255,0.12)',
                }}
              >
                See what it connects
              </button>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={stagger}
            className="w-full lg:w-1/2"
          >
            <motion.div
              variants={fadeUp}
              className="rounded-2xl p-6 lg:p-8"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              <div className="flex items-center gap-2 mb-5 pb-4" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center"
                  style={{ background: 'rgba(45,212,191,0.15)' }}
                >
                  <svg width="12" height="12" viewBox="0 0 80 80" fill="none">
                    <polyline points="10,10 40,70 70,10" stroke="#2DD4BF" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  </svg>
                </div>
                <span className="font-display text-sm font-semibold text-[#FAFAFA]">Vzir</span>
                <span
                  className="font-mono text-[9px] px-2 py-0.5 rounded ml-auto"
                  style={{ color: '#22C55E', background: 'rgba(34,197,94,0.1)' }}
                >
                  LIVE
                </span>
              </div>

              <div
                className="rounded-xl px-4 py-3 mb-3 ml-auto"
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  maxWidth: '85%',
                  borderRadius: '12px 12px 4px 12px',
                }}
              >
                <p className="font-body text-sm text-[#FAFAFA]">
                  How should I prepare for this weekend?
                </p>
              </div>

              <div
                className="rounded-xl px-4 py-3"
                style={{
                  background: 'rgba(45,212,191,0.04)',
                  border: '1px solid rgba(45,212,191,0.08)',
                  maxWidth: '95%',
                  borderRadius: '4px 12px 12px 12px',
                }}
              >
                <p className="font-body text-sm text-[#A1A1AA] leading-relaxed">
                  This weekend looks strong. You are at{' '}
                  <span className="text-[#2DD4BF] font-medium">87% occupancy</span>{' '}
                  with 12 rooms still available. A music festival nearby on Saturday
                  will drive walk-ins — consider increasing Saturday rates by 15%.
                  Three competitor hotels are already sold out.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
