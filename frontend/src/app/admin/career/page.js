"use client";
import React, { Suspense, useEffect, useState } from "react";
import axiosInstance from "@/utils/axios";
import Link from "next/link";
import { useMutation, useQuery } from "react-query";

const CareerList = () => {
  const [data, setData] = useState([]);

  const { isLoading, error } = useQuery(
    "allCareers", // Unique query key
    () =>
      axiosInstance
        .get("career/admin/all-careers")
        .then((res) => res.data?.data),
    {
      onSuccess: (data) => {
        setData(data);
      },
      onError: (error) => {
        console.error("Error fetching data:", error);
      },
    }
  );

  const { mutate: deleteItem } = useMutation(
    (id) => axiosInstance.delete(`career/admin/delete-career/${id}`),
    {
      onSuccess: (deletedId) => {
        // Update the UI by filtering out the deleted item
        console.log(deletedId, "deletedId");
        console.log(deletedId?.data?.data?._id);
        setData((prevData) =>
          prevData.filter((item) => item._id !== deletedId?.data?.data?._id)
        );
      },
      onError: (error) => {
        console.error("Error deleting career entry:", error);
      },
    }
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading data</div>;
  }

  return (
    <div className="w-full grid lg:grid-cols-2 gap-10">
      {data?.length > 0 ? (
        data.map((item) => (
          <div
            className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            key={item._id}
          >
            <div className="mb-4">
              <div className="w-full flex justify-between items-center">
                <h3 className="font-medium text-gray-700">Name</h3>
                <p className="text-gray-900">
                  {item.firstName} {item.lastName}
                </p>
              </div>
              <div className="w-full flex justify-between items-center">
                <h3 className="font-medium text-gray-700">Age</h3>
                <p className="text-gray-900">{item.age}</p>
              </div>
            </div>
            <div className="mb-4">
              <div className="w-full flex justify-between items-center">
                <h3 className="font-medium text-gray-700">Email</h3>
                <p className="text-gray-900">{item.email}</p>
              </div>
              <div className="w-full flex justify-between items-center">
                <h3 className="font-medium text-gray-700">Phone</h3>
                <p className="text-gray-900">{item.phone}</p>
              </div>
            </div>
            <div className="w-full flex justify-between items-center">
              <button
                onClick={() => deleteItem(item._id)}
                className="text-red-500 hover:text-red-700"
              >
                Delete
              </button>
              <Link
                href={`/admin/career/${item._id}`}
                className="text-blue-500 hover:text-blue-700"
              >
                View Details
              </Link>
            </div>
          </div>
        ))
      ) : (
        <div>No data available</div>
      )}
    </div>
  );
};

const Page = () => {
  return (
    <div className="p-5 border-2 h-screen overflow-y-scroll">
      <h2 className="text-2xl font-bold mb-5">Career Forms</h2>
      <Suspense fallback={<div>Loading...</div>}>
        <CareerList />
      </Suspense>
    </div>
  );
};

export default Page;
