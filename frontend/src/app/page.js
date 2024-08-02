"use client";
import { Hero } from "./_components/Hero";
import MainContent from "@/components/General/MainContent";
import OurServices from "./_components/OurServices";
import Solutions from "./_components/Solutions";
import OurClients from "./_components/OurClients";
import TrustUs from "./_components/TrustUs";
import Map from "./_components/Map";
import { mainContentData } from "./_data/general";
 
import Values from "./_components/Values";
import Certificates from "./_components/Certificates";
import MainNavbar from "@/components/General/MainNavbar";

import bgImage1 from "/public/assets/security services/bgImage1.png";
import bgImage2 from "/public/assets/security services/bgImage2.png";
import bgImage3 from "/public/assets/security services/bgImage3.jpg";
import layer1 from "/public/assets/security services/solutions-2.png";
import layer2 from "/public/assets/security services/solutions-3.png";

import { useState, useEffect } from "react";

export default function Home({ params }) {
  const [screenSize, setScreenSize] = useState(getScreenSize());

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function getScreenSize() {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 576) {
        return "xs";
      } else if (window.innerWidth < 992) {
        return "sm";
      } else {
        return "md";
      }
    }
    return "md"; 
  }

  function handleResize() {
    setScreenSize(getScreenSize());
  }

  const imageSources = {
    xs: [bgImage1, bgImage3],
    sm: [bgImage1, bgImage3],
    md: [bgImage1, bgImage2],
  };

  // Ensure screenSize is valid
  const currentImages = imageSources[screenSize] || imageSources["md"];

  return (
    <>
      <MainNavbar>
        <div className="w-full h-auto">
          <Hero />
          <Values />
          <MainContent link="/about-us" data={mainContentData[0]} />
          <OurServices />
          <Solutions
            bgImage={bgImage1}
            layer={layer1}
            className="left-0"
            height="h-[320px] md:h-[300px] lg:h-[500px]"
            side="md:left"
          />
          <OurClients />
          <Certificates />
          <TrustUs />
          <Solutions
            bgImage={currentImages[1]}
            layer={layer2}
            className="right-0"
            height="h-[320px] md:h-[400px]"
            side="right"
          />
          <Map />
        </div>
      </MainNavbar>
    </>
  );
}
