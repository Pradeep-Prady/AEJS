import React from "react";
import ButtonWithArrow from "@/components/UI/ButtonWithArrow";

const Solutions = ({ layer, bgImage, className, height, side }) => {
  return (
    <div
      className={`w-full  ${height} my-20 relative z-0 bg-cover bg-no-repeat flex items-center `}
      style={{ backgroundImage: `url(${bgImage.src})` }}
    >
      {side === "right" ? (
        <div className="w-full flex items-center justify-end">
          <div className="w-full md:w-3/6 flex flex-col items-center justify-center">
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
              THE <span className="font-black"> RIGHT PEOPLE </span>
            </h5>
            <h5 className="text-myLW text-[24px] sm:text-[24px] lg:text-[38px] font-semibold ">
              {" "}
              THE <span className="font-black"> RIGHT SOLUTIONS</span>
            </h5>

            <h5 className="text-myLW  mb-1 text-[24px] sm:text-[24px] lg:text-[38px] font-semibold ">
              GET <span className="font-black"> STARTED TODAY</span>
            </h5>

            <ButtonWithArrow text={`Read More`} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Solutions;
