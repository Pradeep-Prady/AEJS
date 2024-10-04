import Image from "next/image";
import logo from "/public/assets/general/logo.svg";
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
            className={`w-auto h-[70px] scale-125 md:h-[80px] lg:h-[100px]`}
            alt="logo"
            src={logo}
          />
          <p className=" leading-7 ">
            AEJSINFO stands as a one-stop shop for all your needs in Coimbatore
            since the company was established to provide various services that
            cater to all the client's needs. The services offered range from the
            provision of reliable and comprehensive security services in
            Coimbatore to investigation services and manpower consulting
            services.
          </p>

          <div className="flex w-full gap-5 text-[22px] my-5">
            <Link
              href="https://www.facebook.com/aejsinfo"
              aria-label="Visit our Facebook page"
            >
              <FaFacebook
                className="cursor-pointer hover:text-myGreen"
                aria-hidden="true"
              />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link
              href="https://x.com/aejsinfo"
              aria-label="Visit our Twitter page"
            >
              <FaXTwitter
                className="cursor-pointer hover:text-myGreen"
                aria-hidden="true"
              />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link
              href="https://www.instagram.com/aejsinfo/"
              aria-label="Visit our Instagram profile"
            >
              <BsInstagram
                className="cursor-pointer hover:text-myGreen"
                aria-hidden="true"
              />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/aejsinfo-security-services-b5714931b"
              aria-label="Visit our LinkedIn profile"
            >
              <FaLinkedin
                className="cursor-pointer hover:text-myGreen"
                aria-hidden="true"
              />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="https://www.youtube.com/channel/aejsinfo"
              aria-label="Visit our YouTube channel"
            >
              <FaYoutube
                className="cursor-pointer hover:text-myGreen"
                aria-hidden="true"
              />
              <span className="sr-only">YouTube</span>
            </Link>
          </div>
        </div>
        <div className="flex w-full lg:w-[40%]   flex-col items-start justify-start relative h-full ">
          <div className="h-[70px] md:h-[80px] lg:h-[100px] flex items-center ">
            <h3 className="text-primary   text-[20px] md:text-[24px] font-bold  ">
              Our Services
            </h3>{" "}
          </div>

          <div className="w-full   sm:flex gap- items-start justify-end">
            <div className="md:w-[40%] flex flex-col gap-2">
              {navBarData[1]?.subMenu?.map((item, i) => (
                <Link
                  href={item.path}
                  key={i}
                  className="  md:text-[16px]   my-1 "
                >
                  {item.title}
                </Link>
              ))}
            </div>

            <div className="md:w-[60%]  my-2 md:my-0 flex flex-col gap-2">
              {navBarData[2]?.subMenu?.map((item, i) => (
                <Link
                  href={item.path}
                  key={i}
                  className="  md:text-[16px]   my-1 "
                >
                  {item.title}
                </Link>
              ))}

              {navBarData[3]?.subMenu?.map((item, i) => (
                <Link
                  href={item.path}
                  key={i}
                  className=" md:text-[16px]  my-1 "
                >
                  {item.title}
                </Link>
              ))}
              {navBarData[4]?.subMenu?.map((item, i) => (
                <Link
                  href={item.path}
                  key={i}
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
              <h3 className="text-primary text-[20px] md:text-[24px] font-bold">
                Quick Links
              </h3>
            </div>
            <div className=" my-[10px] flex flex-col gap-2">
              <Link href={"/about-us"} className="  md:text-[16px]     ">
                About Us
              </Link>

              <Link href={"/career"} className="  md:text-[16px]   ">
                {" "}
                Career{" "}
              </Link>
              <Link href={"/contact-us"} className="  md:text-[16px]    ">
                {" "}
                Contact Us
              </Link>
            </div>
          </div>
          <div className="flex w-full sm:w-[50%] lg:w-[60%]   flex-col items-start justify-start relative h-full ">
            <div className="h-[70px] md:h-[80px] lg:h-[100px] flex items-center ">
              <h3 className="text-primary text-[20px] md:text-[24px] font-bold">
                Contact Us
              </h3>
            </div>
            <div className=" my-[10px]">
              <div className="w-full flex items-center gap-2">
                <div className="w-2/12 ">
                  <div className=" bg-myLG  w-[42px] h-[42px] flex items-center  justify-center rounded-full">
                    <LuPhone className="text-myBlue text-[20px] md:text-[20px]" />
                  </div>
                </div>

                <div className="w-10/12 flex items-start flex-col gap-2">
                  <p className="  w-9/12 md:text-[16px]  ">+91 9944580798</p>
                  <p className=" w-9/12  md:text-[16px]  ">+91 9500475798</p>
                </div>
              </div>

              <div className="flex items-center gap-2 my-5">
                <div className="w-2/12 ">
                  <div className=" bg-myLG  w-[42px] h-[42px] flex items-center  justify-center rounded-full">
                    <MdOutlineMail className="text-myBlue text-[20px] md:text-[20px]" />
                  </div>
                </div>

                <h6 className="  w-10/12 md:text-[16px]  ">
                  aejsinfoservices@gmail.com
                </h6>
              </div>

              <div className="flex items-start   gap-2 my-5">
                <div className="w-2/12 ">
                  <div className=" bg-myLG  w-[42px] h-[42px] flex items-center  justify-center rounded-full">
                    <GrLocation className="text-myBlue text-[20px] md:text-[20px]" />
                  </div>
                </div>

                <h6 className="  w-10/12 md:text-[16px]   ">
                  AEJS INFO SERVICES PVT LTD, 97, DAS Complex, 5th Street
                  Extension, 100 feet road, Behind Kalyan Jewellers, Coimbatore
                  - 641 012
                </h6>
              </div>
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
