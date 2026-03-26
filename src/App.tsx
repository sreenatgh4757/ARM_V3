import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/layout/ScrollToTop';
import HomePage from './pages/HomePage';
import VzirPage from './pages/VzirPage';
import GigSearchPage from './pages/GigSearchPage';
import ConsultingPage from './pages/ConsultingPage';

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > window.innerHeight);
    };

    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Router>
      <div className="min-h-screen bg-[#09090B] text-[#FAFAFA] overflow-x-hidden">
        <div
          className="custom-cursor hidden lg:block"
          style={{
            left: `${cursorPosition.x}px`,
            top: `${cursorPosition.y}px`,
          }}
        />

        <ScrollToTop />
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/vzir" element={<VzirPage />} />
          <Route path="/thegigsearch" element={<GigSearchPage />} />
          <Route path="/consulting" element={<ConsultingPage />} />
          <Route path="/business" element={<ConsultingPage />} />
        </Routes>

        <Footer />

        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              onClick={scrollToTop}
              className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-[rgba(250,250,249,0.03)] border border-[rgba(250,250,249,0.06)] backdrop-blur-sm flex items-center justify-center hover:border-[rgba(45,212,191,0.3)] hover:bg-[rgba(45,212,191,0.05)] transition-all duration-300"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              whileHover={{ y: -2 }}
            >
              <ArrowUp className="w-5 h-5 text-[#2DD4BF]" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;
