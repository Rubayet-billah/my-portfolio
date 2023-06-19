import React from "react";
import "./Project.css";
import { motion } from "framer-motion";

const Project = ({ project }) => {
  const { image, name, details, ratings } = project;
  return (
    <div className="wrapper bg-teal-200 rounded-lg antialiased text-gray-900 p-6 m-8 lg:m-0 shadow-teal-100 shadow-lg">
      <div>
        <img
          src={image}
          alt="randomImage"
          className="w-full object-cover object-center rounded-lg shadow-md"
        />

        <div className="relative px-4 -mt-16">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.8 }}
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            <div className="flex items-baseline">
              <span className="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full uppercase font-semibold tracking-wide">
                Live
              </span>
              <span className="bg-blue-200 text-teal-800 text-xs px-2 inline-block rounded-full uppercase font-semibold tracking-wide ml-1">
                Code
              </span>
              <span className="bg-green-200 text-teal-800 text-xs px-2 inline-block rounded-full uppercase font-semibold tracking-wide ml-1">
                Details
              </span>
            </div>

            <h4 className="mt-1 text-xl font-semibold uppercase leading-tight truncate">
              {name}
            </h4>

            <div className="mt-1">{details}</div>
            <div className="mt-4">
              <span className="text-teal-600 text-md font-semibold">
                {ratings}/5 ratings
              </span>
              <span className="text-sm text-gray-600">
                (based on N/A ratings)
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Project;
