import api from "../lib/axios";
import { IProductResponse } from "./product/dto/ProductDTO";

export const findById = async (productId: string) => {
  try {
    const { data } = await api.get<IProductResponse>(`/product/${productId}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};
