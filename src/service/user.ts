import { IFormUser } from "../hooks/useClient";
import api from "./api";

export interface IUserResponse {
  id: string;
  email: string;
  name: string;
  password: string;
  cpf: string;
  ddd: string;
  phone: string;
  phoneType: string;
  gender: string;
  birthDate: string;
  status: string;
  createdAt: string;
  updatedAt: string;
}

export interface IAddressResponse {
  id: string;
  street: string;
  number: string;
  district: string;
  zipCode: string;
  observation: string;
  cityId: string;
  addressType: string;
  streetType: string;
  residenceType: string;
  isMain: boolean;
  createdAt: string;
  updatedAt: string;
  userId: string;
}

export interface ICreditCardResponse {
  id: string;
  number: string;
  cardHolder: string;
  cvv: string;
  cardBrand: string;
  isMain: boolean;
}


export const createUser = async (body: Partial<IFormUser>) => {
  try {
    const { data } = await api.post<IUserResponse>('/user', body);
    return data
  } catch(err) {
    console.log(err);
  }
}

export const listUsers = async () => {
  try {
    const { data } = await api.get<IUserResponse[]>('/user');
    return data;
  } catch (error) {
    console.log(error);
  }
}

export const listAddresses = async (userId: string) => {
  try {
    const { data } = await api.get<IAddressResponse[]>(`/address/${userId}`);
    return data;
  } catch (error) {
    console.log(error);
  }
}

export const listCreditCards = async (userId: string) => {
  try {
    const { data } = await api.get<ICreditCardResponse[]>(`/cards/${userId}`);
    return data;
  } catch (error) {
    console.log(error);
  }
}