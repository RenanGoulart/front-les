import api from "../../lib/axios";
import { ICreateProductDTO, IProductResponse } from "./dto/ProductDTO";

class Product {
  static async findAll() {
    const { data } = await api.get<IProductResponse[]>("/product");
    return data;
  }

  static async findById(id: string) {
    const { data } = await api.get<IProductResponse>(`/product/${id}`);
    return data;
  }

  static async create(product: ICreateProductDTO) {
    const { data } = await api.post<IProductResponse>("/product", product);
    return data;
  }
}

export default Product;
