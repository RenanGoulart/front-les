/* eslint-disable react/jsx-no-constructed-context-values */
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import User from "../services/user/User";
import Address from "../services/address/Address";
import Card from "../services/card/Card";
import { ICreateAddressDTO } from "../services/address/dto/AddressDTO";
import { ICreateCreditCardDTO } from "../services/card/dto/CardDTO";

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
    },
  });

  const { mutate: createCard } = useMutation({
    mutationFn: Card.create,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cards", user?.id] });
    },
  });

  const handleCreateAddress = (body: ICreateAddressDTO) => {
    createAddress(body);
  };

  const handleCreateCard = (body: ICreateCreditCardDTO) => {
    createCard(body);
  };

  return { user, addresses, cards, handleCreateAddress, handleCreateCard };
};

export default useUser;
