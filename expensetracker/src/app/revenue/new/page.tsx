"use client";

import FormCreateRevenue from "@/app/_ui/FormCreateRevenue";

export default function RevenueNew() {
  return (
    <div
      className="
        border
        rounded
        p-4
        bg-white
      "
    >
      <h1 className="text-lg mb-4">Nova Receita</h1>
      <FormCreateRevenue />
    </div>
  );
}