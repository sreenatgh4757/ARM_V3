import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{
      background: '#09090B',
      borderTop: '1px solid rgba(255,255,255,0.06)',
      padding: 'clamp(40px, 6vw, 64px) 0',
    }}>
      <div className="max-w-[1200px] mx-auto px-5 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 mb-10 text-center md:text-left">
          <div>
            <h4 style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: '18px', color: '#FAFAFA', marginBottom: '16px' }}>
              A.R.M<span style={{ color: '#2DD4BF' }}>.</span>
            </h4>
            <p style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '13px', color: '#71717A', marginBottom: '6px' }}>A.R.M Technologies Limited</p>
            <p style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '13px', color: '#71717A', marginBottom: '6px' }}>Bournemouth, United Kingdom</p>
            <p style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '13px', color: '#71717A' }}>Est. 2023</p>
          </div>

          <div>
            <h5 style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '12px', fontWeight: 500, color: '#A1A1AA', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '16px' }}>
              Links
            </h5>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                { name: 'Home', path: '/' },
                { name: 'Vzir', path: '/vzir' },
                { name: 'TheGigSearch', path: '/thegigsearch' },
                { name: 'Consulting', path: '/consulting' },
              ].map(link => (
                <li key={link.path}>
                  <Link to={link.path} style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '14px', color: '#71717A', textDecoration: 'none', transition: 'color 0.2s' }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#2DD4BF'; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = '#71717A'; }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h5 style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '12px', fontWeight: 500, color: '#A1A1AA', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '16px' }}>
              Connect
            </h5>
            <div style={{ display: 'flex', gap: '12px' }}>
              {[
                { icon: Github, href: '#' },
                { icon: Linkedin, href: '#' },
                { icon: Mail, href: 'mailto:info@armtechnologies.ltd' },
              ].map(({ icon: Icon, href }, i) => (
                <a key={i} href={href} style={{
                  width: '40px', height: '40px', borderRadius: '8px',
                  background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  transition: 'border-color 0.2s', textDecoration: 'none',
                }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(45,212,191,0.3)'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.06)'; }}
                >
                  <Icon size={16} style={{ color: '#A1A1AA' }} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div style={{ paddingTop: '28px', borderTop: '1px solid rgba(255,255,255,0.06)', textAlign: 'center' }}>
          <p style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '13px', color: '#71717A' }}>
            &copy; 2026 A.R.M Technologies Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
