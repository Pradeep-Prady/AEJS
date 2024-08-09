"use client";

import React, { useState, useRef } from "react";
import ServiceHeading from "@/components/UI/ServiceHeading";
import banner from "/public/assets/career/banner.png";
import TextInput from "@/components/UI/TextInput";
import { useMutation } from "react-query";
import axiosInstance from "@/utils/axios";
import { revalidatePath } from "next/cache";
import ScrollDownButton from "@/components/UI/ScrollDownButton";
import MainNavbar from "@/components/General/MainNavbar";

const initialValue = {
  firstName: "",
  lastName: "",
  age: "",
  address: "",
  city: "",
  state: "",
  pinCode: "",
  email: "",
  phone: "",
  totalExperience: "",
  relevantExperience: "",
  applicationOfPost: "",
  about: "",
  resume: null,
};

const Page = () => {
  const fileInputRef = useRef(null);
  const [formData, setFormData] = useState(initialValue);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFormData({ ...formData, resume: selectedFile });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const mutation = useMutation({
    mutationFn: async (data) => {
      const formData = new FormData();
      for (const key in data) {
        formData.append(key, data[key]);
      }

      try {
        const response = await axiosInstance.post("career/create", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        return response.data;
      } catch (error) {
        throw error;
      }
    },
    onError: (error) => {
      console.error("Error submitting form:", error);
    },
    onSuccess: () => {
      // Reset form fields after successful submission
      setFormData(initialValue);
      revalidatePath("/admin/career", "layout");
      revalidatePath("/career");
      if (fileInputRef.current) {
        fileInputRef.current.value = null;
      }
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await mutation.mutateAsync(formData); // Use mutateAsync for async/await behavior
      // Reset form fields after successful submission
      setFormData({
        firstName: "",
        lastName: "",
        age: "",
        address: "",
        city: "",
        state: "",
        pinCode: "",
        email: "",
        phone: "",
        totalExperience: "",
        relevantExperience: "",
        applicationOfPost: "",
        about: "",
        resume: null,
      });
      // Clear file input field
      if (fileInputRef.current) {
        fileInputRef.current.value = null;
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <>
      <MainNavbar>
        <div className="w-full ">
          <div
            style={{ backgroundImage: `url(${banner?.src})` }}
            className="w-full bg-cover relative h-screen flex items-center justify-center"
          >
            <ServiceHeading
              className={``}
              tStyle={`w-10/12 md:w-8/12`}
              stStyle={`w-10/12 px-3`}
              title={`Empower Your Future. Join Our Team!`}
              subTitle={`Make a Difference in Your Community`}
            />
            <ScrollDownButton link={"career"} />
          </div>

          <div className="w-full flex bg-[#fafafa] items-center justify-center">
            <form
              onSubmit={handleSubmit}
              className="w-full myPadX md:w-8/12"
              id="career"
            >
              <div className={"my-10 text-center"}>
                <h4
                  className={`text-primary tracking-wide text-[20px] sm:text-[24px] lg:text-[30px] font-semibold`}
                >
                  Please Fill Out the Following Information to Apply
                </h4>
                <h5
                  className={`text-myLG tracking-wide my-3 sm:text-[20px] lg:text-[24px]`}
                >
                  Join Our Team!
                </h5>
              </div>
              <div className="w-full grid md:grid-cols-3 my-1 md:my-5 gap-5 lg:gap-10">
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
                <TextInput
                  label={`Age*`}
                  type="text"
                  placeHolder="Enter Your Age"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                />
              </div>
              <TextInput
                label={`Address*`}
                type="text"
                placeHolder="Enter Your Address"
                name="address"
                value={formData.address}
                onChange={handleChange}
              />
              <div className="w-full grid md:grid-cols-2 my-1 md:my-5 gap-5 lg:gap-10">
                <TextInput
                  label={`City*`}
                  type="text"
                  placeHolder="Enter Your City Name"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                />
                <TextInput
                  label={`State*`}
                  type="text"
                  placeHolder="Enter Your State Name"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                />
              </div>
              <div className="w-full grid md:grid-cols-2 my-1 md:my-5 gap-5 lg:gap-10">
                <TextInput
                  label={`Pincode*`}
                  type="text"
                  placeHolder="Enter Pin Code"
                  name="pinCode"
                  value={formData.pinCode}
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
              <div className="w-full grid md:grid-cols-2 my-1 md:my-5 gap-7 lg:gap-10">
                <TextInput
                  label={`Total Experience*`}
                  type="text"
                  placeHolder="Enter the Total Years of Experience"
                  name="totalExperience"
                  value={formData.totalExperience}
                  onChange={handleChange}
                />
                <TextInput
                  label={`Relevant Experience*`}
                  type="text"
                  placeHolder="Enter Any Experience In Relevant Fields"
                  name="relevantExperience"
                  value={formData.relevantExperience}
                  onChange={handleChange}
                />
              </div>
              <div className="w-full flex flex-col my-5">
                <label className="label"> Application For The Post Of*</label>
                <select
                  className="input"
                  name="applicationOfPost"
                  value={formData.applicationOfPost}
                  onChange={handleChange}
                >
                  <option>Click Here To Select From The List </option>
                  <option value="Security Services">Security Services </option>
                  <option value="Detective Services">
                    Detective Services{" "}
                  </option>
                  <option value="Manpower Services">Manpower Services </option>
                </select>
              </div>

              <div className="w-full flex flex-col my-5">
                <label className="label"> Tell About Yourself</label>
                <textarea
                  className="input w-full"
                  rows="4"
                  name="about"
                  value={formData.about}
                  onChange={handleChange}
                  placeholder="Tell about yourself and also mention the post you are applying for"
                />
              </div>

              <div className="w-full flex flex-col my-5">
                <label className="label"> Upload CV/Resume*</label>
                <input
                  ref={fileInputRef}
                  type="file"
                  className="input"
                  onChange={handleFileChange} // Attach the handleFileChange function to the onChange event
                />
              </div>
              <div className="w-full flex items-center justify-center my-5">
                <button className="btn-round-green" type="submit">
                  Submit Now
                </button>
              </div>
            </form>
          </div>
        </div>
        {/* <Footer /> */}
      </MainNavbar>
    </>
  );
};

export default Page;
