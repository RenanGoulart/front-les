import {
  Container,
  TableContainer,
  TableRow,
  Content,
  TableCell,
  Title,
} from "./styles";
import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import NavBar from "../../components/NavBar/NavBar";
import { useState } from "react";
import UserOrderDetails from "../../components/UserOrderDetails/UserOrderDetails";

const UserOrders = () => {
  const [ orderDetails, setOrderDetails ] = useState(false);
  return (
    <Container>
      <Header />
      <NavBar />
      <Content>
        <Title>Meus Pedidos</Title>
        <TableContainer>
          <TableRow isHeader>
            <TableCell>Número do Pedido</TableCell>
            <TableCell>Data</TableCell>
            <TableCell>Status</TableCell>
            <TableCell />
          </TableRow>
          <TableRow>
            <TableCell>#44</TableCell>
            <TableCell>02/02/2024</TableCell>
            <TableCell>Entregue</TableCell>
            <TableCell style={{ justifyContent: "flex-end" }}>
              <Button onClick={() => setOrderDetails(true)}>Ver Pedido</Button>
            </TableCell>
          </TableRow>
        </TableContainer>
      </Content>
      {orderDetails && (
        <UserOrderDetails
          closeModal={() => setOrderDetails(false)}
        />
      )}
    </Container>
  );
};

export default UserOrders;
