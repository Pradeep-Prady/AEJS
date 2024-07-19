 "use client";
import React, { Suspense } from "react";
import axiosInstance from "@/utils/axios";
import { useQuery } from "react-query";

const ContactDetails = ({ contactId }) => {
  // Fetch single contact details
  const { data, isLoading, error } = useQuery(
    ["singleContact", contactId], // Unique query key
    () =>
      axiosInstance
        .get(`contact/admin/single-contact/${contactId}`)
        .then((res) => res.data?.data),
    {
      onError: (error) => {
        console.error("Error fetching contact data:", error);
      },
    }
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading contact data: {error.message}</div>;
  }

  const {
    firstName = '',
    lastName = '',
    companyName = '',
    companyWebsite = '',
    email = '',
    phone = '',
    typeOfEnquiry = '',
    enquiry = ''
  } = data || {};

  return (
    <div className="max-w-6xl mx-auto bg-white p-6 rounded-lg border-2">
      <h2 className="text-3xl font-bold mb-6 text-center">Contact Details</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="p-4 border border-gray-200 rounded-lg">
          <h3 className="font-semibold text-lg">Name:</h3>
          <p>
            {firstName} {lastName}
          </p>
        </div>
        <div className="p-4 border border-gray-200 rounded-lg">
          <h3 className="font-semibold text-lg">Company Name:</h3>
          <p>{companyName}</p>
        </div>
        <div className="p-4 border border-gray-200 rounded-lg">
          <h3 className="font-semibold text-lg">Company Website:</h3>
          <p>{companyWebsite}</p>
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
          <h3 className="font-semibold text-lg">Type of Enquiry:</h3>
          <p>{typeOfEnquiry}</p>
        </div>
        <div className="col-span-1 md:col-span-2 p-4 border border-gray-200 rounded-lg">
          <h3 className="font-semibold text-lg">Enquiry:</h3>
          <p>{enquiry}</p>
        </div>
      </div>
    </div>
  );
};

const Page = ({ params }) => {
  return (
    <div className="p-5 bg-gray-100 overflow-y-scroll h-screen">
      <Suspense fallback={<div>Loading contact details...</div>}>
        <ContactDetails contactId={params.contactId} />
      </Suspense>
    </div>
  );
};

export default Page;
