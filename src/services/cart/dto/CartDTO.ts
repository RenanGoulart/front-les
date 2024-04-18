import { IProductResponse } from "../../product/dto/ProductDTO";

export interface ICartItem {
  id: string;
  salePrice: number;
  quantity: number;
  productId: string;
  cartId: string;
  product: IProductResponse;
}

export interface ICartResponse {
  id: string;
  total: number;
  userId: string;
  cartItems: ICartItem[];
  createdAt: string;
  updatedAt: string;
}

export interface ICreateCartDTO {
  userId: string;
  productId: string;
}

export interface IUpdateItemDTO {
  cartId: string;
  productId: string;
}
