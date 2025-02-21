"use client";

import { usePathname, useRouter } from "next/navigation";
import HeaderContent from "./HeaderContent";
import HeaderSignIn from "./HeaderSignIn";

export default function Header() {
  const pathname = usePathname();

  return (
    <div
      className="
        flex
        justify-center
        bg-blue-500
      "
    >
      {pathname !== "/sign_in" && <HeaderContent />}
      {pathname == "/sign_in" && <HeaderSignIn />}
    </div>
  );
}
