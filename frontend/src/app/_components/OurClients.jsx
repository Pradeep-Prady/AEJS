 

"use client";

import Heading from "@/components/UI/Heading";
import SubHeading from "@/components/UI/SubHeading";
import React from "react";

import Kovaitech from "/public/assets/our-clients/Kovaitech.webp";
import shobha from "/public/assets/our-clients/shobha.webp";
import abc from "/public/assets/our-clients/abc.webp";
import adhar from "/public/assets/our-clients/adhar.webp";
import aquaproof from "/public/assets/our-clients/aquaproof.webp";
import bragathi from "/public/assets/our-clients/bragathi.webp";
import GRC from "/public/assets/our-clients/GRC.webp";
import hrh from "/public/assets/our-clients/hrh.webp";
import royal from "/public/assets/our-clients/royal.webp";
import sabari from "/public/assets/our-clients/sabari.webp";
import thamarai from "/public/assets/our-clients/thamarai.webp";

import Image from "next/image";

import { animate, motion, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";
import useMeasure from "react-use-measure";

const MarqueeItem = ({ image }) => {
  return (
    <motion.div
      className="relative overflow-hidden h-[100px] md:h-[150px] min-w-[160px] md:min-w-[300px] md:max-w-auto rounded-xl flex justify-center items-center"
      key={image}
    >
      <Image src={image} alt={"Clients"} fill className="object-contain" />
    </motion.div>
  );
};

const OurClients = () => {
  const FAST_DURATION = 20;
  const SLOW_DURATION = 75;

  const [duration, setDuration] = useState(FAST_DURATION);
  let [ref, { width }] = useMeasure();

  const xTranslation = useMotionValue(0);

  const [mustFinish, setMustFinish] = useState(false);
  const [rerender, setRerender] = useState(false);

  const clientLogos = [
    shobha,
    Kovaitech,
    abc,
    adhar,
    aquaproof,
    bragathi,
    GRC,
    hrh,
    royal,
    sabari,
    thamarai,
  ];

  useEffect(() => {
    let controls;
    let totalWidth = width * 2; // considering the duplicated array
    let finalPosition = -width;

    if (mustFinish) {
      controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
        ease: "linear",
        duration: duration * (1 - xTranslation.get() / finalPosition),
        onComplete: () => {
          setMustFinish(false);
          setRerender(!rerender);
        },
      });
    } else {
      controls = animate(xTranslation, [0, -totalWidth], {
        ease: "linear",
        duration: duration,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0,
      });
    }

    return controls?.stop;
  }, [rerender, xTranslation, duration, width]);

  return (
    <div className="my-10 w-full overflow-hidden">
      <Heading heading={`Our Clients`} />
      <SubHeading heading={`In Diverse Sectors`} />

      <motion.div
        className="w-full flex gap-2 md:gap-0 my-5 md:my-10"
        style={{ x: xTranslation }}
        ref={ref}
        onHoverStart={() => {
          setMustFinish(true);
          setDuration(SLOW_DURATION);
        }}
        onHoverEnd={() => {
          setMustFinish(true);
          setDuration(FAST_DURATION);
        }}
      >
        {clientLogos.concat(clientLogos).map((image, index) => (
          <MarqueeItem key={index} image={image} />
        ))}
      </motion.div>
    </div>
  );
};

export default OurClients;
 
 