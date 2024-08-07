"use client"; // This line indicates this code is intended for client-side execution in a Next.js environment

import React from "react";
import { coreValues } from "../_data/general";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const CoreValues = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div
      ref={ref}
      className="w-full flex flex-col items-center justify-center myPadX my-16"
    >
      {/* Mobile */}
      <div className={`w-full flex md:hidden items-center justify-center`}>
        <hr className={`border-2 w-2/12 border-black`} />
        <div className={`flex items-center justify-center`}>
          <h2 className="p-2 text-[24px] font-semibold">Core Values</h2>
        </div>
        <hr className={`border-2 w-2/12 border-black`} />
      </div>

      <div
        className={`md:flex md:flex-row flex flex-col gap-20 w-8/12 items-center justify-between py-10`}
      >
        {coreValues.slice(0, 3).map((core, index) => (
          <motion.div
            key={core.id}
            className="bg-[#D0FF55] flex justify-center items-center w-[200px] h-[200px] rotate-45 rounded-md"
            initial={{ y: 300, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1, rotate: 45 } : {}}
            exit={{ y: -300, opacity: 0 }}
            transition={{ duration: 1.3, type: "spring" }}
          >
            <div className={`-rotate-45 text-center p-3`}>
              <h2 className={`font-semibold text-[24px]`}>{core.title}</h2>
              <p>{core.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* PC */}
      <div className={`w-full hidden md:flex items-center justify-center`}>
        <hr className={`border-2 w-3/12 border-black`} />
        <div className={`flex w-2/12 items-center justify-center`}>
          <h2 className="p-3 text-[24px] font-semibold">Core Values</h2>
        </div>
        <hr className={`border-2 w-3/12 border-black`} />
      </div>

      {/* PC */}
      <div
        className={`md:flex md:flex-row flex flex-col gap-20 w-8/12 items-center justify-evenly py-10`}
      >
        {coreValues.slice(3, 5).map((core, index) => (
          <motion.div
            key={core.id}
            className="bg-[#D0FF55] flex justify-center items-center w-[200px] h-[200px] rotate-45 rounded-md"
            initial={{ y: -300, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1, rotate: 45 } : {}}
            exit={{ y: 300, opacity: 0 }}
            transition={{ duration: 1.3, type: "spring" }}
          >
            <div className={`-rotate-45 text-center p-3`}>
              <h2 className={`font-semibold text-[24px]`}>{core.title}</h2>
              <p>{core.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CoreValues;
