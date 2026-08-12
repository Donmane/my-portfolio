import { useState } from 'react';
import GooeyNav from './GooeyNav';

const items = [
  { label: "Home", href: "#home", id: "home" },
  { label: "About", href: "#about", id: "about" },
  { label: "Skills", href: "#skills", id: "skills" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Contact", href: "#contact", id: "contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = (e, id) => {
    e.preventDefault();
    setIsOpen(false);
    const targetEl = document.getElementById(id);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Desktop Navigation (Floating Pill in Center) */}
      <header className="hidden md:flex fixed top-6 left-1/2 -translate-x-1/2 z-50 w-auto max-w-max px-6 py-2 bg-zinc-900/40 backdrop-blur-md border border-white/10 shadow-lg rounded-full items-center justify-center">
        <GooeyNav items={items} />
      </header>

      {/* Mobile Hamburger Button */}
      <div className="md:hidden fixed top-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
          className="p-2.5 bg-zinc-900/80 border border-white/10 rounded-full text-white shadow-lg backdrop-blur-md hover:bg-zinc-800 transition-colors focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6 text-white"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>

      {/* Mobile Sidebar Navigation Drawer Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
        />
      )}

      {/* Mobile Sidebar Navigation Drawer */}
      <div
        className={`fixed inset-y-0 right-0 w-64 bg-zinc-950 p-6 z-50 transform transition-transform duration-300 ease-in-out md:hidden flex flex-col ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Drawer Close Button */}
        <div className="flex justify-end mb-8">
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close navigation menu"
            className="p-1.5 text-zinc-400 hover:text-white transition-colors focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Drawer Navigation Links */}
        <nav className="flex flex-col gap-6">
          {items.map((item, index) => (
            <a
              key={index}
              href={item.href}
              onClick={(e) => handleLinkClick(e, item.id)}
              className="text-2xl font-semibold text-zinc-300 hover:text-white transition-colors py-2 border-b border-zinc-900/50"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}