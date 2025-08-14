import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
 

function App() {
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      {/* Navbar */}
      <Navbar />

      {/* Main Sections */}
      <main>
        <section id="hero">
          <Hero />
        </section>

        <section id="about" className="py-10">
          <About />
        </section>

        <section id="projects" className="py-10 bg-black">
          <Projects />
        </section>

        <section id="skills" className="py-10">
          <Skills />
        </section>

        <section id="contact" className="py-10 bg-black">
          <Contact />
        </section>
       
      </main>
    </div>
  );
}

export default App;
