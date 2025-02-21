"use client";

import RevenueMenu from "../_ui/RevenueMenu";
import RevenueSald from "../_ui/RevenueSald";

export default function Revenue() {
  return (
    <div
      className="flex flex-col gap-4"
    >
      <RevenueMenu />
      <RevenueSald />
    </div>
  );
}