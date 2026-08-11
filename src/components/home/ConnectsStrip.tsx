import { useStaggerReveal } from '../../lib/motion';

/* Solid = connected today, dashed = on the roadmap. The visual difference
   encodes the real build status rather than decorating the row. */
const CONNECTORS = [
  { name: 'PMS', note: 'Bookings & occupancy', live: true },
  { name: 'Accounting', note: 'Revenue & invoices', live: true },
  { name: 'WhatsApp Business', note: 'Guest messaging', live: true },
  { name: 'Reviews', note: 'In progress', live: false },
  { name: 'More PMS platforms', note: 'Next', live: false },
  { name: 'Channel mix', note: 'OTAs, next', live: false },
  { name: 'Staffing', note: 'Rota, next', live: false },
];

export default function ConnectsStrip() {
  const rowRef = useStaggerReveal<HTMLDivElement>({ y: 14, duration: 500, staggerDelay: 55 });

  return (
    <section style={{ background: 'var(--ground)', padding: '0 0 clamp(60px, 8vw, 100px)' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
        <p
          className="font-mono"
          style={{ fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--faint)', marginBottom: '20px' }}
        >
          Connects with
        </p>

        <div
          ref={rowRef}
          style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center' }}
        >
          {CONNECTORS.map(c => (
            <span
              key={c.name}
              className="font-body"
              style={{
                opacity: 0,
                display: 'inline-flex', alignItems: 'baseline', gap: '8px',
                padding: '9px 18px', borderRadius: 'var(--radius-pill)',
                background: c.live ? 'var(--surface)' : 'transparent',
                border: c.live ? '1px solid var(--line)' : '1px dashed var(--line)',
                color: c.live ? 'var(--ink)' : 'var(--faint)',
                fontSize: '14px', fontWeight: 600,
              }}
            >
              {c.name}
              <span style={{ fontSize: '11px', fontWeight: 400, color: 'var(--faint)' }}>{c.note}</span>
            </span>
          ))}
        </div>

        <p className="font-body" style={{ fontSize: '12px', color: 'var(--faint)', marginTop: '18px' }}>
          Solid = connected today · Dashed = in progress or on the roadmap
        </p>
      </div>
    </section>
  );
}
