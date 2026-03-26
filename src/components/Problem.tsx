import { motion } from 'framer-motion';
import { Clock, AlertTriangle, TrendingDown, AlertCircle } from 'lucide-react';
import AnimatedSection from './ui/AnimatedSection';
import GlassCard from './ui/GlassCard';

export default function Problem() {
  const painPoints = [
    {
      icon: Clock,
      text: "7:30 AM — You open your PMS to check last night's occupancy. Then switch to the OTA extranet to see new bookings. Then open your accounting tool for revenue figures. Three logins before your first coffee.",
    },
    {
      icon: AlertTriangle,
      text: "9:00 AM — A guest messages on WhatsApp asking about early check-in. You didn't see it because nobody monitors WhatsApp overnight. The guest is frustrated before they even arrive.",
    },
    {
      icon: TrendingDown,
      text: "11:00 AM — Your GM asks for last week's RevPAR breakdown. You spend 45 minutes pulling data from two different systems and building a spreadsheet. By the time it's done, you've missed the lunch rush.",
    },
    {
      icon: AlertCircle,
      text: "3:00 PM — Three rooms reserved for tonight still haven't confirmed. You only notice at 3 PM. By then it's too late to resell them. Revenue lost.",
    },
  ];

  const wordVariants = {
    hidden: { opacity: 0, filter: 'blur(10px)' },
    visible: (i: number) => ({
      opacity: 1,
      filter: 'blur(0px)',
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  const headline = ['Every', 'morning,', 'the', 'same', 'chaos.'];

  return (
    <section className="relative min-h-screen py-32 bg-[#0C0A09]">
      <div className="max-w-[800px] mx-auto px-6 lg:px-20">
        <AnimatedSection>
          <p className="font-mono text-[11px] uppercase tracking-[4px] text-[#78716C] mb-8 text-center">
            THE DAILY REALITY
          </p>

          <motion.h2
            className="font-serif text-4xl lg:text-5xl text-[#FAFAF9] mb-16 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {headline.map((word, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={wordVariants}
                className="inline-block mr-3"
              >
                {word}
              </motion.span>
            ))}
          </motion.h2>
        </AnimatedSection>

        <div className="space-y-5 mb-16">
          {painPoints.map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
            >
              <GlassCard className="p-6 flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <point.icon className="w-5 h-5 text-[#2DD4BF]" />
                </div>
                <p className="text-base font-light text-[#A8A29E] leading-relaxed">{point.text}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        <AnimatedSection delay={0.8}>
          <p className="font-serif text-2xl lg:text-[28px] text-[#FAFAF9] text-center max-w-[600px] mx-auto">
            This isn't a technology problem. It's a time problem.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
