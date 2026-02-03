import Link from "next/link";
import { FaHeart } from "react-icons/fa";

const Logo = () => {
  return (
    <div>
      <Link href={"/"} className="flex gap-1 items-center text-primary">
        <FaHeart size={30}/>
        <p className="text-3xl font-bold">CareNest</p>
      </Link>
    </div>
  );
};

export default Logo;
