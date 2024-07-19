import React from "react";
import vision from "/public/assets/general/vision.png";
import mission from "/public/assets/general/mission.png";
import Image from "next/image";

const VisionMission = () => {
  return (
    <div className="w-full myPadX grid md:grid-cols-2 gap-10 md:gap-0 bg-[#F3F3F3] py-10">
      <div className="text-center flex flex-col items-center justify-center">
        <Image
          className={`w-auto h-[150px]`}
          width={200}
          height={150}
          src={vision.src}
          alt="vision"
        />
        <h2 className={`text-primary text-[22px] my-3 font-semibold`}>
          {" "}
          Vision{" "}
        </h2>
        <p className="text-center w-full md:w-7/12">
          To be a trusted leader in security and investigations, creating a
          safer and more secure world for our clients and communities.{" "}
        </p>
      </div>

      <div className="text-center flex flex-col items-center justify-center">

        <Image
          className={`w-auto h-[150px]`}
          width={200}
          height={150}
          src={mission.src}
          alt="vision"
        />
         <h2 className={`text-primary text-[22px] my-3 font-semibold`}> Mission </h2>
         <p className="text-center w-full md:w-7/12">


          We provide comprehensive security solutions and investigative services
          with integrity, excellence, and unwavering commitment to client safety
          and peace of mind.
        </p>
      </div>
      <div></div>
    </div>
  );
};

export default VisionMission;
