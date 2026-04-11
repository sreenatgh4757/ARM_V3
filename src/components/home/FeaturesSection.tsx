import { motion } from 'framer-motion';
import { Zap, BarChart3, Brain, Shield, Smartphone, Globe } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

const stagger = { visible: { transition: { staggerChildren: 0.12 } } };

const features = [
  {
    icon: Brain,
    title: 'Intelligent AI Core',
    description: 'Advanced machine learning algorithms that understand your business context.',
    color: '#2DD4BF',
  },
  {
    icon: Zap,
    title: 'Real-Time Processing',
    description: 'Instant data integration from all your systems in one unified platform.',
    color: '#0891B2',
  },
  {
    icon: BarChart3,
    title: 'Advanced Analytics',
    description: 'Deep insights and predictive analytics for data-driven decisions.',
    color: '#0369A1',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-grade encryption and compliance with all industry standards.',
    color: '#0284C7',
  },
  {
    icon: Smartphone,
    title: 'Mobile & Web',
    description: 'Seamless experience across all devices with responsive design.',
    color: '#2DD4BF',
  },
  {
    icon: Globe,
    title: 'Global Ready',
    description: 'Multi-language, multi-currency, and localized for any market.',
    color: '#0891B2',
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="relative py-24 lg:py-32 bg-[#09090B]">
      <div className="max-w-6xl mx-auto px-6 lg:px-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={stagger}
          className="text-center mb-16 lg:mb-24"
        >
          <motion.p
            variants={fadeUp}
            className="font-body text-[12px] tracking-[3px] uppercase text-[#A1A1AA] mb-4"
          >
            Why Choose Our Solutions
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-display text-[#FAFAFA] mb-6"
            style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 700, lineHeight: 1.1 }}
          >
            Built for Tomorrow's Challenges
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="font-body text-[#A1A1AA] max-w-2xl mx-auto"
            style={{ fontSize: 'clamp(14px, 1.5vw, 17px)', lineHeight: 1.6 }}
          >
            Cutting-edge technology meets practical business value. Our platform is designed
            to solve real problems in the hospitality industry.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={idx}
                variants={fadeUp}
                className="group relative rounded-2xl p-8 overflow-hidden transition-all duration-300 hover:shadow-lg"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.06)',
                }}
                whileHover={{
                  y: -6,
                  borderColor: `${feature.color}40`,
                }}
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(135deg, ${feature.color}, transparent)`,
                  }}
                />

                <div className="relative z-10">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                    style={{
                      background: `${feature.color}15`,
                      border: `1px solid ${feature.color}30`,
                    }}
                  >
                    <Icon size={24} style={{ color: feature.color }} />
                  </div>

                  <h3 className="font-display text-[#FAFAFA] text-lg font-semibold mb-3">
                    {feature.title}
                  </h3>

                  <p className="font-body text-[#A1A1AA] text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
