import { motion } from 'framer-motion';
import { Link2, Brain, MessageCircle } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};
const stagger = { visible: { transition: { staggerChildren: 0.15 } } };

const steps = [
  {
    num: '01',
    icon: Link2,
    title: 'Connect',
    desc: 'Link your PMS, OTAs, and accounting tools. No IT team needed, no migration required.',
  },
  {
    num: '02',
    icon: Brain,
    title: 'Learn',
    desc: 'Vzir reads your data and cross-references it with flights, events, weather, and competitor activity.',
  },
  {
    num: '03',
    icon: MessageCircle,
    title: 'Ask',
    desc: 'Type any question in plain English. Get an instant answer backed by all your connected sources.',
  },
];

export default function VzirHowItWorks() {
  return (
    <section
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{
        background: '#09090B',
        borderTop: '1px solid rgba(255,255,255,0.05)',
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1169754/pexels-photo-1169754.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.04,
        }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-20">
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
            How It Works
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-display text-[#FAFAFA]"
            style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 700, lineHeight: 1.1 }}
          >
            Three steps.
            <br />
            Everything connected.
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.num}
                variants={fadeUp}
                className="relative rounded-2xl p-8 transition-all duration-400"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.06)',
                }}
                whileHover={{
                  y: -6,
                  borderColor: 'rgba(45,212,191,0.2)',
                  transition: { duration: 0.4 },
                }}
              >
                <span
                  className="font-display absolute top-6 right-6"
                  style={{
                    fontSize: '64px',
                    fontWeight: 700,
                    color: 'rgba(45,212,191,0.06)',
                    lineHeight: 1,
                    userSelect: 'none',
                  }}
                >
                  {step.num}
                </span>
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                  style={{
                    background: 'rgba(45,212,191,0.08)',
                    border: '1px solid rgba(45,212,191,0.12)',
                  }}
                >
                  <Icon size={22} className="text-[#2DD4BF]" />
                </div>
                <h3 className="font-display text-[#FAFAFA] text-xl font-semibold mb-3">
                  {step.title}
                </h3>
                <p className="font-body text-[#A1A1AA] text-sm leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeUp}
          className="flex flex-wrap gap-3 justify-center mt-12"
        >
          {['Read-only access', 'No IT team required', 'Works on any device'].map((pill) => (
            <span
              key={pill}
              className="font-body text-xs text-[#71717A] px-4 py-2 rounded-lg"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              {pill}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
