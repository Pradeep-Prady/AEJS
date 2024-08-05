"use client";
import AdminMain from "@/components/Admin/AdminMain";
import SideBar from "@/components/Admin/SideBar";

import React, { useState } from "react";

const layout = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="w-full h-screen  flex items-center  ">
      <div className="w-full h-full  hidden md:flex items-center  ">
        <div className="w-[22%]">
          <SideBar setIsLoggedIn={setIsLoggedIn} />
        </div>
        <AdminMain
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
          children={children}
        />
      </div>

      <div className="w-full h-full  flex md:hidden items-center  justify-center">
        <p>
          {" "}
          This admin interface is optimized for desktop use. For the best
          experience, please access it on a desktop or laptop device.
        </p>
      </div>
    </div>
  );
};

export default layout;
