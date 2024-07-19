import Image from "next/image";
import React from "react";
import logo from "/public/assets/general/logo.png";
import { LuPhone } from "react-icons/lu";
import { MdOutlineMail } from "react-icons/md";
import { GrLocation } from "react-icons/gr";
import Link from "next/link";
import { navBarData } from "@/app/_data/general";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";

import { FaYoutube } from "react-icons/fa";
export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-[#63636325]  myPadX w-full">
      <div className="   w-full  lg:flex gap-10   items-start  py-5">
        <div className="w-full lg:w-[20%] flex flex-col items-start justify-start">
          <Image
            className={`w-auto h-[70px] md:h-[80px] lg:h-[100px]`}
            alt="logo"
            src={logo}
          />
          <p className=" leading-7 text-justify">
            {" "}
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Consectetur in voluptatibus excepturi totam minima quo illo corporis
            itaque neque impedit labore eum necessitatibus cupiditate ab debitis
            laboriosam dolorem ipsa ut quam ducimus eaque quae, reiciendis eos?
            Nostrum
          </p>

          <div className={`flex  w-full gap-5 text-[22px] my-5`}>
            <FaFacebook className="cursor-pointer hover:text-myGreen" />
            <FaXTwitter className="cursor-pointer hover:text-myGreen" />
            <BsInstagram className="cursor-pointer hover:text-myGreen" />
            <FaLinkedin className="cursor-pointer hover:text-myGreen" />
            <FaYoutube className="cursor-pointer hover:text-myGreen" />
          </div>
        </div>
        <div className="flex w-full lg:w-[40%]   flex-col items-start justify-start relative h-full ">
          <div className="h-[70px] md:h-[80px] lg:h-[100px] flex items-center ">
            <h2 className="text-primary   text-[20px] md:text-[24px] font-bold  ">
              Our Services
            </h2>{" "}
          </div>

          <div className="w-full   sm:flex gap- items-start justify-end">
            <div className="md:w-[40%] flex flex-col gap-2">
              {navBarData[1]?.subMenu?.map((item) => (
                <Link
                  href={item.path}
                  className="  md:text-[16px]   my-1 "
                >
                  {item.title}
                </Link>
              ))}
            </div>

            <div className="md:w-[60%]  my-2 md:my-0 flex flex-col gap-2">
              {navBarData[2]?.subMenu?.map((item) => (
                <Link
                  href={item.path}
                  className="  md:text-[16px]   my-1 "
                >
                  {item.title}
                </Link>
              ))}

              {navBarData[3]?.subMenu?.map((item) => (
                <Link
                  href={item.path}
                  className=" md:text-[16px]  my-1 "
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="sm:flex gap-10 w-full lg:w-[40%]">
          <div className="flex w-full sm:w-[50%] lg:w-[40%]  flex-col items-start justify-start relative h-full">
            <div className="h-[70px] md:h-[80px] lg:h-[100px] flex items-center ">
              <h2 className="text-primary text-[20px] md:text-[24px] font-bold">
                Quick Links
              </h2>
            </div>
            <div className=" my-[10px] flex flex-col gap-2">
              <Link
                href={"/about-us"}
                className="  md:text-[16px]     "
              >
                About Us
              </Link>

              <Link
                href={"/career"}
                className="  md:text-[16px]   "
              >
                {" "}
                Career{" "}
              </Link>
              <Link
                href={"/contact-us"}
                className="  md:text-[16px]    "
              >
                {" "}
                Contact Us
              </Link>
            </div>
          </div>
          <div className="flex w-full sm:w-[50%] lg:w-[60%]   flex-col items-start justify-start relative h-full ">
            <div className="h-[70px] md:h-[80px] lg:h-[100px] flex items-center ">
              <h2 className="text-primary text-[20px] md:text-[24px] font-bold">
                Contact Us
              </h2>
            </div>
            <div className=" my-[10px]">
              <div className="flex items-center gap-2">
                <div className=" bg-myLG  w-[42px] h-[42px] flex items-center  justify-center rounded-full">
                  <LuPhone className="text-myBlue text-[20px] md:text-[20px]" />
                </div>
                <h6 className="  w-9/12 md:text-[16px]  ">
                  +91 99619 81196
                </h6>
              </div>

              <div className="flex items-center gap-2 my-5">
                <div className=" bg-myLG  w-[42px] h-[42px] flex items-center  justify-center rounded-full">
                  <MdOutlineMail className="text-myBlue text-[20px] md:text-[20px]" />
                </div>
                <h6 className="  w-9/12 md:text-[16px]  ">
                  hr@aegisbusinessinfo.com
                </h6>
              </div>

              <div className="flex items-start   gap-2 my-5">
                <div className=" bg-myLG  w-[42px] h-[42px] flex items-center  justify-center rounded-full">
                  <GrLocation className="text-myBlue text-[20px] md:text-[20px]" />
                </div>
                <h6 className="  w-9/12 md:text-[16px]   ">
                  27 F1, PM Samy Colony,Viswanathapuram, Rathinapuri,Coimbatore
                  - 641 027.
                </h6>
              </div>

              {/* <div className="flex items-start gap-2 w-full my-1">
              <GrLocation className="text-myBlue w-2/12 text-[18px] md:text-[24px]" />

              <h6 className="text-[#4D4E54]  w-9/12  md:text-[16px] font-light md:tracking-wider ">
                {" "}
                27 F1, PM Samy Colony,Viswanathapuram, Rathinapuri,Coimbatore -
                641 027.
              </h6>
            </div> */}
            </div>
          </div>
        </div>
      </div>

      <hr className="border border-gray-300" />

      <div className="w-full flex flex-col items-center text-center p-4  ">
        <p className="text-[14px] tracking-wider my-1">
          © {currentYear} AEJS. All Rights Reserved.
        </p>
        <p className="text-[14px] tracking-wider my-1">
          Powered By - Shadow Arrow 🎯
        </p>
      </div>
    </div>
  );
};
