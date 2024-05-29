import api from "../../lib/axios";
import { ICreateCreditCardDTO, ICreditCardResponse, IUpdateCreditCardDTO } from "./dto/CardDTO";

class Card {
  static async findByUserId(userId: string) {
    const { data } = await api.get<ICreditCardResponse[]>(
      `/creditCard/user/${userId}`,
    );
    return data;
  }

  static async create(body: ICreateCreditCardDTO) {
    const { data } = await api.post<ICreditCardResponse>("/creditCard", body);
    return data;
  }

  static async update(body: IUpdateCreditCardDTO) {
    const { data } = await api.put<ICreditCardResponse>(`/creditCard/${body.id}`, body);
    return data;
  }

  static async delete(id: string) {
    await api.delete<ICreditCardResponse>(`/creditCard/${id}`);
  }
}

export default Card;
