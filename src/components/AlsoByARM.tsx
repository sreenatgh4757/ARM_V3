import { ExternalLink } from 'lucide-react';
import AnimatedSection from './ui/AnimatedSection';
import GlassCard from './ui/GlassCard';

export default function AlsoByARM() {
  return (
    <section className="relative py-20 bg-[#0C0A09] border-t border-[rgba(250,250,249,0.06)]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-20">
        <AnimatedSection>
          <p className="text-sm font-medium text-[#78716C] text-center mb-8">
            Also by A.R.M Technologies
          </p>

          <div className="max-w-[500px] mx-auto">
            <GlassCard className="p-6" hover>
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-medium text-[#FAFAF9]">TheGigSearch</h3>
                  <div className="px-2 py-0.5 rounded-full bg-green-500/20 border border-green-500/30">
                    <span className="text-[10px] font-medium text-green-400 uppercase tracking-wider">
                      LIVE
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-sm text-[#A8A29E] mb-4 leading-relaxed">
                Flexible staffing marketplace for UK hospitality. Real-time shift matching,
                compliance management, and workforce tools.
              </p>

              <a
                href="#"
                className="inline-flex items-center gap-2 text-sm text-[#2DD4BF] hover:underline"
              >
                Visit TheGigSearch
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </GlassCard>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
