import { GraduationCap, MapPin, Target, Terminal } from './Icons';
import logoImg from '../assets/Logo.png';

function About() {
  const quickFacts = [
    {
      icon: GraduationCap,
      label: 'Education',
      value: 'Software Engineering Student',
      subValue: 'Lead City University, Ibadan',
      accent: 'text-cyan-400'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Nigeria',
      subValue: 'Available for remote work worldwide',
      accent: 'text-teal-400'
    },
    {
      icon: Target,
      label: 'Core Focus',
      value: 'Modern Web Applications',
      subValue: 'Responsive layouts & interactive interfaces',
      accent: 'text-amber-400'
    }
  ];

  return (
    <section id="about" className="py-20 md:py-28 px-6 md:px-12 max-w-7xl mx-auto w-full">
      {/* Section Header - Clean (No Badges) */}
      <div className="flex flex-col items-center text-center mb-14">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-100 tracking-tight">
          About <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-amber-400 bg-clip-text text-transparent">Me</span>
        </h2>
        <p className="text-sm sm:text-base text-slate-400 max-w-xl mt-3 font-normal">
          Get to know the developer behind the code, background, and passion for web engineering.
        </p>
      </div>

      {/* 2-Column Responsive Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        {/* Left Column: Avatar & Visual Card */}
        <div className="lg:col-span-5 flex justify-center w-full">
          <div className="relative w-full max-w-sm group">
            {/* Glass Container */}
            <div className="relative bg-slate-900/70 backdrop-blur-xl border border-slate-800 hover:border-slate-700 hover:border-cyan-500/30 rounded-3xl p-8 flex flex-col items-center text-center shadow-xl transition-all duration-300">
              {/* Avatar Frame */}
              <div className="relative w-44 h-44 sm:w-52 sm:h-52 mb-6 flex items-center justify-center">
                <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden p-2 bg-slate-950 border border-slate-700 shadow-md">
                  <img
                    src={logoImg}
                    alt="Daniel Edith-Agoye Avatar Logo"
                    className="w-full h-full object-cover rounded-full transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-100 mb-1">
                Daniel Edith-Agoye
              </h3>
              <p className="text-sm text-cyan-400 font-medium mb-4">
                Frontend Software Engineer
              </p>

              {/* Mini Stat Chips */}
              <div className="grid grid-cols-2 gap-3 w-full pt-4 border-t border-slate-800 text-left">
                <div className="p-2.5 rounded-xl bg-slate-950/70 border border-slate-800">
                  <span className="block text-[11px] text-slate-400">Specialty</span>
                  <span className="text-xs font-semibold text-slate-200">React & Tailwind</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-950/70 border border-slate-800">
                  <span className="block text-[11px] text-slate-400">Delivery</span>
                  <span className="text-xs font-semibold text-slate-200">Zero-to-Deploy</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Bio & Quick Facts */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          {/* Main Introduction Card */}
          <div className="bg-slate-900/60 backdrop-blur-md border border-slate-800 hover:border-slate-700 hover:border-cyan-500/30 rounded-3xl p-6 sm:p-8 text-slate-100 shadow-lg transition-all duration-300">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-100 mb-4 flex items-center gap-2.5">
              <Terminal className="w-5 h-5 text-cyan-400" />
              <span>Building What's Next</span>
            </h3>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
              I am a Frontend Developer and a Software Engineering student at Lead City University Ibadan, I build awesome apps with React, Javascript, Tailwind, and Supabase from scratch to production with Vercel. I'm passionate about technology and contributing to what's next, and I will stop at nothing to achieve my goals.
            </p>
          </div>

          {/* Quick Facts List */}
          <div className="flex flex-col gap-3.5">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">
              Quick Facts
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
              {quickFacts.map((fact, idx) => {
                const FactIcon = fact.icon;
                return (
                  <div
                    key={idx}
                    className="group/fact bg-slate-900/60 hover:bg-slate-900 backdrop-blur-md border border-slate-800 hover:border-slate-700 hover:border-cyan-500/30 rounded-2xl p-4 transition-all duration-300 transform hover:-translate-y-1 shadow-md flex flex-col justify-between"
                  >
                    <div className="flex items-center gap-2.5 mb-2.5">
                      <div className="w-8 h-8 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 group-hover/fact:scale-105 transition-transform">
                        <FactIcon className={`w-4 h-4 ${fact.accent}`} />
                      </div>
                      <span className="text-xs font-medium text-slate-300">
                        {fact.label}
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-100 leading-snug">
                        {fact.value}
                      </p>
                      <p className="text-[11px] text-slate-400 mt-0.5 leading-tight">
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