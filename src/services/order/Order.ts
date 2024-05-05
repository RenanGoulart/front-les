import api from "../../lib/axios";
import {
  ICreateOrderDTO,
  IOrderResponse,
  IUpdateOrderDTO,
} from "./dto/OrderDTO";

class Order {
  static async create(body: ICreateOrderDTO) {
    const { data } = await api.post<IOrderResponse>("/order", body);
    return data;
  }

  static async findByUserId(userId: string) {
    const { data } = await api.get<IOrderResponse[]>(`/order/user/${userId}`);
    return data;
  }

  static async list() {
    const { data } = await api.get<IOrderResponse[]>("/order");
    return data;
  }

  static async update({ id, status }: IUpdateOrderDTO) {
    const { data } = await api.put<IOrderResponse>(`/order/${id}`, { status });
    return data;
  }

  static async updateExchange({ id, status }: IUpdateOrderDTO) {
    try {
      const { data } = await api.put<IOrderResponse>(`/order/exchange/${id}`, {
        status,
      });
      console.log("data", data);
      return data;
    } catch (error) {
      console.log("error", error);
    }
    return {} as IOrderResponse;
  }
}

export default Order;
