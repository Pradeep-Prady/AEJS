import React from "react";
import { RiDoubleQuotesL } from "react-icons/ri";
import { RiDoubleQuotesR } from "react-icons/ri";
import quotes from "/public/assets/general/quotes.png";
import user from "/public/assets/testimonials/user.jpg";

import Image from "next/image";

const TestimonialsCard = () => {
  return (
    <div className={`w-full my-7 md:my-10 p-5 rounded-xl bg-[#63636325]`}>
      <div className={`w-full flex`}>
        <div className="w-[50px] md:w-[100px] max:w-[200px] flex items-start">
          <Image
            className={`rotate-180 h-auto w-auto`}
            src={quotes}
            alt="quotes"
          />
        </div>
        <p className={`text-center font-semibold leading-7`}>
          "Before hiring [Your Agency Name], I was constantly worried about
          break-ins at my store. Since they implemented their security plan and
          installed cameras, I've had complete peace of mind. Their guards are
          professional and attentive, and I know my business is in safe hands."
        </p>
        {/* <RiDoubleQuotesR /> */}
        <div className="w-[50px] md:w-[100px] max:w-[200px] flex items-start">

          <Image className={``} src={quotes} alt="quotes" />
        </div>
      </div>
      <div className="flex items-center justify-center py-5 w-full ">
        <div className="flex border-[6px] border-myLG items-center justify-center rounded-full overflow-hidden   w-[100px]  h-[100px]">
          <Image className="h-full object-cover  " src={user} alt="user" />
        </div>
        
      </div>
      <h2 className={`text-[20px] text-center font-semibold`}>Sarah M., <span className={`text-myLG text-[16px]`}> Retail Store Owner </span></h2>
    </div>
  );
};

export default TestimonialsCard;
