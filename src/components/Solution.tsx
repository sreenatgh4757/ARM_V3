import { motion } from 'framer-motion';
import AnimatedSection from './ui/AnimatedSection';
import GlassCard from './ui/GlassCard';
import AuroraBackground from './ui/AuroraBackground';

export default function Solution() {
  const scrollToFeatures = () => {
    const element = document.getElementById('features');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="solution" className="relative min-h-screen py-32 overflow-hidden bg-[#0C0A09]">
      <AuroraBackground intensity="medium" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-20">
        <div className="grid lg:grid-cols-[55%_45%] gap-12 lg:gap-20 items-center">
          <AnimatedSection>
            <p className="font-mono text-[11px] uppercase tracking-[4px] text-[#2DD4BF] mb-8">
              INTRODUCING VZIR
            </p>

            <h2 className="font-serif text-4xl lg:text-[52px] font-bold text-[#FAFAF9] leading-[1.1] mb-6">
              One workspace. Every answer.
            </h2>

            <p className="text-lg font-light text-[#A8A29E] mb-8 max-w-[540px] leading-relaxed">
              Vzir connects your property management system, OTA channels, accounting tools, and
              guest messaging into one intelligent workspace. Ask any question about your hotel and
              get an instant answer from live data.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              {['Instant answers', 'All systems connected', 'Setup in 20 minutes'].map((pill) => (
                <div
                  key={pill}
                  className="px-4 py-2 rounded-full bg-[rgba(45,212,191,0.08)] border border-[rgba(45,212,191,0.15)] text-sm text-[#2DD4BF]"
                >
                  {pill}
                </div>
              ))}
            </div>

            <button
              onClick={scrollToFeatures}
              className="px-6 py-3 rounded-xl border border-[#2DD4BF] text-[#2DD4BF] hover:bg-[rgba(45,212,191,0.1)] transition-all duration-300"
            >
              See what Vzir can do ↓
            </button>
          </AnimatedSection>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 60, rotateY: -10 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative">
              <div
                className="rounded-[20px] overflow-hidden border border-[rgba(250,250,249,0.06)]"
                style={{
                  transform: 'perspective(1000px) rotateY(-3deg)',
                }}
              >
                <div className="relative h-[500px]">
                  <img
                    src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800"
                    alt="Hotel manager"
                    className="w-full h-full object-cover"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background: 'rgba(12,10,9,0.6)',
                    }}
                  />
                </div>
              </div>

              <motion.div
                className="absolute -bottom-8 -left-8 lg:-left-12"
                animate={{
                  y: [0, -6, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <GlassCard className="p-5 max-w-[340px] border-[rgba(45,212,191,0.15)]" glow={true}>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-2 h-2 rounded-full bg-[#2DD4BF]" />
                    <span className="text-xs font-medium text-[#2DD4BF]">Vzir</span>
                  </div>
                  <p className="text-sm text-[#FAFAF9] leading-relaxed">
                    Your occupancy last weekend was 87%. Friday was strongest at 94%.
                  </p>
                </GlassCard>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
