
function About() {
  return (
    <section id="about" className="py-20 md:py-32 px-6 md:px-12 max-w-7xl mx-auto w-full">
      <div className="bg-zinc-900/80 backdrop-blur-md border border-zinc-700/50 rounded-3xl p-8 md:p-12 text-white shadow-xl flex flex-col gap-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight border-b border-zinc-800 pb-4 text-center md:text-left">
          About Me
        </h2>
        <p className="text-slate-300 text-lg leading-relaxed font-light">
          I am a Frontend Developer and a Software Engineering student at Lead City University Ibadan, I build awesome apps with React, Javascript, Tailwind, and Supabase from scratch to production with Vercel. I'm passionate about technology and contributing to what's next, and I will stop at nothing to achieve my goals.
        </p>
      </div>
    </section>
  )
}

export default About