"use client";
import React, { useState, useEffect } from "react";
import { subServices, services } from "../../_data/service";
import ServiceHeading from "@/components/UI/ServiceHeading";
import Image from "next/image";
import Contact from "@/components/UI/Contact";
import ServiceCard from "../../_components/ServiceCard";
import ServicesIconCard from "../../_components/ServicesIconCard";
import Solutions from "../../_components/Solutions";
import bgImage2 from "/public/assets/security services/bgImage2.png";
import layer2 from "/public/assets/security services/solutions-3.png";
import SubServiceItem from "@/app/_components/SubServiceItem";
import { FaArrowRightLong } from "react-icons/fa6";
import ScrollDownButton from "@/components/UI/ScrollDownButton";
import Navbar from "@/components/General/Navbar";
import { Footer } from "@/components/General/Footer";
import NeedHelp from "@/components/UI/NeedHelp";
import FAQ from "@/components/General/FAQ";
import NotFound from "@/components/UI/NotFound";
// import testPdf from '/public/pdf/test.pdf'
import Link from "next/link";
import MainNavbar from "@/components/General/MainNavbar";
const SubService = ({ params }) => {
  const [subService, setSubService] = useState(null);
  const [service, setService] = useState(null);

  useEffect(() => {
    const service = services.find((s) => s.id === params.service);
    setService(service);
    setSubService(service?.subMenu?.find((s) => s.id === params.subService));
  }, [params.subService, params.service]);

  if (!subService) return <NotFound/>

  return (
    <div className="h-screen w-full">
      <MainNavbar>
        <div>
          <div
            style={{ backgroundImage: `url(${subService?.banner?.src})` }}
            className="w-full bg-cover  relative   h-[90vh]  flex items-center justify-center"
          >
            <ServiceHeading
              title={subService?.title}
              subTitle={subService?.subTitle}
            />

            <ScrollDownButton link={"sub-content"} />
          </div>

          <div className="w-full my-5 flex flex-col items-center justify-center">
            <div id="sub-content" className="myPadX md:w-11/12 my-5 md:flex ">
              <div className="w-full md:w-8/12">
                <h1 className="text-[32px] font-semibold text-center">
                  {" "}
                  {subService?.title}
                </h1>
                <div className="my-3 p-5">
                  <p className="text-[18px] text-gray-500 tracking-wide">
                    {subService?.descriptionOne}{" "}
                  </p>
                </div>

                <div className="my-3 p-5 w-12/12 grid grid-cols-2 gap-10">
                  {subService?.images.map((image) => (
                    <Image
                      className={"w-[400px] h-auto"}
                      key={image}
                      src={image}
                      alt="subService_Image"
                      width={200}
                      height={200}
                    />
                  ))}
                </div>
                <div className="my-3 p-5">
                  <p className="text-[18px] text-gray-500 tracking-wide">
                    {subService?.descriptionTwo}{" "}
                  </p>
                </div>

                <div className="my-3 p-2 md:p-5 flex items-center justify-center">
                  <a
                    href="/pdf/test.pdf"
                    download
                    className="btn-round !text-white"
                  >
                    Download Brochure
                  </a>
                </div>
              </div>

              <div className="w-full md:w-4/12 flex flex-col items-center gap-10 ">
                <SubServiceItem
                  params={params.subService}
                  title={service.title}
                  items={service.subMenu}
                />
                <div className={`bg-primary text-white p-5 rounded-md`}>
                  <h2 className=" text-[24px] font-semibold  text-center">
                    Grow Your Career in a Supportive Environment. Apply Now!
                  </h2>
                  <div className=" flex w-full mt-10  items-center    justify-center ">
                    <Link
                      href="/career"
                      className=" flex w-auto border-white px-7 py-2 rounded-full items-center gap-3 border-[3px] justify-center "
                    >
                      <p className="text-[24px]  "> Work For Us</p>{" "}
                      <FaArrowRightLong />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 
        <Contact
          title={`Let Us Help You Create a Safer Environment. `}
          title2={`Get in Touch!`}
        /> */}
          <NeedHelp />
          <FAQ service={service} />
          <ServicesIconCard service={service} />

          <Solutions
            bgImage={bgImage2}
            layer={layer2}
            className={`right-0   `}
            height={`h-[400px]`}
            side={`right`}
          />

          {/* <Footer /> */}
        </div>
      </MainNavbar>
    </div>
  );
};

export default SubService;
