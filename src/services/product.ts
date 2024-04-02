import api from "./api";

export interface IProductListResponse {
  id: string;
  artist: string;
  album: string;
  categories: string[];
  price: string;
}

export interface IProductResponse {
  id: string;
  artist: string;
  album: string;
  year: string;
  producer: string;
  numberOfTracks: string;
  height: string;
  width: string;
  weight: string;
  pricingGroup: string;
  categories: string;
  barCode: string;
  price: string;
}

export const listProducts = async () => {
  try {
    const { data } = await api.get<IProductListResponse[]>("/product");
    return data;
  } catch (error) {
    console.log(error);
  }
};
