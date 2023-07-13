import React, { useState } from "react";
// import Project from "./Project";
import ProjectCopy from "./ProjectCopy";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  fetch("projects.json")
    .then((res) => res.json())
    .then((data) => setProjects(data));

  return (
    <div>
      <div
        data-aos="fade-left"
        className="w-fit mx-auto pr-2 md:pr-3 md:pb-3 border-b-4 border-r-4 md:border-b-8 md:border-r-8 my-5 md:my-12"
      >
        <h1
          data-aos="fade-right"
          className="text-2xl md:text-5xl font-bold text-center uppercase"
        >
          Projects
        </h1>
      </div>
      <section
        className="grid 
    gap-12"
      >
        {projects?.map((project, idx) => (
          // <Project project={project} />
          <ProjectCopy project={project} index={idx} />
        ))}
      </section>
    </div>
  );
};

export default Projects;
