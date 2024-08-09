import React from "react";
import heroBanner from "/public/assets/home/hero-banner.png";
import ScrollDownButton from "@/components/UI/ScrollDownButton";
import ButtonWithArrow from "@/components/UI/ButtonWithArrow";

export const Hero = () => {
  return (
    <div
      id="focusElement"
      style={{ backgroundImage: `url(${heroBanner.src})` }}
      className="h-[90vh] sm:h-[90vh] z-0 bg-cover relative bg-bottom bg-no-repeat flex flex-col items-center justify-center text-txtPrime"
    >
      <div className="w-10/12 sm:w-11/12 lg:w-4/6 relative">
        <h1 className="text-[34px] sm:text-[60px] lg:text-[80px] font-extrabold text-center">
          Truth uncovered. Security delivered.
        </h1>
        <h2 className="text-[15px] md:text-[20px] font-semibold text-center my-7">
          When security feels uncertain, trust us to bring peace of mind.
        </h2>
        <ButtonWithArrow
          link="/contact-us"
          text="Contact Us Now"
          book={false}
        />
      </div>

      <ScrollDownButton link={"main-content"} />
    </div>
  );
};

export default Hero;
