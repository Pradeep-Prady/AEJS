"use client";

import ServiceHeading from "@/components/UI/ServiceHeading";
import React, { useState } from "react";
import banner from "/public/assets/career/banner.png";
import TextInput from "@/components/UI/TextInput";
import Map from "../_components/Map";
import ServicesIconCard from "../_components/ServicesIconCard";
import { useMutation } from "react-query";
import axiosInstance from "@/utils/axios";
import Navbar from "@/components/General/Navbar";
import { Footer } from "@/components/General/Footer";
import ScrollDownButton from "@/components/UI/ScrollDownButton";
import MainNavbar from "@/components/General/MainNavbar";

const initialValue = {
  firstName: "",
  lastName: "",
  companyName: "",
  companyWebsite: "",
  email: "",
  phone: "",
  typeOfEnquiry: "",
  enquiry: "",
};
const Page = () => {
  const [formData, setFormData] = useState(initialValue);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const mutation = useMutation({
    mutationFn: (data) => axiosInstance.post("contact/create", data),
    onError: (error) => {
      console.log(error);
    },
    onSuccess: () => {
     
      setFormData(initialValue);
      revalidatePath("/admin/contact", "layout");
      revalidatePath("/contact-us");
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate(formData);
  };

  let service = [];

  return (
    <>
      

      <MainNavbar>
      <div className="w-full">
        <div
          style={{ backgroundImage: `url(${banner?.src})` }}
          className="w-full bg-cover relative h-screen flex items-center justify-center"
        >
          <ServiceHeading
            className={``}
            tStyle={`w-10/12 md:w-8/12`}
            title={`Let Us Help You Create a Safer Environment`}
            subTitle={`Contact Us for a Security Consultation!`}
          />

          <ScrollDownButton link={"contact"} />
        </div>

        <div className="w-full myPadX flex items-center justify-center">
          <div className="my-10 sm:p-5 md:p-10 rounded-md gap-5 w-11/12 grid md:grid-cols-3">
            <div id="contact" className="w-full bg-gray-100 py-3 px-2 sm:px-5">
              <h1 className={`md:text-[22px] text-myBlue   font-semibold my-3`}>
                Address
              </h1>

              <p className="md:text-[17px] font-medium">
              No 97 , 5 th Street Extn , Gandhipuram , Coimbatore - 641012

              </p>
            </div>
            <div className="w-full py-3 px-2 sm:px-5  bg-gray-100 ">
              <h1 className={`md:text-[22px] text-myBlue   font-semibold my-3`}>
                Mobile
              </h1>

              <p className="md:text-[17px] font-medium">+91 9944580798</p>
              <p className="md:text-[17px] font-medium">+91 9500475798</p>
            </div>

            <div className="w-full py-3 px-2 sm:px-5  bg-gray-100 p-5">
              <h1 className={`md:text-[22px] text-myBlue   font-semibold my-3`}>
                Email
              </h1>

              <p className="md:text-[17px] font-medium">ajesinfo@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="w-full flex items-center justify-center">
          <form onSubmit={handleSubmit} className="w-11/12 md:w-8/12">
            <div className={"my-10 text-center"}>
              <h1
                className={`text-primary tracking-wide text-[20px] sm:text-[24px] lg:text-[30px] font-semibold`}
              >
                Have Questions? Let Our Experts Help You!
              </h1>
              <h2
                className={`text-myLG tracking-wide my-3 sm:text-[20px] lg:text-[24px]`}
              >
                Contact Us for a Security Consultation!
              </h2>
            </div>
            <div className="w-full grid md:grid-cols-2 my-1 md:my-5 gap-5 lg:gap-10">
              <TextInput
                label={`Full Name*`}
                type="text"
                placeHolder="First Name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
              <TextInput
                label={`Last Name`}
                type="text"
                placeHolder="Last Name"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
            <div className="w-full grid md:grid-cols-2 my-1 md:my-5 gap-5 lg:gap-10">
              <TextInput
                label={`Company Name`}
                type="text"
                placeHolder="Enter Your Company Name"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
              />
              <TextInput
                label={`Company Website`}
                type="text"
                placeHolder="Enter Your Company Website"
                name="companyWebsite"
                value={formData.companyWebsite}
                onChange={handleChange}
              />
            </div>

            <div className="w-full grid md:grid-cols-2 my-1 md:my-5 gap-5 lg:gap-10">
              <TextInput
                label={`Email Address*`}
                type="text"
                placeHolder="Enter A Valid Email Address"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              <TextInput
                label={`Contact Number*`}
                type="text"
                placeHolder="(+91) Enter Your Contact Number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div className="w-full flex flex-col my-5">
              <label className="label">Select the type of Enquiry*</label>
              <select
                className="input"
                name="typeOfEnquiry"
                value={formData.typeOfEnquiry}
                onChange={handleChange}
              >
                <option value="">Type of Enquiry</option>
                <option value="Security Services">Security Services</option>
                <option value="Detective Services">Detective Services</option>
                <option value="Manpower Services">Manpower Services</option>
              </select>
            </div>

            <div className="w-full flex flex-col my-5">
              <label className="label">Enquiry</label>
              <textarea
                className="input w-full"
                rows="4"
                name="enquiry"
                value={formData.enquiry}
                onChange={handleChange}
                placeholder="Write Your Enquiry Here."
              />
            </div>

            <div className="w-full flex items-center justify-center my-5">
              <button className="btn-round-green" type="submit">
                Submit Now
              </button>
            </div>
          </form>
        </div>
        <ServicesIconCard service={service} />
        <Map />
      </div>
      {/* <Footer /> */}

      </MainNavbar>
     
    </>
  );
};

export default Page;
