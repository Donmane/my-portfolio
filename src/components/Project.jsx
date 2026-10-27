import { useState } from 'react';
import { ExternalLink, Github } from './Icons';
import peerup from '../assets/peerup.png';
import aetherbook from '../assets/properaetherbook.png';
import designora from '../assets/designer.png';

const projects = [
  {
    id: 'peerup',
    designation: 'α - PEERUP',
    title: 'PeerUp',
    description: "A collaborative student study help notice board where students post challenges they are stuck on and connect directly with knowledgeable peers via email.",
    tags: ['React', 'Tailwind CSS', 'Supabase'],
    image: peerup,
    liveUrl: 'https://peer-up-eight.vercel.app/',
    githubUrl: 'https://github.com/Donmane/PeerUp',
    // Constellation coordinate percentages
    x: 22,
    y: 36,
  },
  {
    id: 'aetherbook',
    designation: 'β - AETHERBOOK',
    title: 'Aetherbook',
    description: 'A comprehensive role-based lecture room booking platform with granular dashboards for administrators, lecturers, and students to coordinate schedules smoothly.',
    tags: ['React', 'Tailwind CSS', 'Node.js'],
    image: aetherbook,
    liveUrl: 'https://lecture-room-booking-app.vercel.app/',
    githubUrl: 'https://github.com/Donmane/Lecture_room_booking_app',
    x: 50,
    y: 68,
  },
  {
    id: 'designora',
    designation: 'γ - DESIGNORA',
    title: 'Designora',
    description: 'An intuitive creative design marketplace where clients can browse, hire, and collaborate with designers who showcase their portfolios and service offerings.',
    tags: ['React', 'JavaScript', 'Responsive UI'],
    image: designora,
    liveUrl: 'https://designer-marketplace-psi.vercel.app/about',
    githubUrl: 'https://github.com/Donmane/Designer-Marketplace',
    x: 78,
    y: 32,
  }
];

function Project() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [hoveredIdx, setHoveredIdx] = useState(null);

  const currentProject = projects[hoveredIdx !== null ? hoveredIdx : activeIdx];

  const handleStarClick = (project, idx) => {
    setActiveIdx(idx);
    // Clicking opens the project live URL directly
    window.open(project.liveUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="projects" className="py-20 md:py-28 px-6 md:px-12 max-w-7xl mx-auto w-full flex flex-col">
      {/* Section Header */}
      <div className="flex flex-col items-start md:items-center text-left md:text-center mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#F5F5F7] tracking-tight">
          Project <span className="text-accent-sun">Constellation</span>
        </h2>
        <p className="text-sm sm:text-base text-neutral-400 max-w-xl mt-3 font-normal">
          Each project is a star in this interactive constellation. Hover a star to inspect project telemetry, and click to open the live application.
        </p>
      </div>

      {/* Lightweight Interactive Constellation Chart */}
      <div className="relative w-full rounded-2xl bg-neutral-900/60 border border-neutral-800/90 overflow-hidden shadow-2xl">
        
        {/* Subtle Constellation Coordinate Grid */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(143, 184, 255, 0.25) 1px, transparent 1px)',
            backgroundSize: '32px 32px'
          }}
          aria-hidden="true"
        />

        {/* Constellation Viewport */}
        <div className="relative w-full h-80 sm:h-96 md:h-[420px] select-none">
          
          {/* SVG Connecting Lines between Stars */}
          <svg 
            className="absolute inset-0 w-full h-full pointer-events-none" 
            aria-hidden="true"
          >
            {/* Ambient Background Star Lines */}
            <line
              x1={`${projects[0].x}%`}
              y1={`${projects[0].y}%`}
              x2={`${projects[1].x}%`}
              y2={`${projects[1].y}%`}
              stroke="#8FB8FF"
              strokeWidth="1.5"
              strokeOpacity="0.45"
              strokeDasharray="6 4"
            />
            <line
              x1={`${projects[1].x}%`}
              y1={`${projects[1].y}%`}
              x2={`${projects[2].x}%`}
              y2={`${projects[2].y}%`}
              stroke="#8FB8FF"
              strokeWidth="1.5"
              strokeOpacity="0.45"
              strokeDasharray="6 4"
            />
            <line
              x1={`${projects[0].x}%`}
              y1={`${projects[0].y}%`}
              x2={`${projects[2].x}%`}
              y2={`${projects[2].y}%`}
              stroke="#8FB8FF"
              strokeWidth="1"
              strokeOpacity="0.2"
              strokeDasharray="3 3"
            />

            {/* Highlighted Active Connection Lines */}
            {(hoveredIdx === 0 || activeIdx === 0 || hoveredIdx === 1 || activeIdx === 1) && (
              <line
                x1={`${projects[0].x}%`}
                y1={`${projects[0].y}%`}
                x2={`${projects[1].x}%`}
                y2={`${projects[1].y}%`}
                stroke="#FFB547"
                strokeWidth="2"
                strokeOpacity="0.75"
              />
            )}
            {(hoveredIdx === 1 || activeIdx === 1 || hoveredIdx === 2 || activeIdx === 2) && (
              <line
                x1={`${projects[1].x}%`}
                y1={`${projects[1].y}%`}
                x2={`${projects[2].x}%`}
                y2={`${projects[2].y}%`}
                stroke="#FFB547"
                strokeWidth="2"
                strokeOpacity="0.75"
              />
            )}
          </svg>

          {/* Interactive Project Star Nodes */}
          {projects.map((project, idx) => {
            const isHovered = hoveredIdx === idx;
            const isActive = activeIdx === idx;
            const isHighlighted = isHovered || isActive;

            return (
              <div
                key={project.id}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 group"
                style={{ left: `${project.x}%`, top: `${project.y}%` }}
              >
                {/* Star Button */}
                <button
                  type="button"
                  onClick={() => handleStarClick(project, idx)}
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onMouseLeave={() => setHoveredIdx(null)}
                  onFocus={() => {
                    setHoveredIdx(idx);
                    setActiveIdx(idx);
                  }}
                  onBlur={() => setHoveredIdx(null)}
                  aria-label={`Open project ${project.title}: ${project.description}`}
                  className="relative flex items-center justify-center p-3 rounded-full cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-sun transition-transform transform hover:scale-110 active:scale-95"
                >
                  {/* Outer Pulsing Halo */}
                  <span
                    className={`absolute rounded-full transition-all duration-300 ${
                      isHighlighted
                        ? 'w-14 h-14 bg-accent-sun/20 border border-accent-sun/60 animate-pulse'
                        : 'w-10 h-10 bg-accent-star/15 border border-accent-star/30'
                    }`}
                  />

                  {/* Mid Starlight Corona */}
                  <span
                    className={`absolute w-7 h-7 rounded-full transition-colors duration-300 ${
                      isHighlighted ? 'bg-accent-sun/40' : 'bg-accent-star/25'
                    }`}
                  />

                  {/* Core Star Node */}
                  <span
                    className={`relative w-3.5 h-3.5 rounded-full transition-all duration-300 shadow-md ${
                      isHighlighted
                        ? 'bg-accent-sun shadow-sun-glow scale-125'
                        : 'bg-accent-star shadow-star-glow'
                    }`}
                  />
                </button>

                {/* Star Designation Tag */}
                <div 
                  className={`absolute left-1/2 -translate-x-1/2 mt-2 px-2.5 py-1 rounded text-[11px] font-mono tracking-wider whitespace-nowrap transition-all duration-200 pointer-events-none ${
                    isHighlighted
                      ? 'bg-neutral-900 border border-accent-sun text-accent-sun font-bold shadow-lg'
                      : 'bg-neutral-900/80 border border-neutral-800 text-neutral-400'
                  }`}
                >
                  {project.designation}
                </div>

                {/* Floating Quick Telemetry Tooltip on Hover */}
                {isHovered && (
                  <div
                    className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-64 p-3.5 rounded-xl bg-[#08080A]/95 border border-accent-sun/60 shadow-2xl text-left pointer-events-none z-30 transition-all"
                    role="tooltip"
                  >
                    <div className="flex items-center justify-between text-xs font-mono text-accent-sun mb-1">
                      <span>STAR NODE</span>
                      <span className="text-[10px] text-neutral-400">CLICK TO OPEN</span>
                    </div>
                    <h4 className="text-sm font-bold text-[#F5F5F7]">{project.title}</h4>
                    <p className="text-xs text-neutral-300 line-clamp-2 mt-1 font-normal leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Detailed Project Telemetry Dock (Always shows active/inspected project) */}
        <div className="border-t border-neutral-800/90 bg-[#08080A]/90 p-6 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            {/* Left Column: Telemetry Specs */}
            <div className="lg:col-span-8 flex flex-col items-start text-left">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-accent-sun mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-sun" />
                <span>SELECTED STAR: {currentProject.designation}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#F5F5F7]">
                {currentProject.title}
              </h3>

              {/* Technology Tags (Starlight Blue accents) */}
              <div className="flex flex-wrap gap-2 my-3">
                {currentProject.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-xs font-mono font-medium text-accent-star px-2.5 py-0.5 rounded border border-accent-star/30 bg-neutral-900/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-normal max-w-2xl">
                {currentProject.description}
              </p>
            </div>

            {/* Right Column: Actions */}
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end w-full">
              {/* Primary Launch Action (Amber) */}
              <a
                href={currentProject.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-accent-sun hover:bg-accent-sun/90 text-[#08080A] font-bold py-3 px-5 rounded-lg shadow-sun-glow transition-all duration-200 text-sm cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-sun text-center"
              >
                <span>Launch Live Application</span>
                <ExternalLink className="w-4 h-4 text-[#08080A]" />
              </a>

              {/* Source Code Link */}
              <a
                href={currentProject.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 text-neutral-300 hover:text-accent-sun py-2 px-4 rounded-lg border border-neutral-800 hover:border-accent-star/40 bg-neutral-900/60 text-xs sm:text-sm font-semibold transition-colors text-center"
              >
                <Github className="w-4 h-4" />
                <span>Inspect Source Code</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Project;