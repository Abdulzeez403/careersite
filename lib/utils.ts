import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import axios from "axios";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const axiosApi = async () => {
  const api = axios.create({
    baseURL: "https://class-book-be.onrender.com",
    headers: {
      Accept: "application/json",
    },
  });

  return {
    api,
  };
};
