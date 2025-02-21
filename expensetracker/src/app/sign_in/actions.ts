"use server";

import { AxiosError } from "axios";
import { api } from "../_api";
import { redirect } from "next/navigation";

export const handleSignIn = async (prevState: any, formData: FormData) => {
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

    redirect('/');
  } catch (error) {
    if (error instanceof AxiosError) {
      return { message: error.response?.data['msg'] };
    } else if (error instanceof Error) {
      return { message: error.message };
    } else {
      throw(error);
    }
  }
}
