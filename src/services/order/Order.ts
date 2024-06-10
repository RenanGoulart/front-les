import api from "../../lib/axios";
import {
  ICreateOrderDTO,
  IDashboardResponse,
  IOrderResponse,
  IShowDashboardDTO,
  IUpdateOrderDTO,
  IUpdateOrderItemDTO,
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

  static async updateItem({ id, status }: IUpdateOrderDTO) {
    const { data } = await api.put<IOrderResponse>(`/order/item/${id}`, {
      status,
    });
    return data;
  }

  static async requestOrderExchange({ id, status }: IUpdateOrderDTO) {
    const { data } = await api.put<IOrderResponse>(
      `/order/exchangeOrder/${id}`,
      {
        status,
      },
    );
    return data;
  }

  static async requestOrderItemExchange({
    id,
    orderId,
    quantity,
    status,
  }: IUpdateOrderItemDTO) {
    const { data } = await api.put<IOrderResponse>(
      `/order/exchangeOrderItem/${id}`,
      {
        orderId,
        quantity,
        status,
      },
    );
    return data;
  }

  static async showDashboard({
    startDate,
    endDate,
    productFilters,
    categoryFilters,
  }: IShowDashboardDTO) {
    const { data } = await api.post<IDashboardResponse[]>(`/order/dashboard`, {
      startDate,
      endDate,
      productFilters,
      categoryFilters,
    });
    return data;
  }
}

export default Order;
