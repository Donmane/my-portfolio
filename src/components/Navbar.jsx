import { useState, useEffect, useRef, useCallback } from 'react';
import { Menu, X, FolderGit2, User, Wrench, Mail, Home } from './Icons';
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
    }, 700);
  }, []);

  // Precise Scroll Spy to detect active section in viewport
  useEffect(() => {
    let rafId = null;

    const updateActiveSection = () => {
      if (isManualScrolling.current) return;

      if (window.scrollY < 100) {
        setActiveSectionIndex(0);
        return;
      }

      const isAtBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 70;
      if (isAtBottom) {
        setActiveSectionIndex(items.length - 1);
        return;
      }

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
    updateActiveSection();

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
    <header className="fixed top-0 inset-x-0 z-50 bg-[#08080A]/85 backdrop-blur-md border-b border-neutral-800/80 transition-all">
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        {/* Brand Monogram & Name */}
        <a
          href="#home"
          onClick={(e) => handleLinkClick(e, 'home', 0)}
          className="group flex items-center gap-3 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-sun rounded-md p-1 cursor-pointer"
        >
          <img
            src={logoImg}
            alt="Daniel Edith-Agoye Monogram"
            className="w-8 h-8 rounded-full border border-neutral-700/80 group-hover:border-accent-sun transition-colors"
          />
          <div className="flex flex-col">
            <span className="font-bold text-sm tracking-tight text-[#F5F5F7] group-hover:text-accent-sun transition-colors">
              Daniel <span className="text-neutral-400 font-normal">Edith-Agoye</span>
            </span>
          </div>
        </a>

        {/* Desktop Minimal Nav Links */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
          {items.map((item, index) => {
            const isActive = activeSectionIndex === index;
            return (
              <a
                key={index}
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.id, index)}
                className={`relative py-1 text-xs tracking-wider uppercase font-semibold transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-sun rounded ${
                  isActive
                    ? 'text-[#F5F5F7] font-bold'
                    : 'text-neutral-400 hover:text-accent-star'
                }`}
              >
                <span>{item.label}</span>
                {isActive && (
                  <span
                    className="absolute -bottom-1.5 left-0 w-full h-[2px] bg-accent-sun rounded-full"
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isOpen}
          className="md:hidden p-2 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-accent-sun hover:border-accent-star focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-sun transition-colors cursor-pointer"
        >
          {isOpen ? <X className="w-5 h-5 text-accent-sun" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 md:hidden"
          aria-hidden="true"
        />
      )}

      {/* Mobile Drawer Navigation Sidebar */}
      <aside
        className={`fixed inset-y-0 right-0 w-72 max-w-[85vw] bg-[#08080A] border-l border-neutral-800 p-6 z-50 transform transition-transform duration-300 ease-in-out md:hidden flex flex-col justify-between shadow-2xl ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-label="Mobile Navigation"
      >
        <div>
          {/* Drawer Header */}
          <div className="flex items-center justify-between pb-6 border-b border-neutral-800">
            <div className="flex items-center gap-2.5">
              <img src={logoImg} alt="Logo" className="w-7 h-7 rounded-full border border-neutral-700" />
              <span className="font-bold text-sm text-[#F5F5F7]">Navigation</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close navigation menu"
              className="p-1.5 text-neutral-400 hover:text-accent-sun rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-sun cursor-pointer"
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
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-neutral-900 border border-neutral-700 text-accent-sun font-semibold'
                      : 'text-neutral-400 hover:text-[#F5F5F7] hover:bg-neutral-900/60'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-accent-sun' : 'text-neutral-400'}`} />
                  <span>{item.label}</span>
                </a>
              );
            })}
          </nav>
        </div>

        {/* Drawer Footer */}
        <div className="pt-6 border-t border-neutral-800">
          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, 'contact', 4)}
            className="block w-full py-2.5 px-4 rounded-lg text-xs font-bold text-center bg-accent-sun text-[#08080A] hover:bg-accent-sun/90 shadow-sun-glow transition-all"
          >
            Get In Touch
          </a>
        </div>
      </aside>
    </header>
  );
}