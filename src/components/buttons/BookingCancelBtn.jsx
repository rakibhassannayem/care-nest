"use client";

import { useRouter } from "next/navigation";

const BookingCancelBtn = ({ id }) => {
  const router = useRouter();
  const handleCancel = async () => {
    const res = await fetch(`http://localhost:3000/api/bookings/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();

    if (data.acknowledged) {
      alert("Booking Cancelled Successfully!");
      router.refresh();
    } else {
      alert("Something went wrong!!!");
    }
  };

  return (
    <button
      onClick={handleCancel}
      className="btn bg-red-500 text-white rounded-xl"
    >
      Cancel
    </button>
  );
};

export default BookingCancelBtn;
