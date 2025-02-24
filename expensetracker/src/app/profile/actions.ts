"use server";

import { api } from "../_api";
import { cookies } from "next/headers";
import { ErrorHandler } from "../_helper/Error";

export interface UserType {
  id: number;
  name: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}

export const getUserDetail = async (): Promise<UserType> => {
  try {
    const serverCookies = await cookies();

    const response = await api.get("/users/details", {
      headers: {
        "Authorization": `Bearer ${serverCookies.get("token")?.value}`
      }
    });

    return response.data.user;
  } catch (error) {
    const errorHandle = new ErrorHandler(error);

    throw(errorHandle);
  }
}
