import { services } from "../../_data/service";
import ServiceHeading from "@/components/UI/ServiceHeading";
import Image from "next/image";
import ServiceCard from "../../_components/ServiceCard";
import ServicesIconCard from "../../_components/ServicesIconCard";
import Solutions from "../../_components/Solutions";
import bgImage2 from "/public/assets/security services/bgImage2.png";
import layer2 from "/public/assets/security services/solutions-3.png";
import SubServiceItem from "@/app/_components/SubServiceItem";
import { FaArrowRightLong } from "react-icons/fa6";
import ScrollDownButton from "@/components/UI/ScrollDownButton";
import NeedHelp from "@/components/UI/NeedHelp";
import FAQ from "@/components/General/FAQ";
import NotFound from "@/components/UI/NotFound";
import Link from "next/link";
import MainNavbar from "@/components/General/MainNavbar";
import { FaArrowRight } from "react-icons/fa6";
import { FaLongArrowAltRight } from "react-icons/fa";

export async function generateMetadata({ params }) {
  const service = services.find((s) => s.id === params.service);
  const subService = service?.subMenu?.find((s) => s.id === params.subService);

  return {
    title: subService ? `${subService.metaTitle}` : "SubService Not Found",
    description: subService
      ? `Details about ${subService?.metaDescription}`
      : "SubService details not found",
  };
}

export default async function SubService({ params }) {
  const service = services.find((s) => s.id === params.service);
  const subService = service?.subMenu?.find((s) => s.id === params.subService);

  if (!subService) return <NotFound />;

  return (
    <>
      <MainNavbar>
        <div>
          <div
            style={{ backgroundImage: `url(${subService?.banner?.src})` }}
            className="w-full bg-cover relative h-[90vh] flex items-center justify-center"
          >
            <ServiceHeading
              title={subService?.title}
              subTitle={subService?.subTitle}
            />
            <ScrollDownButton link={"sub-content"} />
          </div>

          <div className="w-full my-5 flex flex-col items-center justify-center">
            <div id="sub-content" className="myPadX md:w-11/12 my-5 md:flex">
              <div className="w-full md:w-8/12">
                <h1 className="text-[32px] font-semibold text-center">
                  {subService?.title}
                </h1>
                {/* <div className="my-3 p-5">
                  <p className="text-[18px] text-gray-500 tracking-wide">
                    {subService?.descriptionOne}
                  </p>
                </div>  */}
                <div className="my-3 p-5">
                  <h1 className="text-[24px] font-semibold">
                    {subService?.descriptions[0]?.title}
                  </h1>

                  {subService?.descriptions[0]?.content &&
                    subService?.descriptions[0]?.content?.length > 0 &&
                    subService?.descriptions[0]?.content?.map((service,i) => (
                      <p className="text-[18px] my-2 text-gray-500 tracking-wide" key={i}>
                        {service}
                      </p>
                    ))}
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

                {/* <div className="my-3 p-5">
                  <p className="text-[18px] text-gray-500 tracking-wide">
                    {subService?.descriptionTwo}
                  </p>
                </div> */}

                {subService?.descriptions &&
                  subService?.descriptions?.length > 1 &&
                  subService?.descriptions.slice(1).map((serviceContent,i) => (
                    <div className="my-3 px-5" key={i}>
                      <h1 className="text-[24px] font-semibold">
                        {serviceContent?.title}
                      </h1>

                      {serviceContent?.content &&
                        serviceContent?.content?.length > 0 &&
                        serviceContent?.content?.map((service,i) => (
                          <p className="text-[18px] my-2 text-gray-500 tracking-wide" key={i}>
                            {service}
                          </p>
                        ))}
                    </div>
                  ))}
                {subService?.benefits && (
                  <div className="my-3 p-5">
                    <h2 className="text-[24px] font-semibold">
                      Services We Offer
                    </h2>
                    {subService?.benefits &&
                      subService?.benefits?.length > 0 &&
                      subService?.benefits.map((service,i) => (
                        <div className="text-[18px] flex items-start  my-3 text-gray-500 tracking-wide" key={i}>
                          <FaLongArrowAltRight className="mt-1 w-1/12 mr-2 text-[20px] text-black" />
                          <p className="w-11/12">{service}</p>
                        </div>
                      ))}
                  </div>
                )}

                <div className="my-3 p-2 md:p-5 flex items-center justify-center">
                  <a
                    href="/pdf/Brochure.pdf"
                    download
                    className="btn-round !text-white"
                  >
                    Download Brochure
                  </a>
                </div>
              </div>
              <div className="w-full md:w-4/12 flex flex-col items-center gap-10">
                <SubServiceItem
                  params={params.subService}
                  title={service.title}
                  items={service.subMenu}
                />
                <div className="bg-primary text-white p-5 rounded-md">
                  <h2 className="text-[24px] font-semibold text-center">
                    Grow Your Career in a Supportive Environment. Apply Now!
                  </h2>
                  <div className="flex w-full mt-10 items-center justify-center">
                    <Link
                      href="/career"
                      className="flex w-auto border-white px-7 py-2 rounded-full items-center gap-3 border-[3px] justify-center"
                    >
                      <p className="text-[24px]"> Work For Us</p>
                      <FaArrowRightLong />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <NeedHelp />
          <FAQ name={service?.name} faqs={subService?.faqDatas} />
          <ServicesIconCard service={service} />
          <Solutions
            bgImage={bgImage2}
            layer={layer2}
            className="right-0"
            height="h-[400px]"
            side="right"
          />
        </div>
      </MainNavbar>
    </>
  );
}
