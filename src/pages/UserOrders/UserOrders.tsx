import { useState } from "react";
import { format } from "date-fns";
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
import UserOrderDetails from "../../components/UserOrderDetails/UserOrderDetails";
import useOrder from "../../hooks/useOrder";
import { IOrderResponse } from "../../services/order/dto/OrderDTO";

const UserOrders = () => {
  const [currentOrder, setCurrentOrder] = useState<IOrderResponse | null>(null);
  const { userOrders, renderStatus } = useOrder();

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
          {userOrders &&
            userOrders.map((order) => (
              <TableRow key={order.id}>
                <TableCell>#{order.code}</TableCell>
                <TableCell>{format(order.createdAt, "dd/MM/yyyy")}</TableCell>
                <TableCell data-cy="order-status">
                  {renderStatus(order.status)}
                </TableCell>
                <TableCell style={{ justifyContent: "flex-end" }}>
                  <Button
                    onClick={() => setCurrentOrder(order)}
                    data-cy="btn-see-order"
                  >
                    Ver Pedido
                  </Button>
                </TableCell>
              </TableRow>
            ))}
        </TableContainer>
      </Content>
      {currentOrder && (
        <UserOrderDetails
          data={currentOrder}
          closeModal={() => setCurrentOrder(null)}
        />
      )}
    </Container>
  );
};

export default UserOrders;
