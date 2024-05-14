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

interface ITrack {
  name: string;
  duration: string;
}

export interface ICreateProductDTO {
  artist: string;
  album: string;
  year: string;
  producer: string;
  pricingGroup: string;
  height: string;
  width: string;
  weight: string;
  categories: string[];
  price: number;
  photo: string;
  quantityInStock: number;
  tracks: ITrack[];
}
