"use server";

import { api } from "../_api";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { ErrorHandler } from "../_helper/Error";

export const handleSignIn = async (prevState: { message: string }, formData: FormData) => {
  const serverCookies = await cookies();

  try {
    const signIn = {
      email: formData.get("email"),
      password: formData.get("password"),
    };
    
    const response = await api.post("/sign_in", signIn, {
      headers: {
        "Content-Type": "application/json"
      }
    });

    const {
      token
    } = response.data;

    serverCookies.set("token", token);
  } catch (error) {
    const errorHandle = new ErrorHandler(error);
    
    return errorHandle;
  }

  redirect('/');
}
