import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Autoplay } from "swiper";
import "./BannerSwipper.css";
import profileImg from "../../../Images/profile.png";
// import image1 from "../../../Images/img1.jpg";
// import image2 from "../../../Images/img2.jpg";
// import image3 from "../../../Images/img3.jpg";
// import image4 from "../../../Images/img4.jpg";
// import image5 from "../../../Images/img5.jpg";
// import image6 from "../../../Images/img6.jpg";
// import image7 from "../../../Images/img7.png";
// import image8 from "../../../Images/img8.png";
// import image8 from "../../../Images/img8.png";

const BannerSwipper = () => {
  // const bannerImages = [
  //   {
  //     id: 1,
  //     image: image1,
  //   },
  //   {
  //     id: 2,
  //     image: image2,
  //   },
  //   {
  //     id: 3,
  //     image: image3,
  //   },
  //   {
  //     id: 4,
  //     image: image4,
  //   },
  //   {
  //     id: 5,
  //     image: image5,
  //   },
  //   {
  //     id: 6,
  //     image: image6,
  //   },
  //   {
  //     id: 7,
  //     image: image7,
  //   },
  //   {
  //     id: 8,
  //     image: image8,
  //   },
  // ];

  return (
    <div>
      <div className="max-w-md rounded-full animated-border-box-glow relative ">
        <div className="animated-border-box rounded-full p-12 absolute -z-1">
          <img className="w-full rounded-full" src={profileImg} alt="" />
        </div>
        {/* <Swiper
          spaceBetween={0}
          loop={true}
          slidesPerView={1}
          autoplay={{ delay: 1500 }}
          grabCursor={true}
          modules={[Autoplay]}
          className="mySwiper max-w-md rounded-full box glowing"
        >
          {bannerImages?.map((img) => (
            <SwiperSlide key={img.id}>
              <img className="w-full rounded-full" src={img.image} alt="" />
            </SwiperSlide>
          ))}
        </Swiper> */}
      </div>
    </div>
  );
};

export default BannerSwipper;
