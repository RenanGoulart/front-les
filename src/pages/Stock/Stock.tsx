import { useState } from "react";
import {
  Container,
  TableContainer,
  TableRow,
  TableHeader,
  Content,
  TableCell,
  Title,
  DecreaseButton,
  IssueButton,
} from "./styles";
import Button from "../../components/Button/Button";
import SideBar from "../../components/SideBar/SideBar";
import OrderDetails from "../../components/OrderDetails/OrderDetails";
import ModalIncreaseStock from "../../components/ModalIncreaseStock/ModalIncreaseStock";
import ModalReduceStock from "../../components/ModalReduceStock/ModalReduceStock";

const Stock = () => {
  const [increaseForm, setIncreaseForm] = useState(false);
  const [reduceForm, setReduceForm] = useState(false);

  const openIncreaseModal = () => {
    setIncreaseForm(true);
  };

  const closeIncreaseModal = () => {
    setIncreaseForm(false);
  };

  const openReduceModal = () => {
    setReduceForm(true);
  };

  const closeReduceModal = () => {
    setReduceForm(false);
  };


  return (
    <Container>
      <SideBar />
      <Content>
        <TableHeader>
          <Title>Estoque</Title>
        </TableHeader>
        <TableContainer>
          <TableRow isHeader>
            <TableCell>ID do Pedido</TableCell>
            <TableCell>Produto</TableCell>
            <TableCell>Quantidade</TableCell>
            <TableCell>Valor</TableCell>
            <TableCell />
            <TableCell />
          </TableRow>
          <TableRow>
            <TableCell>#44</TableCell>
            <TableCell>Ten - Pearl Jam</TableCell>
            <TableCell>100</TableCell>
            <TableCell>R$ 200,00</TableCell>
            <TableCell>
              <DecreaseButton onClick={openReduceModal}>Dar baixa</DecreaseButton>
            </TableCell>
            <TableCell>
              <IssueButton onClick={openIncreaseModal}>Dar entrada</IssueButton>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>#12</TableCell>
            <TableCell>Happier Than Ever - Billie Eilish</TableCell>
            <TableCell>100</TableCell>
            <TableCell>R$ 180,00</TableCell>
            <TableCell>
              <DecreaseButton onClick={openReduceModal}>Dar baixa</DecreaseButton>
            </TableCell>
            <TableCell>
              <IssueButton onClick={openIncreaseModal}>Dar entrada</IssueButton>
            </TableCell>
          </TableRow>
        </TableContainer>
      </Content>
      {increaseForm && <ModalIncreaseStock closeModal={closeIncreaseModal} />}
      {reduceForm && <ModalReduceStock closeModal={closeReduceModal} />}
    </Container>
  );
};

export default Stock;
