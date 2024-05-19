import api from "../../lib/axios";
import { IProductResponse, IUpdateProductInStockDTO } from "./dto/ProductDTO";

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

  static async updateInStock({ id, quantityInStock, costPrice }: IUpdateProductInStockDTO) {
    const { data } = await api.put<IProductResponse>(`/product/stock/${id}`, { quantityInStock,  costPrice });
    return data;
  }
}

export default Product;
