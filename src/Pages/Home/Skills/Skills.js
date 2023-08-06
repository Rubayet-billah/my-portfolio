import React from "react";
import Skill from "./Skill";

const Skills = () => {
  const skills = [
    { name: "HTML", progress: 95, color: "#E34F26" }, // Orange-red color for HTML
    { name: "CSS", progress: 90, color: "#1572B6" }, // Blue color for CSS
    { name: "Javascript", progress: 80, color: "#F7DF1E" }, // Yellow color for Javascript
    { name: "React JS", progress: 90, color: "#61DAFB" }, // Light blue color for React JS
    { name: "Node JS", progress: 80, color: "#68A063" }, // Green color for Node JS
    { name: "Express JS", progress: 80, color: "#000000" }, // Black color for Express JS
    { name: "MongoDB", progress: 80, color: "#4DB33D" }, // Green color for MongoDB
    { name: "Redux", progress: 95, color: "#764ABC" }, // Purple color for Redux
    { name: "TailwindCSS", progress: 90, color: "#38B2AC" }, // Teal color for TailwindCSS
    { name: "Bootstrap 5", progress: 70, color: "#563D7C" }, // Purple color for Bootstrap 5
    // { name: "React Router", progress: 80, color: "#CA4245" }, // Red color for React Router
    // { name: "Firebase", progress: 65, color: "#FFCB2B" }, // Yellow color for Firebase
    // { name: "Stripe", progress: 60, color: "#6772E5" }, // Blue color for Stripe
    // { name: "React Bootstrap", progress: 75, color: "#7952B3" }, // Purple color for React Bootstrap
  ];

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
          Skills
        </h1>
      </div>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {skills?.map((skill, idx) => (
          <Skill key={idx} skill={skill} />
        ))}
      </section>
    </div>
  );
};

export default Skills;
