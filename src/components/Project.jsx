import TiltedCard from './TiltedCard'

function Project() {
  return (
    <section id="projects" className="py-20 px-6 max-w-6xl mx-auto w-full flex flex-col">
      <h2 className="text-4xl font-extrabold text-white tracking-tight mb-12 text-center">
        Featured Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
        {/* Project 1 */}
        <div className="bg-zinc-900/80 backdrop-blur-md border border-zinc-700/50 rounded-2xl p-6 text-white flex flex-col justify-between shadow-lg hover:shadow-violet-500/10 transition-all duration-300 transform hover:-translate-y-1 h-full">
          <div className="flex justify-center w-full mb-6">
            <TiltedCard
              imageSrc="/src/assets/peerup.png"
              altText="PeerUp"
              captionText="PeerUp"
              containerHeight="220px"
              containerWidth="100%"
              imageHeight="220px"
              imageWidth="100%"
              rotateAmplitude={12}
              scaleOnHover={1.05}
              showTooltip
            />
          </div>
          <div className="flex flex-col flex-grow">
            <h3 className="text-xl font-bold text-white mb-2">PeerUp</h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-6 flex-grow">
              A student study help notice board where you can post what you're stuck on and connect with peers via email.
            </p>
          </div>
          <div className="flex items-center gap-4 mt-auto border-t border-zinc-800/80 pt-4">
            <a 
              href="https://peer-up-eight.vercel.app/" 
              target="_blank" 
              rel="noreferrer" 
              className="bg-violet-600 hover:bg-violet-700 text-white text-xs font-semibold py-2.5 px-4 rounded-full transition-colors flex items-center justify-center flex-1 text-center shadow-md shadow-violet-600/10"
            >
              Live Project
            </a>
            <a 
              href="https://github.com/Donmane/PeerUp" 
              target="_blank" 
              rel="noreferrer" 
              className="border border-zinc-700 hover:border-slate-300 hover:text-white text-slate-300 text-xs font-semibold py-2.5 px-4 rounded-full transition-colors flex items-center justify-center flex-1 text-center bg-zinc-800/50"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* Project 2 */}
        <div className="bg-zinc-900/80 backdrop-blur-md border border-zinc-700/50 rounded-2xl p-6 text-white flex flex-col justify-between shadow-lg hover:shadow-violet-500/10 transition-all duration-300 transform hover:-translate-y-1 h-full">
          <div className="flex justify-center w-full mb-6">
            <TiltedCard
              imageSrc="/src/assets/properaetherbook.png"
              altText="Aetherbook"
              captionText="Aetherbook"
              containerHeight="220px"
              containerWidth="100%"
              imageHeight="220px"
              imageWidth="100%"
              rotateAmplitude={12}
              scaleOnHover={1.05}
              showTooltip
            />
          </div>
          <div className="flex flex-col flex-grow">
            <h3 className="text-xl font-bold text-white mb-2">Aetherbook</h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-6 flex-grow">
              A role-based lecture room booking system with three dashboards for admins, lecturers, and students. Admins manage rooms and user access, lecturers book rooms, students view schedules.
            </p>
          </div>
          <div className="flex items-center gap-4 mt-auto border-t border-zinc-800/80 pt-4">
            <a 
              href="https://lecture-room-booking-app.vercel.app/" 
              target="_blank" 
              rel="noreferrer" 
              className="bg-violet-600 hover:bg-violet-700 text-white text-xs font-semibold py-2.5 px-4 rounded-full transition-colors flex items-center justify-center flex-1 text-center shadow-md shadow-violet-600/10"
            >
              Live Project
            </a>
            <a 
              href="https://github.com/Donmane/Lecture_room_booking_app" 
              target="_blank" 
              rel="noreferrer" 
              className="border border-zinc-700 hover:border-slate-300 hover:text-white text-slate-300 text-xs font-semibold py-2.5 px-4 rounded-full transition-colors flex items-center justify-center flex-1 text-center bg-zinc-800/50"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* Project 3 */}
        <div className="bg-zinc-900/80 backdrop-blur-md border border-zinc-700/50 rounded-2xl p-6 text-white flex flex-col justify-between shadow-lg hover:shadow-violet-500/10 transition-all duration-300 transform hover:-translate-y-1 h-full">
          <div className="flex justify-center w-full mb-6">
            <TiltedCard
              imageSrc="/src/assets/Designermaketplace.jpg"
              altText="Designora"
              captionText="Designora"
              containerHeight="220px"
              containerWidth="100%"
              imageHeight="220px"
              imageWidth="100%"
              rotateAmplitude={12}
              scaleOnHover={1.05}
              showTooltip
            />
          </div>
          <div className="flex flex-col flex-grow">
            <h3 className="text-xl font-bold text-white mb-2">Designora</h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-6 flex-grow">
              A demo marketplace built with React where clients can browse and hire designers, and designers can open and list their services. Built with React and local storage.
            </p>
          </div>
          <div className="flex items-center gap-4 mt-auto border-t border-zinc-800/80 pt-4">
            <a 
              href="https://designer-marketplace-psi.vercel.app/about" 
              target="_blank" 
              rel="noreferrer" 
              className="bg-violet-600 hover:bg-violet-700 text-white text-xs font-semibold py-2.5 px-4 rounded-full transition-colors flex items-center justify-center flex-1 text-center shadow-md shadow-violet-600/10"
            >
              Live Project
            </a>
            <a 
              href="https://github.com/Donmane/Designer-Marketplace" 
              target="_blank" 
              rel="noreferrer" 
              className="border border-zinc-700 hover:border-slate-300 hover:text-white text-slate-300 text-xs font-semibold py-2.5 px-4 rounded-full transition-colors flex items-center justify-center flex-1 text-center bg-zinc-800/50"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Project