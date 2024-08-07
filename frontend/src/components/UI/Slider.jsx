"use client";  

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import TestimonialsCard from "./TestimonialsCard";

const Slider = ({ lgChunkedTestimonials, smChunkedTestimonials }) => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const chunkedTestimonials = isSmallScreen
    ? smChunkedTestimonials
    : lgChunkedTestimonials;

  return (
    <Swiper
      className="h-full w-auto select-none overflow-hidden"
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 5000,
      }}
      pagination={{ clickable: true }}
      loop={true}
      modules={[Autoplay, Pagination, Navigation]}
    >
      {chunkedTestimonials.map((pair, index) => (
        <SwiperSlide key={index}>
          <div className="w-full grid lg:grid-cols-2 gap-5 lg:gap-10">
            {pair.map((testimonial, i) => (
              <TestimonialsCard testimonial={testimonial} key={i} />
            ))}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
