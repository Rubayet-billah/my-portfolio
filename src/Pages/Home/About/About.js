import React from "react";
import {
  FiUser,
  FiMail,
  FiPhone,
  FiLinkedin,
  FiBook,
  FiDownload,
} from "react-icons/fi";
import profileImg from "../../../Images/profile.png";

const About = () => {
  return (
    <div className="min-h-screen py-12">
      <div
        data-aos="fade-left"
        className="w-fit mx-auto pr-2 md:pr-3 md:pb-3 border-b-4 border-r-4 md:border-b-8 md:border-r-8 my-5 md:my-12"
      >
        <h1
          data-aos="fade-right"
          className="text-2xl md:text-5xl font-bold text-center uppercase"
        >
          About Me
        </h1>
      </div>
      <div className="container mx-auto px-4">
        <div className=" shadow-lg rounded-lg p-8">
          <div className="flex flex-col md:flex-row items-center md:space-x-4">
            <div className="md:w-1/3 mb-4">
              {/* Image Section */}
              <img
                src={profileImg}
                alt="Your Name"
                className="w-full h-auto rounded-full max-w-xs mx-auto"
              />
            </div>
            <div className="md:w-2/3">
              <h1 className="text-3xl font-semibold uppercase mb-4">
                Hi There
              </h1>
              <p className="mb-4">
                I'm a passionate web developer with a strong foundation in
                front-end and back-end technologies. I love building web
                applications that are both functional and visually appealing.
              </p>
              <section className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex items-center">
                  <FiUser className="text-teal-300 mr-2" />
                  <div>
                    <h3 className="font-bold text-teal-300 uppercase">Name</h3>
                    <p>Rubayet Billah</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <FiMail className="text-teal-300 mr-2" />
                  <div>
                    <h3 className="font-bold text-teal-300 uppercase">Email</h3>
                    <p>rubayetbillah909@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <FiPhone className="text-teal-300 mr-2" />
                  <div>
                    <h3 className="font-bold text-teal-300 uppercase">Phone</h3>
                    <p>+8801875685814</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <FiLinkedin className="text-teal-300 mr-2" />
                  <div>
                    <h3 className="font-bold text-teal-300 uppercase">
                      LinkedIn
                    </h3>
                    <p>
                      <a
                        href="https://www.linkedin.com/in/rubayet-billah/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                      >
                        linkedin.com/in/rubayet-billah
                      </a>
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <FiBook className="text-teal-300 mr-2" />
                  <div>
                    <h3 className="font-bold text-teal-300 uppercase">
                      Education
                    </h3>
                    <p>Bachelor's in Physics</p>
                    <p>BSMR Science and Technology University</p>
                    <p>Graduated: N/A</p>
                  </div>
                </div>
              </section>
              <hr className="border border-gray-600 my-5" />
              <section className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-3">
                <button
                  className="flex items-center justify-center px-4 py-2 text-teal-300 border border-teal-300 hover:bg-teal-300 hover:text-white rounded-md transition duration-300 ease-in-out w-full md:w-auto"
                  onClick={() => {
                    // Add your contact action here
                  }}
                >
                  <FiMail className="mr-2" />
                  Contact Me
                </button>
                <button
                  className="flex items-center justify-center px-4 py-2 text-teal-300 border border-teal-300 hover:bg-teal-300 hover:text-white rounded-md transition duration-300 ease-in-out w-full md:w-auto"
                  onClick={() => {
                    // Add your download CV action here
                  }}
                >
                  <FiDownload className="mr-2" />
                  Download CV
                </button>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
