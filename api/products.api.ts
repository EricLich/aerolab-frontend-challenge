import { AxiosResponse } from "axios";

import axiosInstance from "./axios";
import { Product } from "../utils/types";

export const getProducts = async (): Promise<Product[]> => {
  try {
    const res: AxiosResponse<Product[]> = await axiosInstance.get('https://coding-challenge-api.aerolab.co/products');
    return res.data;
  } catch (err: any) {
    throw new Error(err)
  }
}

export const redeemProduct = async (productId: string): Promise<string> => {
  try {
    const res: AxiosResponse<string> = await axiosInstance.post('https://coding-challenge-api.aerolab.co/redeem', {
      productId,
    });
    return res.data;
  } catch (err: any) {
    throw new Error(err)
  }
}