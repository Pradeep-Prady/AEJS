"use client";

import { QueryClient, QueryClientProvider } from "react-query";
import { useState } from "react";
import Celebrate from "../Celebrations/Celebrate";
import ContinuousConfetti from "../Celebrations/ContinuousConfetti";
import FireworksConfetti from "../Celebrations/FireworksConfetti";
export default function Main({ children }) {
  const queryClient = new QueryClient();

  const [showConfetti, setShowConfetti] = useState(false);

  const handleCountdownComplete = () => {
    setShowConfetti(true);
  };
  return (
    <>
      <div
        className="w-full h-screen  z-0 relative"
      >
        <QueryClientProvider client={queryClient}>
          <div className="w-full h-screen poppins">{children}</div>
        </QueryClientProvider>
      </div>
{/* 
      {!showConfetti && (
        <Celebrate onCountdownComplete={handleCountdownComplete} />
      )}
      {showConfetti && (
        <>
          <ContinuousConfetti />
          <FireworksConfetti />
        </>
      )} */}
    </>
  );
}
