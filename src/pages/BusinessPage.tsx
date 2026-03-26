import BusinessHero from '../components/business/BusinessHero';
import WhatWeBuild from '../components/business/WhatWeBuild';
import TrackRecord from '../components/business/TrackRecord';
import HowWeWork from '../components/business/HowWeWork';
import BusinessContact from '../components/business/BusinessContact';

export default function BusinessPage() {
  return (
    <>
      <BusinessHero />
      <WhatWeBuild />
      <TrackRecord />
      <HowWeWork />
      <BusinessContact />
    </>
  );
}
