"use client";

import React, { useState, use } from "react";
import {
  MdAccessTime,
  MdLocationOn,
  MdOutlineLibraryAddCheck,
  MdCheckCircle,
} from "react-icons/md";
import services from "@/Data/services.json";
import divisions from "@/Data/division.json";
import warehouses from "@/Data/warehouses.json";
import { useRouter } from "next/navigation";

const districtsByDivision = (division) => {
  const regionDistricts = warehouses.filter((c) => c.region === division);
  const districts = regionDistricts.map((d) => d.district);
  return districts;
};

const BookingPage = ({ params }) => {
  const { id: paramId } = use(params);
  const router = useRouter();
  const serviceId = parseInt(paramId);
  const service = services.find((s) => s.id === serviceId);

  const [bookingType, setBookingType] = useState("hourly");
  const [duration, setDuration] = useState(1);
  const [formData, setFormData] = useState({
    division: "",
    district: "",
    city: "",
    area: "",
    address: "",
  });

  if (!service) {
    return (
      <div className="container mx-auto py-20 text-center text-2xl font-bold">
        Service not found
      </div>
    );
  }

  const rate =
    bookingType === "hourly" ? service.hourlyRate : service.dailyRate;
  const totalCost = rate * duration;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleConfirm = async () => {
    // console.log("Booking Confirmed:", { service: service.title, bookingType, duration, formData, totalCost });
    const bookingData = {
      ...formData,
      service: service.title,
      bookingType,
      duration,
      totalCost,
    };
    // console.table(bookingData)

    const res = await fetch("/api/bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ bookingData }),
    });

    const data = await res.json();
    if (data.insertedId) {
      // Send invoice email
      await fetch("/api/send-invoice", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ bookingData }),
      });

      alert("Booking Requested Successfully! An invoice has been sent to your email.");
      router.push("/privateRoute/myBookings");
    }
  };

  return (
    <div className="bg-[#f9fafb] min-h-screen py-10">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column: Form Sections */}
          <div className="flex-1 space-y-8">
            {/* Duration Section */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <MdAccessTime className="text-primary text-2xl" />
                <h2 className="text-xl font-bold text-gray-800">Duration</h2>
              </div>

              <div className="flex gap-6 mb-8">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="bookingType"
                    className="radio radio-primary radio-sm"
                    checked={bookingType === "hourly"}
                    onChange={() => setBookingType("hourly")}
                  />
                  <span className="font-medium">
                    Hourly (৳{service.hourlyRate}/hr)
                  </span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="bookingType"
                    className="radio radio-primary radio-sm"
                    checked={bookingType === "daily"}
                    onChange={() => setBookingType("daily")}
                  />
                  <span className="font-medium">
                    Daily (৳{service.dailyRate}/day)
                  </span>
                </label>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">
                  {bookingType === "hourly"
                    ? "Number of Hours"
                    : "Number of Days"}
                </label>
                <input
                  type="number"
                  min="1"
                  value={duration}
                  onChange={(e) => setDuration(parseInt(e.target.value) || 1)}
                  className="w-full p-4 border border-gray-200 rounded-xl bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary transition"
                  placeholder="1"
                />
              </div>
            </div>

            {/* Location Section */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <MdLocationOn className="text-primary text-2xl" />
                <h2 className="text-xl font-bold text-gray-800">Location</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-2">
                    Division *
                  </label>
                  <select
                    name="division"
                    value={formData.division}
                    onChange={handleInputChange}
                    className="w-full p-4 border border-gray-200 rounded-xl bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20fill%3D%27none%27%20viewBox%3D%270%200%2020%2020%27%3E%3Cpath%20stroke%3D%27%236b7280%27%20stroke-linecap%3D%27round%27%20stroke-linejoin%3D%27round%27%20stroke-width%3D%271.5%27%20d%3D%27m6%208%204%204%204-4%27%2F%3E%3C%2Fsvg%3E')] bg-[length:1.25rem_1.25rem] bg-[right_1rem_center] bg-no-repeat"
                  >
                    <option value="">Select Division</option>
                    {divisions.map((div, i) => (
                      <option key={i} value={div}>
                        {div}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-2">
                    District *
                  </label>
                  <select
                    name="district"
                    value={formData.district}
                    onChange={handleInputChange}
                    className="w-full p-4 border border-gray-200 rounded-xl bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20fill%3D%27none%27%20viewBox%3D%270%200%2020%2020%27%3E%3Cpath%20stroke%3D%27%236b7280%27%20stroke-linecap%3D%27round%27%20stroke-linejoin%3D%27round%27%20stroke-width%3D%271.5%27%20d%3D%27m6%208%204%204%204-4%27%2F%3E%3C%2Fsvg%3E')] bg-[length:1.25rem_1.25rem] bg-[right_1rem_center] bg-no-repeat"
                  >
                    <option value="">Select District</option>
                    {districtsByDivision(formData.division).map((d, i) => (
                      <option key={i} value={d}>
                        {d}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-2">
                    City *
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    placeholder="Enter city name"
                    className="w-full p-4 border border-gray-200 rounded-xl bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-2">
                    Area
                  </label>
                  <input
                    type="text"
                    name="area"
                    value={formData.area}
                    onChange={handleInputChange}
                    placeholder="Enter area (optional)"
                    className="w-full p-4 border border-gray-200 rounded-xl bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">
                  Full Address *
                </label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  rows="4"
                  placeholder="Enter your complete address"
                  className="w-full p-4 border border-gray-200 rounded-xl bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary"
                ></textarea>
              </div>
            </div>
          </div>

          {/* Right Column: Booking Summary */}
          <div className="w-full lg:w-100">
            <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 sticky top-10">
              <div className="flex items-center gap-3 mb-8">
                <MdOutlineLibraryAddCheck className="text-primary text-2xl" />
                <h2 className="text-xl font-bold text-gray-800">
                  Booking Summary
                </h2>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center text-gray-600">
                  <span>Service</span>
                  <span className="font-semibold text-gray-800">
                    {service.title}
                  </span>
                </div>
                <div className="flex justify-between items-center text-gray-600">
                  <span>Duration</span>
                  <span className="font-semibold text-gray-800">
                    {duration} {bookingType === "hourly" ? "Hour(s)" : "Day(s)"}
                  </span>
                </div>
                <div className="flex justify-between items-center text-gray-600">
                  <span>Rate</span>
                  <span className="font-semibold text-gray-800">
                    ৳{rate}/{bookingType === "hourly" ? "hr" : "day"}
                  </span>
                </div>
              </div>

              <div className="border-t border-gray-100 pt-6 mb-8">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-gray-800">
                    Total Cost
                  </span>
                  <span className="text-2xl font-bold text-primary">
                    ৳{totalCost}
                  </span>
                </div>
              </div>

              <button
                onClick={handleConfirm}
                className="w-full btn btn-primary text-white font-bold p-6 rounded-xl"
              >
                <MdCheckCircle className="text-xl" />
                Confirm Booking
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
