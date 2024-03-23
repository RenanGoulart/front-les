import { useState } from "react";
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

const AllOrders = () => {
  const [form, setForm] = useState(false);

  const openModal = () => {
    setForm(true);
  };

  const closeModal = () => {
    setForm(false);
  };

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
          <TableRow>
            <TableCell>#44</TableCell>
            <TableCell>02/02/2024 </TableCell>
            <TableCell>Em processamento</TableCell>
            <TableCell>
              <Button onClick={openModal}>
              Ver Pedido
              </Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>#23</TableCell>
            <TableCell>01/02/2024</TableCell>
            <TableCell>Aprovado</TableCell>
            <TableCell>
              <Button onClick={openModal}>
              Ver Pedido
              </Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>#11</TableCell>
            <TableCell>27/01/2024</TableCell>
            <TableCell>Em trânsito</TableCell>
            <TableCell>
              <Button onClick={openModal}>
              Ver Pedido
              </Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>#276</TableCell>
            <TableCell>27/01/2024</TableCell>
            <TableCell>Em troca</TableCell>
            <TableCell>
              <Button onClick={openModal}>
              Ver Pedido
              </Button>
            </TableCell>
          </TableRow>
        </TableContainer>
      </Content>
      {form && <OrderDetails closeModal={closeModal} />}
    </Container>
  );
};

export default AllOrders;
