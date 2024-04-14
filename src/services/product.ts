import api from "./api";

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
  categories: string[];
  barCode: string;
  price: string;
  photo: string;
  createdAt: string;
  updatedAt: string;
}

export const listProducts = async () => {
  try {
    const { data } = await api.get<IProductResponse[]>("/product");
    return data;
  } catch (error) {
    console.log(error);
  }
};
