import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Galaxy from "./components/Galaxy";

function App() {
  return (
    <div className="relative min-h-screen bg-zinc-950 overflow-x-hidden">
      {/* Background Canvas */}
      <div className="fixed inset-0 w-screen h-screen z-0 pointer-events-none">
        <Galaxy />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col min-h-screen w-full">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Project />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;