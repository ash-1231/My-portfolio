import React from "react";
import SkillHeading from "./SkillHeading";
import Bubble from "./Bubble";
import { h2 } from "framer-motion/client";

export default function Skills() {
  const programmingLanguages = ["C", "C++", "JavaScript", "Java","Python"];
  const technologies = ["React", "Node.js", "MongoDB", "TailwindCSS","ExpressJS","AnimeJS"];
  const tools = ["Git", "Github","VS Code","Reduxtoolkit"];

  const createSection = (title, items, glowColor) => (
    <div className="mb-16 flex flex-col items-center w-full max-w-5xl relative">
      <SkillHeading title={title} glowColor={glowColor} />
      <div className="flex flex-wrap justify-center items-center gap-6 relative w-full h-64 mt-6">
        {items.map((item) => (
          <Bubble key={item} name={item} />
        ))}
      </div>
    </div>
  );

  return (
    <section className="min-h-screen bg-black text-white px-8 py-9 flex flex-col items-center mb-0">
      {createSection("Programming Languages", programmingLanguages, "#22d3ee")}
      {createSection("Technologies / Frameworks", technologies, "#fbbf24")}
      {createSection("Tools", tools, "#fb7185")}
    </section>
  );
}
