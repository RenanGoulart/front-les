import { IAddressResponse } from "../../address/dto/AddressDTO";
import { ICreditCardResponse } from "../../card/dto/CardDTO";
import { IProductResponse } from "../../product/dto/ProductDTO";

export enum OrderStatus {
  EM_PROCESSAMENTO = "EM_PROCESSAMENTO",
  APROVADA = "APROVADA",
  REPROVADA = "REPROVADA",
  EM_TRANSITO = "EM_TRANSITO",
  ENTREGUE = "ENTREGUE",
  TROCA_SOLICITADA = "TROCA_SOLICITADA",
  TROCA_AUTORIZADA = "TROCA_AUTORIZADA",
  TROCADO = "TROCADO",
}

export interface OrderItem {
  id: string;
  quantity: number;
  status: OrderStatus | null;
  productId: string;
  orderId: string;
  product: IProductResponse;
}

interface OrderCard {
  id: string;
  value: number;
  orderId: string;
  cardId: string;
  card: ICreditCardResponse;
}

export interface IOrderResponse {
  id: string;
  code: string;
  status: OrderStatus;
  freight: number;
  total: number;
  creditsUsed: number;
  addressId: string;
  couponId: null | string;
  userId: string;
  createdAt: string;
  updatedAt: string;
  orderItems: OrderItem[];
  cards: OrderCard[];
  address: IAddressResponse;
}

interface CardValue {
  id: string;
  value: number;
}

export interface ICreateOrderDTO {
  addressId: string;
  cartId: string;
  couponId: string | null;
  freight: number;
  cards: CardValue[];
  creditsUsed: number;
}

export interface IUpdateOrderDTO {
  id: string;
  status: string;
}

export interface IUpdateOrderItemDTO {
  id: string;
  orderId: string;
  quantity: number;
  status: string;
}

interface IDataset {
  label: string;
  values: number[];
}

export interface IDashboardResponse {
  labels: string[];
  datasets: IDataset[];
}
export interface IShowDashboardDTO {
  startDate: string;
  endDate: string;
  productFilters?: string[];
}
