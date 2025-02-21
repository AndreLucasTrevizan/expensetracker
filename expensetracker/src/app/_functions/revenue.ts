"use server";

import { api } from "../_api";

export interface RevenueType {
  id: number;
  description: string;
  value: number;
  userId: number;
  createdAt: Date;
  updatedAt: Date;
}

export const createRevenue = async (formData: FormData) => {
  try {
    const revenue = {
      description: formData.get("description"),
      value: formData.get("value"),
    };
    
    const response = await api.post("/revenue", revenue, {
      headers: {
        "Content-Type": "application/json"
      }
    });

    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      throw(error.message);
    }

    throw(error);
  }
}