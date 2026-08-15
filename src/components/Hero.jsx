function Hero() {
  return (
    <section id="home" className="py-20 md:py-32 px-6 md:px-12 max-w-7xl mx-auto w-full flex flex-col items-center justify-center text-center min-h-[90vh]">
      <h1 className="text-4xl md:text-7xl font-extrabold text-white tracking-tight leading-tight text-center">
        Edith-Agoye Daniel Olamide
      </h1>
      <p className="text-xl md:text-2xl text-purple-300 font-semibold mt-6 tracking-wide text-center">
        Frontend Developer · Building for the web
      </p>
      <p className="text-lg text-gray-300 mt-2 max-w-xl text-center">
        I build things that work.
      </p>
      <div className="flex flex-col md:flex-row gap-4 mt-8 w-full md:w-auto">
        <button
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="w-full md:w-auto text-center bg-violet-600 hover:bg-violet-700 text-white font-bold py-3.5 px-8 rounded-full shadow-lg hover:shadow-violet-600/30 transition-all duration-300 transform hover:-translate-y-0.5 will-change-transform"
        >
          Contact Me
        </button>
        <button
          onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          className="w-full md:w-auto text-center border-2 border-white/20 hover:border-violet-500 hover:text-white text-gray-300 font-bold py-3.5 px-8 rounded-full transition-all duration-300 transform hover:-translate-y-0.5 bg-transparent will-change-transform"
        >
          View my Projects
        </button>
      </div>
    </section>
  );
}

export default Hero;
