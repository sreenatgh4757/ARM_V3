import Hero from '../components/home/Hero';
import ProductShowcase from '../components/home/ProductShowcase';
import GigSearchFootnote from '../components/home/GigSearchFootnote';
import BusinessTeaser from '../components/home/BusinessTeaser';
import HomeContact from '../components/home/HomeContact';

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProductShowcase />
      <GigSearchFootnote />
      <BusinessTeaser />
      <HomeContact />
    </>
  );
}
