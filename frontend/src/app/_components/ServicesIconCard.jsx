import Security from "/public/assets/general/Security.png";
import Detective from "/public/assets/general/Detective.png";
import Manpower from "/public/assets/general/Manpower.png";
import house_cleaning from "/public/assets/House Cleaning/icons/House cleaning.svg";

import Image from "next/image";
import Link from "next/link";

const ServicesIconCard = ({ service }) => {
  
  return (
    <div className="w-full myPadX py-5">
      <h5 className="text-[22px] font-semibold text-center my-5 ">
        {" "}
        Learn More About Our Services{" "}
      </h5>
      <div className="w-full flex flex-col md:flex-row  items-center justify-center gap-10">
        <div
          className={`h-[300px] w-[300px] flex flex-col items-center py-[30px] ${
            service?.name === "Security Services" ? "glass" : " border"
          }  justify-center`}
        > <div className="h-[150px] flex flex-col items-center justify-center "> 
          <Image
            className={"h-[150px] w-auto "}
            src={Security.src}
            alt="ServiceIcon"
            width={150}
            height={150}
          />  </div>
          <Link href={"/security-services"} className="mt-4 text-[24px] font-bold"> {  "Security Services"} </Link>
        </div>
        <div
          className={`h-[300px] w-[300px] flex flex-col items-center   py-[30px] ${
            service?.name === "Detective Services" ? "glass" : " border"
          }  justify-center`}
        >
          <div className="h-[150px] flex flex-col items-center justify-center"> 

          <Image
            className={"w-[150px]"}
            src={Detective.src}
            width={150}
            alt="ServiceIcon"
            height={150}
          /></div>
          <Link href="/detective-services" className="mt-4 text-[24px] font-bold">  Detective Services</Link>
        </div>
        <div
          className={`h-[300px] w-[300px] flex flex-col items-center justify-center  py-[30px] ${
            service?.name === "Manpower Consultancy" ? "glass" : " border"
          } `}
        >
          <div className="h-[150px] flex flex-col items-center justify-center">
               <Image
            className={"w-[150px]  scale-105"}
            src={Manpower.src}
            width={150}
            height={150}
            alt="ServiceIcon"
          />
          </div>
       
          <Link href="/manpower-consultancy" className="mt-4 text-[24px] font-bold"> {  "Manpower Consultancy"}  </Link>
        </div>
        <div
          className={`h-[300px] w-[300px] flex flex-col items-center justify-center  py-[30px] ${
            service?.name === "House Cleaning" ? "glass" : " border"
          } `}
        >
          <div className="h-[150px] flex flex-col items-center justify-center">
               <Image
            className={"w-[150px]  scale-105"}
            src={house_cleaning.src}
            width={150}
            height={150}
            alt="ServiceIcon"
          />
          </div>
       
          <Link href="/house-cleaning" className="mt-4 text-[24px] font-bold"> {  "House Cleaning"}  </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesIconCard;
