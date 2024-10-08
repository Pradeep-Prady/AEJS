"use client";

import { certificatesFAQsData } from "@/app/_data/general";
import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";

const FAQ = ({ name, faqs }) => {
  const [expandedFaq, setExpandedFaq] = useState(certificatesFAQsData[0].id);

  const toggleFaq = (id) => {
    setExpandedFaq((prev) => (prev === id ? null : id));
  };
  return (
    <div
      className={`w-full h-auto md:pb-16 border-b md:grid grid-cols-2 myPadX `}
    >
      <div className={"w-full  "}>
        <h4
          className={`text-myBlue text-[22px] sm:text-[28px] lg:text-[64px] font-bold`}
        >
          FAQ?
        </h4>
        <h5
          className={`text-myLG text-[22px] sm:text-[28px] lg:text-[38px] font-bold`}
        >
          {name}
        </h5>
      </div>
      <div className={"   "}>
        {faqs?.map((faq) => (
          <div
            className={`border-b-2 py-2 border-[rgb(47,84,206,0.5)]`}
            key={faq.id}
          >
            <div className="flex justify-between items-start">
              <h6
                className="text-[18px] w-11/12 font-semibold my-1"
                onClick={() => toggleFaq(faq.id)}
              >
                {faq.qus}
              </h6>
              <button
                className={
                  "w-1/12 flex items-center justify-center cursor-pointer"
                }
                onClick={() => toggleFaq(faq.id)}
              >
                {expandedFaq === faq.id ? <FaMinus /> : <FaPlus />}
              </button>
            </div>
            {expandedFaq === faq.id && (
              <div className={`ps-5 my-2`}>
                <p>{faq.ans}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
