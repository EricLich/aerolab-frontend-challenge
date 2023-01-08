import { AxiosResponse } from "axios";
import { User } from "../utils/types";
import axiosInstance from "./axios";

export const getUser = async (): Promise<User | Error> => {
  try {
    const res: AxiosResponse<User> = await axiosInstance.get('https://coding-challenge-api.aerolab.co/user/me');
    return res.data;
  } catch (err: any) {
    throw new Error(err.message)
  }
}