import { useState, useEffect, useRef, useCallback } from 'react';
import { Menu, X, FolderGit2, User, Wrench, Mail, Home } from './Icons';
import GooeyNav from './GooeyNav';
import logoImg from '../assets/Logo.png';

const items = [
  { label: 'Home', href: '#home', id: 'home', icon: Home },
  { label: 'About', href: '#about', id: 'about', icon: User },
  { label: 'Skills', href: '#skills', id: 'skills', icon: Wrench },
  { label: 'Projects', href: '#projects', id: 'projects', icon: FolderGit2 },
  { label: 'Contact', href: '#contact', id: 'contact', icon: Mail },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSectionIndex, setActiveSectionIndex] = useState(0);
  const isManualScrolling = useRef(false);
  const manualScrollTimer = useRef(null);

  // Smooth scroll to a target section with temporary scroll spy lock
  const scrollToSection = useCallback((id, index) => {
    setActiveSectionIndex(index);
    isManualScrolling.current = true;
    if (manualScrollTimer.current) clearTimeout(manualScrollTimer.current);

    const targetEl = document.getElementById(id);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth' });
    }

    manualScrollTimer.current = setTimeout(() => {
      isManualScrolling.current = false;
    }, 850);
  }, []);

  // Precise Scroll Spy to detect active section in viewport
  useEffect(() => {
    let rafId = null;

    const updateActiveSection = () => {
      if (isManualScrolling.current) return;

      // 1. If near the very top of the page, section 0 ('Home') is active
      if (window.scrollY < 100) {
        setActiveSectionIndex(0);
        return;
      }

      // 2. If scrolled near the bottom of the page, the last section ('Contact') is active
      const isAtBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 70;
      if (isAtBottom) {
        setActiveSectionIndex(items.length - 1);
        return;
      }

      // 3. Focal line at 35% of viewport height
      const focalLine = window.innerHeight * 0.35;

      for (let i = 0; i < items.length; i++) {
        const el = document.getElementById(items[i].id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= focalLine && rect.bottom > focalLine) {
            setActiveSectionIndex(i);
            return;
          }
        }
      }

      // 4. Fallback: closest section above focal line
      for (let i = items.length - 1; i >= 0; i--) {
        const el = document.getElementById(items[i].id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= focalLine) {
            setActiveSectionIndex(i);
            return;
          }
        }
      }
    };

    const handleScroll = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(updateActiveSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    updateActiveSection(); // Initial check on mount

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', handleScroll);
      if (manualScrollTimer.current) clearTimeout(manualScrollTimer.current);
    };
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleLinkClick = (e, id, index) => {
    e.preventDefault();
    setIsOpen(false);
    scrollToSection(id, index);
  };

  return (
    <>
      {/* Desktop Floating Navigation Header */}
      <header className="hidden md:flex fixed top-5 left-1/2 -translate-x-1/2 z-50 w-auto px-3 py-1.5 bg-slate-950/80 backdrop-blur-xl border border-slate-800 hover:border-slate-700 shadow-[0_4px_30px_rgba(0,0,0,0.6)] rounded-full items-center justify-center transition-all duration-300">
        <GooeyNav 
          items={items} 
          activeSectionIndex={activeSectionIndex}
          onItemClick={(item, index) => {
            scrollToSection(item.id, index);
          }}
        />
      </header>

      {/* Mobile Top App Bar */}
      <div className="md:hidden fixed top-0 inset-x-0 z-50 px-5 py-3.5 flex items-center justify-between bg-slate-950/80 backdrop-blur-xl border-b border-slate-800">
        {/* Brand Logo & Name */}
        <button
          onClick={(e) => handleLinkClick(e, 'home', 0)}
          className="flex items-center gap-2.5 text-left focus:outline-none cursor-pointer"
        >
          <img src={logoImg} alt="DE Logo" className="w-8 h-8 rounded-full border border-slate-700" />
          <span className="font-bold text-sm tracking-tight text-[#F8FAFC]">
            Daniel Edith-Agoye
          </span>
        </button>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
          className="p-2 bg-slate-900 border border-slate-800 rounded-full text-[#ACADBC] hover:text-[#F8FAFC] hover:border-[#78FECF] shadow-md backdrop-blur-md transition-colors focus:outline-none cursor-pointer"
        >
          {isOpen ? <X className="w-5 h-5 text-[#78FECF]" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/75 backdrop-blur-md z-40 md:hidden"
        />
      )}

      {/* Mobile Drawer Navigation Sidebar */}
      <aside
        className={`fixed inset-y-0 right-0 w-72 max-w-[85vw] bg-slate-950 border-l border-slate-800 p-6 z-50 transform transition-transform duration-300 ease-in-out md:hidden flex flex-col justify-between backdrop-blur-2xl shadow-2xl will-change-transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div>
          {/* Drawer Header */}
          <div className="flex items-center justify-between pb-6 border-b border-slate-800">
            <div className="flex items-center gap-2.5">
              <img src={logoImg} alt="Logo" className="w-7 h-7 rounded-full border border-slate-700" />
              <span className="font-bold text-sm text-[#F8FAFC]">Navigation</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close navigation menu"
              className="p-1.5 text-[#ACADBC] hover:text-[#F8FAFC] rounded-lg transition-colors focus:outline-none cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Drawer Links */}
          <nav className="flex flex-col gap-2 mt-6">
            {items.map((item, index) => {
              const Icon = item.icon;
              const isActive = activeSectionIndex === index;
              return (
                <a
                  key={index}
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.id, index)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-sm transition-all duration-200 ${
                    isActive
                      ? 'bg-[#2B2D42] border border-[#78FECF]/40 text-[#78FECF] font-semibold shadow-sm'
                      : 'text-[#ACADBC] hover:text-[#F8FAFC] hover:bg-[#2B2D42]/40 border border-transparent'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-[#78FECF]' : 'text-[#ACADBC]'}`} />
                  <span>{item.label}</span>
                </a>
              );
            })}
          </nav>
        </div>

        {/* Drawer Footer */}
        <div className="pt-6 border-t border-slate-800 flex flex-col gap-3">
          <button
            onClick={(e) => handleLinkClick(e, 'contact', 4)}
            className="w-full bg-[#0C7489] hover:bg-[#0C7489]/90 hover:shadow-[0_0_15px_rgba(172,252,217,0.35)] text-[#F8FAFC] font-bold py-2.5 px-4 rounded-xl text-xs text-center shadow-md cursor-pointer transition-all border border-transparent hover:border-[#ACFCD9]"
          >
            Get In Touch
          </button>
        </div>
      </aside>
    </>
  );
}