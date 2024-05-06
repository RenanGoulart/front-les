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
import ModalCreateCoupon from "../../components/ModalCreateCoupon/ModalCreateCoupon";
import useCoupon from "../../hooks/useCoupon";

const Coupons = () => {
  const [form, setForm] = useState(false);

  const { coupons } = useCoupon();

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
          <Title>Meus Cupons</Title>
          <Button onClick={openModal}>Adicionar Cupom</Button>
        </TableHeader>
        <TableContainer>
          <TableRow isHeader>
            <TableCell>Código do Cupom</TableCell>
            <TableCell>Quantidade</TableCell>
            <TableCell>Data de Validade</TableCell>
            <TableCell />
          </TableRow>
          {coupons?.map((coupon) => (
            <TableRow key={coupon.id}>
              <TableCell>#{coupon.name}</TableCell>
              <TableCell>{coupon.quantity}</TableCell>
              <TableCell>
                {format(coupon.expirationDate, "dd/MM/yyyy")}
              </TableCell>
            </TableRow>
          ))}
        </TableContainer>
      </Content>
      {form && <ModalCreateCoupon closeModal={closeModal} />}
    </Container>
  );
};

export default Coupons;
