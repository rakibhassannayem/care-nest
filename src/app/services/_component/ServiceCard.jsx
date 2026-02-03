import Link from "next/link";
import { TbCurrencyTaka } from "react-icons/tb";
import { IoIosArrowRoundForward } from "react-icons/io";

const ServiceCard = ({ service }) => {
  const { id, image, title, subtitle, hourlyRate, dailyRate } = service || {};
  return (
    <div className="card bg-base-100 shadow-sm">
      <figure>
        <img src={image} className="h-50 w-full object-cover" />
      </figure>
      <div className="card-body p-4">
        <div>
          <h3 className="text-lg font-bold">{title}</h3>
          <p className="text-gray-500">{subtitle}</p>
        </div>

        <div className="flex justify-between items-center">
          <div>
            <p className="font-semibold text-gray-500">Hourly</p>
            <span className="font-bold flex items-center">
              <TbCurrencyTaka size={20} />
              {hourlyRate}
            </span>
          </div>
          <div>
            <p className="font-semibold text-end text-gray-500">Daily</p>
            <span className="font-bold flex items-center">
              <TbCurrencyTaka size={20} />
              {dailyRate}
            </span>
          </div>
        </div>

        <Link
          href={`/services/${id}`}
          className="btn btn-primary text-white w-full flex items-center"
        >
          View Details
          <IoIosArrowRoundForward size={24} />
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
