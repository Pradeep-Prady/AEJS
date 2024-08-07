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
        To be the best security services provider organization in Coimbatore by being the benchmark for safety, trust, and client satisfaction. 

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


         Our mission is to offer our clientele the best security services for their property and person's safety as well as be their source of comfort. Our mission is to perform our activities with utmost professionalism and integrity by providing our services meeting and/or exceeding customers' expectations and expectations, with the help of innovation and feedback. 

        </p>
      </div>
      <div></div>
    </div>
  );
};

export default VisionMission;
