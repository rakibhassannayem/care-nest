import { FaArrowLeftLong } from "react-icons/fa6";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import services from "@/Data/services.json";
import Link from "next/link";

export const metadata = {
  title: "Service Details",
};

const ServiceDetails = async ({ params }) => {
  const { id: param } = await params;
  const service = services.find((i) => i.id === Number(param));
  // console.log(service);
  const { id, image, title, description, hourlyRate, dailyRate, includings } =
    service || {};

  return (
    <div className="bg-primary/3 pb-20">
      <div className="container mx-auto pt-10">
        <Link
          href="/services"
          className="flex items-center gap-2 cursor-pointer hover:-translate-x-1 transition hover:text-primary text-lg w-fit font-medium"
        >
          <FaArrowLeftLong />
          Back
        </Link>
      </div>

      <div className="container mx-auto mt-5 flex flex-col lg:flex-row gap-12">
        <div className="space-y-3 flex-1">
          <img
            src={image}
            alt=""
            className="h-90 w-full object-cover rounded-2xl"
          />
          <h2 className="text-4xl font-bold">{title}</h2>
          <p className="text-gray-600 text-lg">{description}</p>
        </div>

        <div className="flex-1 bg-white shadow-2xl p-5 rounded-3xl h-fit pb-10">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 font-bold">STANDARD RATE</p>
              <p className="text-gray-500 font-medium">
                <span className="text-primary text-2xl font-bold">
                  ${hourlyRate}
                </span>
                /hour
              </p>
              <p className="text-gray-500 font-medium">
                <span className="text-primary text-lg  font-bold">
                  ${dailyRate}
                </span>
                /day
              </p>
            </div>
            <span className="badge bg-primary/15 text-primary font-bold px-4">
              Popular
            </span>
          </div>

          <p className="text-xl font-bold mt-5 mb-2">What&apos;s Included</p>
          <ul>
            {includings.map((i, ind) => (
              <li
                key={ind}
                className="flex gap-2 items-center text-xl text-gray-500"
              >
                <span className="text-primary">
                  <IoMdCheckmarkCircleOutline />
                </span>
                {i}
              </li>
            ))}
          </ul>

          <Link
            href={`/booking/${id}`}
            className="btn btn-primary text-white w-full mt-10 text-xl py-6 rounded-xl"
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
