import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MessageCircle, ArrowUpRight } from 'lucide-react';

const WA_NUMBER = '447770832977';

const QUICK_MESSAGES = [
  { label: '👋 What is Vzir?', text: 'Hi! I visited armtechnologies.ltd — can you tell me more about Vzir?' },
  { label: '🚀 Apply for pilot', text: 'Hi! I\'d like to apply for the Vzir 90-day free pilot.' },
  { label: '💼 Consulting', text: 'Hi! I\'m interested in ARM Technologies consulting services.' },
  { label: '❓ General enquiry', text: 'Hi! I visited armtechnologies.ltd and have a question.' },
];

export default function WhatsAppWidget() {
  const [open, setOpen] = useState(false);

  const openChat = (text: string) => {
    const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    setOpen(false);
  };

  return (
    <>
      {/* Floating button */}
      <motion.button
        onClick={() => setOpen(o => !o)}
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
          boxShadow: '0 8px 32px rgba(37,211,102,0.45)',
        }}
        aria-label="Chat on WhatsApp"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>

        {/* Pulse ring */}
        <motion.div
          style={{
            position: 'absolute', inset: 0, borderRadius: '50%',
            border: '2px solid #25D366',
          }}
          animate={{ scale: [1, 1.6, 1.6], opacity: [0.8, 0, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeOut' }}
        />
      </motion.button>

      {/* Popup */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.95 }}
            transition={{ duration: 0.22 }}
            style={{
              position: 'fixed', bottom: '100px', right: '28px', zIndex: 999,
              width: '320px', borderRadius: '20px', overflow: 'hidden',
              boxShadow: '0 24px 60px rgba(0,0,0,0.55)',
              background: '#1F2C33',
            }}
          >
            {/* Header */}
            <div style={{
              background: '#075E54', padding: '16px 18px',
              display: 'flex', alignItems: 'center', gap: '12px',
            }}>
              <div style={{
                width: '40px', height: '40px', borderRadius: '50%',
                background: 'rgba(255,255,255,0.15)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
              }}>
                <MessageCircle size={18} color="white" />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: 'Sora, sans-serif', fontWeight: 600, fontSize: '14px', color: '#fff' }}>
                  ARM Technologies
                </div>
                <div style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '11px', color: 'rgba(255,255,255,0.65)' }}>
                  ● AI assistant · typically instant
                </div>
              </div>
              <button onClick={() => setOpen(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,0.6)', padding: '4px', display: 'flex' }}>
                <X size={17} />
              </button>
            </div>

            {/* Chat bubble */}
            <div style={{ padding: '16px 16px 8px' }}>
              <div style={{
                background: '#2A3942', borderRadius: '0 12px 12px 12px',
                padding: '12px 14px', marginBottom: '14px',
              }}>
                <p style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '13px', color: '#E2E8F0', margin: 0, lineHeight: 1.65 }}>
                  Hi! 👋 I'm the ARM Technologies AI assistant.<br /><br />
                  What would you like to know? Pick a topic or open a chat — I'll reply on WhatsApp instantly.
                </p>
                <p style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '10px', color: '#71717A', margin: '8px 0 0', textAlign: 'right' }}>
                  Vzir Bot · WhatsApp
                </p>
              </div>

              {/* Quick message buttons */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '14px' }}>
                {QUICK_MESSAGES.map((m) => (
                  <button
                    key={m.label}
                    onClick={() => openChat(m.text)}
                    style={{
                      background: '#2A3942', border: '1px solid rgba(255,255,255,0.07)',
                      borderRadius: '10px', padding: '10px 14px',
                      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                      cursor: 'pointer', transition: 'background 0.15s',
                      fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '13px',
                      color: '#E2E8F0', textAlign: 'left',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.background = '#354550')}
                    onMouseLeave={e => (e.currentTarget.style.background = '#2A3942')}
                  >
                    {m.label}
                    <ArrowUpRight size={13} color="#25D366" style={{ flexShrink: 0, marginLeft: '8px' }} />
                  </button>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div style={{
              padding: '10px 16px 14px',
              borderTop: '1px solid rgba(255,255,255,0.05)',
              textAlign: 'center',
            }}>
              <p style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '11px', color: '#52525B', margin: 0 }}>
                Opens WhatsApp · Powered by Claude AI
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
