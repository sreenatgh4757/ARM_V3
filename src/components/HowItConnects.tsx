import { motion } from 'framer-motion';
import { Building2, Globe as Globe2, Calculator, MessageCircle, Plus } from 'lucide-react';
import AnimatedSection from './ui/AnimatedSection';
import GlassCard from './ui/GlassCard';

export default function HowItConnects() {
  const systems = [
    { icon: Building2, label: 'Your PMS', sublabel: 'Guestline, Cloudbeds, Mews' },
    { icon: Globe2, label: 'OTA Channels', sublabel: 'Booking.com, Expedia' },
    { icon: Calculator, label: 'Accounting', sublabel: 'Xero, QuickBooks' },
    { icon: MessageCircle, label: 'WhatsApp', sublabel: 'Guest messaging' },
    { icon: Plus, label: 'More', sublabel: 'Any system with an integration' },
  ];

  return (
    <section id="how-it-connects" className="relative py-32 bg-[#0C0A09]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-20">
        <AnimatedSection className="text-center mb-16">
          <p className="font-mono text-[11px] uppercase tracking-[4px] text-[#78716C] mb-8">
            SIMPLE SETUP
          </p>
          <h2 className="font-serif text-4xl lg:text-[40px] font-bold text-[#FAFAF9] mb-4">
            Connect your systems in 20 minutes.
          </h2>
          <p className="text-lg text-[#A8A29E] max-w-[600px] mx-auto">
            Vzir works with the tools you already use. No new hardware. No IT team required.
          </p>
        </AnimatedSection>

        <div className="relative flex flex-wrap lg:flex-nowrap items-center justify-center gap-8 lg:gap-6 mb-20 min-h-[400px]">
          {systems.map((system, i) => (
            <motion.div
              key={i}
              className="relative z-10"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <GlassCard className="w-[100px] h-[80px] flex flex-col items-center justify-center gap-1 hover:border-[rgba(45,212,191,0.2)] transition-all duration-300">
                <system.icon className="w-5 h-5 text-[#2DD4BF]" />
                <span className="text-xs font-medium text-[#FAFAF9] text-center px-1">
                  {system.label}
                </span>
              </GlassCard>
              <p className="text-[10px] text-[#78716C] text-center mt-2 max-w-[100px]">
                {system.sublabel}
              </p>
            </motion.div>
          ))}

          <motion.div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[100px] h-[100px] rounded-full border-2 border-[#2DD4BF] bg-[rgba(45,212,191,0.05)] flex items-center justify-center backdrop-blur-sm"
            style={{
              boxShadow: '0 0 80px rgba(45,212,191,0.1)',
            }}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <span className="font-serif text-xl font-bold text-[#2DD4BF]">Vzir</span>
          </motion.div>

          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            {systems.map((_, i) => {
              const angle = (i * 360) / systems.length - 90;
              const radius = 180;
              const x1 = '50%';
              const y1 = '50%';
              const x2 = `calc(50% + ${Math.cos((angle * Math.PI) / 180) * radius}px)`;
              const y2 = `calc(50% + ${Math.sin((angle * Math.PI) / 180) * radius}px)`;

              return (
                <motion.line
                  key={i}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="rgba(45,212,191,0.2)"
                  strokeWidth="1"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 + i * 0.1, duration: 0.6 }}
                />
              );
            })}
          </svg>

          {systems.map((_, i) => {
            const angle = (i * 360) / systems.length - 90;
            const radius = 180;
            const x = `calc(50% + ${Math.cos((angle * Math.PI) / 180) * radius}px)`;
            const y = `calc(50% + ${Math.sin((angle * Math.PI) / 180) * radius}px)`;

            return (
              <motion.div
                key={`dot-${i}`}
                className="absolute w-2 h-2 rounded-full bg-[#2DD4BF] pointer-events-none"
                style={{
                  left: x,
                  top: y,
                  marginLeft: -4,
                  marginTop: -4,
                }}
                animate={{
                  x: [
                    Math.cos((angle * Math.PI) / 180) * radius,
                    Math.cos((angle * Math.PI) / 180) * 50,
                  ],
                  y: [
                    Math.sin((angle * Math.PI) / 180) * radius,
                    Math.sin((angle * Math.PI) / 180) * 50,
                  ],
                  opacity: [1, 0],
                }}
                transition={{
                  delay: 1.5 + i * 0.3,
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 1,
                  ease: 'linear',
                }}
              />
            );
          })}
        </div>

        <AnimatedSection className="text-center mb-12" delay={1}>
          <p className="text-[15px] text-[#78716C] max-w-[600px] mx-auto leading-relaxed">
            Vzir is read-only by default. It can never modify or delete anything in your existing
            systems. Your tools stay exactly as they are — Vzir simply makes them work together.
          </p>
        </AnimatedSection>

        <AnimatedSection className="flex flex-wrap justify-center gap-3" delay={1.2}>
          {[
            '🔒 Read-only access',
            '⏱ 20-minute setup',
            '🏨 No IT team needed',
          ].map((badge) => (
            <div
              key={badge}
              className="px-4 py-2 rounded-full bg-[rgba(250,250,249,0.03)] border border-[rgba(250,250,249,0.06)] text-sm text-[#A8A29E]"
            >
              {badge}
            </div>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}
