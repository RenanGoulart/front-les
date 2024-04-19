import api from "../../lib/axios";
import { ICreateCreditCardDTO, ICreditCardResponse } from "./dto/CardDTO";

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
}

export default Card;
