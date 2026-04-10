import { motion } from 'framer-motion';
import { Calendar, Plane, Cloud } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
};
const stagger = { visible: { transition: { staggerChildren: 0.13 } } };

const alerts = [
  {
    Icon: Calendar,
    color: '#F59E0B',
    bg: 'rgba(245,158,11,0.07)',
    border: 'rgba(245,158,11,0.22)',
    glow: 'rgba(245,158,11,0.1)',
    tag: 'EVENT',
    tagColor: '#F59E0B',
    title: 'Music festival 800m away this Saturday',
    body: '15,000 attendees. Your 3 nearest competitors are already sold out. You have 6 rooms available — recommended rate increase: +22% on Saturday night.',
    action: '→ Rates adjusted automatically',
    time: '3 days away',
  },
  {
    Icon: Plane,
    color: '#6366F1',
    bg: 'rgba(99,102,241,0.07)',
    border: 'rgba(99,102,241,0.22)',
    glow: 'rgba(99,102,241,0.1)',
    tag: 'DEMAND SURGE',
    tagColor: '#818CF8',
    title: 'Inbound flights to your area +40% next weekend',
    body: 'Flight data shows strong travel demand Friday–Sunday. You currently have 8 rooms open. High-intent travellers, no OTA in their path yet.',
    action: '→ Yield window open',
    time: '6 days away',
  },
  {
    Icon: Cloud,
    color: '#2DD4BF',
    bg: 'rgba(45,212,191,0.07)',
    border: 'rgba(45,212,191,0.22)',
    glow: 'rgba(45,212,191,0.1)',
    tag: 'WEATHER',
    tagColor: '#2DD4BF',
    title: 'Heavy rain forecast this Saturday',
    body: 'Cancellation risk elevated for outdoor-stay guests. Vzir has drafted a WhatsApp message offering flexible rebooking — ready to send on your approval.',
    action: '→ Message drafted, awaiting send',
    time: '4 days away',
  },
];

export default function VzirProactiveAlerts() {
  return (
    <section
      style={{
        background: '#0C0C0F',
        padding: 'clamp(80px, 10vw, 130px) 0',
        borderTop: '1px solid rgba(255,255,255,0.05)',
      }}
    >
      <div className="max-w-[1400px] mx-auto px-5 lg:px-20">

        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={stagger}
          style={{ textAlign: 'center', marginBottom: '72px' }}
        >
          <motion.p
            variants={fadeUp}
            className="font-mono"
            style={{ fontSize: '11px', color: '#71717A', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px' }}
          >
            PROACTIVE INTELLIGENCE
          </motion.p>
          <motion.h2
            variants={fadeUp}
            style={{
              fontFamily: 'Sora, sans-serif', fontWeight: 700,
              fontSize: 'clamp(26px, 4vw, 44px)', color: '#FAFAFA',
              lineHeight: 1.15, marginBottom: '18px',
            }}
          >
            Vzir doesn't wait for you to ask.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            style={{
              fontFamily: 'Plus Jakarta Sans, sans-serif',
              fontSize: 'clamp(14px, 1.5vw, 17px)',
              color: '#A1A1AA', maxWidth: '500px', margin: '0 auto', lineHeight: 1.65,
            }}
          >
            It monitors events, flights, weather, and competitor data 24/7 — and surfaces what matters before you even open your laptop.
          </motion.p>
        </motion.div>

        {/* Alert cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {alerts.map((alert, i) => {
            const { Icon } = alert;
            return (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{
                  y: -6,
                  borderColor: alert.border,
                  boxShadow: `0 20px 60px ${alert.glow}`,
                  transition: { duration: 0.35 },
                }}
                style={{
                  background: alert.bg,
                  border: `1px solid rgba(255,255,255,0.08)`,
                  borderRadius: '20px',
                  padding: 'clamp(24px, 3vw, 36px)',
                  display: 'flex', flexDirection: 'column', gap: '16px',
                  transition: 'border-color 0.3s, box-shadow 0.3s',
                }}
              >
                {/* Tag + time */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span
                    style={{
                      fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '10px',
                      fontWeight: 700, letterSpacing: '1.5px',
                      color: alert.tagColor,
                      background: `${alert.bg}`,
                      border: `1px solid ${alert.border}`,
                      padding: '3px 9px', borderRadius: '5px',
                    }}
                  >
                    {alert.tag}
                  </span>
                  <span style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '11px', color: '#71717A' }}>
                    {alert.time}
                  </span>
                </div>

                {/* Icon */}
                <div
                  style={{
                    width: '48px', height: '48px', borderRadius: '12px',
                    background: `${alert.bg}`,
                    border: `1px solid ${alert.border}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}
                >
                  <Icon size={22} style={{ color: alert.color }} />
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontFamily: 'Sora, sans-serif', fontWeight: 700,
                    fontSize: 'clamp(15px, 1.5vw, 18px)', color: '#FAFAFA',
                    margin: 0, lineHeight: 1.3,
                  }}
                >
                  {alert.title}
                </h3>

                {/* Body */}
                <p
                  style={{
                    fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '13px',
                    color: '#A1A1AA', lineHeight: 1.65, margin: 0, flex: 1,
                  }}
                >
                  {alert.body}
                </p>

                {/* Action */}
                <div
                  style={{
                    fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '12px',
                    color: alert.tagColor, fontWeight: 600,
                    paddingTop: '14px',
                    borderTop: '1px solid rgba(255,255,255,0.06)',
                  }}
                >
                  {alert.action}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom line */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, delay: 0.3 }}
          style={{
            fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '14px',
            color: '#71717A', textAlign: 'center', marginTop: '48px',
          }}
        >
          Every alert is actionable. Vzir doesn't just tell you — it prepares the response.
        </motion.p>

      </div>
    </section>
  );
}
