import React from "react";
import map from "/public/assets/map/map.png";
import Image from "next/image";
import Heading from "@/components/UI/Heading";
import SubHeading from "@/components/UI/SubHeading";
import LocationCard from "@/components/UI/LocationCard";
const Map = () => {
  return (
    <div className="w-full myPadX my-10 gap-10 grid lg:grid-cols-2">
      <div className={``}>
        <Image className="h-full w-auto object-cover" src={map} alt="map" />
      </div>
      <div>
        <Heading align={`text-left`} heading={`We've Got You Covered:  `} />

        <Heading
          align={`text-left`}
          heading={`  Your Neighborhood Security Partner`}
        />
        <SubHeading
          align={`text-left`}
          heading={`Our Diverse Services around Coimbatore`}
        />

        <div className={`my-3`}>
          <LocationCard
            outer={`bg-[rgb(162,89,255,0.5)]`}
            inner={"bg-[#A259FF] "}
            security={`12 Security Guards`}
            location={`Super Mart`}
            name={`Security Services`}
          />
          <LocationCard
            outer={`bg-[rgb(50,117,203,0.5)]`}
            inner={"bg-[rgb(50,117,203)] "}
            security={`Around 70 Surviellance Camera Installed`}
            location={`Street`}
            name={`Home security systems`}
          />
          <LocationCard
            outer={`bg-[rgb(203,50,50,0.5)]`}
            inner={"bg-[rgb(203,50,50)] "}
            security={`Fire safety alarm system`}
            location={`Malls`}
            name={`Fire Alarming systems`}
          />
         <LocationCard
            outer={`bg-[rgb(162,89,255,0.5)]`}
            inner={"bg-[#A259FF] "}
            security={`12 Security Guards`}
            location={`Super Mart`}
            name={`Security Services`}
          />
          <LocationCard
            outer={`bg-[rgb(50,117,203,0.5)]`}
            inner={"bg-[rgb(50,117,203)] "}
            security={`Around 70 Surviellance Camera Installed`}
            location={`Street`}
            name={`Home security systems`}
          />
        </div>
      </div>
    </div>
  );
};

export default Map;
