import Link from "next/link";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShield, MdAccessTime } from "react-icons/md";

const HeroSection = () => {
  return (
    <div className="bg-linear-to-br from-primary/5 to-white py-10">
      <div className="container mx-auto flex gap-5">
        <div className="flex-1 space-y-5">
          <p className="text-primary font-semibold bg-linear-to-r from-primary/10 to-black/5 py-1 px-3 rounded-full flex items-center gap-1 w-fit">
            <FaRegHeart size={16} />
            Trusted by 10,000+ families
          </p>
          <h1 className="text-6xl font-extrabold leading-16">
            Caring for your <span className="text-primary">loved ones</span>{" "}
            with compassion
          </h1>

          <p className="text-gray-500 text-lg">
            Find trusted, professional caregivers for babies, elderly, and those
            who need special care at home. Making caregiving easy, secure, and
            accessible for everyone.
          </p>

          <Link
            href={"/services"}
            className="btn btn-primary text-white rounded-xl shadow-xl text-lg border-base-300 py-5"
          >
            Explore Services
          </Link>

          <div className="flex items-center gap-3 text-primary mt-3">
            <div className="flex items-center gap-2">
              <MdOutlineShield size={24} />
              <p className="text-gray-500 font-medium">Verified Caregivers</p>
            </div>

            <div className="flex items-center gap-2">
              <MdAccessTime size={24} />
              <p className="text-gray-500 font-medium">24/7 Support</p>
            </div>
          </div>
        </div>

        <div className="flex-1 hidden md:block">
          <div className="h-full rounded-xl shadow-2xl bg-linear-to-br from-primary/25 to-white flex flex-col items-center justify-center animate-pulse">
            <FaRegHeart size={100} className="text-primary" />
            <h3 className="font-bold text-2xl mt-5">Professional Care</h3>
            <span className="text-gray-500 text-lg">For Your Family</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
