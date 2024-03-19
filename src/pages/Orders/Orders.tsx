import {
  Container,
  TableContainer,
  TableRow,
  Content,
  TableCeil,
  Title,
} from "./styles";
import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import NavBar from "../../components/NavBar/NavBar";

const Orders = () => {
  return (
    <Container>
      <Header />
      <NavBar />
      <Content>
        <Title>Meus Pedidos</Title>
        <TableContainer>
          <TableRow isHeader>
            <TableCeil>Número do Pedido</TableCeil>
            <TableCeil>Data</TableCeil>
            <TableCeil>Status</TableCeil>
            <TableCeil />
          </TableRow>
          <TableRow>
            <TableCeil>#444</TableCeil>
            <TableCeil>02/02/2024</TableCeil>
            <TableCeil>Pago</TableCeil>
            <TableCeil style={{ justifyContent: "flex-end" }}>
              <Button onClick={() => {}}>Ver Pedido</Button>
            </TableCeil>
          </TableRow>
        </TableContainer>
      </Content>
    </Container>
  );
};

export default Orders;
