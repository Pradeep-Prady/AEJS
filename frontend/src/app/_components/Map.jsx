import Heading from "@/components/UI/Heading";
import SubHeading from "@/components/UI/SubHeading";
import LocationCard from "@/components/UI/LocationCard";
import Image from "next/image"
import map from '/public/assets/map/Map.webp'
const Map = () => {
  return (
    <div className="w-full myPadX my-10 gap-10 grid lg:grid-cols-2">
      <div>
        
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
          {/* <LocationCard
            outer={`bg-[rgb(50,117,203,0.5)]`}
            inner={"bg-[rgb(50,117,203)] "}
            security={`Around 70 Surveillance Cameras Installed`}
            location={`Street`}
            name={`Home Security Systems`}
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Map;
