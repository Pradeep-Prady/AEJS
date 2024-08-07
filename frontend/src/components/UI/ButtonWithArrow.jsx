"use client";
import Link from "next/link";

const ButtonWithArrow = ({ className, book = true }) => {
  return (
    <div
      className={`w-full flex flex-col sm:flex sm:flex-row items-center justify-center gap-2 md:gap-5 md:my-7 ${className}`}
    >
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
