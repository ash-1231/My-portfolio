import React from "react";
import A from "../assets/A.png"

export default function About() {
  return (
    <section className="min-h-screen bg-black text-white flex justify-center items-center px-8 py-9">
      <div className="relative p-8 rounded-lg max-w-4xl flex flex-col md:flex-row items-center gap-8">
        
        {/* Spark Animation */}
        <span className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <span className="absolute w-3 h-3 bg-teal-400 rounded-full shadow-[0_0_10px_3px_rgba(20,184,166,0.8)] animate-borderMove"></span>
        </span>

        {/* Image / Avatar */}
        <div className="flex-shrink-0 w-40 h-40 rounded-full overflow-hidden border-2 border-teal-400 shadow-lg">
          <img
            src={A}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text Content */}
        <div>
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-gray-300 mb-4">
            I’m a passionate developer who loves creating interactive, visually appealing, and functional applications. 
            Skilled in MERN stack, competitive programming, and building unique UI/UX experiences.
          </p>
          <p className="text-lg text-gray-300">
            When I’m not coding, you’ll find me exploring tech blogs, reading manga, or hitting the gym.
          </p>
        </div>
      </div>
    </section>
  );
}
