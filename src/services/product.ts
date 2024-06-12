import api from "../lib/axios";
import { IProductResponse, IShowCuriosityDTO } from "./product/dto/ProductDTO";

export const findById = async (productId: string) => {
  try {
    const { data } = await api.get<IProductResponse>(`/product/${productId}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const showCuriosity = async(album: string) => {
  try{
    const { data } = await api.get<IShowCuriosityDTO>(`/curiosity/${album}`);
    return data;
  } catch (error){
    console.log(error);
  }
};
