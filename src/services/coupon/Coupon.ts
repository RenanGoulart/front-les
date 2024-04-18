import api from "../../lib/axios";
import { ICouponResponse } from "./dto/CouponDTO";

class Coupon {
  static async findByName(name: string) {
    const { data } = await api.get<ICouponResponse>(`/coupon/name/${name}`);
    return data;
  }
}

export default Coupon;
