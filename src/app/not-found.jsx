import Link from "next/link";
import React from "react";
import { HiHome } from "react-icons/hi";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="text-center max-w-2xl w-full">
        {/* 404 Text Layer */}
        <div className="relative">
          <h1 className="text-9xl font-black text-gray-200 select-none">404</h1>
          <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl md:text-3xl font-bold text-gray-800 w-full">
            Oops! Page not found
          </p>
        </div>

        <div className="mt-8 space-y-4">
          <p className="text-gray-500 text-lg">
            The page you're looking for doesn't exist or has been moved.
            Let's get you back to safety.
          </p>

          <div className="flex justify-center mt-10">
            <Link
              href="/"
              className="bg-primary text-white px-8 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
            >
              <HiHome size={20} />
              Return Home
            </Link>
          </div>
        </div>

        {/* Subtle background decoration */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden -z-10">
          <div className="absolute top-1/4 -right-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
