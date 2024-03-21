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

const Coupons = () => {
  return (
    <Container>
      <SideBar />
      <Content>
        <TableHeader>
          <Title>Meus Cupons</Title>
          <Button onClick={() => {}}>Adicionar Cupom</Button>
        </TableHeader>
        <TableContainer>
          <TableRow isHeader>
            <TableCell>Código do Cupom</TableCell>
            <TableCell>Quantidade</TableCell>
            <TableCell>Data de Validade</TableCell>
            <TableCell />
          </TableRow>
          <TableRow>
            <TableCell>#441</TableCell>
            <TableCell>100</TableCell>
            <TableCell>02/02/2024</TableCell>
          </TableRow>
        </TableContainer>
      </Content>
    </Container>
  );
};

export default Coupons;
