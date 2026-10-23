import { ArrowUp } from './Icons';
import logoImg from '../assets/Logo.png';

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 px-6 md:px-12 border-t border-[#ACADBC]/15 bg-slate-950/90 backdrop-blur-md mt-auto w-full z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand info */}
        <div className="flex items-center gap-3">
          <img src={logoImg} alt="DE Logo" className="w-8 h-8 rounded-full border border-slate-700" />
          <div className="flex flex-col text-left">
            <span className="font-bold text-sm text-[#F8FAFC]">Daniel Edith-Agoye</span>
            <span className="text-xs text-[#ACADBC]">Frontend Software Engineer</span>
          </div>
        </div>

        {/* Center Tagline */}
        <p className="text-xs text-[#ACADBC] text-center">
          Crafted with React 19 & Tailwind CSS
        </p>

        {/* Back to Top & Copyright */}
        <div className="flex items-center gap-4">
          <span className="text-xs text-[#ACADBC]">
            © {new Date().getFullYear()} Daniel Edith-Agoye
          </span>
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="p-2 rounded-full bg-[#2B2D42] border border-[#ACADBC]/20 hover:border-[#78FECF] hover:bg-[#2B2D42]/80 text-[#ACADBC] hover:text-[#F8FAFC] transition-all duration-200 cursor-pointer shadow-sm hover:shadow-[0_0_12px_rgba(120,254,207,0.25)]"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;