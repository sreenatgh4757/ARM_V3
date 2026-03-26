import { useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from './ui/AnimatedSection';
import GlassCard from './ui/GlassCard';
import AuroraBackground from './ui/AuroraBackground';

export default function PilotCTA() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    hotelName: '',
    rooms: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="pilot" className="relative py-32 bg-[#0C0A09] overflow-hidden">
      <AuroraBackground intensity="strong" />

      <div className="relative z-10 max-w-[900px] mx-auto px-6 lg:px-20">
        <AnimatedSection className="text-center mb-12">
          <p className="font-mono text-[11px] uppercase tracking-[4px] text-[#2DD4BF] mb-8">
            EARLY ACCESS
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-[#FAFAF9] mb-6">
            Be one of the first 20 hotels on Vzir.
          </h2>
          <p className="text-lg text-[#A8A29E] max-w-[640px] mx-auto leading-relaxed">
            We're offering a 90-day pilot programme to 20 independent hotels in the UK. Full access
            to Vzir, dedicated onboarding support, and a direct line to our product team. In
            exchange, we ask for honest feedback to shape the platform.
          </p>
        </AnimatedSection>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <GlassCard className="p-8 lg:p-10 max-w-[600px] mx-auto">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm text-[#A8A29E] mb-2">
                  Your name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-[rgba(250,250,249,0.03)] border border-[rgba(250,250,249,0.06)] text-[#FAFAF9] placeholder-[#78716C] focus:border-[rgba(45,212,191,0.3)] focus:outline-none transition-colors"
                  placeholder="Jane Smith"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm text-[#A8A29E] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-[rgba(250,250,249,0.03)] border border-[rgba(250,250,249,0.06)] text-[#FAFAF9] placeholder-[#78716C] focus:border-[rgba(45,212,191,0.3)] focus:outline-none transition-colors"
                  placeholder="jane@hotel.co.uk"
                />
              </div>

              <div>
                <label htmlFor="hotelName" className="block text-sm text-[#A8A29E] mb-2">
                  Hotel name
                </label>
                <input
                  type="text"
                  id="hotelName"
                  name="hotelName"
                  value={formData.hotelName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-[rgba(250,250,249,0.03)] border border-[rgba(250,250,249,0.06)] text-[#FAFAF9] placeholder-[#78716C] focus:border-[rgba(45,212,191,0.3)] focus:outline-none transition-colors"
                  placeholder="The Boutique Hotel"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm text-[#A8A29E] mb-2">
                  Message (optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-[rgba(250,250,249,0.03)] border border-[rgba(250,250,249,0.06)] text-[#FAFAF9] placeholder-[#78716C] focus:border-[rgba(45,212,191,0.3)] focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your hotel and what you'd like to achieve with Vzir..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 rounded-xl bg-[#14B8A6] text-[#0C0A09] font-medium hover:bg-[#0D9488] transition-all duration-300"
              >
                Apply for the pilot →
              </button>
            </form>

            <div className="mt-6 text-center space-y-2">
              <p className="text-sm text-[#78716C]">
                Or email directly:{' '}
                <a href="mailto:hello@armtechnologies.ltd" className="text-[#2DD4BF] hover:underline">
                  hello@armtechnologies.ltd
                </a>
              </p>
              <p className="text-[13px] text-[#78716C]">
                For PMS partnership enquiries, please mention your platform in the message.
              </p>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
