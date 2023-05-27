import React from "react";
import "swiper/swiper-bundle.css";
import "./BannerSwipper.css";
import profileImg from "../../../Images/profile.png";

const BannerSwipper = () => {
  return (
    <div>
      <div className="max-w-md rounded-full animated-border-box-glow relative ">
        <div className="box flex justify-center items-center z-50">
          <img className="w-full" src={profileImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default BannerSwipper;
