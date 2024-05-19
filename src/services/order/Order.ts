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
    const { data } = await api.put<IOrderResponse>(`/order/exchange/${id}`, {
      status,
    });
    return data;
  }
}

export default Order;
