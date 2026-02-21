import { MdOutlineAccessTime } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineDateRange } from "react-icons/md";
import { TbCurrencyTaka } from "react-icons/tb";
import BookingCancelBtn from "@/components/buttons/BookingCancelBtn";
import { cookies } from "next/headers";

export const metadata = {
  title: "My Bookings",
};


const getBookings = async () => {
  const result = await fetch(`${process.env.NEXTAUTH_URL}/api/bookings`, {
    headers: {
      cookie: (await cookies()).toString(),
    },
    cache: "force-cache",
  });

  return await result.json();
};

const page = async () => {
  const bookings = await getBookings();

  return (
    <div className="py-5 min-h-screen">
      <div className="container mx-auto">
        <div>
          <h2 className="text-3xl font-bold">
            My Bookings{" "}
            <span className="text-primary">({bookings.length})</span>
          </h2>
          <p className="text-gray-500 mt-1">
            Track and manage your care service bookings
          </p>
        </div>

        {!bookings.length ? (
          <p className="text-center text-3xl font-semibold mt-10 text-primary">
            No Bookings Yet!
          </p>
        ) : (
          bookings.map((b) => (
            <div
              key={b._id}
              className="bg-primary/3 rounded-xl shadow-md p-4 flex flex-col sm:flex-row justify-between gap-5 mt-5"
            >
              <div>
                <h3 className="text-xl font-bold">{b.service}</h3>

                <div className="flex items-center gap-2">
                  <div className="text-gray-500 flex items-center gap-0.5">
                    <MdOutlineAccessTime size={16} />
                    {b.duration} Hours
                  </div>

                  <div className="text-gray-500 flex items-center gap-0.5">
                    <IoLocationOutline size={16} />
                    {b.district}, {b.division}
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
                    {b.totalCost}
                  </span>
                </div>

                <div className="space-x-2">
                  <span className="badge font-semibold bg-yellow-400  py-4">
                    {b.status}
                  </span>
                  <BookingCancelBtn id={b?._id} />
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default page;
