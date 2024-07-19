import React from "react";
import ButtonWithArrow from "@/components/UI/ButtonWithArrow";

const Solutions = ({ layer, bgImage, className, height, side }) => {
  return (
    <div
      className={`w-full  ${height} my-20 relative z-0  flex items-center`}
      style={{ backgroundImage: `url(${bgImage.src})` }}
    >
      {/* <div
        className={`w-full md:w-[80%] lg:w-[60%] h-full absolute ${className}    z-10 bg-no-repeat bg-cover flex items-center justify-center`}
        style={{ backgroundImage:  `url(${layer.src})` }}
      > */}
        {side === "left" ? (
          <div className="w-ful md:w-4/6 flex flex-col items-center justify-center">
            <h2 className="text-[18px] sm:text-[28px] lg:text-[38px] text-myWhite font-semibold">
              Unveiling Security Solutions
            </h2>
            <div className="mt-5">
              <h5 className="text-myLW md:text-[22px] py-2">Why Choose Us?</h5>
              <h5 className="text-myLW md:text-[22px] py-2">Our Core Values</h5>

              <h5 className="text-myLW text-[22px] py-2">
                Our Mission & Vision
              </h5>
              <h5 className="text-myLW text-[22px] py-2 pb-5">
                Diverse Industries We Serve
              </h5>
              <ButtonWithArrow text={`Read More`} />
            </div>
          </div>
        ) : (
          <div className="w-full md:w-4/6 flex flex-col items-center justify-center">
            <div className="mt-5 ">
              <h5 className="text-myLW text-[24px] sm:text-[24px] lg:text-[38px] font-semibold py-2">
                The Right People
              </h5>
              <h5 className="text-myLW text-[24px] sm:text-[24px] lg:text-[38px] font-semibold py-2">
                {" "}
                The Right Solutions.
              </h5>

              <h5 className="text-myLW  mb-2 text-[24px] sm:text-[24px] lg:text-[38px] font-semibold py-2">
                Get Started Today.
              </h5>

              <ButtonWithArrow text={`Read More`} />
            </div>
          </div>
        )}
      {/* </div> */}
      <div></div>
    </div>
  );
};

export default Solutions;
