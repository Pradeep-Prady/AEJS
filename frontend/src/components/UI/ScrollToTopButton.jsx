"use client";

// ScrollToTopButton.jsx
import { useEffect } from "react";
import { scroll } from "framer-motion";

const ScrollToTopButton = () => {
  useEffect(() => {
    const progressWheel = document.querySelector(".progress");

    const unsubscribe = scroll((progress) => {
      progressWheel.style.strokeDasharray = `${progress}, 1`;
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className="fixed bottom-0 left-0 z-50">
      <svg
        width="50"
        height="50"
        viewBox="0 0 100 100"
        className="progress-wheel"
      >
        <circle cx="50" cy="50" r="30" pathLength="1" className="bg" />
        <circle cx="50" cy="50" r="30" pathLength="1" className="progress" />
      </svg>
    </div>
  );
};

export default ScrollToTopButton;
