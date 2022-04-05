import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

export default function CustomSwiper({ items, count }) {
  return (
    <>
      <Swiper
        slidesPerView={5}
        spaceBetween={1}
        breakpoints={{
          640: {
            slidesPerView: 7,
            spaceBetween: 1,
          },
          768: {
            slidesPerView: 8,
            spaceBetween: 1,
          },
          1024: {
            slidesPerView: 9,
            spaceBetween: 1,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>{item}</SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
