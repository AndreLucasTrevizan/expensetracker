"use client";

import { usePathname } from "next/navigation";
import HeaderContent from "./HeaderContent";
import HeaderSignIn from "./HeaderSignIn";
import HeaderForgetPassword from "./HeaderForgetPassword";

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
      {pathname == "/sign_in" ? <HeaderSignIn /> :
      pathname == "/forget_password" ? <HeaderForgetPassword /> : <HeaderContent />}
    </div>
  );
}
