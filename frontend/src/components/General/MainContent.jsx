"use client";

import React from "react";
import vectorYellow from "/public/assets/home/Vector-yellow.png";
import vectorBlue from "/public/assets/home/Vector-blue.png";
import guard1 from "/public/assets/home/3.webp";

import guard2 from "/public/assets/home/guard-2.png";
import { PiDotOutlineFill } from "react-icons/pi";
import Image from "next/image";
import ButtonWithArrow from "../UI/ButtonWithArrow";
import { motion } from "framer-motion";

const MainContent = ({ link = "/", right = false, data, read }) => {
  return (
    <div
      className="w-full grid lg:grid-cols-2 myPadX gap-10 py-10 lg:py-20"
      id="main-content"
    >
      <div
        className={`w-full h-[300px] sm:h-[400px] lg:h-[600px] ${
          right ? "order-1 md:order-2" : "order-1"
        } relative`}
      >
        <Image
          className="absolute -bottom-8 sm:-bottom-24 lg:-bottom-44 right-0"
          src={vectorYellow.src}
          alt="vectorYellow"
          width={700}
          height={700}
        />
        <Image
          className="absolute -top-16 sm:-top-24 lg:-top-44 right-10"
          src={vectorBlue.src}
          alt="vectorBlue"
          width={600}
          height={600}
        />
        <motion.div
          initial={{ opacity: 0, x: right ? 100 : -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: right ? -100 : 100 }}
          transition={{ duration: 1.5, type: "spring" }}
          className="absolute bottom-5 sm:bottom-10 lg:bottom-20 right-0 w-[70%] sm:w-[55%] lg:w-[65%] h-auto"
        >
          <Image
            className="w-full h-auto"
            src={guard2.src}
            alt="guard2"
            width={200}
            height={200}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: right ? 100 : -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: right ? -100 : 100 }}
          transition={{ delay: 0.5, duration: 1.5, type: "spring" }}
          className="absolute top-5 sm:top-10 lg:top-20 w-[70%] sm:w-[55%] lg:w-[65%] h-auto"
        >
          <Image
            className="w-full h-auto rounded-xl"
            width={500}
            height={400}
            src={guard1.src}
            alt="guard1"
          />
        </motion.div>
      </div>
      <div
        className={` md:p-5 w-full ${right ? "order-2 md:order-1" : "order-2"}`}
      >
        <h3 className="text-myBlue md:tracking-wide sm:leading-5 lg:leading-10 font-bold text-[20px] sm:text-[28px] lg:text-[38px]">
          {data?.title}
        </h3>
        <h4 className="text-myGreen md:tracking-wide my-3 md:my-5 font-semibold text-[18px] sm:text-[20px] lg:text-[26px]">
          {data?.subTitle}
        </h4>
        <h5 className="md:text-[18px] font-semibold">{data?.content}</h5>
        <div className="py-2 px-1 md:p-3">
          {data?.datas?.map((item, index) => (
            <div className="flex items-start" key={index}>
              <span>
                <PiDotOutlineFill className="inline font-bold text-myBlue text-[22px]" />
              </span>
              <h5>
                <span className="text-[16px] font-semibold text-myBlue">
                  {item?.title} :
                </span>
                <span className="ml-2">{item?.description}</span>
              </h5>
            </div>
          ))}
          <ButtonWithArrow
            text="Learn More"
            link={link}
            className="my-5"
            read={read}
          />
        </div>
      </div>
    </div>
  );
};

export default MainContent;
