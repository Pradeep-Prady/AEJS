"use client";

import { QueryClient, QueryClientProvider } from "react-query";

export default function Main({ children }) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="w-full h-screen poppins">
        {children}
      {/* <p className="poppins">  Globe </p> */}
        </div>

      
    </QueryClientProvider>
  );
}
