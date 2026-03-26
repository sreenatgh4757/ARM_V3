import { motion } from 'framer-motion';
import AnimatedSection from './ui/AnimatedSection';
import GlassCard from './ui/GlassCard';

function ConnectedWorkspaceMockup() {
  const apps = [
    { name: 'PMS', color: '#2DD4BF', position: { x: -120, y: -80 } },
    { name: 'OTAs', color: '#14B8A6', position: { x: -120, y: 80 } },
    { name: 'Accounts', color: '#0D9488', position: { x: 120, y: -80 } },
    { name: 'WhatsApp', color: '#2DD4BF', position: { x: 120, y: 80 } },
    { name: 'Reports', color: '#14B8A6', position: { x: 0, y: -120 } },
  ];

  return (
    <div className="relative h-[400px] flex items-center justify-center">
      <motion.div
        className="w-32 h-32 rounded-full border-2 border-[#2DD4BF] bg-[rgba(45,212,191,0.05)] flex items-center justify-center backdrop-blur-sm"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <span className="font-serif text-2xl font-bold text-[#2DD4BF]">Vzir</span>
      </motion.div>

      {apps.map((app, i) => (
        <motion.div
          key={app.name}
          className="absolute"
          style={{
            left: '50%',
            top: '50%',
            marginLeft: app.position.x,
            marginTop: app.position.y,
          }}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.5 }}
        >
          <GlassCard className="w-24 h-20 flex items-center justify-center relative">
            <span className="text-xs font-medium text-[#FAFAF9]">{app.name}</span>
            <motion.svg
              className="absolute"
              style={{
                left: app.position.x > 0 ? -app.position.x + 48 : Math.abs(app.position.x) - 48,
                top: app.position.y > 0 ? -app.position.y + 40 : Math.abs(app.position.y) - 40,
              }}
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 + i * 0.1, duration: 0.8 }}
            >
              <line
                x1="0"
                y1="0"
                x2={-app.position.x}
                y2={-app.position.y}
                stroke={app.color}
                strokeWidth="1"
                opacity="0.3"
              />
            </motion.svg>
            <motion.div
              className="absolute w-1.5 h-1.5 rounded-full"
              style={{
                backgroundColor: app.color,
                left: app.position.x > 0 ? -app.position.x + 48 : Math.abs(app.position.x) - 48,
                top: app.position.y > 0 ? -app.position.y + 40 : Math.abs(app.position.y) - 40,
              }}
              animate={{
                x: [-app.position.x, 0],
                y: [-app.position.y, 0],
              }}
              transition={{
                delay: 1 + i * 0.2,
                duration: 2,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
          </GlassCard>
        </motion.div>
      ))}
    </div>
  );
}

function ChatMockup() {
  return (
    <GlassCard className="w-full max-w-[360px] p-5">
      <div className="space-y-4">
        <motion.div
          className="flex justify-end"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className="bg-[rgba(250,250,249,0.06)] rounded-2xl rounded-tr-sm px-4 py-3 max-w-[280px]">
            <p className="text-sm text-[#FAFAF9]">
              What was our revenue last week compared to the week before?
            </p>
          </div>
        </motion.div>

        <motion.div
          className="flex justify-start"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <div className="border-l-2 border-[#2DD4BF] bg-[rgba(45,212,191,0.05)] rounded-2xl rounded-tl-sm px-4 py-3 max-w-[300px]">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#2DD4BF]" />
              <span className="text-xs text-[#2DD4BF] font-medium">Vzir</span>
            </div>
            <motion.p
              className="text-sm text-[#FAFAF9] mb-3 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 1 }}
            >
              Last week's total revenue was £48,200, up 8.3% from the previous week (£44,500). Your
              strongest day was Saturday with £9,100. Wednesday was the weakest at £5,200 —
              consider midweek promotions.
            </motion.p>
            <div className="flex flex-wrap gap-2">
              {['£48,200 revenue', '↑ 8.3%', 'Sat peak: £9,100'].map((pill, i) => (
                <motion.div
                  key={pill}
                  className="px-2 py-1 rounded-md bg-[rgba(45,212,191,0.1)] text-xs text-[#2DD4BF]"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1 + i * 0.1 }}
                >
                  {pill}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </GlassCard>
  );
}

function BriefingMockup() {
  return (
    <GlassCard className="w-full max-w-[360px] p-6">
      <div className="mb-4">
        <p className="text-[13px] text-[#78716C]">Good morning</p>
        <p className="text-[13px] text-[#78716C]">Friday, 22 March 2026</p>
      </div>

      <motion.div
        className="border-l-2 border-[#2DD4BF] pl-4 mb-4"
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        <p className="text-xs font-medium text-[#2DD4BF] uppercase tracking-wider mb-2">
          Yesterday
        </p>
        <p className="text-sm text-[#A8A29E]">Occupancy: 84% · Revenue: £6,840 · 3 late checkouts</p>
      </motion.div>

      <motion.div
        className="border-l-2 border-[#14B8A6] pl-4 mb-4"
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
      >
        <p className="text-xs font-medium text-[#14B8A6] uppercase tracking-wider mb-2">Today</p>
        <p className="text-sm text-[#A8A29E]">
          14 arrivals · 8 departures · 2 VIP guests · 1 group booking (12 rooms)
        </p>
      </motion.div>

      <motion.div
        className="border-l-2 border-[#0D9488] pl-4"
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
      >
        <p className="text-xs font-medium text-[#0D9488] uppercase tracking-wider mb-2">
          Next 48 hours
        </p>
        <p className="text-sm text-[#A8A29E]">
          Friday looking strong at 91% booked · Saturday has 4 unsold rooms · No flagged issues
        </p>
      </motion.div>
    </GlassCard>
  );
}

function WhatsAppMockup() {
  return (
    <GlassCard className="w-full max-w-[340px] overflow-hidden">
      <div className="bg-[#25D366] px-4 py-3 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white text-sm font-semibold">
          H
        </div>
        <div>
          <p className="text-white font-medium text-sm">Hotel Vzir Demo</p>
          <p className="text-white/80 text-xs">online</p>
        </div>
      </div>

      <div className="p-4 space-y-3 bg-[rgba(250,250,249,0.02)]">
        <motion.div
          className="flex justify-start"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className="bg-[rgba(250,250,249,0.08)] rounded-lg rounded-tl-sm px-3 py-2 max-w-[260px]">
            <p className="text-xs text-[#FAFAF9]">
              Hi, I have a booking for Friday. What time is check-in and is there parking?
            </p>
          </div>
        </motion.div>

        <motion.div
          className="flex justify-end"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div className="bg-[rgba(45,212,191,0.15)] rounded-lg rounded-tr-sm px-3 py-2 max-w-[260px]">
            <div className="flex items-center gap-1.5 mb-1">
              <span className="text-[10px] text-[#2DD4BF] font-medium">⚡ Auto</span>
            </div>
            <p className="text-xs text-[#FAFAF9]">
              Welcome! Check-in is from 3 PM. We have complimentary parking — just pull up to the
              front and our team will direct you. Would you like to arrange early check-in? I can
              check availability for you.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="flex justify-start"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          <div className="bg-[rgba(250,250,249,0.08)] rounded-lg rounded-tl-sm px-3 py-2 max-w-[200px]">
            <p className="text-xs text-[#FAFAF9]">Yes please, can I check in at 1 PM?</p>
          </div>
        </motion.div>

        <motion.div
          className="flex justify-end"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.1 }}
        >
          <div className="bg-[rgba(45,212,191,0.15)] rounded-lg rounded-tr-sm px-3 py-2 max-w-[260px]">
            <p className="text-xs text-[#FAFAF9]">
              I've checked and 1 PM early check-in is available for your room. I've noted it on
              your reservation. See you Friday!
            </p>
          </div>
        </motion.div>
      </div>
    </GlassCard>
  );
}

function AlertsMockup() {
  const alerts = [
    {
      border: 'border-l-amber-500',
      icon: '⚠',
      title: 'No-show risk — Room 204',
      text: "Guest hasn't confirmed. Arriving tonight. No contact in 48 hours.",
      time: '2 hours ago',
    },
    {
      border: 'border-l-red-500',
      icon: '🔴',
      title: 'Cancellation spike',
      text: '4 cancellations in the last 6 hours for next weekend. Unusual pattern.',
      time: '45 min ago',
    },
    {
      border: 'border-l-[#2DD4BF]',
      icon: '💡',
      title: 'Rate opportunity',
      text: 'Your Saturday rate is £20 below the area average. 3 nearby hotels are sold out.',
      time: 'Just now',
    },
  ];

  return (
    <GlassCard className="w-full max-w-[380px] p-5 space-y-3">
      {alerts.map((alert, i) => (
        <motion.div
          key={i}
          className={`border-l-2 ${alert.border} bg-[rgba(250,250,249,0.02)] rounded-lg p-4`}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.2 }}
        >
          <div className="flex items-start gap-3">
            <span className="text-base">{alert.icon}</span>
            <div className="flex-1">
              <p className="text-sm font-medium text-[#FAFAF9] mb-1">{alert.title}</p>
              <p className="text-xs text-[#A8A29E] mb-2">{alert.text}</p>
              <p className="text-[10px] text-[#78716C]">{alert.time}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </GlassCard>
  );
}

export default function Features() {
  const features = [
    {
      number: '01',
      title: 'One workspace for everything.',
      description:
        "Your PMS, OTA channels, accounting software, and guest messages — all connected, all visible, all in one place. No more switching between 5 different tabs and 3 different logins every morning.",
      pill: 'Replaces 5-8 disconnected tools',
      mockup: <ConnectedWorkspaceMockup />,
      reverse: false,
    },
    {
      number: '02',
      title: 'Ask your hotel anything.',
      description:
        "Type a question like you'd ask a colleague. 'What was our occupancy last Tuesday?' 'How many arrivals tomorrow?' 'Show me revenue for the past month.' Vzir answers instantly, pulling from live data across all your connected systems.",
      pill: 'No reports. No spreadsheets. Just ask.',
      mockup: <ChatMockup />,
      reverse: true,
    },
    {
      number: '03',
      title: 'Your morning briefing. Automatic.',
      description:
        "Every morning at 7 AM, Vzir generates a concise summary of yesterday's performance, today's key events — arrivals, departures, VIPs, special requests — and a 48-72 hour outlook. Your day starts informed, not scrambled.",
      pill: 'Delivered before your first coffee',
      mockup: <BriefingMockup />,
      reverse: false,
    },
    {
      number: '04',
      title: 'Guest communication on autopilot.',
      description:
        "Vzir handles guest messaging via WhatsApp automatically — booking confirmations, pre-arrival information requests, directions, check-in instructions, and common questions. 24 hours a day, 7 days a week. Your guests get instant responses. Your team doesn't have to monitor anything overnight.",
      pill: '24/7 WhatsApp automation',
      mockup: <WhatsAppMockup />,
      reverse: true,
    },
    {
      number: '05',
      title: 'Know about problems before they happen.',
      description:
        "Vzir continuously monitors all your connected data and flags issues early — no-show risk, sudden cancellation spikes, rate discrepancies between channels, rooms that should be sold but aren't. You get alerted before small issues become costly mistakes.",
      pill: 'Proactive, not reactive',
      mockup: <AlertsMockup />,
      reverse: false,
    },
  ];

  return (
    <section id="features" className="relative py-32 bg-[#0C0A09]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-20">
        <AnimatedSection className="text-center mb-24">
          <p className="font-mono text-[11px] uppercase tracking-[4px] text-[#78716C] mb-8">
            CAPABILITIES
          </p>
          <h2 className="font-serif text-4xl lg:text-[44px] font-bold text-[#FAFAF9] max-w-[700px] mx-auto">
            Everything your hotel needs. Nothing it doesn't.
          </h2>
        </AnimatedSection>

        <div className="space-y-32">
          {features.map((feature, i) => (
            <div
              key={i}
              className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                feature.reverse ? 'lg:grid-flow-dense' : ''
              }`}
            >
              <AnimatedSection className={feature.reverse ? 'lg:col-start-2' : ''}>
                <div className="text-[48px] font-mono text-[rgba(45,212,191,0.15)] mb-4">
                  {feature.number}
                </div>
                <h3 className="font-serif text-3xl lg:text-[32px] text-[#FAFAF9] mb-4">
                  {feature.title}
                </h3>
                <p className="text-base text-[#A8A29E] leading-relaxed mb-6">
                  {feature.description}
                </p>
                <div className="inline-block px-4 py-2 rounded-full bg-[rgba(45,212,191,0.08)] border border-[rgba(45,212,191,0.15)] text-sm text-[#2DD4BF]">
                  {feature.pill}
                </div>
              </AnimatedSection>

              <AnimatedSection
                className={`flex ${feature.reverse ? 'lg:col-start-1 lg:row-start-1' : ''} ${
                  feature.reverse ? 'justify-start' : 'justify-end'
                }`}
                delay={0.2}
              >
                {feature.mockup}
              </AnimatedSection>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
