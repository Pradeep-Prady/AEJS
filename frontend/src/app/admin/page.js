"use client";

import axiosInstance from "@/utils/axios";
import Link from "next/link";
import React, { useState } from "react";
import { useQuery } from "react-query";

const Page = () => {
  const [dashboard, setDashboard] = useState(null);

  useQuery(
    ["checkIfAdminIsLoggedInOrNot"],
    () => axiosInstance.get("admin/dashboard"),
    {
      onSuccess: (res) => {
        setDashboard(res.data?.data);
      },
      onError: (err) => {
        console.log(err);
      },
    }
  );

  return (
    <div className="p-10   w-full h-screen bg-gray-100">
      <div className="grid gap-8 md:grid-cols-3">
        <div className="p-4  bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-800">Career Forms</h2>
          <p className="mt-4 text-2xl font-bold text-blue-500">
            {dashboard?.careerCount}
          </p>
          <Link href="/admin/career" className="mt-4 text-[16px]    ">
            view
          </Link>
        </div>
        <div className="p-4  bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-800">Contact Forms</h2>
          <p className="mt-4 text-2xl font-bold text-blue-500">
            {dashboard?.contactCount}
          </p>
          <Link href="/admin/contact" className="mt-4 text-[16px]  ">
            view
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
