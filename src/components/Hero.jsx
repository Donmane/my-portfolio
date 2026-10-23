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
      <h1 className="text-5xl sm:text-7xl md:text-8xl font-black text-[#F8FAFC] tracking-tight leading-[1.05] max-w-5xl">
        Daniel Edith-Agoye
      </h1>

      {/* Subheading with Aquamarine Tech Stack Badges */}
      <p className="text-xl sm:text-2xl md:text-3xl text-[#ACADBC] font-medium mt-6 max-w-3xl tracking-wide leading-snug">
        Frontend Developer —{' '}
        <span className="text-[#78FECF] font-bold">
          React
        </span>
        ,{' '}
        <span className="text-[#78FECF] font-bold">
          Tailwind
        </span>
        ,{' '}
        <span className="text-[#78FECF] font-bold">
          Supabase
        </span>
      </p>

      {/* Concise Bio */}
      <p className="text-base sm:text-lg md:text-xl text-[#ACADBC] mt-5 max-w-2xl leading-relaxed font-normal">
        Crafting fast, accessible, and responsive web applications with modern frontend engineering and intuitive user experiences.
      </p>

      {/* Call To Action Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 w-full sm:w-auto">
        {/* Primary Action: Cerulean CTA with Light Aquamarine Hover Glow */}
        <button
          onClick={() => scrollToSection('projects')}
          className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#0C7489] hover:bg-[#0C7489]/90 border border-transparent hover:border-[#ACFCD9] text-[#F8FAFC] font-bold py-3.5 px-8 rounded-full shadow-md hover:shadow-[0_0_25px_rgba(172,252,217,0.35)] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 text-sm sm:text-base cursor-pointer"
        >
          <FolderGit2 className="w-4 h-4 text-[#F8FAFC] transition-transform group-hover:rotate-12" />
          <span>View Projects</span>
          <ArrowDown className="w-4 h-4 text-[#F8FAFC] transition-transform group-hover:translate-y-0.5" />
        </button>

        {/* Secondary Action: Subtle Dark Glass with Pale Slate Border and Text */}
        <button
          onClick={() => scrollToSection('contact')}
          className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-slate-900/80 hover:bg-[#2B2D42]/80 text-[#ACADBC] hover:text-[#F8FAFC] font-semibold py-3.5 px-8 rounded-full border border-[#ACADBC]/30 hover:border-[#78FECF] hover:shadow-[0_0_15px_rgba(120,254,207,0.2)] backdrop-blur-md transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 text-sm sm:text-base cursor-pointer"
        >
          <Mail className="w-4 h-4 text-[#ACADBC] group-hover:text-[#78FECF] transition-colors" />
          <span>Contact Me</span>
        </button>
      </div>
    </section>
  );
}

export default Hero;
