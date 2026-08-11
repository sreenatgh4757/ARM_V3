import { useState, useEffect, useRef } from 'react';
import { animate, stagger } from 'animejs';
import { useReveal, prefersReducedMotion } from '../../lib/motion';

const conversations = [
  {
    q: 'How many check-ins do we have today?',
    sources: ['PMS', 'Guest Profiles'],
    a: '12 arrivals today. 3 are marked VIP — Ms. Sarah Chen (Room 401) is celebrating her anniversary; champagne placement is recommended. First guest expected at 2pm. All have confirmed.',
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
    q: 'How are we tracking against last month?',
    sources: ['Accounting', 'OTAs', 'Channel Manager'],
    a: 'This month: £47,200 revenue — up 18% vs last month. RevPAR is £89.40, above your £82 target. Biggest driver: direct bookings up 31%, saving £3,200 in OTA commission.',
  },
];

function TypingDots() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;
    const dots = Array.from(el.children) as HTMLElement[];
    const anim = animate(dots, {
      opacity: [0.3, 1, 0.3],
      translateY: [0, -5, 0],
      duration: 900,
      delay: stagger(180),
      loop: true,
    });
    return () => { anim.revert(); };
  }, []);

  return (
    <div ref={ref} style={{ display: 'flex', gap: '5px', padding: '14px 18px', alignItems: 'center' }}>
      {[0, 1, 2].map(i => (
        <div key={i} style={{ width: '7px', height: '7px', borderRadius: '50%', background: 'var(--primary)' }} />
      ))}
    </div>
  );
}

type Phase = 'question' | 'typing' | 'answer';

export default function VirgoAIChat() {
  const [convIndex, setConvIndex] = useState(0);
  const [phase, setPhase] = useState<Phase>('question');

  const headerRef = useReveal<HTMLDivElement>({ y: 28, duration: 650 });
  const windowRef = useReveal<HTMLDivElement>({ y: 36, duration: 750, delay: 140 });
  const tagsRef = useRef<HTMLDivElement>(null);
  const questionRef = useRef<HTMLDivElement>(null);
  const responseRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let t: ReturnType<typeof setTimeout>;
    if (phase === 'question') t = setTimeout(() => setPhase('typing'), 1400);
    else if (phase === 'typing') t = setTimeout(() => setPhase('answer'), 2200);
    else {
      t = setTimeout(() => {
        setPhase('question');
        setConvIndex(i => (i + 1) % conversations.length);
      }, 4500);
    }
    return () => clearTimeout(t);
  }, [phase, convIndex]);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    if (tagsRef.current) animate(tagsRef.current, { opacity: [0, 1], duration: 300 });
    if (questionRef.current) animate(questionRef.current, { opacity: [0, 1], translateX: [20, 0], duration: 400 });
  }, [convIndex]);

  useEffect(() => {
    if (prefersReducedMotion() || !responseRef.current) return;
    animate(responseRef.current, {
      opacity: [0, 1],
      translateX: [-16, 0],
      duration: phase === 'answer' ? 500 : 300,
    });
  }, [phase, convIndex]);

  const conv = conversations[convIndex];

  const jumpTo = (i: number) => {
    setConvIndex(i);
    setPhase('question');
  };

  return (
    <section
      style={{
        background: 'var(--ground)',
        borderTop: '1px solid var(--line-soft)',
        padding: 'clamp(70px, 9vw, 118px) 0',
      }}
    >
      <div className="max-w-[1180px] mx-auto px-6 lg:px-10">
        <div ref={headerRef} style={{ opacity: 0, textAlign: 'center', marginBottom: '52px' }}>
          <p
            className="font-mono"
            style={{ fontSize: '11px', color: 'var(--faint)', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px' }}
          >
            Ask Virgo
          </p>
          <h2
            className="font-display"
            style={{ fontWeight: 800, fontSize: 'clamp(26px, 4vw, 46px)', color: 'var(--ink)', marginBottom: '16px', lineHeight: 1.05 }}
          >
            This is the whole product.
          </h2>
          <p
            className="font-body"
            style={{ fontSize: 'clamp(14px, 1.6vw, 17px)', color: 'var(--muted)', maxWidth: '520px', margin: '0 auto', lineHeight: 1.65 }}
          >
            Every tool your hotel runs is connected to Virgo. Ask a question in the chat
            and it goes and gets the answer — talking to whichever systems it needs, then
            coming back with one reply and the source of every figure.
          </p>
        </div>

        <div
          ref={windowRef}
          style={{
            opacity: 0,
            width: '100%', maxWidth: '820px', margin: '0 auto',
            background: 'var(--surface)',
            border: '1px solid var(--line)',
            borderRadius: 'var(--radius-card)',
            overflow: 'hidden',
            boxShadow: '0 34px 80px rgba(20,18,26,0.13)',
          }}
        >
          <div
            style={{
              padding: '15px 22px',
              borderBottom: '1px solid var(--line-soft)',
              display: 'flex', alignItems: 'center', gap: '12px',
              background: 'var(--surface-alt)',
            }}
          >
            <div style={{ display: 'flex', gap: '6px', marginRight: '6px' }}>
              {['#FF5F57', '#FEBC2E', '#28C840'].map(c => (
                <div key={c} style={{ width: '11px', height: '11px', borderRadius: '50%', background: c }} />
              ))}
            </div>
            <div
              style={{
                width: '32px', height: '32px', borderRadius: '50%',
                background: 'var(--primary-wash)', border: '1px solid var(--primary-line)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
              }}
            >
              <svg width="14" height="14" viewBox="0 0 80 80" fill="none">
                <polyline points="10,10 40,70 70,10" stroke="var(--primary)" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div>
              <div className="font-display" style={{ fontSize: '13px', fontWeight: 700, color: 'var(--ink)' }}>Virgo</div>
              <div className="font-body" style={{ fontSize: '11px', color: 'var(--mint-deep)' }}>
                ● Online · All systems connected
              </div>
            </div>
          </div>

          <div style={{ padding: '28px 24px', minHeight: '280px', display: 'flex', flexDirection: 'column', gap: '14px', justifyContent: 'flex-end' }}>
            <div ref={tagsRef} style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
              <span className="font-body" style={{ fontSize: '10.5px', color: 'var(--faint)', alignSelf: 'center' }}>
                Querying:
              </span>
              {conv.sources.map(s => (
                <span
                  key={s}
                  className="font-mono"
                  style={{
                    fontSize: '10px', color: 'var(--primary)',
                    background: 'var(--primary-wash)', border: '1px solid var(--primary-line)',
                    padding: '3px 9px', borderRadius: '6px',
                  }}
                >
                  {s}
                </span>
              ))}
            </div>

            <div ref={questionRef} style={{ alignSelf: 'flex-end', maxWidth: '80%' }}>
              <div
                style={{
                  background: 'var(--ground-deep)',
                  border: '1px solid var(--line-soft)',
                  borderRadius: '18px 18px 5px 18px',
                  padding: '12px 18px',
                }}
              >
                <p className="font-body" style={{ fontSize: '14px', color: 'var(--ink)', margin: 0 }}>{conv.q}</p>
              </div>
            </div>

            <div ref={responseRef} style={{ alignSelf: 'flex-start', maxWidth: phase === 'answer' ? '92%' : undefined, display: 'inline-block' }}>
              {phase === 'typing' && (
                <div
                  style={{
                    background: 'var(--primary-wash)',
                    border: '1px solid var(--primary-line)',
                    borderRadius: '5px 18px 18px 18px',
                    display: 'inline-block',
                  }}
                >
                  <TypingDots />
                </div>
              )}

              {phase === 'answer' && (
                <div
                  style={{
                    background: 'var(--primary-wash)',
                    border: '1px solid var(--primary-line)',
                    borderRadius: '5px 18px 18px 18px',
                    padding: '15px 19px',
                  }}
                >
                  <p className="font-body" style={{ fontSize: '14px', color: 'var(--ink-soft)', margin: 0, lineHeight: 1.7 }}>
                    {conv.a}
                  </p>
                </div>
              )}
            </div>
          </div>

          <div
            style={{
              padding: '15px 22px',
              borderTop: '1px solid var(--line-soft)',
              display: 'flex', gap: '10px', alignItems: 'center',
              background: 'var(--surface-alt)',
            }}
          >
            <div
              className="font-body"
              style={{
                flex: 1, background: 'var(--surface)',
                border: '1px solid var(--line)',
                borderRadius: 'var(--radius-pill)', padding: '11px 16px',
                color: 'var(--faint)', fontSize: '13px',
              }}
            >
              Ask your hotel anything…
            </div>
            <div
              style={{
                width: '40px', height: '40px', borderRadius: '50%',
                background: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', marginTop: '26px', flexWrap: 'wrap' }}>
          {conversations.map((c, i) => (
            <button
              key={c.q}
              onClick={() => jumpTo(i)}
              className="font-body"
              style={{
                fontSize: '12.5px',
                color: i === convIndex ? 'var(--primary)' : 'var(--muted)',
                background: i === convIndex ? 'var(--primary-wash)' : 'var(--surface)',
                border: `1px solid ${i === convIndex ? 'var(--primary-line)' : 'var(--line)'}`,
                padding: '8px 16px', borderRadius: 'var(--radius-pill)',
                cursor: 'pointer', transition: 'all 0.25s',
                fontWeight: i === convIndex ? 600 : 400,
              }}
            >
              {c.q}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
