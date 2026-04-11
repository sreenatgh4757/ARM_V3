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
      <VzirHero />
      <VzirProblem />
      <div id="ai-demo">
        <VzirAIChat />
      </div>
      <div id="data-sources">
        <VzirDataSources />
      </div>
      <VzirProactiveAlerts />
      <VzirWhatsApp />
      <VzirHowItWorks />
      <div id="pilot">
        <VzirPilotCTA />
      </div>
    </>
  );
}
