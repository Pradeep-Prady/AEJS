"use client";

import axiosInstance from "@/utils/axios";
import React, {   useState } from "react";
import TextInput from "../UI/TextInput";
import { useMutation, useQuery } from "react-query";

const AdminMain = ({ children, setIsLoggedIn, isLoggedIn }) => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
 

  useQuery(
    ["checkIfAdminIsLoggedInOrNot"],
    () => axiosInstance.get("admin/me"),
    {
      onSuccess: (res) => {
        setIsLoggedIn(res.data?.data.admin);

      },
      onError: (err) => {
        console.log(err);
      },
      enabled: !isLoggedIn,
    }
  );
  

const { mutate: handleLogin } = useMutation(
    () =>
      axiosInstance.post("admin/login", {
        username: username,
        password: password,
      }),
    {
      onSuccess: (data) => {
        console.log("Data:", data.data);
        setIsLoggedIn(data?.data.admin);
      },

      onError: (error) => {
        console.error("Error fetching data:", error);
      },
    }
  );
  
  return (
    <>
      {isLoggedIn ? (
        <div className="w-[78%] h-full">{children}</div>
      ) : (
        <div className="w-[78%] h-full flex items-center justify-center">
          <form className="w-4/12 border-2 p-5">
            <h2 className="text-center text-[28px] my-3 font-semibold">
              {" "}
              Login
            </h2>
            <div>
              <TextInput
                label={`User Name*`}
                type="text"
                placeHolder="User Name"
                name="userName"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />

              <TextInput
                label={`Password`}
                type="text"
                placeHolder="Password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="w-full flex items-center justify-center">
                <button
                  type="button"
                  className=" bg-primary rounded-sm w-full py-3 !text-white font-medium my-2 md:my-5"
                  onClick={handleLogin}
                >
                  Login
                </button>
              </div>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default AdminMain;
