"use client";
import Heading from "@/components/UI/Heading";
import { navBarData } from "../_data/general";
import ServiceCard from "./ServiceCard";
import React from "react";

const OurServices = () => {
  const [active, setActive] = React.useState("Security Services");
  return (
    <div className="w-full myPadX">
      <Heading heading={"Our Services"} />

      <div className="w-full flex items-center justify-between gap-2 ">
        {navBarData.map(
          (item) =>
          item.id !== "nbd_7" && item.subMenu && (
              <div
                key={item.id}
                className={`my-7 cursor-pointer ${
                  active === item.title ? "btn-service-active" : "btn-service"
                }`}
                onClick={() => setActive(item.title)}
              >
                <h3 className="  font-bold">{item.title}</h3>
              </div>
            )
        )}
      </div>

      <div className="w-full  ">
        {navBarData.map(
          (item) =>
            item.title === active && (
              <div
                key={item.id}
                className="my-3 md:my-7"
                onClick={() => setActive(item.title)}
              >
                <div
                   className={`w-full grid ${
                    item.subMenu.length === 1
                      ? `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`
                      : item.subMenu.length % 3 !== 0
                      ? `grid-cols-1 sm:grid-cols-2 lg:grid-cols-4`
                      : `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`
                  } gap-10`}
                >
                  {item.subMenu.map((subItem) => (
                    <ServiceCard
                      subItem={subItem}
                      key={subItem.id}
                      className={""}
                      size={item.subMenu.length === 1 ? `medium` : item.subMenu.length % 3 !== 0 ? "small" : "medium"}
                    />
                  ))}
                </div>
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default OurServices;
