"use client";
import React, { Suspense, useState } from "react";
import axiosInstance from "@/utils/axios";
import Link from "next/link";
import { useMutation, useQuery } from "react-query";

const ContactList = () => {
  const [data, setData] = useState([]);

  // Fetch all contacts
  const { isLoading, error } = useQuery(
    "allContacts",
    () =>
      axiosInstance
        .get("contact/admin/all-contacts")
        .then((res) => res.data?.data),
    {
      onSuccess: (response) => {
        setData(response);
      },
      onError: (error) => {
        console.error("Error fetching data:", error);
      },
    }
  );

  // Mutation for deleting a contact
  const { mutate: deleteHandler } = useMutation(
    (id) => axiosInstance.delete(`contact/admin/delete-contact/${id}`),
    {
      onSuccess: (deletedId) => {
        // Update the UI optimistically

        setData((prevData) =>
          prevData.filter((item) => item._id !== deletedId?.data?.data?._id)
        );
      },
      onError: (error) => {
        console.error("Error deleting contact entry:", error);
      },
    }
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading data: {error.message}</div>;
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
                <h3 className="font-medium text-gray-700">Company Name</h3>
                <p className="text-gray-900">{item.companyName}</p>
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
                onClick={() => deleteHandler(item._id)}
                className="text-red-500 hover:text-red-700"
              >
                Delete
              </button>
              <Link
                href={`/admin/contact/${item._id}`}
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
    <div className="p-5">
      <h2 className="text-2xl font-bold mb-5">Contact Forms</h2>
      <Suspense fallback={<div>Loading...</div>}>
        <ContactList />
      </Suspense>
    </div>
  );
};

export default Page;
