import React from "react";
import Typewriter from "typewriter-effect";
import BannerSwipper from "./BannerSwipper";

const Banner = () => {
  return (
    <section className="grid lg:grid-cols-2 lg:gap-x-48 place-items-center mt-12 min-h-[70vh] uppercase">
      <div>
        <h1 className="lg:text-6xl lg:mb-4">
          Hi, I'm{" "}
          <span className="font-extrabold animate-text bg-gradient-to-r from-teal-500 via-white to-[#00deff] bg-clip-text text-transparent ">
            Rubayet
          </span>
        </h1>
        <h2 className="lg:text-4xl lg:mb-4">A web developer and good at</h2>
        <h1 className="font-bold text-2xl lg:text-7xl animate-text bg-gradient-to-r from-teal-500 via-white to-[#00deff] bg-clip-text text-transparent">
          <Typewriter
            options={{
              skipAddStyles: true,
              autoStart: true,
              loop: true,
              delay: 50,
              strings: [
                "React",
                "Javascript",
                "HTML",
                "CSS",
                "Node",
                "MongoDb",
              ],
            }}
          />
        </h1>
      </div>
      <div>
        {/* <img
          className="w-full rounded-lg"
          src="https://images.unsplash.com/photo-1585079542156-2755d9c8a094?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2dyYW1taW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt=""
        /> */}
        <BannerSwipper />
      </div>
    </section>
  );
};

export default Banner;
