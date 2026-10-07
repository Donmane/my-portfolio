import { ExternalLink, Github } from './Icons';
import TiltedCard from './TiltedCard';
import peerup from '../assets/peerup.png';
import aetherbook from '../assets/properaetherbook.png';
import designora from '../assets/designer.png';

const projects = [
  {
    title: 'PeerUp',
    description: "A collaborative student study help notice board where students post challenges they are stuck on and connect directly with knowledgeable peers via email.",
    image: peerup,
    liveUrl: 'https://peer-up-eight.vercel.app/',
    githubUrl: 'https://github.com/Donmane/PeerUp',
  },
  {
    title: 'Aetherbook',
    description: 'A comprehensive role-based lecture room booking platform with granular dashboards for administrators, lecturers, and students to coordinate schedules smoothly.',
    image: aetherbook,
    liveUrl: 'https://lecture-room-booking-app.vercel.app/',
    githubUrl: 'https://github.com/Donmane/Lecture_room_booking_app',
  },
  {
    title: 'Designora',
    description: 'An intuitive creative design marketplace where clients can browse, hire, and collaborate with designers who showcase their portfolios and service offerings.',
    image: designora,
    liveUrl: 'https://designer-marketplace-psi.vercel.app/about',
    githubUrl: 'https://github.com/Donmane/Designer-Marketplace',
  }
];

function Project() {
  return (
    <section id="projects" className="py-20 md:py-28 px-6 md:px-12 max-w-7xl mx-auto w-full flex flex-col">
      {/* Section Header - Clean (No Badges) */}
      <div className="flex flex-col items-center text-center mb-14">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-100 tracking-tight">
          Featured <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-amber-400 bg-clip-text text-transparent">Projects</span>
        </h2>
        <p className="text-sm sm:text-base text-slate-400 max-w-xl mt-3 font-normal">
          A selection of real-world applications and responsive web products built with clean architecture and modern tools.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="group bg-slate-900/60 hover:bg-slate-900/90 backdrop-blur-md border border-slate-800/80 hover:border-slate-700 hover:border-cyan-500/30 rounded-2xl p-6 text-slate-100 flex flex-col justify-between shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1.5 will-change-transform"
          >
            {/* Project Thumbnail with TiltedCard (No floating tags) */}
            <div className="w-full mb-5 rounded-xl overflow-hidden bg-slate-950/80 border border-slate-800/80">
              <TiltedCard
                imageSrc={project.image}
                altText={project.title}
                containerHeight="220px"
                containerWidth="100%"
                imageHeight="220px"
                imageWidth="100%"
                rotateAmplitude={8}
                scaleOnHover={1.03}
                showTooltip={false}
              />
            </div>

            {/* Project Info */}
            <div className="flex flex-col flex-grow">
              <h3 className="text-xl font-bold text-slate-100 group-hover:text-cyan-300 transition-colors mb-3">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow font-normal">
                {project.description}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-3 mt-auto border-t border-slate-800/80 pt-4">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-1.5 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 text-xs font-bold py-2.5 px-4 rounded-full shadow-sm hover:shadow-[0_0_15px_rgba(245,158,11,0.35)] transition-all duration-300 flex-1 text-center cursor-pointer"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-950" />
              </a>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-1.5 bg-slate-900/80 hover:bg-slate-850 border border-slate-700/60 hover:border-cyan-400 text-slate-300 hover:text-cyan-300 text-xs font-semibold py-2.5 px-4 rounded-full hover:shadow-[0_0_12px_rgba(6,182,212,0.2)] transition-all duration-300 flex-1 text-center cursor-pointer"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Project;