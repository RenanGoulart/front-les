import { IFormUser } from "../hooks/useClient";
import api from "./api";

interface ICountry {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
}

interface IState {
  id: string;
  name: string;
  countryId: string;
  createdAt: string;
  updatedAt: string;
  country: ICountry;
}

interface ICity {
  id: string;
  name: string;
  stateId: string;
  createdAt: string;
  updatedAt: string;
  state: IState;
}

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

interface IAddressResponse {
  id: string;
  street: string;
  number: string;
  district: string;
  zipCode: string;
  observation: string;
  cityId: string;
  city: ICity;
  addressType: string;
  streetType: string;
  residenceType: string;
  isMain: boolean;
  createdAt: string;
  updatedAt: string;
  userId: string;
}

export interface IAddress {
  id: string;
  street: string;
  number: string;
  district: string;
  zipCode: string;
  observation: string;
  cityId: string;
  city: ICity;
  state: IState;
  country: ICountry;
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
  } catch (error) {
    console.log(error);
  }
}

export const deleteUser = async (userId: string) => {
  try {
    await api.delete(`/user/${userId}`);
  } catch (error) {
    console.log(error);
  }
}

export const deleteAddress = async (addressId: string) => {
  try {
    await api.delete(`/address/${addressId}`);
  } catch (error) {
    console.log(error);
  }
}

export const deleteCreditCard = async (creditCardId: string) => {
  try {
    await api.delete(`/creditCard/${creditCardId}`);
  } catch (error) {
    console.log(error);
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
    const { data } = await api.get<IAddressResponse[]>(`/address/user/${userId}`);
    const addresses = data.map((address) => (
      {
        ...address,
        state: address.city.state,
        country: address.city.state.country
      }
    ))

    return addresses;
  } catch (error) {
    console.log(error);
  }
}

export const listCreditCards = async (userId: string) => {
  try {
    const { data } = await api.get<ICreditCardResponse[]>(`/creditCard/user/${userId}`);
    return data;
  } catch (error) {
    console.log(error);
  }
}