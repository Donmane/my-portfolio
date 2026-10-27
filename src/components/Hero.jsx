import { ArrowDown, ArrowUpRight, FolderGit2 } from './Icons';

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
      className="relative min-h-[85vh] flex items-center px-6 md:px-12 pt-28 pb-16 md:py-32 max-w-7xl mx-auto w-full"
    >
      {/* Left-Aligned Hero Content */}
      <div className="max-w-3xl text-left flex flex-col items-start z-10">
        
        {/* Main Headline - Daniel in accent-sun, Edith-Agoye in white on the second line */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight leading-[1.08]">
          <span className="block text-accent-sun">Daniel</span>
          <span className="block text-[#F5F5F7] whitespace-nowrap">Edith&#8209;Agoye</span>
        </h1>

        {/* Role Subtitle with neutral gray and starlight blue highlights */}
        <p className="text-base sm:text-lg md:text-xl text-neutral-400 font-medium mt-4 tracking-wide leading-snug">
          Frontend Developer —{' '}
          <span className="text-accent-star font-semibold">React</span>,{' '}
          <span className="text-accent-star font-semibold">Tailwind</span>,{' '}
          <span className="text-accent-star font-semibold">Supabase</span>
        </p>
        {/* Action Row - Visible Solid Amber Button & Aligned Text Link */}
        <div className="flex flex-row items-center gap-6 mt-8 w-full sm:w-auto">
          {/* Primary Action Button (Solid Amber) */}
          <button
            type="button"
            onClick={() => scrollToSection('projects')}
            className="inline-flex items-center justify-center gap-2.5 bg-accent-sun hover:bg-accent-sun/90 text-[#08080A] font-bold py-3.5 px-7 rounded-lg shadow-sun-glow hover:shadow-[0_0_25px_rgba(255,181,71,0.45)] transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 text-sm sm:text-base cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-sun focus-visible:ring-offset-2 focus-visible:ring-offset-[#08080A]"
          >
            <FolderGit2 className="w-4 h-4 text-[#08080A]" />
            <span>View Projects</span>
            <ArrowDown className="w-4 h-4 text-[#08080A]" />
          </button>

          {/* Secondary Action: "Get in touch" Text Link */}
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('contact');
            }}
            className="inline-flex items-center gap-1.5 text-[#F5F5F7] hover:text-accent-sun text-sm sm:text-base font-semibold transition-colors duration-200 group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-sun py-2 px-1 rounded"
          >
            <span>Get in touch</span>
            <ArrowUpRight className="w-4 h-4 text-accent-sun group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
