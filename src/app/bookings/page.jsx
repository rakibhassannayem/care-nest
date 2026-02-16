import { MdOutlineAccessTime } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineDateRange } from "react-icons/md";
import { TbCurrencyTaka } from "react-icons/tb";

export const metadata = {
  title: "Bookings",
};

const getBookings = async () => {
  const result = await fetch("http://localhost:3000/api/bookings");

  return await result.json();
};

const page = async () => {
  const bookings = await getBookings();

  return (
    <div className="bg-primary/5 py-5 min-h-screen">
      <div className="container mx-auto">
        <div>
          <h2 className="text-3xl font-bold">My Bookings</h2>
          <p className="text-gray-500 mt-1">
            Track and manage your care service bookings
          </p>
        </div>

        {bookings.map((b) => (
          <div
            key={b._id}
            className="bg-white rounded-xl shadow-xl p-4 flex flex-col sm:flex-row justify-between gap-5 mt-5"
          >
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-bold">{b.service}</h3>
                <span className="badge font-semibold bg-yellow-500 text-yellow-800 py-3">
                  {b.status}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <div className="text-gray-500 flex items-center gap-0.5">
                  <MdOutlineAccessTime size={16} />
                  {b.duration} Hours
                </div>

                <div className="text-gray-500 flex items-center gap-0.5">
                  <IoLocationOutline size={16} />
                  {b.location}
                </div>

                <div className="text-gray-500 flex items-center gap-0.5">
                  <MdOutlineDateRange size={16} />
                  {new Date(b.date).toLocaleDateString()}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-gray-500 flex flex-col items-center">
                Total Cost
                <span className="text-xl font-bold text-primary flex items-center">
                  <TbCurrencyTaka />
                  {b.cost}
                </span>
              </div>

              <div className="space-x-2">
                <button className="btn btn-outline rounded-xl">Details</button>
                <button className="btn bg-red-500 text-white rounded-xl">
                  Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
