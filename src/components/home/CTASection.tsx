import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

const stagger = { visible: { transition: { staggerChildren: 0.12 } } };

export default function CTASection() {
  return (
    <section className="relative py-24 lg:py-32 bg-[#09090B]">
      <div className="max-w-4xl mx-auto px-6 lg:px-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={stagger}
          className="relative rounded-3xl p-12 lg:p-16 overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, rgba(45,212,191,0.1), rgba(8,145,178,0.05))',
            border: '1px solid rgba(45,212,191,0.2)',
          }}
        >
          <div className="absolute inset-0 -z-10">
            <div
              className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-20 blur-3xl"
              style={{ background: 'radial-gradient(circle, #2DD4BF, transparent)' }}
            />
          </div>

          <motion.h2
            variants={fadeUp}
            className="font-display text-[#FAFAFA] text-center mb-6"
            style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 700, lineHeight: 1.1 }}
          >
            Ready to Transform Your Hotel?
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="font-body text-[#A1A1AA] text-center mb-10 max-w-2xl mx-auto"
            style={{ fontSize: 'clamp(15px, 1.5vw, 17px)', lineHeight: 1.6 }}
          >
            Join progressive hotel operators who are using Vzir to make smarter decisions,
            increase revenue, and deliver better guest experiences.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              to="/vzir"
              className="font-body font-semibold text-sm px-10 py-4 rounded-xl border-none cursor-pointer transition-all duration-200"
              style={{
                background: '#2DD4BF',
                color: '#09090B',
                minHeight: '52px',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
              }}
            >
              Start Your 60-Day Pilot →
            </Link>

            <Link
              to="/consulting"
              className="font-body font-semibold text-sm px-10 py-4 rounded-xl border transition-all duration-200"
              style={{
                background: 'transparent',
                color: '#FAFAFA',
                border: '1px solid rgba(255,255,255,0.12)',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.05)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = 'transparent';
              }}
            >
              Startup Consulting
            </Link>
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="font-body text-[#71717A] text-center mt-10 text-sm"
          >
            Questions? Email us at{' '}
            <a href="mailto:info@armtechnologies.ltd" className="text-[#2DD4BF] hover:underline">
              info@armtechnologies.ltd
            </a>
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
