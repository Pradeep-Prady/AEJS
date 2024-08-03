import React, { useEffect } from "react";
import confetti from "canvas-confetti";

const ContinuousConfetti = () => {
  useEffect(() => {
    const end = Date.now() + 15 * 1000; // Run for 15 seconds
    const colors = ["#bb0000", "#ffffff"];

    (function frame() {
      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors,
      });

      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors,
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  }, []);

  return <div></div>;
};

export default ContinuousConfetti;
