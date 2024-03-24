import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import {
  Container,
  TableRow,
  TableContainer,
  StyledCheckIcon,
  StyledDeleteIcon,
  StyledEditIcon,
  Content,
  TableHeader,
  Title,
  TableCell,
} from "./styles";
import Button from "../../components/Button/Button";
import ModalCreateCreditCard from "../../components/ModalCreateCreditCard/ModalCreateCreditCard";

import { useClient } from "../../hooks/useClient";
import {
  ICreditCardListResponse,
  deleteCreditCard,
  listCreditCards,
} from "../../services/creditCard";
import SideBar from "../../components/SideBar/SideBar";

export type FormType = "client" | "address" | "address2" | "creditCard" | null;

const CreditCard = () => {
  const navigate = useNavigate();

  const { currentUserId, setCurrentCreditCardId } = useClient();

  const [form, setForm] = useState<FormType>(null);

  const closeModal = () => {
    setForm(null);
  };

  const { data: cards, refetch } = useQuery<ICreditCardListResponse[]>({
    queryKey: ["cards", currentUserId],
    queryFn: () =>
      listCreditCards(currentUserId as string) as Promise<
        ICreditCardListResponse[]
      >,
  });

  const handleDeleteCreditCard = async (creditCardId: string) => {
    await deleteCreditCard(creditCardId);
    refetch();
  };

  return (
    <Container>
      <SideBar />
      <Content>
        <button type="button" onClick={() => navigate("/client")}>
          Voltar
        </button>
        <TableHeader>
          <Title>Cartões de Crédito</Title>
          <Button
            onClick={() => {
              setCurrentCreditCardId("");
              setForm("creditCard");
            }}
          >
            Adicionar Cartão de Crédito
          </Button>
        </TableHeader>
        <TableContainer>
          <TableRow isHeader>
            <TableCell>Titular do Cartão</TableCell>
            <TableCell>Bandeira do Cartão</TableCell>
            <TableCell>Número do Cartão</TableCell>
            <TableCell>CVV</TableCell>
            <TableCell>Preferencial</TableCell>
            <TableCell />
            <TableCell />
          </TableRow>
          {cards?.map((card) => (
            <TableRow key={card.id}>
              <TableCell>{card.cardHolder}</TableCell>
              <TableCell>{card.cardBrand}</TableCell>
              <TableCell>{card.number}</TableCell>
              <TableCell>{card.cvv}</TableCell>
              <TableCell>{card.isMain ? <StyledCheckIcon /> : null}</TableCell>
              <TableCell>
                <StyledEditIcon
                  onClick={() => {
                    setCurrentCreditCardId(card.id);
                    setForm("creditCard");
                  }}
                />
              </TableCell>
              <TableCell>
                {" "}
                <StyledDeleteIcon
                  onClick={() => handleDeleteCreditCard(card.id)}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableContainer>
      </Content>

      {form === "creditCard" && (
        <ModalCreateCreditCard
          closeModal={() => {
            closeModal();
            setTimeout(() => {
              refetch();
            }, 500);
          }}
        />
      )}
    </Container>
  );
};

export default CreditCard;
