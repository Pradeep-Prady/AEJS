import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import logo from "/public/assets/general/logo.svg"; // Ensure this path is correct
import Image from "next/image";
import bg from "/public/assets/general/background.png";

import motion from "framer-motion"

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
    <div className="w-full  bg-no-repeat  bg-cover  font-Varela fixed top-0 bottom-0 h-full z-50 flex flex-col items-center"
    style={{ backgroundImage: `url(${bg.src})` }}
    
    >
      < div  className="w-full flex items-center justify-center">
        <Image width={300} className="w-[300px]  mt-50  scale-[2]" src={logo} alt="logo" />
      </ div>

      <h1 className="text-9xl mt-40">{count}</h1>
      <button
        className="bg-blue-500 text-white px-4 py-2 mt-10"
        onClick={startCountdown}
      >
        Launch Now
      </button>
    </div>
  );
};

Celebrate.propTypes = {
  onCountdownComplete: PropTypes.func.isRequired,
};

export default Celebrate;
