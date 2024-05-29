import { useState } from "react";
import {
  Container,
  TableContainer,
  TableRow,
  Content,
  TableCell,
  Title,
  StyledCheckIcon,
  StyledEditIcon,
  StyledDeleteIcon,
} from "./styles";
import Header from "../../components/Header/Header";
import NavBar from "../../components/NavBar/NavBar";
import Button from "../../components/Button/Button";
import useUser from "../../hooks/useUser";
import { ICreditCardResponse } from "../../services/card/dto/CardDTO";
import ModalCreateUserCreditCard from "../../components/ModalCreateUserCreditCard/ModalCreateUserCreditCard";

const UserCreditCards = () => {
  const [ isCardModalVisible, setIsCardModalVisible ] = useState(false);
  const [ card, setCard ] = useState<ICreditCardResponse | null>(null);
  const { cards, handleDeleteCard } = useUser();

  return (
    <Container>
      <Header />
      <NavBar />
      <Content>
        <Title>Meus Cartões de Crédito</Title>
        <Button
          onClick={() => {setIsCardModalVisible(true)}}
          data-cy="btn-add-user-creditCard"
        >
          Adicionar Cartão
        </Button>
        <TableContainer>
          <TableRow isHeader>
            <TableCell>Titular do Cartão</TableCell>
            <TableCell>Bandeira do Cartão</TableCell>
            <TableCell>CVV</TableCell>
            <TableCell style={{ justifyContent: "center" }}>
              Preferencial
            </TableCell>
            <TableCell />
            <TableCell />
          </TableRow>
          {cards && cards.map((card) => (
          <TableRow key={card.id}>
            <TableCell>{card.cardHolder}</TableCell>
            <TableCell>{card.cardBrand}</TableCell>
            <TableCell>{card.cvv}</TableCell>
            <TableCell>
              <StyledCheckIcon />
            </TableCell>
            <TableCell style={{ justifyContent: "flex-end" }}>
              <StyledEditIcon
                onClick={() => {
                  setCard(card)
                }}
                data-cy="btn-edit-user-creditCard"
              />
            </TableCell>
            <TableCell>
              <StyledDeleteIcon
                onClick={() => handleDeleteCard(card.id)}
                data-cy="btn-delete-user-creditCard"
              />
            </TableCell>
          </TableRow>
          ))}
        </TableContainer>
      </Content>
      {(card || isCardModalVisible) && (
        <ModalCreateUserCreditCard
          closeModal={() => {
            setIsCardModalVisible(false);
            setCard(null);
          }}
          card={card as ICreditCardResponse}
        />
      )}
    </Container>
  );
};

export default UserCreditCards;
