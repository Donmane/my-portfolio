
function Contact() {
  return (
    <section id="contact" className="py-20 px-6 max-w-4xl mx-auto w-full">
      <div className="bg-zinc-900/80 backdrop-blur-md border border-zinc-700/50 rounded-3xl p-8 md:p-12 text-white text-center shadow-xl flex flex-col items-center gap-6">
        <h2 className="text-4xl font-extrabold text-white tracking-tight">
          Let's work together
        </h2>
        <div className="w-full flex flex-col items-center gap-4">
          <h3 className="text-lg font-semibold text-zinc-400">Social Links</h3>
          <div className="flex flex-wrap justify-center gap-4 mt-2">
            <a 
              href="https://github.com/Donmane" 
              target="_blank" 
              rel="noreferrer" 
              className="bg-zinc-800 hover:bg-violet-600 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 border border-zinc-750 hover:border-violet-500 shadow-md transform hover:-translate-y-0.5"
            >
              GitHub
            </a>
            <a 
              href="https://www.linkedin.com/in/daniel-edith-agoye-30ba3a411" 
              target="_blank" 
              rel="noreferrer" 
              className="bg-zinc-800 hover:bg-violet-600 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 border border-zinc-755 hover:border-violet-500 shadow-md transform hover:-translate-y-0.5"
            >
              LinkedIn
            </a>
            <a 
              href="https://www.fiverr.com/danny_alvis/buying?source=avatar_menu_profile" 
              target="_blank" 
              rel="noreferrer" 
              className="bg-zinc-800 hover:bg-violet-600 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 border border-zinc-760 hover:border-violet-500 shadow-md transform hover:-translate-y-0.5"
            >
              Fiverr
            </a>
            <a 
              href="mailto:mdon85329@gmail.com?subject=Hello" 
              className="bg-violet-600 hover:bg-violet-750 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 border border-violet-500 shadow-md transform hover:-translate-y-0.5"
            >
              Send Email
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact