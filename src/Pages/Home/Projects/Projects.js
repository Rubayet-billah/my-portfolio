import React from "react";
import Project from "./Project";

const Projects = () => {
  return (
    <div>
      <section className="grid lg:grid-cols-3 md:grid-cols-2 gap-12">
        <Project />
        <Project />
        <Project />
      </section>
    </div>
  );
};

export default Projects;
