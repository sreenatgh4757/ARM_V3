import { Link } from 'react-router-dom';
import { ArrowRight, MessageSquare, Bell, Lock, Check } from 'lucide-react';
import { useStaggerReveal } from '../../lib/motion';

const LIVE = [
  'PMS — bookings, occupancy, guest profiles',
  'Accounting — revenue, invoices, cash position',
  'WhatsApp — automated lifecycle messages',
  'Reviews — ratings & guest feedback (in progress)',
];

const ROADMAP = ['OTA / channel mix', 'Weather', 'Rota & staffing'];

function Hatch({ color }: { color: string }) {
  return (
    <div
      aria-hidden
      className="hatch"
      style={{
        position: 'absolute', top: 0, right: 0, width: '150px', height: '110px',
        color, opacity: 0.5, pointerEvents: 'none',
        maskImage: 'linear-gradient(225deg, #000 10%, transparent 65%)',
        WebkitMaskImage: 'linear-gradient(225deg, #000 10%, transparent 65%)',
      }}
    />
  );
}

const cardBase: React.CSSProperties = {
  position: 'relative',
  overflow: 'hidden',
  borderRadius: 'var(--radius-card)',
  padding: 'clamp(26px, 3vw, 38px)',
  display: 'flex',
  flexDirection: 'column',
  gap: '14px',
  opacity: 0,
};

export default function BentoFeatures() {
  const headRef = useStaggerReveal<HTMLDivElement>({ y: 24, duration: 600, staggerDelay: 90 });
  const rowARef = useStaggerReveal<HTMLDivElement>({ y: 26, duration: 620, staggerDelay: 110 });
  const rowBRef = useStaggerReveal<HTMLDivElement>({ y: 26, duration: 620, staggerDelay: 110 });

  return (
    <section
      style={{
        background: 'var(--surface)',
        borderTop: '1px solid var(--line-soft)',
        padding: 'clamp(60px, 8vw, 100px) 0',
      }}
    >
      <div style={{ maxWidth: '1180px', margin: '0 auto', padding: '0 24px' }}>
        <div ref={headRef} style={{ marginBottom: '44px', maxWidth: '640px' }}>
          <p
            className="font-mono"
            style={{ opacity: 0, fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--faint)', marginBottom: '16px' }}
          >
            What Virgo does
          </p>
          <h2
            className="font-display"
            style={{ opacity: 0, fontSize: 'clamp(30px, 4.4vw, 52px)', fontWeight: 800, lineHeight: 1.02, color: 'var(--ink)' }}
          >
            One place to ask. Every system answers.
          </h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
          {/* Row A — the pitch card + what's actually connected */}
          <div ref={rowARef} className="grid grid-cols-1 lg:grid-cols-3 gap-[18px]">
            <div
              className="lg:col-span-2"
              style={{ ...cardBase, background: 'var(--primary)', color: '#fff', minHeight: '300px' }}
            >
              <Hatch color="#fff" />
              <span className="font-mono" style={{ fontSize: '10.5px', letterSpacing: '2px', textTransform: 'uppercase', opacity: 0.75 }}>
                Plain English
              </span>
              <h3 className="font-display" style={{ fontSize: 'clamp(26px, 3vw, 38px)', fontWeight: 800, lineHeight: 1.05, maxWidth: '460px' }}>
                Ask the way you'd ask a colleague.
              </h3>
              <p className="font-body" style={{ fontSize: '15px', lineHeight: 1.65, opacity: 0.92, maxWidth: '440px' }}>
                No dashboards to learn, no filters to set. Virgo reads across every
                connected system at once and comes back with a single answer, naming the
                system each figure came from. Every morning at 7am it writes you a briefing
                before you've opened a single app.
              </p>
              <a
                href="#pilot"
                className="pill"
                style={{ background: '#fff', color: 'var(--primary)', alignSelf: 'flex-start', marginTop: 'auto' }}
              >
                Join the pilot <ArrowRight size={15} />
              </a>
            </div>

            <div style={{ ...cardBase, background: 'var(--surface)', border: '1px solid var(--line)' }}>
              <span className="font-mono" style={{ fontSize: '10.5px', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--faint)' }}>
                Connected today
              </span>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '11px' }}>
                {LIVE.map(item => (
                  <li key={item} className="font-body" style={{ display: 'flex', gap: '9px', fontSize: '13.5px', color: 'var(--ink-soft)', lineHeight: 1.45 }}>
                    <Check size={15} style={{ color: 'var(--mint-deep)', flexShrink: 0, marginTop: '2px' }} />
                    {item}
                  </li>
                ))}
              </ul>
              <div style={{ marginTop: 'auto', paddingTop: '16px', borderTop: '1px solid var(--line-soft)' }}>
                <span className="font-mono" style={{ fontSize: '10px', letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--faint)' }}>
                  Next up
                </span>
                <p className="font-body" style={{ fontSize: '12.5px', color: 'var(--faint)', marginTop: '7px', lineHeight: 1.5 }}>
                  {ROADMAP.join(' · ')}
                </p>
              </div>
            </div>
          </div>

          {/* Row B — messaging, roadmap alerts, the guarantee */}
          <div ref={rowBRef} className="grid grid-cols-1 lg:grid-cols-3 gap-[18px]">
            <div style={{ ...cardBase, background: 'rgba(94,234,212,0.20)', border: '1px solid rgba(94,234,212,0.45)', minHeight: '260px' }}>
              <Hatch color="var(--mint-deep)" />
              <MessageSquare size={22} style={{ color: 'var(--mint-deep)' }} />
              <h3 className="font-display" style={{ fontSize: '21px', fontWeight: 700, color: 'var(--ink)', lineHeight: 1.15 }}>
                Guest messages that send themselves
              </h3>
              <p className="font-body" style={{ fontSize: '14px', lineHeight: 1.65, color: 'var(--ink-soft)' }}>
                Booking confirmations, pre-arrival reminders and checkout notes go out
                automatically over the official WhatsApp Business API. Replies are read
                and flagged to your team — a human is always in reach. One switch pauses
                every automated message instantly.
              </p>
            </div>

            <div style={{ ...cardBase, background: 'rgba(245,166,35,0.16)', border: '1px solid rgba(245,166,35,0.42)', minHeight: '260px' }}>
              <Hatch color="var(--amber)" />
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Bell size={22} style={{ color: '#B8760D' }} />
                <span
                  className="font-mono"
                  style={{
                    fontSize: '9.5px', letterSpacing: '1.5px', textTransform: 'uppercase', fontWeight: 700,
                    color: '#8A5806', background: 'rgba(245,166,35,0.35)',
                    padding: '3px 9px', borderRadius: 'var(--radius-pill)',
                  }}
                >
                  On the roadmap
                </span>
              </div>
              <h3 className="font-display" style={{ fontSize: '21px', fontWeight: 700, color: 'var(--ink)', lineHeight: 1.15 }}>
                Alerts before you think to ask
              </h3>
              <p className="font-body" style={{ fontSize: '14px', lineHeight: 1.65, color: 'var(--ink-soft)' }}>
                We're building proactive monitoring on top of the live connectors — demand
                signals, weather impact and rate recommendations, surfaced without a prompt.
                Not shipped yet; we'll say so when it is.
              </p>
            </div>

            <div style={{ ...cardBase, background: 'var(--ink)', color: '#fff', minHeight: '260px' }}>
              <Hatch color="#fff" />
              <Lock size={22} style={{ color: 'var(--pop)' }} />
              <h3 className="font-display" style={{ fontSize: '21px', fontWeight: 700, lineHeight: 1.15 }}>
                Read-only, by design
              </h3>
              <p className="font-body" style={{ fontSize: '14px', lineHeight: 1.65, color: 'rgba(255,255,255,0.76)' }}>
                Virgo never writes to your systems — no rate changes, no edited
                reservations, no cancelled bookings. It doesn't keep a copy either:
                your data is fetched live to answer the question, then discarded.
              </p>
              <Link
                to="/#how-it-works"
                className="font-body"
                style={{
                  marginTop: 'auto', display: 'inline-flex', alignItems: 'center', gap: '6px',
                  fontSize: '13.5px', fontWeight: 600, color: 'var(--pop)', textDecoration: 'none',
                }}
              >
                How it works <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
