import logo from "/public/assets/security services/Logo.png";
import Image from "next/image";
import Link from "next/link";
 
const ServiceCard = ({ subItem, className, size  }) => {

  return (
    <Link
      href={subItem?.path}
      className={`${
        size === "small" ? "h-[300px]" : "h-[350px]"
      } w-full rounded-md overflow-hidden text-white flex items-center justify-center ${className}`}
    >
      <div
        className="w-full h-full bg-cover flex flex-col justify-end p-3 bg-no-repeat"
        style={{ backgroundImage: `url(${subItem.image.src})` }}
      >
        <div className="w-full flex">
        <div className="bg-white w-[55px] p-1 h-[55px] rounded-md flex items-center justify-center">

          <Image className="h-full w-auto" width={50} height={50} src={subItem?.icon ?? logo} alt={"service"} />
        </div>
        </div>

        <h3 className="text-myLG text-[20px] font-semibold pt-2">{subItem.title} </h3>
      </div>
    </Link>
  );
};

export default ServiceCard;
