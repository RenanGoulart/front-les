import { useEffect, useState } from "react";
import {
  Container,
  TableRow,
  TableContainer,
  TableColumn,
  TableHeaderColumn,
  Row,
  StyledCheckIcon,
  StyledDeleteIcon,
  StyledEditIcon,
} from "./styles";
import Button from "../Button/Button";
import ModalCreateCreditCard from "../ModalCreateCreditCard/ModalCreateCreditCard";

import { useClient } from "../../hooks/useClient";
import { ClientPagesType } from "../../pages/Dashboard/Dashboard";
import { useQuery } from "@tanstack/react-query";
import { ICreditCardListResponse, deleteCreditCard, listCreditCards } from "../../services/creditCard";

export type FormType = "client" | "address" | "address2" | "creditCard" | null;

interface Props {
  navigateTo: (page: ClientPagesType) => void;
}

const CreditCard = ({ navigateTo }: Props) => {
  const { currentUserId, setCurrentCreditCardId } = useClient();

  const [form, setForm] = useState<FormType>(null);

  const closeModal = () => {
    setForm(null);
  };

  const { data: cards, refetch } = useQuery<ICreditCardListResponse[]>({
    queryKey: ['cards', currentUserId],
    queryFn: () => listCreditCards(currentUserId as string) as Promise<ICreditCardListResponse[]>
  })

  const handleDeleteCreditCard = async (creditCardId: string) => {
    await deleteCreditCard(creditCardId);
    refetch();
  };

  return (
    <Container>
      <button type="button" onClick={() => navigateTo("clients")}>
        Voltar
      </button>
      <Row>
        <h1>Cartões de Crédito</h1>
        <Button
          onClick={() => {
            setCurrentCreditCardId("");
            setForm("creditCard");
          }}
        >
          Criar Cartão
        </Button>
      </Row>

      <TableContainer>
        <thead>
          <TableRow>
            <TableHeaderColumn>Titular do Cartão</TableHeaderColumn>
            <TableHeaderColumn>Bandeira do Cartão</TableHeaderColumn>
            <TableHeaderColumn>Número do Cartão</TableHeaderColumn>
            <TableHeaderColumn>CVV</TableHeaderColumn>
            <TableHeaderColumn>Preferencial</TableHeaderColumn>
            <TableHeaderColumn />
            <TableHeaderColumn />
          </TableRow>
        </thead>
        <tbody>
          {cards?.map((card) => (
            <TableRow key={card.id}>
              <TableColumn>{card.cardHolder}</TableColumn>
              <TableColumn>{card.cardBrand}</TableColumn>
              <TableColumn>{card.number}</TableColumn>
              <TableColumn>{card.cvv}</TableColumn>
              <TableColumn>
                {card.isMain ? <StyledCheckIcon /> : null}
              </TableColumn>
              <TableColumn>
                <StyledEditIcon
                  onClick={() => {
                    setCurrentCreditCardId(card.id);
                    setForm("creditCard");
                  }}
                />
              </TableColumn>
              <TableColumn>
                <StyledDeleteIcon
                  onClick={() => handleDeleteCreditCard(card.id)}
                />
              </TableColumn>
            </TableRow>
          ))}
        </tbody>
      </TableContainer>

      {form === "creditCard" && (
        <ModalCreateCreditCard closeModal={() => {
          closeModal();
          setTimeout(() => {
            refetch();
          }, 500)
        }} />
      )}
    </Container>
  );
};

export default CreditCard;
