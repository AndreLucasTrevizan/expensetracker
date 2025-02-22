"use client";

import { useRouter } from "next/navigation";
import { FaChevronLeft } from "react-icons/fa6";

export default function HeaderForgetPassword() {
  const router = useRouter();

  return (
    <div
      className={`
        w-3/4
        py-4
        flex
        justify-between
      `}
    >
      <div
        className="
          flex
          items-center
          gap-2
          w-max
          hover:cursor-pointer
        "
        onClick={() => router.back()}
      >
        <>
          <FaChevronLeft color="#FFF" size={18} />
          <span className="font-bold text-white">Voltar</span>
        </>
      </div>
      <h1 className="text-2xl text-white font-bold">Expense Tracker</h1>
    </div>
  );
}