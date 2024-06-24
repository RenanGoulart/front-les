/* eslint-disable react/jsx-no-constructed-context-values */
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import User from "../services/user/User";
import Address from "../services/address/Address";
import Card from "../services/card/Card";
import { ICreateAddressDTO, IUpdateAddressDTO } from "../services/address/dto/AddressDTO";
import { ICreateCreditCardDTO, IUpdateCreditCardDTO } from "../services/card/dto/CardDTO";
import { handleSuccess } from "../lib/toastify";

const useUser = () => {
  const queryClient = useQueryClient();

  const { data: user } = useQuery({
    queryKey: ["user"],
    queryFn: () => User.findFirst(),
  });

  const { data: addresses } = useQuery({
    queryKey: ["addresses", user?.id],
    queryFn: () => Address.findByUserId(user?.id as string),
    enabled: !!user?.id,
  });

  const { data: cards } = useQuery({
    queryKey: ["cards", user?.id],
    queryFn: () => Card.findByUserId(user?.id as string),
    enabled: !!user?.id,
  });

  const { mutate: createAddress } = useMutation({
    mutationFn: Address.create,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["addresses", user?.id] });
      handleSuccess("Endereço criado com sucesso!");
    },
  });

  const { mutate: updateAddress } = useMutation({
    mutationFn: Address.update,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["addresses", user?.id] });
      handleSuccess("Endereço atualizado com sucesso!");
    },
  });

  const { mutate: deleteAddress } = useMutation({
    mutationFn: Address.delete,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["addresses", user?.id] });
      handleSuccess("Endereço excluído com sucesso!");
    },
  });

  const { mutate: createCard } = useMutation({
    mutationFn: Card.create,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cards", user?.id] });
      handleSuccess("Cartão criado com sucesso!");
    },
  });

  const { mutate: updateCard } = useMutation({
    mutationFn: Card.update,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cards", user?.id] });
      handleSuccess("Cartão atualizado com sucesso!");
    },
  });

  const { mutate: deleteCard } = useMutation({
    mutationFn: Card.delete,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cards", user?.id] });
      handleSuccess("Cartão excluído com sucesso!");
    },
  });

  const handleCreateAddress = (body: ICreateAddressDTO) => {
    createAddress(body);
  };

  const handleUpdateAddress = (body: IUpdateAddressDTO) => {
    updateAddress(body);
  };

  const handleDeleteAddress = (id: string) => {
    deleteAddress(id);
  };

  const handleCreateCard = (body: ICreateCreditCardDTO) => {
    createCard(body);
  };

  const handleUpdateCard = (body: IUpdateCreditCardDTO) => {
    updateCard(body);
  };

  const handleDeleteCard = (id: string) => {
    deleteCard(id);
  };

  return {
    user,
    addresses,
    cards,
    handleCreateAddress,
    handleCreateCard,
    handleUpdateAddress,
    handleDeleteAddress,
    handleUpdateCard,
    handleDeleteCard,
  };
};

export default useUser;
