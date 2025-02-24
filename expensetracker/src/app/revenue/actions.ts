"use server";

import { cookies } from "next/headers";
import { api } from "../_api";
import { redirect } from "next/navigation";
import { ErrorHandler } from "../_helper/Error";

export interface RevenueType {
  id: number;
  description: string;
  value: number;
  userId: number;
  createdAt: Date;
  updatedAt: Date;
}

export const createRevenue = async (prevState: { message: string }, formData: FormData) => {
  const serverCookies = await cookies();

  try {
    const revenue = {
      description: formData.get("description"),
      value: formData.get("value"),
    };

    await api.post("/revenue", revenue, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${serverCookies.get("token")?.value}`,
      }
    });
  } catch (error) {
    console.log(error);
    const errorHandle = new ErrorHandler(error);

    return errorHandle;
  }

  redirect("/revenue");
}