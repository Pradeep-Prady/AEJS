import React from 'react';
import Link from 'next/link';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white shadow-sm rounded-lg p-8 md:p-12 text-center">
        <h1 className="text-6xl font-extrabold text-blue-600">404</h1>
        <h2 className="mt-4 text-2xl md:text-3xl font-semibold text-gray-800">Oops! Page Not Found</h2>
        <p className="mt-4 text-gray-600">The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
        <div className="w-full flex items-center justify-center">
           <Link href="/">
          <p className="mt-6 px-6 py-3 bg-blue-500 text-white font-medium rounded-lg shadow hover:bg-blue-600 transition duration-300 ease-in-out">
            Go to Homepage
          </p>
        </Link>
          </div>
       
      </div>
    </div>
  );
};

export default NotFound;
