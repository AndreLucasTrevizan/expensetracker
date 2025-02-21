import Link from "next/link";
import { FaChevronRight } from "react-icons/fa6";

export default function RevenueSald() {
  return (
    <div
      className="
        p-4
        bg-white
        border
        rounded
        flex
        justify-between
      "
    >
      <div
        className="
          flex
          flex-col
        "
      >
        <span className="text-lg">Saldo</span>
        <span className="font-bold">R$ 351,23</span>
      </div>
      <Link href={"/expenses"}><FaChevronRight color='#3b82f6' className="hover:cursor-pointer" /></Link>
    </div>
  );
}