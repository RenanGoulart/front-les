import api from "../../lib/axios";
import { ICouponResponse, ICreateCouponDTO } from "./dto/CouponDTO";

class Coupon {
  static async findByName(name: string) {
    const { data } = await api.get<ICouponResponse>(`/coupon/name/${name}`);
    return data;
  }

  static async create(coupon: ICreateCouponDTO) {
    const { data } = await api.post<ICouponResponse>("/coupon", coupon);
    return data;
  }

  static async list() {
    const { data } = await api.get<ICouponResponse[]>("/coupon");
    return data;
  }
}

export default Coupon;
