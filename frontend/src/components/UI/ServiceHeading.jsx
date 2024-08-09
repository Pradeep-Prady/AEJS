import React from "react";

const ServiceHeading = ({ title, className, tStyle, stStyle, subTitle }) => {
  return (
    <div
      className={`text-center flex flex-col items-center justify-center  ${className}`}
    >
      <h1
        className={`text-[34px] sm:text-[60px]  lg:text-[83px] font-bold text-white ${tStyle}`}
      >
        {title}{" "}
      </h1>
      <h3
        className={`text-myLG text-[20px] md:text-[28px] lg:text-[36px] font-semibold ${stStyle}`}
      >
        {subTitle}{" "}
      </h3>
    </div>
  );
};

export default ServiceHeading;
