import { ArrowUp } from './Icons';
import Logo from './Logo';

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 px-6 md:px-12 border-t border-neutral-800/80 bg-[#08080A] mt-auto w-full z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand info */}
        <div className="flex items-center gap-3">
          <Logo className="w-8 h-8" />
          <div className="flex flex-col text-left">
            <span className="font-bold text-sm text-[#F5F5F7]">Daniel Edith-Agoye</span>
            <span className="text-xs text-neutral-400">Frontend Software Engineer</span>
          </div>
        </div>

        {/* Center Tagline */}
        <p className="text-xs text-neutral-400 text-center font-mono">
          React 19 & Tailwind CSS // Celestial Theme
        </p>

        {/* Back to Top & Copyright */}
        <div className="flex items-center gap-4">
          <span className="text-xs text-neutral-400">
            © {new Date().getFullYear()} Daniel Edith-Agoye
          </span>
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 hover:border-accent-sun text-neutral-400 hover:text-accent-sun transition-colors duration-200 cursor-pointer shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-sun"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;