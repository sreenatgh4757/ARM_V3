import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { useStaggerReveal } from '../../lib/motion';

/* Only claims that are demonstrably true elsewhere on this site — Virgo has
   no customers yet, so credibility comes from what A.R.M has already shipped. */
const PROOF = [
  {
    name: 'The Gig Search',
    status: 'Live',
    statusColor: 'var(--mint)',
    desc: 'A hospitality staffing marketplace, built and shipped by A.R.M — matching hospitality workers with roles today.',
    link: 'https://www.thegigsearch.com',
    linkText: 'thegigsearch.com',
    external: true,
  },
  {
    name: 'Consulting',
    status: 'Ongoing',
    statusColor: 'var(--amber)',
    desc: 'A.R.M advises other startups on revenue models, operations and market entry — the same thinking that shaped Virgo.',
    link: '/consulting',
    linkText: 'See the practice',
    external: false,
  },
];

export default function ArmBand() {
  const leftRef = useStaggerReveal<HTMLDivElement>({ y: 26, duration: 700, staggerDelay: 110 });
  const cardsRef = useStaggerReveal<HTMLDivElement>({ y: 26, duration: 700, staggerDelay: 130 });

  return (
    <section style={{ position: 'relative', background: 'var(--ink)', overflow: 'hidden', padding: 'clamp(70px, 9vw, 120px) 0' }}>
      <div
        aria-hidden
        style={{
          position: 'absolute', top: '-30%', right: '-10%', width: '760px', height: '760px',
          background: 'radial-gradient(circle, rgba(124,58,237,0.42) 0%, transparent 65%)',
          filter: 'blur(20px)', pointerEvents: 'none',
        }}
      />

      <div className="relative" style={{ maxWidth: '1180px', margin: '0 auto', padding: '0 24px' }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div ref={leftRef}>
            <p
              className="font-mono"
              style={{ opacity: 0, fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--pop)', marginBottom: '20px' }}
            >
              The company
            </p>
            <h2
              className="font-display"
              style={{ opacity: 0, fontSize: 'clamp(32px, 4.6vw, 58px)', fontWeight: 800, lineHeight: 1.0, color: '#fff', marginBottom: '24px' }}
            >
              Built by A.R.M.
              <br />
              Not a first attempt.
            </h2>
            <p
              className="font-body"
              style={{ opacity: 0, fontSize: 'clamp(15px, 1.6vw, 17px)', lineHeight: 1.75, color: 'rgba(255,255,255,0.72)', maxWidth: '480px', marginBottom: '30px' }}
            >
              A.R.M Technologies is a software company in Bournemouth, UK. We've already
              shipped one product to the hospitality industry and advise other founders on
              building theirs. Virgo is what we're launching next — and it's onboarding its
              first hotels now.
            </p>
            <div style={{ opacity: 0, display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <Link to="/company" className="pill" style={{ background: '#fff', color: 'var(--ink)' }}>
                About A.R.M <ArrowRight size={15} />
              </Link>
              <Link
                to="/#pilot"
                className="pill"
                style={{ background: 'transparent', color: '#fff', border: '1px solid rgba(255,255,255,0.28)' }}
              >
                Talk to us
              </Link>
            </div>
          </div>

          <div ref={cardsRef} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {PROOF.map(item => (
              <div
                key={item.name}
                style={{
                  opacity: 0,
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  borderRadius: '20px',
                  padding: 'clamp(22px, 3vw, 30px)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                  <h3 className="font-display" style={{ fontSize: '20px', fontWeight: 700, color: '#fff' }}>
                    {item.name}
                  </h3>
                  <span
                    className="font-mono"
                    style={{
                      fontSize: '9.5px', letterSpacing: '1.2px', textTransform: 'uppercase', fontWeight: 700,
                      color: item.statusColor, border: `1px solid ${item.statusColor}`,
                      padding: '2px 9px', borderRadius: 'var(--radius-pill)', opacity: 0.9,
                    }}
                  >
                    {item.status}
                  </span>
                </div>
                <p className="font-body" style={{ fontSize: '14px', lineHeight: 1.7, color: 'rgba(255,255,255,0.68)', marginBottom: '16px' }}>
                  {item.desc}
                </p>
                {item.external ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '13.5px', fontWeight: 600, color: 'var(--pop)', textDecoration: 'none' }}
                  >
                    {item.linkText} <ArrowUpRight size={14} />
                  </a>
                ) : (
                  <Link
                    to={item.link}
                    className="font-body"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '13.5px', fontWeight: 600, color: 'var(--pop)', textDecoration: 'none' }}
                  >
                    {item.linkText} <ArrowRight size={14} />
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
