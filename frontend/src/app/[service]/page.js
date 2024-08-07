import { services } from "../_data/service";
import ServiceHeading from "@/components/UI/ServiceHeading";
import MainContent from "@/components/General/MainContent";
import ServiceCard from "../_components/ServiceCard";
import Heading from "@/components/UI/Heading";
import bgImage2 from "/public/assets/security services/banner2.webp";
import layer2 from "/public/assets/security services/solutions-3.png";
import ServicesIconCard from "../_components/ServicesIconCard";
import Solutions from "../_components/Solutions";
import ScrollDownButton from "@/components/UI/ScrollDownButton";
import NeedHelp from "@/components/UI/NeedHelp";
import MainNavbar from "@/components/General/MainNavbar";
import NotFound from "@/components/UI/NotFound";
import React from "react";

export async function generateMetadata({ params }) {
  const service = services.find((s) => s.id === params.service);

  return {
    title: service ? `Service - ${service.name}` : "Service Not Found",
    description: service
      ? `Details about ${service.name}`
      : "Service details not found",
    keywords: "keyword1, kkeuy2",
  };
}

export default async function Page({ params }) {
  const service = services.find((s) => s.id === params.service);

  if (!service) return <NotFound />;

  return (
    <>
      <MainNavbar>
        <div>
          <div
            style={{ backgroundImage: `url(${service?.banner?.src})` }}
            className="w-full bg-cover relative h-[90vh] flex items-center justify-center"
          >
            <ServiceHeading
              title={service?.name}
              subTitle={service?.subTitle}
            />

            <ScrollDownButton link={"main-content"} />
          </div>

          <MainContent
            right={true}
            side={"order-1 md:order-2 "}
            contentSide={"order-2 md:order-1"}
            data={service?.mainContent}
          />
          <div className="myPadX my-10 flex flex-col items-center justify-center">
            <div className="text-[34px] font-semibold text-center flex items-center justify-center gap-2">
              <h2 className="text-primary">You trust, </h2>
              <h2 className="text-myLG">We care </h2>
            </div>
            <p className="text-[#414141] w-full md:w-6/12 text-center leading-7 text-[18px] my-2">
              We offer a comprehensive range of security solutions designed to
              safeguard your property, assets, and personnel. Our highly trained
              security professionals and advanced security systems work together
              to deter crime, maintain a secure environment, and provide you
              with complete peace of mind.
            </p>
          </div>

          <Heading heading={`Our ${service?.name}`} />

          <div
            className={`w-full grid myPadX my-10 ${
              service?.subMenu?.length % 3 !== 0
                ? `grid-grid-cols-1 sm:grid-cols-2 lg:grid-cols-4`
                : `grid-grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`
            } gap-10`}
          >
            {service?.subMenu?.map((subItem) => (
              <ServiceCard
                subItem={subItem}
                key={subItem.id}
                className={""}
                size={service?.subMenu?.length % 3 !== 0 ? "small" : "medium"}
              />
            ))}
          </div>
          <NeedHelp />
          <ServicesIconCard service={service} />

          <Solutions
            bgImage={bgImage2}
            layer={layer2}
            className={`right-0`}
            height={`h-[400px]`}
            side={`right`}
          />
        </div>
      </MainNavbar>
    </>
  );
}
