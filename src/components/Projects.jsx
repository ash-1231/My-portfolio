import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div className="bg-black min-h-screen flex flex-col items-center gap-10 py-10">
      <ProjectCard
        title="Eznotes"
        description="EzNotes is a simple and intuitive note-taking web app built with Next.js and Firebase, designed for quick and organized note management. It provides a clean interface with seamless authentication and real-time cloud storage"
        color="#00ff00"
      />
      <ProjectCard
        title="Blue Project"
        description="This is a blue-themed project."
        color="#00aaff"
      />
      <ProjectCard
        title="Red Project"
        description="This is a red-themed project."
        color="#ff3333"
      />
    </div>
  );
};

export default Projects;
