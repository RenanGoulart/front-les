import {
  Container,
  TableColumn,
  TableContainer,
  TableHeaderColumn,
  TableRow,
  Row
} from "./styles";
import Button from "../Button/Button";

export type ProfilePagesType =  "userProfile" | "orders" |"addresses" | "creditCards";

interface Props {
  navigateTo: (page: ProfilePagesType) => void;
}

const Orders = ({ navigateTo }: Props) => {
  return (
    <Container>
      <Row>
          <button type="button" onClick={() => navigateTo("userProfile")}>
            Voltar
          </button>
        </Row>
        <Row>
          <h1>Meus Pedidos</h1>
        </Row>
      <TableContainer>
        <thead>
          <TableRow>
            <TableHeaderColumn>Número do Pedido</TableHeaderColumn>
            <TableHeaderColumn>Data</TableHeaderColumn>
            <TableHeaderColumn>Status</TableHeaderColumn>
            <TableHeaderColumn></TableHeaderColumn>
          </TableRow>
        </thead>
        <tbody>
          <TableRow>
            <TableColumn>#444</TableColumn>
            <TableColumn>02/02/2024</TableColumn>
            <TableColumn>Pago</TableColumn>
            <TableColumn>
              <Button onClick={() => {}}>
                Ver Pedido
              </Button>
            </TableColumn>
          </TableRow>
        </tbody>
      </TableContainer>
    </Container>
  );
};

export default Orders;
