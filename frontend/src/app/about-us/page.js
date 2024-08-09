import MainContent from "@/components/General/MainContent";
import React from "react";
import { mainContentData } from "../_data/general";
import Certificates from "../_components/Certificates";
import CoreValues from "../_components/CoreValues";
import VisionMission from "../_components/VisionMission";
import OurClients from "../_components/OurClients";
import TrustUs from "../_components/TrustUs";
import Solutions from "../_components/Solutions";
import bgImage2 from "/public/assets/security services/bgImage2.png";
import layer2 from "/public/assets/security services/solutions-3.png";
import MainNavbar from "@/components/General/MainNavbar";
const page = () => {
  return (
    <div>
      <MainNavbar>
        <div className="mt-20 hidden">
          <h1 className="text-[24px] sm:text-[30px] lg:text-[40px] font-bold text-center">
            AEJSINFO: 15 Years of Expertise in Security Services & Protection
          </h1>
          <h2 className="text-[15px] md:text-[20px] font-semibold text-center my-7">
            Your Security Solutions Partner
          </h2>
        </div>
        <MainContent side={"order-1"} data={mainContentData[1]} read={false} />
        <Certificates certificate={1} />
        <CoreValues />
        <VisionMission />
        <OurClients />
        <TrustUs />
        <Solutions
          bgImage={bgImage2}
          layer={layer2}
          className={`right-0   `}
          height={`h-[400px]`}
          side={`right`}
        />
      </MainNavbar>
    </div>
  );
};

export default page;
