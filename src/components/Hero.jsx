import { ArrowDown, Mail, FolderGit2 } from './Icons';

function Hero() {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-[85vh] flex flex-col items-center justify-center text-center px-6 md:px-12 pt-32 sm:pt-40 md:pt-44 pb-16 md:pb-24 max-w-5xl mx-auto w-full"
    >
      {/* Main Headline - Bold, Crisp High-Contrast Typography */}
      <h1 className="text-5xl sm:text-7xl md:text-8xl font-black text-slate-100 tracking-tight leading-[1.05] max-w-5xl">
        Daniel Edith-Agoye
      </h1>

      {/* Subheading with Warm Galactic & Cyan Nebula Color Highlights */}
      <p className="text-xl sm:text-2xl md:text-3xl text-slate-300 font-medium mt-6 max-w-3xl tracking-wide leading-snug">
        Frontend Developer —{' '}
        <span className="bg-gradient-to-r from-cyan-400 to-teal-300 bg-clip-text text-transparent font-bold">
          React
        </span>
        ,{' '}
        <span className="bg-gradient-to-r from-teal-300 to-cyan-400 bg-clip-text text-transparent font-bold">
          Tailwind
        </span>
        ,{' '}
        <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent font-bold">
          Supabase
        </span>
      </p>

      {/* Concise Bio */}
      <p className="text-base sm:text-lg md:text-xl text-slate-400 mt-5 max-w-2xl leading-relaxed font-normal">
        Crafting fast, accessible, and responsive web applications with modern frontend engineering and intuitive user experiences.
      </p>

      {/* Call To Action Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 w-full sm:w-auto">
        {/* Primary Action: Warm Amber-to-Orange Gradient Button */}
        <button
          onClick={() => scrollToSection('projects')}
          className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-bold py-3.5 px-8 rounded-full shadow-md hover:shadow-[0_0_25px_rgba(245,158,11,0.4)] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 text-sm sm:text-base cursor-pointer"
        >
          <FolderGit2 className="w-4 h-4 text-slate-950 transition-transform group-hover:rotate-12" />
          <span>View Projects</span>
          <ArrowDown className="w-4 h-4 text-slate-950 transition-transform group-hover:translate-y-0.5" />
        </button>

        {/* Secondary Action: Dark Glassmorphism with Cyan Hover Accent */}
        <button
          onClick={() => scrollToSection('contact')}
          className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-slate-900/80 hover:bg-slate-850 text-slate-200 hover:text-cyan-300 font-semibold py-3.5 px-8 rounded-full border border-slate-700/60 hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(6,182,212,0.25)] backdrop-blur-md transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 text-sm sm:text-base cursor-pointer"
        >
          <Mail className="w-4 h-4 text-slate-400 group-hover:text-cyan-400 transition-colors" />
          <span>Contact Me</span>
        </button>
      </div>
    </section>
  );
}

export default Hero;
