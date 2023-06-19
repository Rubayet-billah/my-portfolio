import React, { useState } from "react";
import Project from "./Project";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  fetch("projects.json")
    .then((res) => res.json())
    .then((data) => setProjects(data));

  return (
    <div>
      <section className="grid lg:grid-cols-3 md:grid-cols-2 gap-12">
        {projects?.map((project) => (
          <Project project={project} />
        ))}
      </section>
    </div>
  );
};

export default Projects;
