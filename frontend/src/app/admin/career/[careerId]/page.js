 "use client";
import React, { Suspense } from "react";
import axiosInstance from "@/utils/axios";
import { useQuery } from "react-query";

const CareerDetails = ({ careerId }) => {
  const { data, isLoading, error } = useQuery(
    ["singleCareer", careerId], // Unique query key
    () => axiosInstance.get(`career/admin/single-career/${careerId}`).then((res) => res.data?.data),
    {
      onError: (error) => {
        console.error("Error fetching career data:", error);
      },
    }
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading career data</div>;
  }

  const {
    firstName = '',
    lastName = '',
    age = '',
    address = '',
    city = '',
    state = '',
    pinCode = '',
    email = '',
    phone = '',
    totalExperience = '',
    relevantExperience = '',
    applicationOfPost = '',
    about = '',
    resume = ''
  } = data || {};

  return (
    <div className="max-w-6xl mx-auto bg-white p-6 rounded-lg border-2">
      <h2 className="text-3xl font-bold mb-6 text-center">Career Details</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="p-4 border border-gray-200 rounded-lg">
          <h3 className="font-semibold text-lg">Name:</h3>
          <p>
            {firstName} {lastName}
          </p>
        </div>
        <div className="p-4 border border-gray-200 rounded-lg">
          <h3 className="font-semibold text-lg">Age:</h3>
          <p>{age}</p>
        </div>
        <div className="p-4 border border-gray-200 rounded-lg">
          <h3 className="font-semibold text-lg">Address:</h3>
          <p>
            {address}, {city}, {state}, {pinCode}
          </p>
        </div>
        <div className="p-4 border border-gray-200 rounded-lg">
          <h3 className="font-semibold text-lg">Email:</h3>
          <p>{email}</p>
        </div>
        <div className="p-4 border border-gray-200 rounded-lg">
          <h3 className="font-semibold text-lg">Phone:</h3>
          <p>{phone}</p>
        </div>
        <div className="p-4 border border-gray-200 rounded-lg">
          <h3 className="font-semibold text-lg">Total Experience:</h3>
          <p>{totalExperience}</p>
        </div>
        <div className="p-4 border border-gray-200 rounded-lg">
          <h3 className="font-semibold text-lg">Relevant Experience:</h3>
          <p>{relevantExperience}</p>
        </div>
        <div className="p-4 border border-gray-200 rounded-lg">
          <h3 className="font-semibold text-lg">Application of Post:</h3>
          <p>{applicationOfPost}</p>
        </div>
        <div className="col-span-1 md:col-span-2 p-4 border border-gray-200 rounded-lg">
          <h3 className="font-semibold text-lg">About:</h3>
          <p>{about}</p>
        </div>
        <div className="col-span-1 md:col-span-2 p-4 border border-gray-200 rounded-lg">
          <h3 className="font-semibold text-lg">Resume:</h3>
          <a
            href={resume}
            download
            className="inline-block px-4 py-2 bg-blue-500 text-white font-semibold rounded-md my-3 hover:bg-blue-700"
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

const CareerPage = ({ params }) => {
  return (
    <div className="p-5 bg-gray-100 overflow-y-scroll h-screen">
      <Suspense fallback={<div>Loading career details...</div>}>
        <CareerDetails careerId={params.careerId} />
      </Suspense>
    </div>
  );
};

export default CareerPage;
