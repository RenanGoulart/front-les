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
  price: number;
  photo: string;
  quantityInStock: number;
  createdAt: string;
  updatedAt: string;
}

export interface ICreateProductDTO {
  artist: string;
  album: string;
  year: string;
  producer: string;
  pricingGroup: string;
  numberOfTracks: string;
  height: string;
  width: string;
  weight: string;
  categories: string[];
  price: number;
  photo: string;
  quantityInStock: number;
}

