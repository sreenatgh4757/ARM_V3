import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail } from 'lucide-react';

const COLUMNS = [
  {
    heading: 'Virgo',
    links: [
      { name: 'Home', path: '/' },
      { name: 'Virgo', path: '/#virgo' },
      { name: 'How it works', path: '/#how-it-works' },
      { name: 'Get in touch', path: '/#pilot' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { name: 'About A.R.M', path: '/company' },
      { name: 'The Gig Search', path: '/thegigsearch' },
      { name: 'Consulting', path: '/consulting' },
    ],
  },
];

const SOCIALS = [
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:info@armtechnologies.ltd', label: 'Email' },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: 'var(--ground-deep)',
        borderTop: '1px solid var(--line-soft)',
        padding: 'clamp(48px, 6vw, 72px) 0 clamp(28px, 3vw, 36px)',
      }}
    >
      <div className="max-w-[1180px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-12 mb-12 text-center md:text-left">
          <div>
            <h4 className="font-display" style={{ fontWeight: 800, fontSize: '20px', color: 'var(--ink)', marginBottom: '14px' }}>
              A.R.M<span style={{ color: 'var(--primary)' }}>.</span>
            </h4>
            <p className="font-body" style={{ fontSize: '13px', color: 'var(--muted)', marginBottom: '5px' }}>A.R.M Technologies Limited</p>
            <p className="font-body" style={{ fontSize: '13px', color: 'var(--muted)', marginBottom: '5px' }}>Bournemouth, United Kingdom</p>
            <p className="font-body" style={{ fontSize: '13px', color: 'var(--faint)' }}>Est. 2023</p>
          </div>

          {COLUMNS.map(col => (
            <div key={col.heading}>
              <h5
                className="font-mono"
                style={{ fontSize: '10.5px', fontWeight: 600, color: 'var(--faint)', textTransform: 'uppercase', letterSpacing: '1.8px', marginBottom: '16px' }}
              >
                {col.heading}
              </h5>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {col.links.map(link => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="font-body"
                      style={{ fontSize: '14px', color: 'var(--ink-soft)', textDecoration: 'none', transition: 'color 0.2s' }}
                      onMouseEnter={e => { e.currentTarget.style.color = 'var(--primary)'; }}
                      onMouseLeave={e => { e.currentTarget.style.color = 'var(--ink-soft)'; }}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="flex flex-col items-center md:items-start">
            <h5
              className="font-mono"
              style={{ fontSize: '10.5px', fontWeight: 600, color: 'var(--faint)', textTransform: 'uppercase', letterSpacing: '1.8px', marginBottom: '16px' }}
            >
              Connect
            </h5>
            <div style={{ display: 'flex', gap: '10px' }}>
              {SOCIALS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  style={{
                    width: '40px', height: '40px', borderRadius: '12px',
                    background: 'var(--surface)', border: '1px solid var(--line)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    transition: 'border-color 0.2s, transform 0.2s', textDecoration: 'none',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--primary-line)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--line)'; e.currentTarget.style.transform = 'translateY(0)'; }}
                >
                  <Icon size={16} style={{ color: 'var(--ink-soft)' }} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div style={{ paddingTop: '26px', borderTop: '1px solid var(--line-soft)', textAlign: 'center' }}>
          <p className="font-body" style={{ fontSize: '13px', color: 'var(--faint)' }}>
            &copy; 2026 A.R.M Technologies Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
