import { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import AnimatedSection from './ui/AnimatedSection';
import GlassCard from './ui/GlassCard';

function CountUpMetric({ end, suffix = '', duration = 2 }: { end: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);

      setCount(Math.floor(progress * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function MarketProof() {
  const metrics = [
    { value: 500, suffix: 'K+', label: 'Independent hotels globally' },
    { value: 11, suffix: 'B', label: 'Hospitality tech market (2023)' },
    { value: 8, suffix: '%+', label: 'Annual market growth' },
    { value: 8, suffix: '', label: 'Disconnected tools per hotel', range: '5-8' },
  ];

  return (
    <section className="relative py-32 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1920)',
          backgroundAttachment: 'fixed',
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: 'rgba(12,10,9,0.8)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-20">
        <AnimatedSection className="text-center mb-16">
          <p className="font-mono text-[11px] uppercase tracking-[4px] text-[#78716C] mb-8">
            THE OPPORTUNITY
          </p>
          <h2 className="font-serif text-4xl lg:text-[44px] font-bold text-[#FAFAF9] max-w-[700px] mx-auto">
            500,000 hotels. Zero integrated intelligence.
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {metrics.map((metric, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              <GlassCard className="p-6 text-center" hover>
                <div className="text-4xl lg:text-5xl font-serif font-bold text-[#2DD4BF] mb-3">
                  {metric.range ? (
                    metric.range
                  ) : (
                    <>
                      <CountUpMetric end={metric.value} />
                      {metric.suffix}
                    </>
                  )}
                </div>
                <p className="text-sm text-[#A8A29E]">{metric.label}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        <AnimatedSection delay={0.6}>
          <p className="text-base text-[#A8A29E] text-center max-w-[640px] mx-auto leading-relaxed">
            Vzir is purpose-built for independent and boutique hotels with 10 to 250 rooms —
            properties large enough to need intelligence but too lean to afford a dedicated IT team.
            Starting in the UK, expanding globally.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
