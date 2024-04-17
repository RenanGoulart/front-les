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
  userId: string;
  city: City;
  state: State;
  country: Country;
  createdAt: string;
  updatedAt: string;
}

export interface IUpdateAddressDTO {
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
