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
import Navbar from "@/components/General/Navbar";
import { Footer } from "@/components/General/Footer";
import MainNavbar from "@/components/General/MainNavbar";
const page = () => {
  return (
    <div>
      {/* <Navbar/> */}

      <MainNavbar>
        <MainContent  side={"order-1"} data={mainContentData[1]} read={false} />
        <Certificates certificate={1}/>
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

      {/* <Footer /> */}
    </div>
  );
};

export default page;
