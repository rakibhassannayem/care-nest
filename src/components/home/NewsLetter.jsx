import { FaRegHeart } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

const NewsLetter = () => {
  return (
    <div className="container mx-auto bg-primary/70 rounded-2xl flex flex-col gap-8 items-center text-white py-12 text-center mb-10">
      <FaRegHeart size={56} />
      <h2 className="text-4xl font-bold">
        Ready to find the perfect caregiver?
      </h2>
      <p className="text-xl text-gray-200">
        Join thousands of families who trust Care.xyz for their caregiving
        needs. Start your <br /> journey today.
      </p>
      <div className="flex items-center gap-3">
        <button className="btn btn-primary text-lg text-white">Get Started<FaArrowRightLong /></button>
        <button className="btn btn-outline text-lg text-white">Browse Services</button>
      </div>
    </div>
  );
};

export default NewsLetter;
