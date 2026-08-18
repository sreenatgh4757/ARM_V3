import { useEffect, useRef } from 'react';
import { animate, stagger } from 'animejs';
import { ArrowRight } from 'lucide-react';
import { useReveal, useStaggerReveal, prefersReducedMotion } from '../../lib/motion';

/* Illustrative only — mirrors VirgoShowcase's real questions so the claim
   stays honest, but these are plain display, not links. */
const QUESTIONS = [
  'How many check-ins do we have today?',
  'Should I raise rates this weekend?',
  'Which rooms still need cleaning?',
  'How are we tracking against last month?',
];

const MEET_VIRGO_WORDS = [
  { text: 'Meet', color: 'var(--ink)' },
  { text: 'Virgo', color: 'var(--primary)' },
];

export default function Hero() {
  const badgeRef = useRef<HTMLSpanElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const meetVirgoRef = useRef<HTMLDivElement>(null);

  const headlineRef = useReveal<HTMLHeadingElement>({ y: 28, duration: 800, delay: 120 });
  const subRef = useReveal<HTMLParagraphElement>({ y: 20, duration: 700, delay: 260 });
  const ctaRef = useReveal<HTMLDivElement>({ y: 18, duration: 650, delay: 380 });
  const askLabelRef = useReveal<HTMLParagraphElement>({ y: 14, duration: 600, delay: 500 });
  const chipsRef = useStaggerReveal<HTMLDivElement>({ y: 16, duration: 500, delay: 560, staggerDelay: 60 });
  const noteRef = useReveal<HTMLParagraphElement>({ y: 12, duration: 600, delay: 800 });

  // Badge gets its own treatment: a bouncier entrance than the plain
  // fade-up reveal, plus a soft ambient pulse to keep drawing the eye.
  useEffect(() => {
    const badge = badgeRef.current;
    const glow = glowRef.current;
    if (!badge) return;

    if (prefersReducedMotion()) {
      badge.style.opacity = '1';
      return;
    }

    animate(badge, {
      opacity: [0, 1],
      scale: [0.7, 1.06, 1],
      duration: 750,
      ease: 'outElastic(1, 0.6)',
    });

    if (glow) {
      animate(glow, {
        opacity: [0, 0.55, 0.15],
        scale: [0.9, 1.18, 1],
        duration: 2600,
        delay: 500,
        loop: true,
        ease: 'inOutSine',
      });
    }
  }, []);

  // "Meet Virgo" gets its own kinetic-type entrance — letters tumble in
  // with a stagger, distinct from the badge's bouncy pop and the headline's
  // plain fade-up, so it reads as the page's second beat, not a rerun.
  useEffect(() => {
    const el = meetVirgoRef.current;
    if (!el) return;
    const letters = Array.from(el.querySelectorAll<HTMLElement>('[data-letter]'));
    if (!letters.length) return;

    if (prefersReducedMotion()) {
      letters.forEach(l => { l.style.opacity = '1'; });
      return;
    }

    animate(letters, {
      opacity: [0, 1],
      translateY: [38, 0],
      scale: [0.4, 1],
      rotate: () => `${Math.random() * 16 - 8}deg`,
      duration: 850,
      delay: stagger(35, { start: 550 }),
      ease: 'outExpo',
    });
  }, []);

  return (
    <section
      style={{
        position: 'relative',
        overflow: 'hidden',
        background: 'var(--ground)',
        padding: 'clamp(72px, 11vw, 132px) 0 clamp(56px, 7vw, 88px)',
      }}
    >
      <div
        aria-hidden
        style={{
          position: 'absolute', top: '-18%', left: '50%', transform: 'translateX(-50%)',
          width: 'min(1100px, 120vw)', height: '620px', pointerEvents: 'none',
          background: 'radial-gradient(ellipse at center, rgba(124,58,237,0.16) 0%, rgba(200,240,75,0.07) 42%, transparent 70%)',
          filter: 'blur(8px)',
        }}
      />

      <div className="relative max-w-[1000px] mx-auto px-6 text-center">
        <div style={{ position: 'relative', display: 'inline-block', marginBottom: '32px' }}>
          <div
            ref={glowRef}
            aria-hidden
            style={{
              position: 'absolute', inset: '-14px', borderRadius: 'var(--radius-pill)',
              background: 'radial-gradient(ellipse, rgba(124,58,237,0.5) 0%, transparent 72%)',
              filter: 'blur(14px)', opacity: 0, pointerEvents: 'none',
            }}
          />
          <span
            ref={badgeRef}
            className="font-mono"
            style={{
              position: 'relative',
              opacity: 0,
              display: 'inline-flex', alignItems: 'center', gap: '12px',
              fontSize: '14px', letterSpacing: '1.5px', textTransform: 'uppercase',
              color: 'var(--ink)', background: 'var(--surface)',
              border: '1px solid var(--line)', borderRadius: 'var(--radius-pill)',
              padding: '11px 24px',
            }}
          >
            A.R.M Technologies
          </span>
        </div>

        {/* Kinetic-type entrance, distinct from the badge and headline reveals below. */}
        <div
          ref={meetVirgoRef}
          className="font-display"
          aria-label="Meet Virgo"
          style={{
            display: 'flex', flexWrap: 'wrap', justifyContent: 'center',
            gap: '0 0.32em', marginBottom: '20px',
            fontWeight: 800, fontSize: 'clamp(34px, 5.6vw, 60px)',
            lineHeight: 1, letterSpacing: '-0.01em',
          }}
        >
          {MEET_VIRGO_WORDS.map(({ text, color }) => (
            <span key={text} style={{ display: 'inline-flex' }}>
              {text.split('').map((ch, i) => (
                <span
                  key={`${text}-${i}`}
                  data-letter
                  style={{ display: 'inline-block', opacity: 0, color }}
                >
                  {ch}
                </span>
              ))}
            </span>
          ))}
        </div>

        <h1
          ref={headlineRef}
          className="font-display"
          style={{
            opacity: 0,
            fontWeight: 800,
            fontSize: 'clamp(44px, 8.4vw, 104px)',
            lineHeight: 0.94,
            color: 'var(--ink)',
            marginBottom: '26px',
          }}
        >
          Ask your hotel
          <br />
          anything.
        </h1>

        <p
          ref={subRef}
          className="font-body"
          style={{
            opacity: 0,
            fontSize: 'clamp(16px, 1.7vw, 20px)',
            lineHeight: 1.6,
            color: 'var(--muted)',
            maxWidth: '620px',
            margin: '0 auto 34px',
          }}
        >
          Virgo connects the systems your independent hotel already runs — PMS, accounting,
          guest messaging — and answers in plain English. It never changes anything in them.
        </p>

        {/* The page's primary action. Everything else in the hero is context. */}
        <div
          ref={ctaRef}
          style={{ opacity: 0, display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '48px' }}
        >
          <a href="#pilot" className="pill pill-primary">
            Join the pilot <ArrowRight size={15} />
          </a>
          <a href="#virgo" className="pill pill-outline">
            See it working
          </a>
        </div>

        {/* Illustrative examples only — not interactive, nothing to click. */}
        <p
          ref={askLabelRef}
          className="font-mono"
          style={{ opacity: 0, fontSize: '11px', letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--faint)', marginBottom: '16px' }}
        >
          For example
        </p>

        <div
          ref={chipsRef}
          style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center', maxWidth: '760px', margin: '0 auto' }}
        >
          {QUESTIONS.map(q => (
            <span
              key={q}
              className="font-body"
              style={{
                opacity: 0,
                background: 'var(--surface)', border: '1px solid var(--line)',
                borderRadius: 'var(--radius-pill)', padding: '12px 20px',
                fontSize: '14.5px', color: 'var(--ink-soft)', fontWeight: 500,
              }}
            >
              {q}
            </span>
          ))}
        </div>

        <p
          ref={noteRef}
          className="font-body"
          style={{ opacity: 0, marginTop: '30px', fontSize: '13px', color: 'var(--faint)' }}
        >
          Read-only access · 20-minute setup · No IT team required
        </p>
      </div>
    </section>
  );
}
