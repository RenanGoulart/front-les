import api from "../../lib/axios";
import {
  IChatDTO,
  IProductResponse,
  IUpdateProductDTO,
  IUpdateProductInStockDTO,
  IUpdateProductStatusDTO,
} from "./dto/ProductDTO";

class Product {
  static async findAll() {
    const { data } = await api.get<IProductResponse[]>("/product");
    return data;
  }

  static async findById(id: string) {
    const { data } = await api.get<IProductResponse>(`/product/${id}`);
    return data;
  }

  static async create(product: FormData) {
    const { data } = await api.post<IProductResponse>("/product", product);
    return data;
  }

  static async updateInStock({
    id,
    quantityInStock,
    costPrice,
  }: IUpdateProductInStockDTO) {
    const { data } = await api.put<IProductResponse>(`/product/stock/${id}`, {
      quantityInStock,
      costPrice,
    });
    return data;
  }

  static async updateStatus({
    id,
    status,
    statusReason,
  }: IUpdateProductStatusDTO) {
    const { data } = await api.patch<IProductResponse>(
      `/product/status/${id}`,
      {
        status,
        statusReason,
      },
    );
    return data;
  }

  static async update({ id, product }: IUpdateProductDTO) {
    const { data } = await api.put<IProductResponse>(`/product/${id}`, product);
    return data;
  }

  static async chat({ id, message }: IChatDTO) {
    const { data } = await api.post<string>(`/chat/${id}`, { message });
    return data;
  }
}

export default Product;
