import Hero from '../components/home/Hero';
import VirgoShowcase from '../components/home/VirgoShowcase';
import DashboardShot from '../components/home/DashboardShot';
import ConnectsStrip from '../components/home/ConnectsStrip';
import BeforeAfter from '../components/home/BeforeAfter';
import BentoFeatures from '../components/home/BentoFeatures';
import ArmBand from '../components/home/ArmBand';
import VirgoProblem from '../components/virgo/VirgoProblem';
import VirgoHowItWorks from '../components/virgo/VirgoHowItWorks';
import VirgoPilotCTA from '../components/virgo/VirgoPilotCTA';

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Say what's wrong before selling the fix — everything below is the
          answer to this section. */}
      <VirgoProblem />

      {/* The statement moment: the name at wordmark scale over a preview of the
          product itself — the morning report, then questions asked and
          answered. It carries the #virgo anchor the nav links to. */}
      <VirgoShowcase />

      {/* What it plugs into, then the same product as a full dashboard. */}
      <ConnectsStrip />
      <DashboardShot />

      {/* Then the change to a working morning, then the feature detail. */}
      <BeforeAfter />
      <div id="data-sources">
        <BentoFeatures />
      </div>

      {/* How to start, who built it, then the ask. */}
      <VirgoHowItWorks />
      <ArmBand />
      <div id="pilot">
        <VirgoPilotCTA />
      </div>
    </>
  );
}
