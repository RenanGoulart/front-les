import { useState } from "react";
import { format } from "date-fns";
import {
  Container,
  TableContainer,
  TableRow,
  TableHeader,
  Content,
  TableCell,
  Title,
} from "./styles";
import Button from "../../components/Button/Button";
import SideBar from "../../components/SideBar/SideBar";
import OrderDetails from "../../components/OrderDetails/OrderDetails";
import useOrder from "../../hooks/useOrder";
import { IOrderResponse } from "../../services/order/dto/OrderDTO";

const AllOrders = () => {
  const [currentOrder, setCurrentOrder] = useState<IOrderResponse | null>(null);
  const { allOrders, renderStatus } = useOrder();

  return (
    <Container>
      <SideBar />
      <Content>
        <TableHeader>
          <Title>Pedidos</Title>
        </TableHeader>
        <TableContainer>
          <TableRow isHeader>
            <TableCell>Número do Pedido</TableCell>
            <TableCell>Data</TableCell>
            <TableCell>Status</TableCell>
            <TableCell />
          </TableRow>
          {allOrders &&
            allOrders.map((order) => (
              <TableRow key={order.id}>
                <TableCell>#{order.code}</TableCell>
                <TableCell>{format(order.createdAt, "dd/MM/yyyy")}</TableCell>
                <TableCell data-cy="all-order-status">{renderStatus(order.status)}</TableCell>
                <TableCell>
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
        <OrderDetails
          data={currentOrder}
          closeModal={() => setCurrentOrder(null)}
        />
      )}
    </Container>
  );
};

export default AllOrders;
