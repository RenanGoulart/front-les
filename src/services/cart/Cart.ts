import api from "../../lib/axios";
import { ICartResponse, ICreateCartDTO, IUpdateItemDTO } from "./dto/CartDTO";

class Cart {
  static async findByUserId(userId: string) {
    const { data } = await api.get<ICartResponse>(`/cart/${userId}`);
    return data;
  }

  static async create({ userId, productId }: ICreateCartDTO) {
    try {
      const { data } = await api.post<ICartResponse>("/cart", {
        userId,
        productId,
      });
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  static async addItem({ cartId, productId }: IUpdateItemDTO) {
    try {
      const { data } = await api.put<ICartResponse>(`/cart/add/${cartId}`, {
        productId,
      });
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  static async subtractItem({ cartId, productId }: IUpdateItemDTO) {
    const { data } = await api.put<ICartResponse>(`/cart/sub/${cartId}`, {
      productId,
    });
    return data;
  }

  static async removeItem({ cartId, productId }: IUpdateItemDTO) {
    const { data } = await api.put<ICartResponse>(`/cart/remove/${cartId}`, {
      productId,
    });
    return data;
  }
}

export default Cart;
