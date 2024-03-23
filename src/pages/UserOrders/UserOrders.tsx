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

const UserOrders = () => {
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
            <TableCell>#444</TableCell>
            <TableCell>02/02/2024</TableCell>
            <TableCell>Pago</TableCell>
            <TableCell style={{ justifyContent: "flex-end" }}>
              <Button onClick={() => {}}>Ver Pedido</Button>
            </TableCell>
          </TableRow>
        </TableContainer>
      </Content>
    </Container>
  );
};

export default UserOrders;
