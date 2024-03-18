import api from "./api";

export interface ICreditCardResponse {
  id: string;
  number: string;
  cardHolder: string;
  cvv: string;
  isMain: boolean;
  cardBrand: string;
  createdAt: string;
  updatedAt: string;
  userId: string;
}

export const findCreditCardById = async (creditCardId: string) => {
  try {
    const { data } = await api.get<ICreditCardResponse>(
      `/creditCard/${creditCardId}`,
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const updateCreditCard = async (body: Partial<ICreditCardResponse>) => {
  try {
    await api.put(`/creditCard/${body.id}`, body);
  } catch (error) {
    console.log(error);
  }
};
