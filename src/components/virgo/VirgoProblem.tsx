import { Building2, Wallet, MessageSquare, Globe, FileSpreadsheet } from 'lucide-react';
import { useReveal, useStaggerReveal } from '../../lib/motion';

/* Icons rather than emoji, to match the icon language used everywhere else. */
const systems = [
  { name: 'PMS', icon: Building2, desc: 'Arrivals, availability' },
  { name: 'Accounting', icon: Wallet, desc: 'Revenue, invoices' },
  { name: 'WhatsApp', icon: MessageSquare, desc: 'Guest messages' },
  { name: 'OTAs', icon: Globe, desc: 'Rates, reviews' },
  { name: 'Spreadsheet', icon: FileSpreadsheet, desc: 'Manual reports' },
];

export default function VirgoProblem() {
  const headingRef = useStaggerReveal<HTMLDivElement>({ y: 30, duration: 650, staggerDelay: 100 });
  const cardsRef = useStaggerReveal<HTMLDivElement>({ y: 30, duration: 550, staggerDelay: 80 });
  const calloutRef = useReveal<HTMLDivElement>({ y: 30, duration: 700 });

  return (
    <section
      style={{
        background: 'var(--surface)',
        borderTop: '1px solid var(--line-soft)',
        padding: 'clamp(70px, 9vw, 120px) 0',
      }}
    >
      <div className="max-w-[1180px] mx-auto px-6 lg:px-10">
        <div ref={headingRef} style={{ textAlign: 'center', marginBottom: '56px' }}>
          <p
            className="font-mono"
            style={{ opacity: 0, fontSize: '11px', color: 'var(--faint)', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px' }}
          >
            The problem
          </p>
          <h2
            className="font-display"
            style={{ opacity: 0, fontWeight: 800, fontSize: 'clamp(28px, 4.4vw, 52px)', color: 'var(--ink)', lineHeight: 1.05, marginBottom: '18px' }}
          >
            You open five apps
            <br />
            to make <span style={{ color: 'var(--primary)' }}>one decision</span>.
          </h2>
          <p
            className="font-body"
            style={{ opacity: 0, fontSize: 'clamp(15px, 1.7vw, 18px)', color: 'var(--muted)', maxWidth: '540px', margin: '0 auto', lineHeight: 1.7 }}
          >
            Every morning, hotel managers routinely lose an hour or more just collecting
            data across disconnected systems — before any real work begins.
          </p>
        </div>

        <div
          ref={cardsRef}
          style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '56px' }}
        >
          {systems.map(sys => {
            const Icon = sys.icon;
            return (
            <div
              key={sys.name}
              style={{
                opacity: 0,
                background: 'var(--ground)',
                border: '1px solid var(--line-soft)',
                borderRadius: '18px',
                padding: '26px 20px',
                width: 'clamp(132px, 14vw, 168px)',
                display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '9px',
                transition: 'transform 0.3s, border-color 0.3s',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.borderColor = 'var(--primary-line)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = 'var(--line-soft)'; }}
            >
              <div
                style={{
                  width: '44px', height: '44px', borderRadius: '13px',
                  background: 'var(--primary-wash)', border: '1px solid var(--primary-line)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}
              >
                <Icon size={20} style={{ color: 'var(--primary)' }} />
              </div>
              <span className="font-display" style={{ fontWeight: 700, fontSize: '14px', color: 'var(--ink)' }}>
                {sys.name}
              </span>
              <span className="font-body" style={{ fontSize: '11.5px', color: 'var(--faint)', textAlign: 'center' }}>
                {sys.desc}
              </span>
            </div>
            );
          })}
        </div>

        <div
          ref={calloutRef}
          style={{
            opacity: 0,
            background: 'var(--primary-wash)',
            border: '1px solid var(--primary-line)',
            borderRadius: 'var(--radius-card)',
            padding: 'clamp(30px, 4vw, 50px) clamp(24px, 4vw, 54px)',
            maxWidth: '760px',
            margin: '0 auto',
            textAlign: 'center',
          }}
        >
          <div
            className="font-display"
            style={{ fontWeight: 800, fontSize: 'clamp(20px, 3vw, 30px)', color: 'var(--ink)', marginBottom: '14px', lineHeight: 1.25 }}
          >
            That's well over an hour every morning
            <br />
            just to answer one question:
          </div>
          <div
            className="font-body"
            style={{ fontSize: 'clamp(15px, 1.8vw, 19px)', color: 'var(--muted)', fontStyle: 'italic', marginBottom: '22px' }}
          >
            "How is my hotel doing right now?"
          </div>
          <div className="font-body" style={{ fontSize: '15px', color: 'var(--ink-soft)' }}>
            Virgo answers that — and every question like it — in{' '}
            <span style={{ color: 'var(--primary)', fontWeight: 700 }}>seconds</span>.
          </div>
        </div>
      </div>
    </section>
  );
}
