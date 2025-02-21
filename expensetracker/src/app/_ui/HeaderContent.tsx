"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { FaChevronLeft } from "react-icons/fa6";

export default function HeaderContent() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div
      className={pathname == "/" ? `
        w-3/4
        py-4
      ` : `
        flex
        items-center
        justify-between
        w-3/4
        py-4
      `}
    >
      {(pathname !== "/") && (
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
          {pathname !== "/sign_in" && (
            <>
              <FaChevronLeft color="#FFF" size={18} />
              <span className="font-bold text-white">Voltar</span>
            </>
          )}
        </div>
      )}
      <div
        className={pathname != "/" ? `flex flex-col` : `flex justify-between`}
      >
        <Link href="/" className="text-2xl text-white font-bold">Expense Tracker</Link>
        {pathname != "/profile" && <Link href="/profile" className="text-white w-max">Ver Perfil</Link>}
      </div>
    </div>
  );
}