import { GraduationCap, MapPin, Target, Terminal } from './Icons';
import Logo from './Logo';

function About() {
  const quickFacts = [
    {
      icon: GraduationCap,
      label: 'Education',
      value: 'Software Engineering Student',
      subValue: 'Lead City University, Ibadan',
      accent: 'text-accent-star'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Nigeria',
      subValue: 'Available for remote work worldwide',
      accent: 'text-accent-sun'
    },
    {
      icon: Target,
      label: 'Core Focus',
      value: 'Modern Web Applications',
      subValue: 'Responsive layouts & reactive interfaces',
      accent: 'text-accent-star'
    }
  ];

  return (
    <section id="about" className="py-20 md:py-28 px-6 md:px-12 max-w-7xl mx-auto w-full">
      {/* Section Header */}
      <div className="flex flex-col items-start md:items-center text-left md:text-center mb-14">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#F5F5F7] tracking-tight">
          About <span className="text-accent-sun">Me</span>
        </h2>
        <p className="text-sm sm:text-base text-neutral-400 max-w-xl mt-3 font-normal">
          Get to know the developer behind the code, background, and passion for web engineering.
        </p>
      </div>

      {/* 2-Column Responsive Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        {/* Left Column: Avatar & Visual Card */}
        <div className="lg:col-span-5 flex justify-center w-full">
          <div className="relative w-full max-w-sm group">
            {/* Clean Neutral Container */}
            <div className="relative bg-neutral-900/70 border border-neutral-800 hover:border-accent-star/40 rounded-2xl p-8 flex flex-col items-center text-center shadow-xl transition-colors duration-300">
              {/* Celestial Avatar Frame */}
              <div className="relative w-44 h-44 sm:w-52 sm:h-52 mb-6 flex items-center justify-center">
                <Logo className="w-36 h-36 sm:w-44 sm:h-44 transform group-hover:scale-105 transition-transform duration-300 drop-shadow-lg" />
              </div>

              <h3 className="text-xl font-bold text-[#F5F5F7] mb-1">
                Daniel Edith-Agoye
              </h3>
              <p className="text-sm text-accent-star font-medium">
                Frontend Software Engineer
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Bio & Quick Facts */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          {/* Main Introduction Card */}
          <div className="bg-neutral-900/70 border border-neutral-800 hover:border-accent-star/40 rounded-2xl p-6 sm:p-8 text-[#F5F5F7] shadow-lg transition-colors duration-300">
            <h3 className="text-xl sm:text-2xl font-bold text-[#F5F5F7] mb-4 flex items-center gap-2.5">
              <Terminal className="w-5 h-5 text-accent-sun" />
              <span>Building What's Next</span>
            </h3>
            <p className="text-neutral-300 text-base sm:text-lg leading-relaxed font-normal">
              I am a Frontend Developer and a Software Engineering student at Lead City University Ibadan, I build awesome apps with React, Javascript, Tailwind, and Supabase from scratch to production with Vercel. I'm passionate about technology and contributing to what's next, and I will stop at nothing to achieve my goals.
            </p>
          </div>

          {/* Quick Facts List */}
          <div className="flex flex-col gap-3.5">
            <h4 className="text-xs font-mono font-bold text-neutral-400 uppercase tracking-wider ml-1">
              Quick Facts
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
              {quickFacts.map((fact, idx) => {
                const FactIcon = fact.icon;
                return (
                  <div
                    key={idx}
                    className="group/fact bg-neutral-900/70 hover:bg-neutral-900 border border-neutral-800 hover:border-accent-star/40 rounded-xl p-4 transition-all duration-200 shadow-md flex flex-col justify-between"
                  >
                    <div className="flex items-center gap-2.5 mb-2.5">
                      <div className="w-8 h-8 rounded-lg bg-neutral-950 border border-neutral-800 flex items-center justify-center group-hover/fact:border-accent-star/40 transition-colors">
                        <FactIcon className={`w-4 h-4 ${fact.accent}`} />
                      </div>
                      <span className="text-xs font-medium text-neutral-400">
                        {fact.label}
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-[#F5F5F7] leading-snug">
                        {fact.value}
                      </p>
                      <p className="text-[11px] text-neutral-400 mt-0.5 leading-tight">
                        {fact.subValue}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;