"use client";
import Image from "next/image";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import logo from "/public/assets/general/logo.svg";
import { navBarData } from "@/app/_data/general";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { IoClose } from "react-icons/io5";
import Link from "next/link";
import { BiSolidPhoneCall } from "react-icons/bi";
import { BiCaretDownCircle } from "react-icons/bi";
import { MdCall } from "react-icons/md";
import { motion, useScroll } from "framer-motion";
const Navbar = () => {
  
  const [hovered, setHovered] = useState(null);
  const [openNav, setOpenNav] = useState(false);
  const [mobileHovered, setMobileHovered] = useState(null);

  const handleMouseEnter = (subMenu) => setHovered(subMenu);
  const handleMouseLeave = () => setHovered(null);
  const handleMobileHover = (subMenu) => setMobileHovered(subMenu);
  const handleMobileClick = () => setOpenNav(!openNav);

  return (
    <>
      {/* Desktop Navigation */}

      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="hidden bg-white sticky z-50 top-0  lg:flex justify-between items-center myPadX py-5 h-[13%]"
      >
        <Link href="/">
        <Image
          src={logo}
          alt="logo"
          width={200}
          height={150}
          // fill
          className="h-[50px] scale-[3] md:scale-[3] relative"
        />
        
        </Link>
        <ul className="flex items-center gap-5">
          {navBarData?.map((item) => (
            <li
              key={item.id}
              onMouseEnter={() => handleMouseEnter(item.subMenu)}
              onMouseLeave={handleMouseLeave}
              className="relative flex items-center"
            >
              {item.id === "nbd_7" ? (
                <p className="font-semibold  ">{item.title}</p>
              ) : (
                <Link href={item.path}>
                  <p className="font-semibold  ">{item.title}</p>
                </Link>
              )}

              {item.subMenu && (
                <IoIosArrowDown className="text-xl mt-1 cursor-pointer" />
              )}
              {hovered === item.subMenu && item.subMenu && (
                <div className="absolute top-full w-[200px] p-2 bg-white shadow-lg z-40">
                  {item.subMenu.map((sub) => (
                    <Link key={sub.id} href={sub.path}>
                      <p className="p-2 text-base hover:bg-gray-200">
                        {sub.title}
                      </p>
                    </Link>
                  ))}
                </div>
              )}
            </li>
          ))}
          {/* <div className="bg-myBlue w-[40px] h-[40px] cursor-pointer   rounded-full flex items-center justify-center">
<BiSolidPhoneCall className="text-[28px] text-white " />
            </div> */}
          <a href="tel:9961981196">
            <div className="bg-myBlue w-[40px h-[40px rounded-3xl px-4 py-2 flex items-center justify-center">
              {/* <BiSolidPhoneCall className="text-[28px] text-white" />
               */}
              <p className="text-[14px] sm:text-[16px] text-white">Call Now </p>
            </div>
          </a>
        </ul>
      </motion.nav>

      {/* Mobile Navigation */}
      <nav className="lg:hidden w-full flex justify-between items-center px-5 sm:px-10 h-16">
        <Image
          className="w-[120px] sm:w-[200px] height-[150px] lg:height-[300px]"
          src={logo}
          alt="logo"
          width={200}
          height={300}
        />

        <div className=" flex items-center gap-3">
          <a href="tel:9961981196">
            <div className="bg-myBlue  rounded-3xl p-2 flex items-center justify-center">
              <BiSolidPhoneCall className="text-[20px] text-white" />
              {/* <p className="text-[14px] sm:text-[16px] text-white">Call Now </p> */}
            </div>
          </a>
          <HiMiniBars3BottomRight
            className=" text-xl sm:text-4xl cursor-pointer"
            onClick={handleMobileClick}
          />
        </div>
      </nav>
      {openNav && (
        <div className="fixed w-full h-screen  left-0 top-0 bottom-0 overflow-y-scroll scroll-none bg-white z-40 py-4 px-5  md:px-10">
          <div className="flex justify-between items-center ">
            <Image
              className="w-[120px] sm:w-[200px] height-[150px] lg:height-[300px]"
              src={logo}
              alt="logo"
              width={200}
              height={300}
            />
            <IoClose
              className="text-2xl cursor-pointer"
              onClick={handleMobileClick}
            />
          </div>
          <div className="flex flex-col items-center gap-5 p-5">
            {navBarData?.map((item) => (
              <div key={item.id} className="relative w-full ">
                <>
                  <div key={item.id} className="relative w-full flex">
                  {item.id === "nbd_7" ? (
                      <p className="font-semibold  ">{item.title}</p>
                    ) : (
                      <Link href={item.path}>
                        <p className="font-semibold  ">{item.title}</p>
                      </Link>
                    )}

                    {/* <Link href={item.path} onClick={handleMobileClick}>
                      <p className="text-lg font-semibold">{item.title}</p>
                    </Link> */}

                    {item.subMenu && (
                      <IoIosArrowDown
                        className="text-2xl mt-1 cursor-pointer"
                        onClick={() => handleMobileHover(item.subMenu)}
                      />
                    )}
                  </div>

                  {mobileHovered === item.subMenu && (
                    <div className="mt-2 p-2   ">
                      {item.subMenu.map((sub) => (
                        <Link
                          key={sub.id}
                          href={sub.path}
                          onClick={handleMobileClick}
                        >
                          <p className="p-2  hover:bg-gray-200">{sub.title}</p>
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              </div>
            ))}
            <div className="relative w-full flex items-start justify-start">
              <a href="tel:9961981196">
                <div className="bg-myBlue  rounded-md px-7 py-2 flex items-center justify-center">
                  <p className="text-[14px] sm:text-[16px] text-white">
                    Call Now{" "}
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
