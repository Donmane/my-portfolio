import { ExternalLink, Github } from './Icons';
import TiltedCard from './TiltedCard';
import peerup from '../assets/peerup.png';
import aetherbook from '../assets/properaetherbook.png';
import designora from '../assets/designer.png';

const projects = [
  {
    title: 'PeerUp',
    description: "A collaborative student study help notice board where students post challenges they are stuck on and connect directly with knowledgeable peers via email.",
    tags: ['React', 'Tailwind CSS', 'Supabase'],
    image: peerup,
    liveUrl: 'https://peer-up-eight.vercel.app/',
    githubUrl: 'https://github.com/Donmane/PeerUp',
  },
  {
    title: 'Aetherbook',
    description: 'A comprehensive role-based lecture room booking platform with granular dashboards for administrators, lecturers, and students to coordinate schedules smoothly.',
    tags: ['React', 'Tailwind CSS', 'Node.js'],
    image: aetherbook,
    liveUrl: 'https://lecture-room-booking-app.vercel.app/',
    githubUrl: 'https://github.com/Donmane/Lecture_room_booking_app',
  },
  {
    title: 'Designora',
    description: 'An intuitive creative design marketplace where clients can browse, hire, and collaborate with designers who showcase their portfolios and service offerings.',
    tags: ['React', 'JavaScript', 'Responsive UI'],
    image: designora,
    liveUrl: 'https://designer-marketplace-psi.vercel.app/about',
    githubUrl: 'https://github.com/Donmane/Designer-Marketplace',
  }
];

function Project() {
  return (
    <section id="projects" className="py-20 md:py-28 px-6 md:px-12 max-w-7xl mx-auto w-full flex flex-col">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-14">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#F8FAFC] tracking-tight">
          Featured <span className="text-[#78FECF]">Projects</span>
        </h2>
        <p className="text-sm sm:text-base text-[#ACADBC] max-w-xl mt-3 font-normal">
          A selection of real-world applications and responsive web products built with clean architecture and modern tools.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="group bg-slate-900/60 hover:bg-[#2B2D42]/60 backdrop-blur-md border border-[#ACADBC]/20 hover:border-[#ACFCD9]/50 rounded-2xl p-6 text-[#F8FAFC] flex flex-col justify-between shadow-md hover:shadow-2xl hover:shadow-[0_0_25px_rgba(172,252,217,0.15)] transition-all duration-300 transform hover:-translate-y-1.5 will-change-transform"
          >
            {/* Project Thumbnail with TiltedCard */}
            <div className="w-full mb-5 rounded-xl overflow-hidden bg-slate-950/80 border border-[#ACADBC]/20">
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
              <h3 className="text-xl font-bold text-[#F8FAFC] group-hover:text-[#ACFCD9] transition-colors mb-2">
                {project.title}
              </h3>

              {/* Technology Tags - Styled in Aquamarine */}
              {project.tags && (
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[11px] font-semibold text-[#78FECF] px-2.5 py-0.5 rounded-full bg-[#2B2D42]/80 border border-[#78FECF]/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Description */}
              <p className="text-[#ACADBC] text-sm leading-relaxed mb-6 flex-grow font-normal">
                {project.description}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-3 mt-auto border-t border-[#ACADBC]/15 pt-4">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-1.5 bg-[#0C7489] hover:bg-[#0C7489]/90 border border-transparent hover:border-[#ACFCD9] text-[#F8FAFC] text-xs font-bold py-2.5 px-4 rounded-full shadow-sm hover:shadow-[0_0_15px_rgba(172,252,217,0.35)] transition-all duration-300 flex-1 text-center cursor-pointer"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#F8FAFC]" />
              </a>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-1.5 bg-slate-900/80 hover:bg-[#2B2D42]/80 border border-[#ACADBC]/30 hover:border-[#78FECF] text-[#ACADBC] hover:text-[#F8FAFC] text-xs font-semibold py-2.5 px-4 rounded-full hover:shadow-[0_0_12px_rgba(120,254,207,0.2)] transition-all duration-300 flex-1 text-center cursor-pointer"
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