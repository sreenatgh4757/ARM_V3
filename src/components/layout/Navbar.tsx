import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  const scrollToContact = () => {
    setMobileMenuOpen(false);
    setTimeout(() => {
      const contact = document.getElementById('contact');
      if (contact) contact.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Vzir', path: '/vzir' },
    { name: 'TheGigSearch', path: '/thegigsearch' },
    { name: 'Consulting', path: '/consulting' },
  ];

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={scrolled ? {
          background: 'rgba(9,9,11,0.9)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(255,255,255,0.05)'
        } : {}}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-20 py-5 flex items-center justify-between">

          {/* 🔥 LOGO UPDATED */}
          <Link
            to="/"
            className="flex flex-col leading-none hover:opacity-80 transition-opacity"
            style={{ textDecoration: 'none' }}
          >
            <span
              style={{
                fontFamily: 'Sora, sans-serif',
                fontWeight: 700,
                fontSize: '18px',
                color: '#FAFAFA'
              }}
            >
              A.R.M
            </span>

            <span
              style={{
                fontFamily: 'Plus Jakarta Sans, sans-serif',
                fontSize: '10px',
                color: '#71717A',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                marginTop: '2px'
              }}
            >
              Technologies
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                style={{
                  fontFamily: 'Plus Jakarta Sans, sans-serif',
                  fontWeight: 400,
                  fontSize: '14px',
                  color: location.pathname === link.path ? '#2DD4BF' : '#A1A1AA',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
              >
                {link.name}
              </Link>
            ))}

            <button
              onClick={scrollToContact}
              style={{
                fontFamily: 'Plus Jakarta Sans, sans-serif',
                fontWeight: 400,
                fontSize: '14px',
                color: '#A1A1AA',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                transition: 'color 0.2s',
              }}
            >
              Contact
            </button>
          </div>

          {/* CTA */}
          <div className="hidden lg:block">
            <button
              onClick={scrollToContact}
              style={{
                fontFamily: 'Plus Jakarta Sans, sans-serif',
                fontWeight: 400,
                fontSize: '14px',
                color: '#2DD4BF',
                border: '1px solid rgba(45,212,191,0.3)',
                padding: '8px 24px',
                borderRadius: '9999px',
                background: 'transparent',
                cursor: 'pointer',
                transition: 'background 0.2s',
              }}
            >
              Get in touch
            </button>
          </div>

          {/* Mobile Button */}
          <button
            className="lg:hidden text-[#FAFAFA] w-11 h-11 flex items-center justify-center"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden flex flex-col"
            style={{ background: '#09090B' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="flex items-center justify-between px-6 py-5 border-b border-[rgba(255,255,255,0.05)]">

              {/* 🔥 LOGO ALSO UPDATED HERE */}
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className="flex flex-col leading-none"
                style={{ textDecoration: 'none' }}
              >
                <span style={{
                  fontFamily: 'Sora, sans-serif',
                  fontWeight: 700,
                  fontSize: '18px',
                  color: '#FAFAFA'
                }}>
                  A.R.M
                </span>

                <span style={{
                  fontFamily: 'Plus Jakarta Sans, sans-serif',
                  fontSize: '10px',
                  color: '#71717A',
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  marginTop: '2px'
                }}>
                  Technologies
                </span>
              </Link>

              <button
                className="w-11 h-11 flex items-center justify-center text-[#FAFAFA]"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex flex-col items-center justify-center flex-1 gap-8 px-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <Link
                    to={link.path}
                    style={{
                      fontFamily: 'Sora, sans-serif',
                      fontWeight: 600,
                      fontSize: '24px',
                      color: location.pathname === link.path ? '#2DD4BF' : '#FAFAFA',
                      textDecoration: 'none',
                    }}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.06 }}
                onClick={scrollToContact}
                style={{
                  fontFamily: 'Sora, sans-serif',
                  fontWeight: 600,
                  fontSize: '24px',
                  color: '#FAFAFA',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                Contact
              </motion.button>

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: (navLinks.length + 1) * 0.06 }}
                onClick={scrollToContact}
                style={{
                  marginTop: '16px',
                  fontFamily: 'Plus Jakarta Sans, sans-serif',
                  fontWeight: 400,
                  fontSize: '16px',
                  color: '#2DD4BF',
                  border: '1px solid rgba(45,212,191,0.3)',
                  padding: '12px 32px',
                  borderRadius: '9999px',
                  background: 'transparent',
                  cursor: 'pointer',
                }}
              >
                Get in touch
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}