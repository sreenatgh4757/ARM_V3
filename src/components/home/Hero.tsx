import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const letterVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  }),
};

const colors = ['#2DD4BF', '#0891B2', '#0369A1', '#0284C7'];

export default function Hero() {
  const scrollToNext = () => {
    const el = document.getElementById('features');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const vzirLetters = ['V', 'z', 'i', 'r'];

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#09090B]">
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#09090B]/70 via-[#09090B]/85 to-[#09090B]/95" />

      <div className="relative z-10 px-6 lg:px-20 py-20 lg:py-0 max-w-6xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-body text-[13px] tracking-[4px] uppercase text-[#A1A1AA] mb-12"
        >
          Advanced Technology Solutions
        </motion.p>

        <div className="mb-12 flex justify-center items-end gap-2 lg:gap-6">
          {vzirLetters.map((letter, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={letterVariants}
            >
              <div
                className="font-display font-bold leading-none text-center"
                style={{
                  fontSize: 'clamp(48px, 15vw, 140px)',
                  color: colors[i],
                  textShadow: `0 0 30px ${colors[i]}20`,
                  letterSpacing: '-0.02em',
                }}
              >
                {letter}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="font-body text-[#A1A1AA] max-w-2xl mx-auto mb-10"
          style={{ fontSize: 'clamp(16px, 2vw, 20px)', lineHeight: 1.7 }}
        >
          Intelligent software solutions for the modern hospitality industry.
          <br />
          <span className="text-[#71717A]">
            Powered by advanced AI and real-time data integration.
          </span>
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          onClick={() => {
            const el = document.getElementById('vzir');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          className="font-body font-semibold text-sm px-8 lg:px-10 py-4 rounded-xl border-none cursor-pointer transition-all duration-200 mb-20"
          style={{
            background: 'linear-gradient(135deg, #2DD4BF, #0891B2)',
            color: '#09090B',
            minHeight: '52px',
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
            (e.currentTarget as HTMLElement).style.boxShadow = '0 12px 24px rgba(45,212,191,0.2)';
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
            (e.currentTarget as HTMLElement).style.boxShadow = 'none';
          }}
        >
          Explore Vzir →
        </motion.button>

        <motion.button
          onClick={scrollToNext}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 group"
          style={{ background: 'none', border: 'none', cursor: 'pointer' }}
        >
          <span className="font-body text-[11px] tracking-[2px] uppercase text-[#71717A] group-hover:text-[#A1A1AA] transition-colors">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown size={20} className="text-[#2DD4BF]" />
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
}