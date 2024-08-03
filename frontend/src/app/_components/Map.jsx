import React from "react";
import Heading from "@/components/UI/Heading";
import SubHeading from "@/components/UI/SubHeading";
import LocationCard from "@/components/UI/LocationCard";

const Map = () => {
  return (
    <div className="w-full myPadX my-10 gap-10 grid lg:grid-cols-2">
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235.84045417794374!2d76.96698309667646!3d11.021636698108656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85856f87b1957%3A0xd105877fe7b73364!2sDeva%20Anbu%20Selvam%20Complex%2C%2097%2C%205th%20St%20Ext%2C%205th%20Street%20Extension%2C%20Doctor&#39;s%20Colony%2C%20Gandhipuram%2C%20Coimbatore%2C%20Tamil%20Nadu%20641012!5e1!3m2!1sen!2sin!4v1722664378264!5m2!1sen!2sin"
          width="100%"
          height="450"
          className={`w-full h-full`}
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        {/* <Image className="h-full w-auto object-cover" src={map} alt="map" /> */}
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
            security={`Around 70 Surveillance Cameras Installed`}
            location={`Street`}
            name={`Home Security Systems`}
          />
          <LocationCard
            outer={`bg-[rgb(203,50,50,0.5)]`}
            inner={"bg-[rgb(203,50,50)] "}
            security={`Fire Safety Alarm System`}
            location={`Malls`}
            name={`Fire Alarming Systems`}
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
            security={`Around 70 Surveillance Cameras Installed`}
            location={`Street`}
            name={`Home Security Systems`}
          />
        </div>
      </div>
    </div>
  );
};

export default Map;
