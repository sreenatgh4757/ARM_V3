import { Link2, Brain, MessageCircle } from 'lucide-react';
import { useStaggerReveal, useReveal } from '../../lib/motion';

/* A genuine sequence — you connect before it can learn, it learns before it
   can answer — so the numbering carries real information. */
const steps = [
  {
    num: '01',
    icon: Link2,
    title: 'Connect your tools',
    desc: 'Point Virgo at the systems you already run — PMS, accounting, guest messaging. Read-only, via official APIs. Around 20 minutes, no IT team, no migration.',
  },
  {
    num: '02',
    icon: MessageCircle,
    title: 'Ask in plain English',
    desc: 'One chat box, any question. No dashboards to learn, no reports to build, no filters to set.',
  },
  {
    num: '03',
    icon: Brain,
    title: 'Virgo goes and gets it',
    desc: 'It works out which tools hold the answer, gathers what it needs from each, and replies — naming the source of every figure.',
  },
];

export default function VirgoHowItWorks() {
  const headingRef = useStaggerReveal<HTMLDivElement>({ y: 28, duration: 620, staggerDelay: 100 });
  const stepsRef = useStaggerReveal<HTMLDivElement>({ y: 28, duration: 620, staggerDelay: 120 });
  const pillsRef = useReveal<HTMLDivElement>({ y: 24, duration: 600 });

  return (
    <section
      id="how-it-works"
      style={{
        background: 'var(--ground)',
        borderTop: '1px solid var(--line-soft)',
        padding: 'clamp(70px, 9vw, 118px) 0',
      }}
    >
      <div className="max-w-[1180px] mx-auto px-6 lg:px-10">
        <div ref={headingRef} style={{ textAlign: 'center', marginBottom: '52px' }}>
          <p
            className="font-mono"
            style={{ opacity: 0, fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--faint)', marginBottom: '16px' }}
          >
            How it works
          </p>
          <h2
            className="font-display"
            style={{ opacity: 0, fontWeight: 800, fontSize: 'clamp(26px, 4vw, 46px)', color: 'var(--ink)', lineHeight: 1.05 }}
          >
            From connected systems to one clear answer.
          </h2>
        </div>

        <div ref={stepsRef} className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {steps.map(step => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                style={{
                  opacity: 0,
                  position: 'relative',
                  background: 'var(--surface)',
                  border: '1px solid var(--line)',
                  borderRadius: 'var(--radius-card)',
                  padding: 'clamp(26px, 3vw, 34px)',
                  transition: 'transform 0.35s, border-color 0.35s',
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.borderColor = 'var(--primary-line)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = 'var(--line)'; }}
              >
                <span
                  className="font-mono"
                  style={{ position: 'absolute', top: '26px', right: '26px', fontSize: '11px', color: 'var(--faint)', letterSpacing: '1px' }}
                >
                  {step.num}
                </span>
                <div
                  style={{
                    width: '46px', height: '46px', borderRadius: '13px',
                    background: 'var(--primary-wash)', border: '1px solid var(--primary-line)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px',
                  }}
                >
                  <Icon size={21} style={{ color: 'var(--primary)' }} />
                </div>
                <h3 className="font-display" style={{ fontWeight: 700, fontSize: '20px', color: 'var(--ink)', marginBottom: '10px' }}>
                  {step.title}
                </h3>
                <p className="font-body" style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: 1.7 }}>
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>

        <div ref={pillsRef} style={{ opacity: 0, display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center', marginTop: '40px' }}>
          {['Read-only access', 'No IT team required', 'Works on any device'].map(pill => (
            <span
              key={pill}
              className="font-body"
              style={{
                fontSize: '13px', color: 'var(--muted)', padding: '9px 18px',
                borderRadius: 'var(--radius-pill)', background: 'var(--surface)', border: '1px solid var(--line)',
              }}
            >
              {pill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
