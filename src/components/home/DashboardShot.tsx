import { useRef } from 'react';
import { Lock, LayoutDashboard, MessageSquare, Sparkles, FileBarChart, Sunrise, Plug, Wallet, CloudSun, CalendarDays } from 'lucide-react';
import { useScrollScrub } from '../../lib/motion';

/* Illustrative figures for a sample property — the same fictional hotel
   ("The Meridian") used by the guest-messaging mockup further down.
   The panels mirror Virgo's real surfaces: live KPIs, alerts you can
   acknowledge, the daily morning briefing, and cited sources per answer. */

const OCCUPANCY = [
  { day: 'Mon', pct: 62 },
  { day: 'Tue', pct: 58 },
  { day: 'Wed', pct: 71 },
  { day: 'Thu', pct: 78 },
  { day: 'Fri', pct: 88 },
  { day: 'Sat', pct: 94 },
  { day: 'Sun', pct: 81 },
];

const SIDEBAR = [
  { label: 'Dashboard', icon: LayoutDashboard },
  { label: 'Ask Virgo', icon: Sparkles },
  { label: 'Guest messages', icon: MessageSquare },
  { label: 'Reports', icon: FileBarChart },
  { label: 'Morning briefing', icon: Sunrise },
  { label: 'Integrations', icon: Plug },
];

const KPIS = [
  { label: 'Occupancy', value: '87%', delta: '+6%', up: true, note: '70 of 80 rooms sold tonight' },
  { label: 'ADR', value: '£128', delta: '+4%', up: true, note: 'Average rate across sold rooms' },
  { label: 'RevPAR', value: '£111', delta: '+9%', up: true, note: 'Revenue per available room (ADR × occupancy)' },
  { label: 'Arrivals', value: '12', sub: '3 VIP', note: 'Sarah Chen among them — anniversary stay' },
  { label: 'Departures', value: '9', sub: 'by 11am', note: 'All confirmed for standard checkout' },
];

const ALERTS = [
  {
    severity: 'var(--amber)',
    category: 'Guest message',
    text: 'James R. asked about a late checkout — escalated to your team.',
    action: true,
  },
  {
    severity: 'var(--mint-deep)',
    category: 'Integration',
    text: 'Accounting connection re-authorised automatically.',
    action: false,
  },
];

/* Weather and Events are not built. They stay in the mockup to show where the
   product is going, but they carry a roadmap badge so the row never reads as
   a claim about what connects today. */
const MINI_DASHBOARDS = [
  { title: 'PMS', icon: LayoutDashboard, stat: 'Occupancy 87%', sub: '12 arrivals today', note: 'Bookings, occupancy and guest profiles', roadmap: false },
  { title: 'Accounting', icon: Wallet, stat: 'RevPAR £111', sub: 'MTD revenue +9%', note: 'Revenue, invoices and cash position', roadmap: false },
  { title: 'Weather', icon: CloudSun, stat: '22°C, sunny', sub: 'Saturday forecast', note: 'Local forecast for the days ahead. Not connected yet.', roadmap: true },
  { title: 'Events', icon: CalendarDays, stat: 'Local food market', sub: 'Sat, 9am–2pm', note: 'Nearby events that affect demand. Not connected yet.', roadmap: true },
];

/* Bars sit on a 0–100% scale; the line is revenue pace across the same week. */
const BAR_X = [30, 72, 114, 156, 198, 240, 282];
const LINE = '43,78 85,72 127,64 169,54 211,44 253,34 295,40';

function Tooltip({ text }: { text: string }) {
  return (
    <div
      className="opacity-0 group-hover:opacity-100 transition-opacity duration-150"
      style={{
        position: 'absolute', bottom: 'calc(100% + 9px)', left: '50%', transform: 'translateX(-50%)',
        width: 'max-content', maxWidth: '190px',
        background: 'var(--ink)', color: '#fff',
        fontSize: '10.5px', lineHeight: 1.4, textAlign: 'center',
        padding: '7px 10px', borderRadius: '8px',
        pointerEvents: 'none', zIndex: 10,
        boxShadow: '0 8px 20px rgba(20,18,26,0.25)',
      }}
    >
      {text}
      <div
        aria-hidden
        style={{
          position: 'absolute', top: '100%', left: '50%', transform: 'translateX(-50%)',
          width: 0, height: 0,
          borderLeft: '5px solid transparent', borderRight: '5px solid transparent',
          borderTop: '5px solid var(--ink)',
        }}
      />
    </div>
  );
}

function KpiTile({ label, value, delta, up, sub, note }: {
  label: string; value: string; delta?: string; up?: boolean; sub?: string; note?: string;
}) {
  return (
    <div
      className="group relative"
      style={{
        flex: '1 1 116px', minWidth: 0,
        background: 'var(--surface-alt)',
        border: '1px solid var(--line-soft)',
        borderRadius: '13px',
        padding: '12px 14px',
        cursor: note ? 'help' : undefined,
      }}
    >
      <div className="font-body" style={{ fontSize: '10.5px', color: 'var(--faint)', marginBottom: '6px', whiteSpace: 'nowrap' }}>
        {label}
      </div>
      <div className="font-display" style={{ fontSize: '20px', fontWeight: 700, color: 'var(--ink)', lineHeight: 1 }}>
        {value}
      </div>
      {delta && (
        <div className="font-body" style={{ fontSize: '10.5px', color: up ? 'var(--mint-deep)' : '#DC2626', marginTop: '6px', fontWeight: 600 }}>
          {up ? '↑' : '↓'} {delta}
        </div>
      )}
      {sub && (
        <div className="font-body" style={{ fontSize: '10.5px', color: 'var(--faint)', marginTop: '6px' }}>
          {sub}
        </div>
      )}
      {note && <Tooltip text={note} />}
    </div>
  );
}

function MiniDashboard({ title, icon: Icon, stat, sub, note, roadmap }: {
  title: string; icon: typeof LayoutDashboard; stat: string; sub: string; note: string; roadmap?: boolean;
}) {
  return (
    <div
      className="group relative"
      style={{
        border: roadmap ? '1px dashed var(--line)' : '1px solid var(--line)',
        background: roadmap ? 'transparent' : 'var(--surface)',
        borderRadius: '16px',
        padding: '18px 20px',
        cursor: 'help',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '9px', marginBottom: '12px' }}>
        <div
          style={{
            width: '30px', height: '30px', borderRadius: '9px', flexShrink: 0,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            background: roadmap ? 'var(--line-soft)' : 'var(--primary-wash)',
          }}
        >
          <Icon size={16} style={{ color: roadmap ? 'var(--faint)' : 'var(--primary)' }} />
        </div>
        <span className="font-display" style={{ fontSize: '15.5px', fontWeight: 700, color: roadmap ? 'var(--muted)' : 'var(--ink)' }}>
          {title}
        </span>
        {roadmap && (
          <span
            className="font-mono"
            style={{
              marginLeft: 'auto', fontSize: '8.5px', letterSpacing: '1px', textTransform: 'uppercase',
              fontWeight: 700, color: 'var(--faint)', border: '1px solid var(--line)',
              padding: '2px 7px', borderRadius: 'var(--radius-pill)',
            }}
          >
            Roadmap
          </span>
        )}
      </div>
      <div className="font-display" style={{ fontSize: '17px', fontWeight: 700, color: roadmap ? 'var(--faint)' : 'var(--ink)', marginBottom: '3px' }}>
        {stat}
      </div>
      <div className="font-body" style={{ fontSize: '12px', color: 'var(--faint)' }}>
        {sub}
      </div>
      <Tooltip text={note} />
    </div>
  );
}

export default function DashboardShot() {
  const trackRef = useRef<HTMLDivElement>(null);
  const shotRef = useScrollScrub<HTMLDivElement>(
    { rotateX: [14, 0], scale: [0.92, 1], translateY: [40, 0] },
    { container: trackRef }
  );

  return (
    <section
      ref={trackRef}
      style={{
        background: 'var(--surface)',
        borderTop: '1px solid var(--line-soft)',
        padding: 'clamp(60px, 8vw, 100px) 0 clamp(56px, 7vw, 90px)',
      }}
    >
      <div style={{ maxWidth: '1120px', margin: '0 auto', padding: '0 24px', perspective: '1400px' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <p
            className="font-mono"
            style={{ fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--faint)', marginBottom: '16px' }}
          >
            Or, at a glance
          </p>
          <h2
            className="font-display"
            style={{ fontWeight: 800, fontSize: 'clamp(26px, 4vw, 46px)', color: 'var(--ink)', lineHeight: 1.05, marginBottom: '18px' }}
          >
            Open the dashboard any morning.
          </h2>
          <p
            className="font-body"
            style={{ fontSize: 'clamp(14px, 1.6vw, 17px)', color: 'var(--muted)', maxWidth: '520px', margin: '0 auto', lineHeight: 1.65 }}
          >
            Same connected systems, same numbers — laid out for the days you'd rather
            see the picture than ask for it. Every figure shows where it came from.
          </p>
        </div>
        <div
          ref={shotRef}
          style={{
            background: 'var(--surface)',
            border: '1px solid var(--line)',
            borderRadius: 'var(--radius-card)',
            boxShadow: '0 40px 90px rgba(20,18,26,0.14)',
            overflow: 'hidden',
            transformOrigin: 'center top',
          }}
        >
          {/* App chrome */}
          <div
            style={{
              display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap',
              padding: '12px 18px', borderBottom: '1px solid var(--line-soft)',
              background: 'var(--surface-alt)',
            }}
          >
            <div style={{ display: 'flex', gap: '6px' }}>
              {['#FF5F57', '#FEBC2E', '#28C840'].map(c => (
                <span key={c} style={{ width: '10px', height: '10px', borderRadius: '50%', background: c }} />
              ))}
            </div>
            <span className="font-body" style={{ fontSize: '12px', color: 'var(--faint)', marginLeft: '6px' }}>
              Virgo · The Meridian
            </span>
            <span
              className="font-mono"
              style={{
                fontSize: '9px', letterSpacing: '1.2px', textTransform: 'uppercase',
                color: 'var(--faint)', border: '1px solid var(--line)',
                padding: '3px 9px', borderRadius: 'var(--radius-pill)',
              }}
            >
              Sample data
            </span>

            <div style={{ display: 'flex', gap: '4px', marginLeft: '12px' }}>
              {['Today', 'MTD'].map((p, i) => (
                <span
                  key={p}
                  className="font-body"
                  style={{
                    fontSize: '11px', padding: '4px 11px', borderRadius: 'var(--radius-pill)',
                    background: i === 0 ? 'var(--ink)' : 'transparent',
                    color: i === 0 ? '#fff' : 'var(--faint)',
                    border: i === 0 ? '1px solid var(--ink)' : '1px solid var(--line)',
                    fontWeight: i === 0 ? 600 : 400,
                  }}
                >
                  {p}
                </span>
              ))}
            </div>

            <span
              className="font-body"
              style={{
                marginLeft: 'auto', display: 'inline-flex', alignItems: 'center', gap: '5px',
                fontSize: '11px', fontWeight: 600, color: 'var(--primary)',
                background: 'var(--primary-wash)', border: '1px solid var(--primary-line)',
                padding: '4px 10px', borderRadius: 'var(--radius-pill)',
              }}
            >
              <Lock size={11} /> Read-only
            </span>
          </div>

          <div style={{ display: 'flex', minHeight: '336px' }}>
            {/* Sidebar — mirrors Virgo's real surfaces */}
            <div
              className="hidden md:block"
              style={{ width: '176px', flexShrink: 0, borderRight: '1px solid var(--line-soft)', padding: '16px 10px' }}
            >
              {SIDEBAR.map((item, i) => {
                const Icon = item.icon;
                const active = i === 0;
                return (
                  <div
                    key={item.label}
                    className="font-body"
                    style={{
                      display: 'flex', alignItems: 'center', gap: '9px',
                      fontSize: '12.5px', padding: '9px 11px', borderRadius: '9px', marginBottom: '2px',
                      color: active ? 'var(--ink)' : 'var(--muted)',
                      background: active ? 'var(--primary-wash)' : 'transparent',
                      fontWeight: active ? 600 : 400,
                    }}
                  >
                    <Icon size={14} style={{ color: active ? 'var(--primary)' : 'var(--faint)', flexShrink: 0 }} />
                    {item.label}
                  </div>
                );
              })}
            </div>

            {/* Main panel */}
            <div style={{ flex: 1, minWidth: 0, padding: 'clamp(14px, 2vw, 20px)' }}>
              <h3 className="font-display" style={{ fontSize: '15px', fontWeight: 700, color: 'var(--ink)', marginBottom: '12px' }}>
                Today at The Meridian
              </h3>

              <div style={{ display: 'flex', gap: '8px', marginBottom: '16px', flexWrap: 'wrap' }}>
                {KPIS.map(k => <KpiTile key={k.label} {...k} />)}
              </div>

              <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: '12px', marginBottom: '6px', flexWrap: 'wrap' }}>
                <div className="font-body" style={{ fontSize: '11px', color: 'var(--faint)' }}>
                  Occupancy &amp; revenue pace · this week
                </div>
                <div style={{ display: 'flex', gap: '12px' }}>
                  <span className="font-body" style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', fontSize: '10.5px', color: 'var(--faint)' }}>
                    <span style={{ width: '9px', height: '9px', borderRadius: '2px', background: 'var(--amber)' }} /> Occupancy
                  </span>
                  <span className="font-body" style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', fontSize: '10.5px', color: 'var(--faint)' }}>
                    <span style={{ width: '12px', height: '2px', borderRadius: '2px', background: 'var(--primary)' }} /> Revenue pace
                  </span>
                </div>
              </div>

              <svg viewBox="0 0 340 140" style={{ width: '100%', height: 'auto', display: 'block' }} role="img" aria-label="Occupancy bars with revenue pace line for the week">
                {[{ y: 110, l: '0' }, { y: 65, l: '50' }, { y: 20, l: '100%' }].map(g => (
                  <g key={g.l}>
                    <line x1="30" x2="330" y1={g.y} y2={g.y} stroke="var(--line-soft)" strokeWidth="1" />
                    <text
                      x="24" y={g.y + 3} textAnchor="end"
                      style={{ fontSize: '7.5px', fill: 'var(--faint)', fontFamily: 'JetBrains Mono, monospace' }}
                    >
                      {g.l}
                    </text>
                  </g>
                ))}

                {OCCUPANCY.map((d, i) => {
                  const h = Math.round((d.pct / 94) * 90);
                  return (
                    <g key={d.day} style={{ cursor: 'help' }}>
                      <rect
                        x={BAR_X[i]} y={110 - h} width="26" height={h} rx="5"
                        fill={i === 5 ? 'var(--amber)' : 'rgba(245,166,35,0.40)'}
                      >
                        <title>{d.day}: {d.pct}% occupied</title>
                      </rect>
                      <text
                        x={BAR_X[i] + 13} y="126" textAnchor="middle"
                        style={{ fontSize: '8px', fill: 'var(--faint)', fontFamily: 'JetBrains Mono, monospace' }}
                      >
                        {d.day}
                      </text>
                    </g>
                  );
                })}

                <polyline points={LINE} fill="none" stroke="var(--primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                {LINE.split(' ').map(pt => {
                  const [cx, cy] = pt.split(',');
                  return <circle key={pt} cx={cx} cy={cy} r="3" fill="var(--surface)" stroke="var(--primary)" strokeWidth="2" />;
                })}
              </svg>

              {/* Every figure names where it came from. */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '7px', marginTop: '14px', flexWrap: 'wrap' }}>
                <span className="font-body" style={{ fontSize: '10.5px', color: 'var(--faint)' }}>Sources:</span>
                {['PMS', 'Accounting'].map(s => (
                  <span
                    key={s}
                    className="font-mono"
                    style={{
                      fontSize: '9.5px', color: 'var(--primary)',
                      background: 'var(--primary-wash)', border: '1px solid var(--primary-line)',
                      padding: '3px 8px', borderRadius: '5px',
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Right rail — alerts, briefing, messaging */}
            <div
              className="hidden lg:flex"
              style={{
                width: '268px', flexShrink: 0, borderLeft: '1px solid var(--line-soft)',
                padding: '14px 12px', flexDirection: 'column', gap: '12px',
              }}
            >
              <div>
                <div className="font-mono" style={{ fontSize: '9.5px', letterSpacing: '1.3px', textTransform: 'uppercase', color: 'var(--faint)', marginBottom: '10px' }}>
                  Needs attention
                </div>
                {ALERTS.map(a => (
                  <div
                    key={a.category}
                    style={{
                      background: 'var(--surface-alt)', border: '1px solid var(--line-soft)',
                      borderRadius: '11px', padding: '11px 12px', marginBottom: '8px',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '6px' }}>
                      <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: a.severity, flexShrink: 0 }} />
                      <span className="font-mono" style={{ fontSize: '9px', letterSpacing: '0.8px', textTransform: 'uppercase', color: 'var(--faint)' }}>
                        {a.category}
                      </span>
                    </div>
                    <p className="font-body" style={{ fontSize: '11.5px', color: 'var(--ink-soft)', lineHeight: 1.5, margin: 0 }}>
                      {a.text}
                    </p>
                    {a.action && (
                      <span
                        className="font-body"
                        style={{
                          display: 'inline-block', marginTop: '9px', fontSize: '10.5px', fontWeight: 600,
                          color: 'var(--ink)', background: 'var(--surface)', border: '1px solid var(--line)',
                          padding: '4px 11px', borderRadius: 'var(--radius-pill)',
                        }}
                      >
                        Acknowledge
                      </span>
                    )}
                  </div>
                ))}
              </div>

              <div
                style={{
                  background: 'var(--primary-wash)', border: '1px solid var(--primary-line)',
                  borderRadius: '13px', padding: '13px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '7px', marginBottom: '8px' }}>
                  <Sunrise size={13} style={{ color: 'var(--primary)' }} />
                  <span className="font-mono" style={{ fontSize: '9px', letterSpacing: '1px', textTransform: 'uppercase', color: 'var(--primary)', fontWeight: 600 }}>
                    Morning briefing · 07:00
                  </span>
                </div>
                <p className="font-body" style={{ fontSize: '11.5px', color: 'var(--ink-soft)', lineHeight: 1.55, margin: 0 }}>
                  Strong weekend ahead — Saturday is 94% sold. Three VIP arrivals today.
                  Revenue is tracking 9% above the same week last month.
                </p>
              </div>

              <div
                style={{
                  display: 'flex', alignItems: 'center', gap: '9px',
                  background: 'rgba(94,234,212,0.14)', border: '1px solid rgba(94,234,212,0.35)',
                  borderRadius: '11px', padding: '11px 12px', marginTop: 'auto',
                }}
              >
                <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: 'var(--mint-deep)', flexShrink: 0 }} />
                <span className="font-body" style={{ fontSize: '11.5px', color: 'var(--ink)', lineHeight: 1.4 }}>
                  4 pre-arrival messages sent
                </span>
              </div>
            </div>
          </div>

          {/* Connected systems — every dashboard Virgo reads from, inside the same screen */}
          <div
            style={{
              borderTop: '1px solid var(--line-soft)',
              background: 'var(--surface-alt)',
              padding: 'clamp(18px, 2.2vw, 24px)',
            }}
          >
            <div
              className="font-mono"
              style={{ fontSize: '10px', letterSpacing: '1.3px', textTransform: 'uppercase', color: 'var(--faint)', marginBottom: '14px' }}
            >
              Connected systems
            </div>
            <p className="font-body" style={{ fontSize: '11.5px', color: 'var(--faint)', margin: '-8px 0 14px' }}>
              Sample data throughout. Solid tiles connect today; dashed tiles are on the roadmap.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {MINI_DASHBOARDS.map(d => <MiniDashboard key={d.title} {...d} />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
