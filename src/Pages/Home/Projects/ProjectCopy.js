import React from "react";
// import "./Project.css";

const ProjectCopy = ({ project, index }) => {
  const { image, name, details, description, ratings } = project;

  const indexSign = index % 2 === 0 ? -1 : 1;
  const projectTitleStyle = {
    display: "grid",
    placeItems: "center",
    position: "absolute",
    top: "15%",
    [indexSign === 1 ? "right" : "left"]: "50%",
  };

  return (
    <div
      className={`card w-3/4 md:w-96 relative ${indexSign === 1 && "ml-auto"}`}
    >
      <figure>
        <img
          src="https://static1.squarespace.com/static/5de1ec476b779f2d5a269a55/5de59cd08d3bc0294024082b/600af5c23baa0c79aeafeaa6/1614979719929/8.+Charge+Wall+copy.jpg?format=1500w"
          alt="Shoes"
        />
        {/* <img src={image} alt="Shoes" /> */}
      </figure>
      <div className="card-body px-0">
        <h2
          data-aos={indexSign === 1 ? "fade-right" : "fade-left"}
          // whileHover={{ scale: 1.1 }}
          // whileTap={{ scale: 0.8 }}
          // initial={{ x: -indexSign * 300, opacity: 0 }}
          // animate={{ x: 0, opacity: 1 }}
          // transition={{ ease: "easeOut", duration: 0.7 }}
          // exit={{ x: -300, opacity: 0 }}
          className="animate-text bg-gradient-to-r from-teal-500 via-white to-[#00deff] bg-clip-text text-transparent project-title text-2xl md:text-5xl uppercase font-bold w-3/4 md:w-full shadow-md"
          style={projectTitleStyle}
        >
          {name}
        </h2>
        <p className="text-xl">{details}</p>
      </div>
    </div>
  );
};

export default ProjectCopy;
