import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Autoplay } from "swiper";
import image1 from "../../../Images/img1.jpg";
import image2 from "../../../Images/img2.jpg";
import image3 from "../../../Images/img3.jpg";
import image4 from "../../../Images/img4.jpg";
import image5 from "../../../Images/img5.jpg";
import image6 from "../../../Images/img6.jpg";

const BannerSwipper = () => {
  const bannerImages = [
    {
      id: 1,
      image: image1,
    },
    {
      id: 2,
      image: image2,
    },
    {
      id: 3,
      image: image3,
    },
    {
      id: 4,
      image: image4,
    },
    {
      id: 5,
      image: image5,
    },
    {
      id: 6,
      image: image6,
    },
  ];

  return (
    <Swiper
      spaceBetween={0}
      loop={true}
      slidesPerView={1}
      autoplay={{ delay: 1500 }}
      grabCursor={true}
      modules={[Autoplay]}
      className="mySwiper max-w-lg"
    >
      {bannerImages?.map((img) => (
        <SwiperSlide key={img.id}>
          <img
            className="w-full rounded-lg mix-blend-darken"
            src={img.image}
            alt=""
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default BannerSwipper;
