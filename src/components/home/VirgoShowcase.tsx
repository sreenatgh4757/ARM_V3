import { useEffect, useRef, useState } from 'react';
import { animate, stagger } from 'animejs';
import { Lock, TrendingDown, CalendarDays, Star, Plus, SendHorizontal } from 'lucide-react';
import { useReveal, useStaggerReveal, prefersReducedMotion } from '../../lib/motion';

/* The statement moment of the page: the name at wordmark scale, over a preview
   of the product itself — the morning report, then a question being asked and
   answered — playing on a loop so a visitor understands what Virgo is without
   reading a word of marketing copy.

   Figures are illustrative, for the same fictional property ("The Meridian")
   used everywhere else on the site. Nothing here implies Virgo changes
   anything in a connected system: it flags, explains and recommends.

   The inner content is deliberately a self-contained block — when there's a
   real screen recording of the product, it can replace <PreviewBody /> inside
   the same frame. */

const ISSUES = [
  {
    icon: TrendingDown,
    tone: 'danger' as const,
    title: 'Occupancy is down 12% vs last Tuesday',
    body: 'Mainly a drop in same-day bookings between 2pm and 6pm.',
    action: 'View breakdown',
    level: 'High',
    metricLabel: 'Est. impact',
    metric: '£1,840',
  },
  {
    icon: CalendarDays,
    tone: 'danger' as const,
    title: '6 rooms still open for Saturday',
    body: 'Last Saturday sold out by Thursday at £140.',
    action: 'View recommendation',
    level: 'High',
    metricLabel: 'vs last Sat',
    metric: 'Sold out',
  },
  {
    icon: Star,
    tone: 'warn' as const,
    title: 'Guest rating dropped to 4.2',
    body: 'Recent reviews mention slow check-in at peak arrival times.',
    action: 'View feedback',
    level: 'Medium',
    metricLabel: 'Last week',
    metric: '4.6',
  },
];

/* The same four exchanges the standalone chat section used to run — kept
   verbatim so the answers stay vetted and consistent with the product. */
const EXCHANGES = [
  {
    q: 'How are we tracking against last month?',
    sources: ['Accounting', 'OTAs'],
    a: 'This month: £47,200 revenue — up 18% vs last month. RevPAR is £89.40, above your £82 target. Biggest driver: direct bookings up 31%, saving £3,200 in OTA commission.',
  },
  {
    q: 'Should I raise rates this weekend?',
    sources: ['PMS', 'Revenue'],
    a: "You're at 87% occupancy with 6 rooms still open Saturday. Last Saturday sold out at £140 by Thursday — recommend +15% for this one, still under last month's peak rate.",
  },
  {
    q: 'Which rooms still need cleaning?',
    sources: ['Housekeeping', 'PMS'],
    a: 'Rooms 205, 318, and 421 are still dirty. Staff are on 205 now — ETA 20 minutes. Rooms 318 and 421 are priority: both guests arrive at 3pm.',
  },
  {
    q: 'How many check-ins do we have today?',
    sources: ['PMS', 'Guest Profiles'],
    a: '12 arrivals today. 3 are marked VIP — Ms. Sarah Chen (Room 401) is celebrating her anniversary; champagne placement is recommended. First guest expected at 2pm. All have confirmed.',
  },
];

type Phase = 'idle' | 'typing' | 'querying' | 'answer' | 'clearing';

const TYPE_MS = 34;
const PHASE_MS: Record<Exclude<Phase, 'typing'>, number> = {
  idle: 1700,
  querying: 1500,
  answer: 5200,
  clearing: 450,
};

const DATE_FMT = new Intl.DateTimeFormat('en-GB', { weekday: 'long', day: 'numeric', month: 'long' });

function TypingDots() {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;
    const anim = animate(Array.from(el.children) as HTMLElement[], {
      opacity: [0.3, 1, 0.3],
      translateY: [0, -4, 0],
      duration: 900,
      delay: stagger(180),
      loop: true,
    });
    return () => { anim.revert(); };
  }, []);

  return (
    <span ref={ref} style={{ display: 'inline-flex', gap: '4px', alignItems: 'center' }}>
      {[0, 1, 2].map(i => (
        <span key={i} style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--primary)' }} />
      ))}
    </span>
  );
}

function IssueRow({ issue, hideOnSmall }: { issue: (typeof ISSUES)[number]; hideOnSmall?: boolean }) {
  const Icon = issue.icon;
  const tone = issue.tone === 'danger' ? 'var(--danger)' : 'var(--amber)';
  const wash = issue.tone === 'danger' ? 'var(--danger-wash)' : 'rgba(245,166,35,0.12)';

  return (
    /* display comes from a class, not inline, so `hidden` can override it. */
    <div
      className={hideOnSmall ? 'hidden sm:flex' : 'flex'}
      style={{ opacity: 0, gap: '13px', padding: '10px 0', borderBottom: '1px solid var(--line-soft)' }}
    >
      <div
        style={{
          width: '32px', height: '32px', borderRadius: '10px', flexShrink: 0,
          display: 'flex', alignItems: 'center', justifyContent: 'center', background: wash,
        }}
      >
        <Icon size={16} style={{ color: tone }} />
      </div>

      <div style={{ flex: 1, minWidth: 0 }}>
        <div className="font-display" style={{ fontSize: '14.5px', fontWeight: 700, color: 'var(--ink)', marginBottom: '4px' }}>
          {issue.title}
        </div>
        <p className="font-body" style={{ fontSize: '12.5px', lineHeight: 1.45, color: 'var(--muted)', margin: '0 0 7px' }}>
          {issue.body}
        </p>
        {/* Illustrative controls — this is a preview, nothing to click. */}
        <span
          className="font-body"
          style={{
            display: 'inline-block', fontSize: '11px', fontWeight: 600, color: 'var(--ink-soft)',
            background: 'var(--surface)', border: '1px solid var(--line)',
            padding: '4px 11px', borderRadius: '8px',
          }}
        >
          {issue.action}
        </span>
      </div>

      <div className="hidden sm:block" style={{ textAlign: 'right', flexShrink: 0 }}>
        <div className="font-body" style={{ fontSize: '11.5px', fontWeight: 700, color: tone, marginBottom: '10px' }}>
          {issue.level}
        </div>
        <div className="font-body" style={{ fontSize: '10.5px', color: 'var(--faint)' }}>
          {issue.metricLabel}
        </div>
        <div className="font-display" style={{ fontSize: '15px', fontWeight: 700, color: 'var(--ink)' }}>
          {issue.metric}
        </div>
      </div>
    </div>
  );
}

export default function VirgoShowcase() {
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState<Phase>('idle');
  const [typed, setTyped] = useState('');

  const headlineRef = useRef<HTMLHeadingElement>(null);
  const ruleRef = useRef<HTMLDivElement>(null);
  const subRef = useReveal<HTMLParagraphElement>({ y: 18, duration: 700, delay: 880 });
  const frameRef = useReveal<HTMLDivElement>({ y: 44, duration: 850, delay: 300 });
  const rowsRef = useStaggerReveal<HTMLDivElement>({ y: 18, duration: 600, delay: 620, staggerDelay: 130 });

  const exchange = EXCHANGES[index];

  /* The report and the answer cross-fade in a fixed-height panel rather than
     stacking into a scrolling thread — nothing inside the frame ever moves
     under its own top edge. 'clearing' is simply the fade back to the report. */
  const showExchange = phase === 'querying' || phase === 'answer';

  /* Headline: each character rises out of its own clipped box, left to right. */
  useEffect(() => {
    const el = headlineRef.current;
    const rule = ruleRef.current;
    if (!el) return;
    const chars = Array.from(el.querySelectorAll<HTMLElement>('[data-char]'));

    if (prefersReducedMotion()) {
      chars.forEach(c => { c.style.transform = 'none'; });
      if (rule) rule.style.transform = 'scaleX(1)';
      return;
    }

    animate(chars, {
      translateY: ['110%', '0%'],
      duration: 900,
      delay: stagger(38),
      ease: 'outExpo',
    });

    if (rule) {
      animate(rule, { scaleX: [0, 1], duration: 1100, delay: 620, ease: 'outExpo' });
    }
  }, []);

  /* The demo loop. Reduced motion gets the report plus one finished answer,
     with nothing moving — the point still lands. */
  useEffect(() => {
    if (prefersReducedMotion()) {
      setTyped(EXCHANGES[0].q);
      setPhase('answer');
      return;
    }

    let t: ReturnType<typeof setTimeout>;
    if (phase === 'idle') {
      t = setTimeout(() => setPhase('typing'), PHASE_MS.idle);
    } else if (phase === 'querying') {
      t = setTimeout(() => setPhase('answer'), PHASE_MS.querying);
    } else if (phase === 'answer') {
      t = setTimeout(() => setPhase('clearing'), PHASE_MS.answer);
    } else if (phase === 'clearing') {
      t = setTimeout(() => {
        setIndex(i => (i + 1) % EXCHANGES.length);
        setPhase('idle');
      }, PHASE_MS.clearing);
    }
    return () => clearTimeout(t);
  }, [phase]);

  /* Types the question into the ask bar, one character at a time. */
  useEffect(() => {
    if (phase !== 'typing' || prefersReducedMotion()) return;
    const q = EXCHANGES[index].q;
    let i = 0;
    setTyped('');

    const tick = setInterval(() => {
      i += 1;
      setTyped(q.slice(0, i));
      if (i >= q.length) {
        clearInterval(tick);
        setTimeout(() => setPhase('querying'), 500);
      }
    }, TYPE_MS);

    return () => clearInterval(tick);
  }, [phase, index]);

  /* Clear the ask bar the moment the question is "sent". */
  useEffect(() => {
    if (phase === 'querying') setTyped('');
  }, [phase]);

  /* The section is sized in viewport units so the headline and the product sit
     together on one screen — you shouldn't have to scroll from the name to the
     thing it names. Below md the height cap is dropped and it flows normally. */
  return (
    <section
      id="virgo"
      className="md:min-h-[100svh] md:flex md:items-center"
      style={{ position: 'relative', overflow: 'hidden', background: 'var(--ground)', padding: 'clamp(52px, 6.5vh, 88px) 0' }}
    >
      <div
        aria-hidden
        style={{
          position: 'absolute', top: '-10%', left: '50%', transform: 'translateX(-50%)',
          width: 'min(1300px, 130vw)', height: '560px', pointerEvents: 'none',
          background: 'radial-gradient(ellipse at center, rgba(124,58,237,0.13) 0%, transparent 68%)',
          filter: 'blur(10px)',
        }}
      />

      <div style={{ position: 'relative', width: '100%', maxWidth: '1240px', margin: '0 auto', padding: '0 24px' }}>
        <p
          className="font-mono"
          style={{ fontSize: '11px', letterSpacing: '2.4px', textTransform: 'uppercase', color: 'var(--faint)', textAlign: 'center', marginBottom: 'clamp(12px, 1.8vh, 24px)' }}
        >
          The flagship · In development
        </p>

        <h2
          ref={headlineRef}
          className="font-display"
          style={{
            fontWeight: 800,
            fontSize: 'clamp(56px, min(15vw, 14vh), 190px)',
            lineHeight: 0.86,
            letterSpacing: '-0.045em',
            color: 'var(--ink)',
            textAlign: 'center',
            margin: 0,
          }}
        >
          <span style={{ display: 'inline-block', color: 'var(--primary)' }}>
            {'Virgo'.split('').map((ch, i) => (
              <span
                key={`${ch}-${i}`}
                style={{ display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom', paddingBottom: '0.06em' }}
              >
                <span data-char style={{ display: 'inline-block', transform: 'translateY(110%)' }}>
                  {ch}
                </span>
              </span>
            ))}
          </span>
        </h2>

        <div
          ref={ruleRef}
          aria-hidden
          style={{
            height: '1px', background: 'var(--line)', margin: 'clamp(16px, 2.4vh, 34px) 0 clamp(14px, 2vh, 24px)',
            transform: 'scaleX(0)', transformOrigin: 'left center',
          }}
        />

        <p
          ref={subRef}
          className="font-body"
          style={{ opacity: 0, textAlign: 'center', fontSize: 'clamp(14px, 1.5vw, 17.5px)', lineHeight: 1.6, color: 'var(--muted)', maxWidth: '560px', margin: '0 auto clamp(20px, 3vh, 40px)' }}
        >
          Every morning it opens with what needs your attention. Ask it anything else
          and it comes back with the answer — and where the figure came from.
        </p>

        {/* ---- Product preview ---- */}
        <div
          ref={frameRef}
          style={{
            opacity: 0,
            maxWidth: '980px', margin: '0 auto',
            background: 'var(--surface)',
            border: '1px solid var(--line)',
            borderRadius: 'var(--radius-card)',
            boxShadow: '0 40px 90px rgba(20,18,26,0.14)',
            overflow: 'hidden',
          }}
        >
          {/* Window chrome */}
          <div
            style={{
              display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap',
              padding: '12px 18px', borderBottom: '1px solid var(--line-soft)', background: 'var(--surface-alt)',
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
                display: 'inline-flex', alignItems: 'center', gap: '6px',
                fontSize: '9.5px', letterSpacing: '1.2px', textTransform: 'uppercase',
                color: 'var(--primary)', background: 'var(--primary-wash)',
                border: '1px solid var(--primary-line)', borderRadius: 'var(--radius-pill)', padding: '3px 10px',
              }}
            >
              <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--primary)' }} />
              Preview
            </span>
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

          {/* Panel — fixed height, two cross-fading layers, never scrolls. */}
          <div
            style={{
              position: 'relative',
              height: 'clamp(380px, 44vh, 468px)',
              overflow: 'hidden',
            }}
          >
            <div
              aria-hidden={showExchange}
              style={{
                position: 'absolute', inset: 0,
                padding: 'clamp(18px, 2.6vw, 28px) clamp(16px, 3vw, 34px) 0',
                opacity: showExchange ? 0 : 1,
                transform: showExchange ? 'translateY(-8px)' : 'none',
                transition: 'opacity 400ms ease, transform 400ms ease',
              }}
            >
              <div style={{ maxWidth: '660px', margin: '0 auto' }}>
                <h3 className="font-display" style={{ fontSize: 'clamp(20px, 2.4vw, 25px)', fontWeight: 800, color: 'var(--ink)', margin: '0 0 5px' }}>
                  Good morning, John
                </h3>
                <p className="font-body" style={{ fontSize: '13.5px', color: 'var(--muted)', margin: '0 0 16px' }}>
                  Here is your morning report for {DATE_FMT.format(new Date())}.
                </p>

                {/* Morning report — the assistant's first message of the day */}
                <div
                  style={{
                    background: 'var(--surface)', border: '1px solid var(--line)',
                    borderRadius: '18px', padding: 'clamp(15px, 1.8vw, 19px)',
                    boxShadow: '0 10px 30px rgba(20,18,26,0.05)',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px', marginBottom: '2px' }}>
                    <span className="font-body" style={{ fontSize: '12px', color: 'var(--muted)' }}>
                      Top issues that need your attention today.
                    </span>
                    <span className="font-mono" style={{ fontSize: '11px', color: 'var(--faint)', flexShrink: 0 }}>
                      07:00
                    </span>
                  </div>

                  {/* The third issue is dropped on small screens, where the
                      panel is too short to hold all three without clipping. */}
                  <div ref={rowsRef}>
                    {ISSUES.map((issue, i) => (
                      <IssueRow key={issue.title} issue={issue} hideOnSmall={i === 2} />
                    ))}
                  </div>

                  <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: '14px' }}>
                    <span
                      className="font-body"
                      style={{
                        fontSize: '12.5px', fontWeight: 600, color: '#fff', background: 'var(--primary)',
                        padding: '8px 16px', borderRadius: '9px',
                      }}
                    >
                      Go to dashboard
                    </span>
                    <span
                      className="font-body"
                      style={{
                        fontSize: '12.5px', fontWeight: 600, color: 'var(--primary)', background: 'var(--surface)',
                        border: '1px solid var(--primary-line)', padding: '8px 16px', borderRadius: '9px',
                      }}
                    >
                      View full report
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Answer layer — takes the panel over while a question is running.
                The greeting is repeated at the same position as the report's,
                so the cross-fade reads as only the reply below it changing. */}
            <div
              aria-hidden={!showExchange}
              style={{
                position: 'absolute', inset: 0, pointerEvents: 'none',
                display: 'flex',
                padding: 'clamp(18px, 2.6vw, 28px) clamp(16px, 3vw, 34px) clamp(12px, 1.8vh, 20px)',
                opacity: showExchange ? 1 : 0,
                transform: showExchange ? 'none' : 'translateY(8px)',
                transition: 'opacity 400ms ease, transform 400ms ease',
              }}
            >
              <div style={{ width: '100%', maxWidth: '660px', margin: '0 auto', display: 'flex', flexDirection: 'column' }}>
                <h3 className="font-display" style={{ fontSize: 'clamp(20px, 2.4vw, 25px)', fontWeight: 800, color: 'var(--ink)', margin: '0 0 5px' }}>
                  Good morning, John
                </h3>
                <p className="font-body" style={{ fontSize: '13.5px', color: 'var(--muted)', margin: '0 0 16px' }}>
                  Here is your morning report for {DATE_FMT.format(new Date())}.
                </p>

                <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'flex-end' }}>
                  <div
                    className="font-body"
                    style={{
                      background: 'var(--primary-wash)', border: '1px solid var(--primary-line)',
                      borderRadius: '16px 16px 4px 16px', padding: '11px 16px',
                      fontSize: '14px', color: 'var(--ink)', maxWidth: '80%',
                    }}
                  >
                    {exchange.q}
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', margin: '14px 0 10px', flexWrap: 'wrap' }}>
                  <span className="font-body" style={{ fontSize: '11.5px', color: 'var(--faint)' }}>Querying:</span>
                  {exchange.sources.map(s => (
                    <span
                      key={s}
                      className="font-mono"
                      style={{
                        fontSize: '10px', color: 'var(--primary)', background: 'var(--primary-wash)',
                        border: '1px solid var(--primary-line)', padding: '3px 9px', borderRadius: '5px',
                      }}
                    >
                      {s}
                    </span>
                  ))}
                  {phase === 'querying' && <TypingDots />}
                </div>

                <div
                  className="font-body"
                  style={{
                    background: 'var(--surface-alt)', border: '1px solid var(--line)',
                    borderRadius: '4px 16px 16px 16px', padding: '14px 17px',
                    fontSize: '14px', lineHeight: 1.6, color: 'var(--ink-soft)',
                    opacity: phase === 'querying' ? 0 : 1,
                    transition: 'opacity 300ms ease',
                  }}
                >
                  {exchange.a}
                </div>
              </div>
            </div>
          </div>

          {/* Suggested questions + ask bar */}
          <div style={{ padding: '0 clamp(16px, 3vw, 34px) clamp(18px, 2.4vw, 26px)', background: 'var(--surface)' }}>
            <div style={{ maxWidth: '660px', margin: '0 auto' }}>
              {/* One row, clipped at the edge the way the real app does it. */}
              <div
                style={{
                  display: 'flex', gap: '8px', flexWrap: 'nowrap', overflow: 'hidden', marginBottom: '12px',
                  maskImage: 'linear-gradient(to right, #000 86%, transparent)',
                  WebkitMaskImage: 'linear-gradient(to right, #000 86%, transparent)',
                }}
              >
                {EXCHANGES.map((ex, i) => {
                  const live = i === index && phase !== 'idle';
                  return (
                    <span
                      key={ex.q}
                      className="font-body"
                      style={{
                        fontSize: '12px', padding: '7px 13px', borderRadius: '9px',
                        flexShrink: 0, whiteSpace: 'nowrap',
                        color: live ? 'var(--primary)' : 'var(--muted)',
                        background: live ? 'var(--primary-wash)' : 'var(--surface)',
                        border: `1px solid ${live ? 'var(--primary-line)' : 'var(--line)'}`,
                        transition: 'color 250ms ease, background-color 250ms ease, border-color 250ms ease',
                      }}
                    >
                      {ex.q}
                    </span>
                  );
                })}
              </div>

              <div
                style={{
                  display: 'flex', alignItems: 'center', gap: '10px',
                  border: '1px solid var(--line)', borderRadius: 'var(--radius-pill)',
                  padding: '9px 9px 9px 16px', background: 'var(--surface)',
                }}
              >
                <Plus size={16} style={{ color: 'var(--faint)', flexShrink: 0 }} />
                <span
                  className="font-body"
                  style={{
                    flex: 1, minWidth: 0, fontSize: '14px',
                    color: typed ? 'var(--ink)' : 'var(--faint)',
                    whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
                  }}
                >
                  {typed || 'Ask anything'}
                  {phase === 'typing' && (
                    <span style={{ display: 'inline-block', width: '1.5px', height: '15px', background: 'var(--primary)', marginLeft: '2px', verticalAlign: 'text-bottom' }} />
                  )}
                </span>
                <span
                  style={{
                    width: '34px', height: '34px', borderRadius: '50%', flexShrink: 0,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    background: typed ? 'var(--primary)' : 'var(--ground-deep)',
                    transition: 'background-color 250ms ease',
                  }}
                >
                  <SendHorizontal size={15} style={{ color: typed ? '#fff' : 'var(--faint)' }} />
                </span>
              </div>

              <p className="font-body" style={{ fontSize: '11px', color: 'var(--faint)', textAlign: 'center', margin: '12px 0 0' }}>
                Virgo can make mistakes — verify critical figures in the source system.
              </p>
            </div>
          </div>
        </div>

        <p className="font-body" style={{ fontSize: '12.5px', color: 'var(--faint)', textAlign: 'center', marginTop: '18px' }}>
          Product preview · illustrative figures for a sample property
        </p>
      </div>
    </section>
  );
}
