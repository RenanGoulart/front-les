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