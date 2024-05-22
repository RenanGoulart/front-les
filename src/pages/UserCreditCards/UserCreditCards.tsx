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
import ModalCreateCreditCard from "../../components/ModalCreateCreditCard/ModalCreateCreditCard";
import Button from "../../components/Button/Button";

const UserCreditCards = () => {
  const [isCardModalVisible, setIsCardModalVisible] = useState(false);

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
            <TableCell>Número do Cartão</TableCell>
            <TableCell>CVV</TableCell>
            <TableCell style={{ justifyContent: "center" }}>
              Preferencial
            </TableCell>
            <TableCell />
            <TableCell />
          </TableRow>
          <TableRow>
            <TableCell>Maria Alice O G</TableCell>
            <TableCell>Mastercard</TableCell>
            <TableCell>5468 5034 5641 7531</TableCell>
            <TableCell>592</TableCell>
            <TableCell>
              <StyledCheckIcon />
            </TableCell>
            <TableCell>
              <StyledEditIcon
                onClick={() => setIsCardModalVisible(true)}
                data-cy="btn-edit-user-creditCard"
              />
            </TableCell>
            <TableCell>
              <StyledDeleteIcon
                onClick={() => null}
                data-cy="btn-delete-user-creditCard"
              />
            </TableCell>
          </TableRow>
        </TableContainer>
      </Content>
      {isCardModalVisible && (
        <ModalCreateCreditCard
          closeModal={() => setIsCardModalVisible(false)}
        />
      )}
    </Container>
  );
};

export default UserCreditCards;
