"use client";
import React, { useState } from "react";
import { CgMouse } from "react-icons/cg";
import { IoIosArrowRoundDown } from "react-icons/io";
const ScrollDownButton = ({ link }) => {
  const [hovered, setHovered] = useState(false);

  const handleScroll = () => {
    const targetElement = document.getElementById(link);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className={`border-[3px] absolute bottom-10 w-[50px] h-[50px] text-white cursor-pointer rounded-full flex flex-col items-center justify-center overflow-hidden z-10 transition-colors`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={handleScroll}
    >
      <div
        className={`relative z-0 w-full flex items-center justify-center ${
          !hovered ? "top-[0px]" : "top-[40px]"
        } duration-1000 ease-in-out`}
      >
        <CgMouse className={`duration-500 font-light w-[30px] h-[30px] z-30`} />
      </div>
      <div
        className={`absolute z-0 ${
          hovered ? "top-[8px]" : "-top-[40px]"
        } duration-1000 ease-in-out`}
      >
        <IoIosArrowRoundDown
          className={`duration-500 font-light w-[30px] h-[30px] z-30`}
        />
      </div>
    </div>
  );
};

export default ScrollDownButton;
