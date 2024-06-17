export enum ProductStatus {
  ACTIVE = "ATIVO",
  INACTIVE = "INATIVO",
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
  curiosity: string;
  linkVideo: string;
  status: ProductStatus;
  statusReason: string;
  pricingGroup: string;
  categories: string[];
  barCode: string;
  costPrice: number;
  price: number;
  photo: string;
  quantityInStock: number;
  tracks: ITrack[];
  createdAt: string;
  updatedAt: string;
}

export interface ITrack {
  id: string;
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
  costPrice: number;
  photo: string;
  quantityInStock: number;
  linkVideo: string;
  tracks: ITrack[];
}

export interface IUpdateProductInStockDTO {
  id: string;
  quantityInStock: number;
  costPrice: number;
}

export interface IUpdateProductStatusDTO {
  id: string;
  status: ProductStatus;
  statusReason: string;
}
