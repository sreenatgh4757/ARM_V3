import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, MessageCircle } from 'lucide-react';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL ?? 'https://arm-backend.onrender.com';

export default function WhatsAppWidget() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [interest, setInterest] = useState('Vzir');
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;

    setLoading(true);
    setError('');

    try {
      const res = await fetch(`${BACKEND_URL}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, phone, interest }),
      });

      if (res.ok) {
        setSent(true);
      } else {
        setError('Something went wrong. Please try again.');
      }
    } catch {
      setError('Could not connect. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const reset = () => {
    setSent(false);
    setName('');
    setPhone('');
    setInterest('Vzir');
    setError('');
    setOpen(false);
  };

  return (
    <>
      {/* Floating button */}
      <motion.button
        onClick={() => setOpen(true)}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, type: 'spring', stiffness: 200 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        style={{
          position: 'fixed', bottom: '28px', right: '28px', zIndex: 999,
          width: '58px', height: '58px', borderRadius: '50%',
          background: '#25D366', border: 'none', cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 8px 32px rgba(37,211,102,0.4)',
        }}
        aria-label="Chat on WhatsApp"
      >
        {/* WhatsApp icon */}
        <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>

        {/* Pulse ring */}
        <motion.div
          style={{
            position: 'absolute', inset: 0, borderRadius: '50%',
            border: '2px solid #25D366',
          }}
          animate={{ scale: [1, 1.5, 1.5], opacity: [1, 0, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
        />
      </motion.button>

      {/* Chat popup */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            style={{
              position: 'fixed', bottom: '100px', right: '28px', zIndex: 999,
              width: '340px', borderRadius: '20px', overflow: 'hidden',
              boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
              background: '#1F2C33',
            }}
          >
            {/* Header */}
            <div style={{
              background: '#075E54', padding: '16px 20px',
              display: 'flex', alignItems: 'center', gap: '12px',
            }}>
              <div style={{
                width: '42px', height: '42px', borderRadius: '50%',
                background: 'rgba(255,255,255,0.15)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
              }}>
                <MessageCircle size={20} color="white" />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: 'Sora, sans-serif', fontWeight: 600, fontSize: '14px', color: '#fff' }}>
                  ARM Technologies
                </div>
                <div style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '11px', color: 'rgba(255,255,255,0.7)' }}>
                  ● Typically replies instantly
                </div>
              </div>
              <button onClick={() => setOpen(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,0.7)', padding: '4px' }}>
                <X size={18} />
              </button>
            </div>

            {/* Body */}
            <div style={{ padding: '20px' }}>
              {!sent ? (
                <>
                  {/* Intro bubble */}
                  <div style={{
                    background: '#2A3942', borderRadius: '0 12px 12px 12px',
                    padding: '12px 14px', marginBottom: '18px',
                  }}>
                    <p style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '13px', color: '#E2E8F0', margin: 0, lineHeight: 1.6 }}>
                      Hi! 👋 Enter your details and I'll send you a WhatsApp message right away. Ask me anything about <strong>Vzir</strong> or ARM Technologies!
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <input
                      type="text"
                      placeholder="Your name"
                      value={name}
                      onChange={e => setName(e.target.value)}
                      required
                      style={{
                        background: '#2A3942', border: '1px solid rgba(255,255,255,0.08)',
                        borderRadius: '10px', padding: '10px 14px',
                        fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '13px',
                        color: '#FAFAFA', outline: 'none',
                      }}
                    />
                    <input
                      type="tel"
                      placeholder="WhatsApp number (e.g. +44 7700 900123)"
                      value={phone}
                      onChange={e => setPhone(e.target.value)}
                      required
                      style={{
                        background: '#2A3942', border: '1px solid rgba(255,255,255,0.08)',
                        borderRadius: '10px', padding: '10px 14px',
                        fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '13px',
                        color: '#FAFAFA', outline: 'none',
                      }}
                    />
                    <select
                      value={interest}
                      onChange={e => setInterest(e.target.value)}
                      style={{
                        background: '#2A3942', border: '1px solid rgba(255,255,255,0.08)',
                        borderRadius: '10px', padding: '10px 14px',
                        fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '13px',
                        color: '#A1A1AA', outline: 'none',
                      }}
                    >
                      <option value="Vzir">Vzir — Hotel Intelligence</option>
                      <option value="The Gig Search">The Gig Search</option>
                      <option value="Consulting">Consulting</option>
                      <option value="General enquiry">General enquiry</option>
                    </select>

                    {error && (
                      <p style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '12px', color: '#EF4444', margin: 0 }}>{error}</p>
                    )}

                    <button
                      type="submit"
                      disabled={loading}
                      style={{
                        background: '#25D366', border: 'none', borderRadius: '10px',
                        padding: '12px', cursor: loading ? 'not-allowed' : 'pointer',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                        fontFamily: 'Sora, sans-serif', fontWeight: 600, fontSize: '13px',
                        color: '#fff', opacity: loading ? 0.7 : 1, transition: 'opacity 0.2s',
                      }}
                    >
                      <Send size={15} />
                      {loading ? 'Sending…' : 'Send me a WhatsApp message'}
                    </button>
                  </form>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  style={{ textAlign: 'center', padding: '10px 0' }}
                >
                  <div style={{ fontSize: '40px', marginBottom: '12px' }}>✅</div>
                  <p style={{ fontFamily: 'Sora, sans-serif', fontWeight: 600, fontSize: '15px', color: '#FAFAFA', marginBottom: '8px' }}>
                    Message sent!
                  </p>
                  <p style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '13px', color: '#A1A1AA', lineHeight: 1.6, marginBottom: '20px' }}>
                    Check your WhatsApp — our AI assistant will be in touch right away.
                  </p>
                  <button
                    onClick={reset}
                    style={{
                      background: 'transparent', border: '1px solid rgba(255,255,255,0.12)',
                      borderRadius: '8px', padding: '8px 20px', cursor: 'pointer',
                      fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '12px', color: '#A1A1AA',
                    }}
                  >
                    Close
                  </button>
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
