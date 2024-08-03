import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import logo from "/public/assets/general/logo.svg"; // Ensure this path is correct
import Image from "next/image";
import bg from "/public/assets/general/background.png";
import bg2 from "/public/assets/general/BG.jpg";

import motion from "framer-motion";

const Celebrate = ({ onCountdownComplete }) => {
  const [count, setCount] = useState(10);
  const [isCounting, setIsCounting] = useState(false);

  useEffect(() => {
    let timer;

    if (isCounting && count > 0) {
      timer = setInterval(() => {
        setCount((prevCount) => prevCount - 1);
      }, 1000);
    } else if (count === 0) {
      clearInterval(timer);
      setIsCounting(false); // Stop counting when the countdown finishes
      onCountdownComplete(); // Trigger the callback function
    }

    return () => clearInterval(timer); // Cleanup interval on component unmount
  }, [isCounting, count, onCountdownComplete]);

  const startCountdown = () => {
    if (!isCounting) {
      setIsCounting(true);
      setCount(10); // Reset count to 10
    }
  };

  return (
    <div
      className="w-full h-auto bg-no-repeat  bg-cover font-Varela fixed top-0 bottom-0 z-50 flex flex-col items-center"
      style={{ backgroundImage: `url(${bg2.src})` }}
    >
      <div className="w-full  flex items-center justify-center">
        <Image
          width={300}
          className="w-[300px]  mt-30  scale-[2]"
          src={logo}
          alt="logo"
        />
      </div>
      <h2 className="text-6xl font-bold mt2 mb-5 text-[#14286a]">
        Official Website Launch
      </h2>
      <h2 className="text-3xl font-light text-center mb-5 text-[#14286a]">
        3 - August - 2024
      </h2>

      <h1 className="text-9xl mt-10 mb-10 text-[#14286a]">{count}</h1>

      <button className=" launch-btn " onClick={startCountdown}>
        Launch Now
      </button>
    </div>
  );
};

Celebrate.propTypes = {
  onCountdownComplete: PropTypes.func.isRequired,
};

export default Celebrate;
