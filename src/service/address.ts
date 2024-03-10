import api from "./api";

export interface ICountryResponse {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
}

export interface IStatesResponse {
  id: string;
  name: string;
  countryId: string;
  createdAt: string;
  updatedAt: string;
}

export interface ICitiesResponse {
  id: string;
  name: string;
  stateId: string;
  createdAt: string;
  updatedAt: string;
}

interface Country {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
}

interface State {
  id: string;
  name: string;
  countryId: string;
  createdAt: string;
  updatedAt: string;
  country: Country;
}

interface City {
  id: string;
  name: string;
  stateId: string;
  createdAt: string;
  updatedAt: string;
  state: State;
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
  city: City;
  state: State;
  country: Country;
}

export interface IAddressRequest {
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

export const listCountries = async () => {
  try {
    const { data } = await api.get<ICountryResponse[]>('/address/countries');
    return data;
  } catch (error) {
    console.log(error);
  }
}

export const listStatesByCountryId = async (countryId: string) => {
  try {
    const { data } = await api.get<IStatesResponse[]>(`/address/states/${countryId}`);
    return data;
  } catch (error) {
    console.log(error);
  }
}

export const listCitiesByStateId = async (stateId: string) => {
  try {
    const { data } = await api.get<ICitiesResponse[]>(`/address/cities/${stateId}`);
    return data;
  } catch (error) {
    console.log(error);
  }
}

export const findAddressById = async (addressId: string) => {
  try {
    const { data } = await api.get<IAddressResponse>(`/address/${addressId}`);
    const address = {
      ...data,
      state: data.city.state,
      country: data.city.state.country
    }
  
    return address;
  } catch (error) {
    console.log(error);
  }
}

export const updateAddress = async (body: Partial<IAddressRequest>) => {
  try {
    await api.put(`/address/${body.id}`, body);
  } catch (error) {
    console.log(error);
  }
}