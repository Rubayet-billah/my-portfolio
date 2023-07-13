import React from "react";
// import "./Project.css";

const ProjectCopy = ({ project, index }) => {
  const { image, name, details, ratings } = project;

  const indexSign = index % 2 === 0 ? -1 : 1;
  const projectTitleStyle = {
    display: "grid",
    placeItems: "center",
    position: "absolute",
    top: "40%",
    [indexSign === 1 ? "right" : "left"]: "50%",
  };

  return (
    <div
      className={`card w-3/4 md:w-96 shadow-xl image-full relative ${
        indexSign === 1 && "ml-auto"
      }`}
    >
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2
          data-aos={indexSign === 1 ? "fade-right" : "fade-left"}
          // whileHover={{ scale: 1.1 }}
          // whileTap={{ scale: 0.8 }}
          // initial={{ x: -indexSign * 300, opacity: 0 }}
          // animate={{ x: 0, opacity: 1 }}
          // transition={{ ease: "easeOut", duration: 0.7 }}
          // exit={{ x: -300, opacity: 0 }}
          className="animate-text bg-gradient-to-r from-teal-500 via-white to-[#00deff] bg-clip-text text-transparent project-title text-2xl md:text-5xl uppercase font-bold w-3/4 md:w-full"
          style={projectTitleStyle}
        >
          {name}
        </h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
      </div>
    </div>
  );
};

export default ProjectCopy;
