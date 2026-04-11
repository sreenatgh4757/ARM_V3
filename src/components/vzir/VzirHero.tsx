import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function VzirHero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToNext = () => {
    const el = document.getElementById('vzir-about');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const opacity = Math.max(0, 1 - scrollY / 600);
  const translateY = scrollY * 0.3;

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: `translateY(${translateY * 0.5}px)`,
        }}
      />
      <div className="absolute inset-0 bg-[#09090B]/85" />

      <div
        className="relative z-10 flex flex-col items-center text-center px-6"
        style={{ opacity, transform: `translateY(${translateY}px)` }}
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-mono text-[10px] tracking-[4px] uppercase text-[#71717A] mb-8"
        >
          A Product by A.R.M Technologies
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] as const }}
          className="font-display"
          style={{
            fontSize: 'clamp(72px, 15vw, 180px)',
            fontWeight: 700,
            letterSpacing: '-0.02em',
            lineHeight: 0.9,
            color: '#FAFAFA',
          }}
        >
          Vzir
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="w-16 h-[1px] bg-[#2DD4BF] my-8"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="font-body text-[#A1A1AA] max-w-lg leading-relaxed"
          style={{ fontSize: 'clamp(16px, 2vw, 20px)' }}
        >
          Intelligence that sees what your hotel cannot.
          <br />
          <span className="text-[#71717A] italic">
            One AI. Every data source. Instant answers.
          </span>
        </motion.p>
      </div>

      <motion.button
        onClick={scrollToNext}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 group cursor-pointer"
        style={{ background: 'none', border: 'none' }}
      >
        <span className="font-mono text-[10px] tracking-[3px] uppercase text-[#71717A] group-hover:text-[#A1A1AA] transition-colors">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={20} className="text-[#2DD4BF]" />
        </motion.div>
      </motion.button>
    </section>
  );
}
