import { CiLocationOn } from "react-icons/ci";
const LocationCard = ({ name, location, outer, inner, security }) => {
  return (
    <div className="flex w-full items-center my-3 shadow-gray-500 shadow-sm px-1 py-2 sm:p-3 rounded-lg">
      <div className="w-1/12 flex items-center justify-center">
        <div
          className={`${outer} sm:text-[18px] lg:text-[24px] w-[25px] h-[25px] md:w-[35px] md:h-[35px] rounded-full relative flex items-center justify-center`}
        >
          <div
            className={`${inner} sm:text-[18px] lg:text-[24px] z-20 w-[15px] h-[15px] md:w-[25px] md:h-[25px] rounded-full`}
          ></div>
        </div>
      </div>
      <div className="w-11/12">
        <h3 className={`text-[18px] md:text-[20px]   `}>{name}</h3>
        <div className="flex  items-center gap-2">
          <CiLocationOn />
          <div className="flex w-full justify-between">
            <p className={`text-gray-400 text-[14px] sm:text-[16px]`}>
              {location}{" "}
            </p>
            <p className={`text-gray-400 text-[14px]`}>{security} </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationCard;
