import React from "react";

const Skill = ({ skill }) => {
  const { name, progress, color } = skill;

  const progressStyle = {
    width: `${progress}%`,
    background: color ? color : "green", // Use the provided color prop or default to green if not provided
  };

  return (
    <div>
      <p className="text-xl md:text-2xl font-bold uppercase mb-2">{name}</p>
      <div className="w-full bg-slate-500 rounded-full">
        <div
          className="h-full font-bold rounded-full text-center drop-shadow-md shadow-black"
          style={progressStyle}
        >
          {progress}%
        </div>
      </div>
    </div>
  );
};

export default Skill;
