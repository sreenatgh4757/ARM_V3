import { useState } from 'react';
import { motion } from 'framer-motion';
import { supabase } from '../../lib/supabase';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

function isValidEmail(email: string): boolean {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  if (!re.test(email)) return false;
  const disposable = ['mailinator.com', 'tempmail.com', 'throwaway.email', 'guerrillamail.com', 'yopmail.com'];
  const domain = email.split('@')[1]?.toLowerCase();
  return !disposable.includes(domain);
}

export default function VzirPilotCTA() {
  const [formData, setFormData] = useState({ name: '', email: '', hotel: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error' | 'invalid-email' | 'duplicate'>('idle');
  const [emailTouched, setEmailTouched] = useState(false);

  const emailValid = formData.email === '' || isValidEmail(formData.email);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isValidEmail(formData.email)) {
      setStatus('invalid-email');
      return;
    }

    setStatus('loading');

    const { error } = await supabase.from('vzir_pilot_signups').insert({
      name: formData.name,
      email: formData.email.toLowerCase().trim(),
      hotel_name: formData.hotel,
      message: formData.message,
    });

    if (error) {
      if (error.code === '23505') {
        setStatus('duplicate');
      } else {
        setStatus('error');
      }
      return;
    }

    setStatus('success');
  };

  return (
    <section
      id="pilot"
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 bg-[#09090B]/90" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={stagger}
          className="text-center mb-12"
        >
          <motion.p
            variants={fadeUp}
            className="font-mono text-[10px] tracking-[3px] uppercase text-[#2DD4BF] mb-4"
          >
            Early Access
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-display text-[#FAFAFA] mb-4"
            style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 700, lineHeight: 1.1 }}
          >
            Be one of the first 20.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="font-body text-[#A1A1AA] max-w-sm mx-auto"
            style={{ fontSize: 'clamp(15px, 1.5vw, 17px)', lineHeight: 1.6 }}
          >
            60-day pilot. Full access. Direct line to our team.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeUp}
          className="max-w-md mx-auto rounded-2xl p-8 lg:p-10"
          style={{
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.07)',
          }}
        >
          {status === 'success' ? (
            <div className="text-center py-6">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{
                  background: 'rgba(45,212,191,0.1)',
                  border: '1px solid rgba(45,212,191,0.2)',
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2DD4BF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h3 className="font-display text-[#FAFAFA] text-xl font-semibold mb-2">
                Application received.
              </h3>
              <p className="font-body text-sm text-[#71717A]">
                We will be in touch within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Name"
                required
                value={formData.name}
                onChange={(e) => setFormData((d) => ({ ...d, name: e.target.value }))}
                className="w-full rounded-lg px-4 py-3 text-sm font-body text-[#FAFAFA] outline-none transition-colors duration-200 focus:border-[#2DD4BF]"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.07)',
                }}
              />

              <div>
                <input
                  type="email"
                  placeholder="Email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData((d) => ({ ...d, email: e.target.value }))}
                  onBlur={() => setEmailTouched(true)}
                  className="w-full rounded-lg px-4 py-3 text-sm font-body text-[#FAFAFA] outline-none transition-colors duration-200 focus:border-[#2DD4BF]"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: `1px solid ${emailTouched && !emailValid ? 'rgba(239,68,68,0.5)' : 'rgba(255,255,255,0.07)'}`,
                  }}
                />
                {emailTouched && !emailValid && (
                  <p className="font-body text-xs text-red-400 mt-1.5 ml-1">
                    Please enter a valid email address.
                  </p>
                )}
                {status === 'invalid-email' && (
                  <p className="font-body text-xs text-red-400 mt-1.5 ml-1">
                    Please enter a valid email address.
                  </p>
                )}
                {status === 'duplicate' && (
                  <p className="font-body text-xs text-amber-400 mt-1.5 ml-1">
                    This email is already registered for the pilot.
                  </p>
                )}
              </div>

              <input
                type="text"
                placeholder="Hotel name"
                value={formData.hotel}
                onChange={(e) => setFormData((d) => ({ ...d, hotel: e.target.value }))}
                className="w-full rounded-lg px-4 py-3 text-sm font-body text-[#FAFAFA] outline-none transition-colors duration-200 focus:border-[#2DD4BF]"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.07)',
                }}
              />

              <textarea
                placeholder="Message (optional)"
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData((d) => ({ ...d, message: e.target.value }))}
                className="w-full rounded-lg px-4 py-3 text-sm font-body text-[#FAFAFA] outline-none transition-colors duration-200 resize-y focus:border-[#2DD4BF]"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.07)',
                }}
              />

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full font-display font-semibold text-sm py-3.5 rounded-lg border-none cursor-pointer transition-colors duration-200 mt-1 hover:bg-[#0D9488] disabled:opacity-60 disabled:cursor-not-allowed"
                style={{
                  background: '#14B8A6',
                  color: '#09090B',
                  minHeight: '48px',
                }}
              >
                {status === 'loading' ? 'Submitting...' : 'Apply for the pilot'}
              </button>

              {status === 'error' && (
                <p className="font-body text-xs text-red-400 text-center">
                  Something went wrong. Please try again.
                </p>
              )}
            </form>
          )}

          <div className="text-center mt-5">
            <a
              href="mailto:info@armtechnologies.ltd"
              className="font-body text-xs text-[#2DD4BF] no-underline hover:underline"
            >
              info@armtechnologies.ltd
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
