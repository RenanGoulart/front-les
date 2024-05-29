export interface ICreditCardResponse {
  id: string;
  number: string;
  cardHolder: string;
  cvv: string;
  cardBrand: string;
  isMain: boolean;
}

export interface ICreateCreditCardDTO {
  number: string;
  cardHolder: string;
  cvv: string;
  cardBrand: string;
  isMain: boolean;
  userId: string;
}

export interface IUpdateCreditCardDTO {
  id: string;
  number: string;
  cardHolder: string;
  cvv: string;
  cardBrand: string;
  isMain: boolean;
  userId: string;
}
