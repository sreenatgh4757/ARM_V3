import { useStaggerReveal } from '../../lib/motion';

/* The transformation panel. Each row is a real workflow a hotel manager
   already does — the LEFT column is today, the RIGHT column is Virgo. */
const ROWS = [
  {
    task: 'Morning occupancy check',
    before: 'Open PMS → switch to Xero → count bookings → switch to WhatsApp web → recheck.',
    after: 'Ask: "How many check-ins do we have today and is anything outstanding?" One answer, every source listed.',
  },
  {
    task: 'Weekly revenue figure',
    before: 'Download PMS report → download Xero report → paste into a spreadsheet → eyeball totals.',
    after: 'Ask: "How is this week tracking against last?" Answer includes the percentage and where each number came from.',
  },
  {
    task: 'The morning briefing',
    before: 'Nobody writes you one. You assemble the picture yourself, app by app, before the day starts.',
    after: 'A one-page summary is waiting at 7am — what needs attention today, and what changed overnight.',
  },
  {
    task: 'Pre-arrival guest questions',
    before: 'Open WhatsApp on the manager\'s phone, copy-paste a template, hope the message lands.',
    after: 'Virgo sends the message automatically the moment the booking lands, and reads the reply first.',
  },
];

function Hatch({ color }: { color: string }) {
  return (
    <div
      aria-hidden
      className="hatch"
      style={{
        position: 'absolute', top: 0, right: 0, width: '150px', height: '110px',
        color, opacity: 0.45, pointerEvents: 'none',
        maskImage: 'linear-gradient(225deg, #000 10%, transparent 65%)',
        WebkitMaskImage: 'linear-gradient(225deg, #000 10%, transparent 65%)',
      }}
    />
  );
}

export default function BeforeAfter() {
  const headRef = useStaggerReveal<HTMLDivElement>({ y: 24, duration: 600, staggerDelay: 90 });
  const rowsRef = useStaggerReveal<HTMLDivElement>({ y: 22, duration: 620, staggerDelay: 130 });

  return (
    <section
      style={{
        background: 'var(--ground)',
        padding: 'clamp(64px, 8vw, 100px) 0',
      }}
    >
      <div style={{ maxWidth: '1180px', margin: '0 auto', padding: '0 24px' }}>
        <div ref={headRef} style={{ textAlign: 'center', marginBottom: '52px' }}>
          <p
            className="font-mono"
            style={{
              opacity: 0, fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase',
              color: 'var(--faint)', marginBottom: '16px',
            }}
          >
            Before & after
          </p>
          <h2
            className="font-display"
            style={{
              opacity: 0, fontWeight: 800,
              fontSize: 'clamp(30px, 4.4vw, 52px)', color: 'var(--ink)',
              lineHeight: 1.04,
            }}
          >
            Same tasks. Fewer steps.
            <br />
            <span style={{ color: 'var(--primary)' }}>Every source shown.</span>
          </h2>
        </div>

        <div ref={rowsRef} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {ROWS.map(row => (
            <div
              key={row.task}
              className="grid grid-cols-1 md:grid-cols-[1fr_24px_1fr] items-stretch"
              style={{
                opacity: 0,
                background: 'var(--surface)',
                border: '1px solid var(--line-soft)',
                borderRadius: 'var(--radius-card)',
                overflow: 'hidden',
              }}
            >
              {/* Before */}
              <div
                style={{
                  position: 'relative',
                  padding: 'clamp(22px, 2.6vw, 32px)',
                  background: 'var(--surface-alt)',
                  borderRight: '1px solid var(--line-soft)',
                }}
              >
                <Hatch color="var(--faint)" />
                <div
                  className="font-mono"
                  style={{
                    fontSize: '10.5px', letterSpacing: '1.5px', textTransform: 'uppercase',
                    fontWeight: 700, color: 'var(--faint)', marginBottom: '10px',
                  }}
                >
                  Before
                </div>
                <div
                  className="font-display"
                  style={{
                    fontWeight: 700, fontSize: 'clamp(15px, 1.7vw, 18px)',
                    color: 'var(--ink)', marginBottom: '8px', lineHeight: 1.2,
                  }}
                >
                  {row.task}
                </div>
                <p
                  className="font-body"
                  style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: 1.65, margin: 0 }}
                >
                  {row.before}
                </p>
              </div>

              {/* Arrow */}
              <div
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: 'var(--surface)',
                  borderRight: '1px solid var(--line-soft)',
                  minHeight: '100%',
                  padding: '14px 0',
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14M13 6l6 6-6 6" stroke="var(--primary)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              {/* After */}
              <div style={{ position: 'relative', padding: 'clamp(22px, 2.6vw, 32px)' }}>
                <Hatch color="var(--primary)" />
                <div
                  className="font-mono"
                  style={{
                    fontSize: '10.5px', letterSpacing: '1.5px', textTransform: 'uppercase',
                    fontWeight: 700, color: 'var(--primary)', marginBottom: '10px',
                  }}
                >
                  After
                </div>
                <div
                  className="font-display"
                  style={{
                    fontWeight: 700, fontSize: 'clamp(15px, 1.7vw, 18px)',
                    color: 'var(--ink)', marginBottom: '8px', lineHeight: 1.2,
                  }}
                >
                  {row.task}
                </div>
                <p
                  className="font-body"
                  style={{ fontSize: '14px', color: 'var(--ink-soft)', lineHeight: 1.65, margin: 0 }}
                >
                  {row.after}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
