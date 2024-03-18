import api from "./api";

export interface ICreditCardListResponse {
  id: string;
  number: string;
  cardHolder: string;
  cvv: string;
  cardBrand: string;
  isMain: boolean;
}

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

export interface ICreditCardRequest {
  number: string;
  cardHolder: string;
  cvv: string;
  cardBrand: string;
  isMain: boolean;
  userId: string;
}

export const createCard = async (body: Partial<ICreditCardRequest>) => {
  try {
    const { data } = await api.post<ICreditCardResponse>("/creditCard", body);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const listCreditCards = async (userId: string) => {
  try {
    const { data } = await api.get<ICreditCardListResponse[]>(
      `/creditCard/user/${userId}`,
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteCreditCard = async (creditCardId: string) => {
  try {
    await api.delete(`/creditCard/${creditCardId}`);
  } catch (error) {
    console.log(error);
  }
};

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
