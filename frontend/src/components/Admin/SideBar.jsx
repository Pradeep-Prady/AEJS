"use client";

import React from "react";
import logo from "/public/assets/general/logo.png";
import Image from "next/image";
import Link from "next/link";
 
import { useMutation } from "react-query";
import axiosInstance from "@/utils/axios";

const SideBar = ({setIsLoggedIn}) => {

  const mutation = useMutation({
    mutationFn: () => axiosInstance.post("admin/logout"),
    onError: (error) => {
      console.log(error);
    },
    onSuccess: () => {
      
      setIsLoggedIn(false);
       
    },
  });

  const handleLogout = () => {
    mutation.mutate();
  };

  return (
    <div className="w-full border-r-2 bg-myWhite h-screen flex flex-col items-center justify-between">

      <Link href="/admin" className="p-10">
        <Image
          className="w-[230px] h-auto"
          alt="logo"
          src={logo}
          width={200}
          height={300}
        />
      </Link>

      <div className="w-full flex flex-col pl-5 items-center justify-between gap-5">
        <div className="w-full text-center flex">
          <Link
            className="text-[18px] bg-primary cursor-pointer text-white font-semibold py-3 w-full"
            href={`/admin/career`}
          >
            Career
          </Link>
        </div>
        <div className="w-full text-center flex">
          <Link
            className="text-[18px] bg-primary cursor-pointer text-white font-semibold py-3 w-full"
            href={`/admin/contact`}
          >
            Contact
          </Link>
        </div>
      </div>
      <div className="w-full text-center">
        <button
          className="text-[18px] bg-primary cursor-pointer text-white font-semibold py-3 w-full"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default SideBar;
