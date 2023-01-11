import { AxiosResponse } from "axios";

import axiosInstance from "./axios";
import { AddPointsApiResponse, User } from "../utils/types";

export const getUser = async (): Promise<User> => {
  try {
    const res: AxiosResponse<User> = await axiosInstance.get('https://coding-challenge-api.aerolab.co/user/me');
    return res.data;
  } catch (err: any) {
    throw new Error(err)
  }
}

export const refillUserPoints = async (amount: number): Promise<AddPointsApiResponse> => {
  try {
    const res: AxiosResponse<AddPointsApiResponse> = await axiosInstance.post('https://coding-challenge-api.aerolab.co/user/points', {
      amount
    });
    return res.data;
  } catch (err: any) {
    throw new Error(err)
  }
}