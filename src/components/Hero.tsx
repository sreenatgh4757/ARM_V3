import { motion } from 'framer-motion';
import GlassCard from './ui/GlassCard';
import AuroraBackground from './ui/AuroraBackground';

export default function Hero() {
  const words = ['Your', 'hotel', 'runs', 'on', '5', 'different', 'apps.', "It", "shouldn't."];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="relative h-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920)',
          backgroundAttachment: 'fixed',
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to right, rgba(12,10,9,0.85), rgba(12,10,9,0.6))',
          }}
        />
      </div>

      <AuroraBackground intensity="subtle" />

      <div className="relative z-10 h-full max-w-[1400px] mx-auto px-6 lg:px-20 flex items-center">
        <div className="grid lg:grid-cols-[55%_45%] gap-12 lg:gap-20 w-full">
          <motion.div
            className="flex flex-col justify-center"
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-mono text-[11px] uppercase tracking-[4px] text-[#78716C] mb-6">
              A.R.M TECHNOLOGIES PRESENTS
            </p>

            <motion.h1
              className="font-serif text-5xl lg:text-6xl font-bold text-[#FAFAF9] leading-[1.1] mb-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {words.map((word, i) => (
                <motion.span key={i} variants={wordVariants} className="inline-block mr-3">
                  {word}
                </motion.span>
              ))}
            </motion.h1>

            <motion.p
              className="font-light text-lg text-[#A8A29E] mb-8 max-w-[540px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              Vzir brings everything together — PMS, bookings, guest messages, revenue — into one
              intelligent workspace.
            </motion.p>

            <motion.div
              className="h-[1px] w-[120px] mb-8"
              style={{
                background: 'linear-gradient(to right, rgba(45,212,191,0.6), transparent)',
              }}
              initial={{ width: 0 }}
              animate={{ width: 120 }}
              transition={{ delay: 1, duration: 0.8 }}
            />

            <motion.div
              className="flex gap-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              <div>
                <div className="text-4xl font-serif font-bold text-[#2DD4BF] mb-1">2-4 hrs</div>
                <div className="text-sm text-[#78716C]">saved daily per manager</div>
              </div>
              <div>
                <div className="text-4xl font-serif font-bold text-[#2DD4BF] mb-1">500K+</div>
                <div className="text-sm text-[#78716C]">independent hotels worldwide</div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex items-center"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <GlassCard
              className="p-10 lg:p-12 border-[0.5px] border-[rgba(45,212,191,0.12)]"
              glow={true}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[rgba(45,212,191,0.1)] border border-[rgba(45,212,191,0.2)] mb-6">
                <div className="w-2 h-2 rounded-full bg-[#2DD4BF] animate-pulse" />
                <span className="text-xs font-medium text-[#2DD4BF] uppercase tracking-wider">
                  NEW
                </span>
              </div>

              <h2 className="font-serif text-5xl lg:text-[56px] font-bold text-[#FAFAF9] mb-3">
                Vzir
              </h2>
              <div
                className="h-[3px] w-[80px] mb-6"
                style={{
                  background: 'linear-gradient(to right, #2DD4BF, transparent)',
                }}
              />

              <p className="text-xl text-[#A8A29E] mb-3">Hotel intelligence platform.</p>
              <p className="text-base text-[#78716C] mb-8">
                One workspace. Every system connected. Ask anything.
              </p>

              <button className="w-full px-8 py-4 rounded-xl bg-[#14B8A6] text-[#0C0A09] font-medium hover:bg-[#0D9488] transition-all duration-300 mb-6">
                Partner with us →
              </button>

              <p className="text-[13px] text-[#78716C] italic text-center">
                Now onboarding hotels across the UK
              </p>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
