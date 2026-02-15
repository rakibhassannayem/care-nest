import { FiCheckCircle } from "react-icons/fi";

const page = () => {
  return (
    <div className="container mx-auto my-10">
      <p className="text-primary font-bold">ABOUT CARE NEST</p>

      <div className="flex flex-col sm:flex-row gap-5">
        <div className="flex-1">
          <h2 className="text-3xl font-bold my-3">
            Your Trusted partner in{" "}
            <span className="text-primary">family care</span>
          </h2>
          <p className="text-gray-600">
            Care.xyz connects families with verified, compassionate caregivers.
            Whether you need babysitting, elderly care, or specialized home
            care, we make finding the right caregiver simple and secure.
          </p>

          <div className="mt-5 space-y-3 text-gray-600">
            <div className="flex items-center gap-2">
              <FiCheckCircle className="text-primary" />
              <p className="">Thoroughly vetted and trained caregivers</p>
            </div>
            <div className="flex items-center gap-2">
              <FiCheckCircle className="text-primary" />
              <p className="">Flexible booking - hourly or daily rates</p>
            </div>
            <div className="flex items-center gap-2">
              <FiCheckCircle className="text-primary" />
              <p className="">Real-time booking status updates</p>
            </div>
            <div className="flex items-center gap-2">
              <FiCheckCircle className="text-primary" />
              <p className="">Secure and transparent pricing</p>
            </div>
          </div>
        </div>
        
        <div className="flex-1 grid grid-cols-2 gap-5">
          <div className="flex flex-col items-center justify-center bg-primary/3 shadow-sm rounded-xl py-5">
            <span className="text-primary text-2xl font-bold">10,000+</span>
            <p className="text-gray-500">Happy Families</p>
          </div>
          <div className="flex flex-col items-center justify-center bg-primary/3 shadow-sm rounded-xl py-5">
            <span className="text-primary text-2xl font-bold">500+</span>
            <p className="text-gray-500">Verified Caregivers</p>
          </div>
          <div className="flex flex-col items-center justify-center bg-primary/3 shadow-sm rounded-xl py-5">
            <span className="text-primary text-2xl font-bold">50,000+</span>
            <p className="text-gray-500">Hours of Care</p>
          </div>
          <div className="flex flex-col items-center justify-center bg-primary/3 shadow-sm rounded-xl py-5">
            <span className="text-primary text-2xl font-bold">4.9/5</span>
            <p className="text-gray-500">Average Rating</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
