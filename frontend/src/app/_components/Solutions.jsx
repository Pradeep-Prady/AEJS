import React from "react";
import ButtonWithArrow from "@/components/UI/ButtonWithArrow";

const Solutions = ({ layer, bgImage, className, height, side }) => {
  return (
    <div
      className={`w-full  ${height} my-20 relative z-0 bg-cover bg-no-repeat flex items-center `}
      style={{ backgroundImage: `url(${bgImage.src})` }}
    >
      {/* <div
        className={`w-full md:w-[80%] lg:w-[60%] h-full absolute ${className}    z-10 bg-no-repeat bg-cover flex items-center justify-center`}
        style={{ backgroundImage:  `url(${layer.src})` }}
      > */}
        {side === "left" ? (

          <div className="w-full flex items-center justify-end"> 
          <div className="w-full md:w-3/6 flex flex-col items-center justify-center">
            {/* <h2 className="text-[18px] sm:text-[28px] lg:text-[38px] text-myWhite font-semibold">
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
            </div> */}

<div className="mt-5 ">
              <h5 className="text-myLW text-[24px] sm:text-[24px] lg:text-[38px] font-semibold ">
               TOTAL <span className="font-black"> PROTECTION</span>  
              </h5>
              <h5 className="text-myLW text-[24px] sm:text-[24px] lg:text-[38px] font-semibold ">
                {" "}
                TOTAL <span className="font-black"> SECURITY</span>  

              </h5>

              <h5 className="text-myLW  mb-1 text-[24px] sm:text-[24px] lg:text-[38px] font-semibold ">
              TOTAL <span className="font-black"> PEACE OF MIND</span>  

              </h5>

              <ButtonWithArrow text={`Read More`} />
            </div>
            </div>

          </div>
        ) : (
          <div className="w-full md:w-2/6 flex flex-col items-center justify-center">
            <div className="mt-5 ">
              <h5 className="text-myLW text-[24px] sm:text-[24px] lg:text-[38px] font-semibold ">
               TOTAL <span className="font-black"> PROTECTION</span>  
              </h5>
              <h5 className="text-myLW text-[24px] sm:text-[24px] lg:text-[38px] font-semibold ">
                {" "}
                TOTAL <span className="font-black"> SECURITY</span>  

              </h5>

              <h5 className="text-myLW  mb-1 text-[24px] sm:text-[24px] lg:text-[38px] font-semibold ">
              TOTAL <span className="font-black"> PEACE OF MIND</span>  

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
