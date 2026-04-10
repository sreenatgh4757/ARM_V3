import VzirHero from '../components/vzir/VzirHero';
import VzirProblem from '../components/vzir/VzirProblem';
import VzirAIChat from '../components/vzir/VzirAIChat';
import VzirDataSources from '../components/vzir/VzirDataSources';
import VzirProactiveAlerts from '../components/vzir/VzirProactiveAlerts';
import VzirWhatsApp from '../components/vzir/VzirWhatsApp';
import VzirHowItWorks from '../components/vzir/VzirHowItWorks';
import VzirPilotCTA from '../components/vzir/VzirPilotCTA';

export default function VzirPage() {
  return (
    <>
      {/* 1. Hero — "Ask your hotel anything" with rotating real questions */}
      <VzirHero />

      {/* 2. Problem — 5 systems, 115 min wasted every morning */}
      <VzirProblem />

      {/* 3. Live AI Chat Demo — animated, cycling real Q&A */}
      <div id="ai-demo">
        <VzirAIChat />
      </div>

      {/* 4. Data Sources — what Vzir connects to */}
      <div id="data-sources">
        <VzirDataSources />
      </div>

      {/* 5. Proactive Alerts — Vzir alerts before you ask */}
      <VzirProactiveAlerts />

      {/* 6. WhatsApp Guest Journey — full automated messaging flow */}
      <VzirWhatsApp />

      {/* 7. How It Works — 3 steps */}
      <VzirHowItWorks />

      {/* 8. Pilot CTA — apply form */}
      <div id="pilot">
        <VzirPilotCTA />
      </div>
    </>
  );
}
