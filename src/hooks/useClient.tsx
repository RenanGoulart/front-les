/* eslint-disable react/jsx-no-constructed-context-values */
import { PropsWithChildren, createContext, useContext, useState } from "react";
import { createAddress, createCard, createUser } from "../service/user";

export interface IFormAddress {
  street: string;
  number: string;
  district: string;
  zipCode: string;
  observation?: string;
  addressType: string;
  streetType: string;
  residenceType: string;
  cityId: string;
  isMain?: boolean;
  userId?: string;
}

interface IFormCard {
  number: string;
  cardHolder: string;
  cvv: string;
  isMain?: boolean;
  cardBrand: string;
  userId?: string;
}

export interface IFormUser {
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
  addresses: IFormAddress[];
  cards: IFormCard[];
}

interface IClientProvider {
  createFormData: Partial<IFormUser>;
  setCreateFormData: (data: Partial<IFormUser>) => void;
  createClient: (cardData: IFormCard) => void;
  currentUserId: string | null;
  setCurrentUserId: (id: string | null) => void;
  createUserAddress: (addressData: IFormAddress) => void;
  currentAddressId: string | null;
  setCurrentAddressId: (id: string | null) => void;
  createCreditCard: (cardData: IFormCard) => void;
  currentCreditCardId: string | null;
  setCurrentCreditCardId: (id: string | null) => void;
}

const ClientContext = createContext({} as IClientProvider);

const ClientProvider = ({ children }: PropsWithChildren) => {
  const [createFormData, setCreateFormData] = useState(
    {} as Partial<IFormUser>,
  );
  const [currentUserId, setCurrentUserId] = useState(null as string | null);
  const [currentAddressId, setCurrentAddressId] = useState(
    null as string | null,
  );
  const [currentCreditCardId, setCurrentCreditCardId] = useState(
    null as string | null,
  );

  const createClient = async (cardData: IFormCard) => {
    const formattedBody = {
      ...createFormData,
      birthDate: new Date(createFormData?.birthDate as string).toISOString(),
      cards: [{ ...cardData, isMain: true }],
    };
    createUser(formattedBody);
  };

  const createCreditCard = async (cardData: IFormCard) => {
    createCard(cardData);
  };

  const createUserAddress = async (addressData: IFormAddress) => {
    createAddress(addressData);
  };

  return (
    <ClientContext.Provider
      value={{
        createFormData,
        setCreateFormData,
        createClient,
        currentUserId,
        setCurrentUserId,
        createUserAddress,
        currentAddressId,
        setCurrentAddressId,
        createCreditCard,
        currentCreditCardId,
        setCurrentCreditCardId,
      }}
    >
      {children}
    </ClientContext.Provider>
  );
};

export default ClientProvider;

export const useClient = () => useContext(ClientContext);
