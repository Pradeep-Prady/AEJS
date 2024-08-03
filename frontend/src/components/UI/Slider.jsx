// Slider.jsx
"use client"; // This line indicates this code is intended for client-side execution in a Next.js environment

import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import TestimonialsCard from './TestimonialsCard';

const Slider = ({ lgChunkedTestimonials, smChunkedTestimonials }) => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);


  console.log(lgChunkedTestimonials,"lgChunkedTestimonials")



  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768); // Adjust breakpoint as needed
    };

    // Initial check on mount
    handleResize();

    // Listen to window resize events
    window.addEventListener('resize', handleResize);

    // Clean up event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Choose chunked testimonials based on screen size
  const chunkedTestimonials = isSmallScreen ? smChunkedTestimonials : lgChunkedTestimonials;

  return (
    <Swiper
      className="h-full w-auto select-none overflow-hidden"
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 5000,
        // disableOnInteraction: false,
      }}  
      pagination={{ clickable: true }}
      loop={true}
      modules={[Autoplay, Pagination, Navigation]}
    >
      {chunkedTestimonials.map((pair, index) => (
        <SwiperSlide key={index}>
          <div className="w-full grid lg:grid-cols-2 gap-5 lg:gap-10">
            {pair.map((testimonial,i) => (
              <TestimonialsCard  testimonial={testimonial} key={i} />
            ))}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
