import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import VzirHero from '../components/vzir/VzirHero';
import VzirDataSources from '../components/vzir/VzirDataSources';
import VzirHowItWorks from '../components/vzir/VzirHowItWorks';
import VzirPilotCTA from '../components/vzir/VzirPilotCTA';

export default function VzirPage() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const element = document.querySelector(location.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location]);

  return (
    <>
      <VzirHero />
      <VzirDataSources />
      <VzirHowItWorks />
      <VzirPilotCTA />
    </>
  );
}
