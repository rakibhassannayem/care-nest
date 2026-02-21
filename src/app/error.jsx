"use client";

import Link from "next/link";
import { useEffect } from "react";
import { HiHome, HiRefresh } from "react-icons/hi";
import { MdErrorOutline } from "react-icons/md";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Runtime Error:", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="text-center max-w-2xl w-full">
        <div className="flex justify-center mb-6">
          <div className="bg-red-50 p-4 rounded-full">
            <MdErrorOutline className="text-red-500 text-6xl" />
          </div>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Something went wrong!
        </h1>

        <p className="text-gray-500 text-lg mb-8">
          An unexpected error occurred. We've been notified and are working to fix it.
          You can try refreshing the page or head back home.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={() => reset()}
            className="bg-primary text-white px-8 py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
          >
            <HiRefresh size={20} />
            Try Again
          </button>

          <Link
            href="/"
            className="bg-white text-gray-700 border border-gray-200 px-8 py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-gray-50 transition-all"
          >
            <HiHome size={20} />
            Return Home
          </Link>
        </div>

        {/* Optional: Show error message in development */}
        {process.env.NODE_ENV === "development" && (
          <div className="mt-12 p-4 bg-red-50 border border-red-100 rounded-lg text-left overflow-auto max-h-40">
            <p className="text-red-700 font-mono text-sm">
              {error.message || "Unknown error"}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
