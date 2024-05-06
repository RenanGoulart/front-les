export interface ICouponResponse {
  id: string;
  name: string;
  value: number;
  quantity: number;
  expirationDate: string;
}

export interface ICreateCouponDTO {
  name: string;
  value: number;
  quantity: number;
  expirationDate: Date;
}
