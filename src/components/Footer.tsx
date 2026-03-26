import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative py-16 bg-[#0C0A09] border-t border-[rgba(250,250,249,0.06)]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-20">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h4 className="font-mono font-semibold text-[#FAFAF9] text-lg mb-4">
              A.R.M<span className="text-[#2DD4BF]">.</span>
            </h4>
            <p className="text-sm text-[#78716C] mb-2">A.R.M Technologies Limited</p>
            <p className="text-sm text-[#78716C] mb-2">Bournemouth, United Kingdom</p>
            <p className="text-sm text-[#78716C]">Est. 2023</p>
          </div>

          <div>
            <h5 className="text-sm font-medium text-[#A8A29E] uppercase tracking-wider mb-4">
              Links
            </h5>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('solution')}
                  className="text-sm text-[#78716C] hover:text-[#2DD4BF] transition-colors"
                >
                  Vzir
                </button>
              </li>
              <li>
                <a href="#" className="text-sm text-[#78716C] hover:text-[#2DD4BF] transition-colors">
                  TheGigSearch
                </a>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('pilot')}
                  className="text-sm text-[#78716C] hover:text-[#2DD4BF] transition-colors"
                >
                  Contact
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('pilot')}
                  className="text-sm text-[#78716C] hover:text-[#2DD4BF] transition-colors"
                >
                  Pilot Programme
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="text-sm font-medium text-[#A8A29E] uppercase tracking-wider mb-4">
              Connect
            </h5>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-[rgba(250,250,249,0.03)] border border-[rgba(250,250,249,0.06)] flex items-center justify-center hover:border-[rgba(45,212,191,0.3)] transition-colors"
              >
                <Github className="w-4 h-4 text-[#A8A29E]" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-[rgba(250,250,249,0.03)] border border-[rgba(250,250,249,0.06)] flex items-center justify-center hover:border-[rgba(45,212,191,0.3)] transition-colors"
              >
                <Linkedin className="w-4 h-4 text-[#A8A29E]" />
              </a>
              <a
                href="mailto:hello@armtechnologies.ltd"
                className="w-9 h-9 rounded-lg bg-[rgba(250,250,249,0.03)] border border-[rgba(250,250,249,0.06)] flex items-center justify-center hover:border-[rgba(45,212,191,0.3)] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#A8A29E]" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-[rgba(250,250,249,0.06)]">
          <p className="text-sm text-[#78716C] text-center">
            © 2026 A.R.M Technologies Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
