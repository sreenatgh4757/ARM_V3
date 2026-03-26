import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

type NavLink = {
  name: string;
  id: string;
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  const navLinks: NavLink[] = [
    { name: "Vzir", id: "solution" },
    { name: "Features", id: "features" },
    { name: "How it works", id: "how-it-connects" },
    { name: "Pilot programme", id: "pilot" },
    { name: "Contact", id: "pilot" },
  ];

  return (
    <>
      {/* NAVBAR */}
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[rgba(12,10,9,0.8)] backdrop-blur-[20px] border-b border-[rgba(250,250,249,0.06)]"
            : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-20 py-5 flex items-center justify-between">
          
          {/* LOGO */}
          <div className="font-mono font-semibold text-[#FAFAF9] text-lg tracking-tight">
            A.R.M<span className="text-[#2DD4BF]">.</span>
          </div>

          {/* DESKTOP NAV */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`text-sm transition-colors duration-200 ${
                  link.name === "Contact"
                    ? "text-[#2DD4BF]"
                    : "text-[#A8A29E] hover:text-[#FAFAF9]"
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* DESKTOP CTA */}
          <div className="hidden lg:block">
            <button
              onClick={() => scrollToSection("pilot")}
              className="px-6 py-2.5 rounded-full border border-[#14B8A6] text-[#14B8A6] text-sm hover:bg-[#14B8A6] hover:text-[#0C0A09] transition-all duration-300"
            >
              Partner with us
            </button>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            className="lg:hidden text-[#FAFAF9]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* BACKDROP */}
            <div
              className="absolute inset-0 bg-[#0C0A09]/95 backdrop-blur-sm"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* DRAWER */}
            <motion.div
              className="absolute right-0 top-0 bottom-0 w-[280px] bg-[rgba(12,10,9,0.98)] border-l border-[rgba(250,250,249,0.06)] p-8"
              initial={{ x: 280 }}
              animate={{ x: 0 }}
              exit={{ x: 280 }}
              transition={{ type: "spring", damping: 25 }}
            >
              <div className="flex flex-col gap-6 mt-20">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className={`text-base text-left transition-colors duration-200 ${
                      link.name === "Contact"
                        ? "text-[#2DD4BF]"
                        : "text-[#A8A29E] hover:text-[#FAFAF9]"
                    }`}
                  >
                    {link.name}
                  </button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}