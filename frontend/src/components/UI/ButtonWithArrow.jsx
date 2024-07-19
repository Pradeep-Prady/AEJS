"use client";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import Link from "next/link";

const ButtonWithArrow = ({
  text,
  link = "#", // Default value for the link prop
  className,
  book = true,
  read = true,
}) => {
  return (
    <div
      className={`w-full flex flex-col sm:flex sm:flex-row items-center justify-center gap-2 md:gap-5 md:my-7 ${className}`}
    >
      {read && (
        <Link
          href={link}
          className={`${
            book ? "btn-outline" : "btn-round"
          } sm:my-0 flex items-center justify-center`}
        >
          <span className="text-center font-semibold text-[16px] sm:text-[22px]">
            {text}
          </span>
          <FaArrowRight className="ml-1 sm:ml-2" />
        </Link>
      )}

      {book && (
        <Link
          href="/contact-us"
          className="my-1 sm:my-0 btn-round bg- items-center justify-center"
        >
          <span className="text-center font-semibold text-[16px] sm:text-[22px]">
            Book a Callback
          </span>
        </Link>
      )}
    </div>
  );
};

export default ButtonWithArrow;
