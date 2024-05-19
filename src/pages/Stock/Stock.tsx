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
import SideBar from "../../components/SideBar/SideBar";
import ModalIncreaseStock from "../../components/ModalIncreaseStock/ModalIncreaseStock";
import Product from "../../services/product/Product";
import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";

const Stock = () => {
  const [increaseForm, setIncreaseForm] = useState<string|null>(null);

  const { data: products } = useQuery({
    queryKey: ["products"],
    queryFn: () => Product.findAll(),
  });

  return (
    <Container>
      <SideBar />
      <Content>
        <TableHeader>
          <Title>Estoque</Title>
        </TableHeader>
        <TableContainer>
          <TableRow isHeader>
            <TableCell>Data de Entrada</TableCell>
            <TableCell>Código de Barras</TableCell>
            <TableCell>Produto</TableCell>
            <TableCell>Quantidade</TableCell>
            <TableCell>Valor</TableCell>
            <TableCell />
          </TableRow>
          {products?.map((product) => (
            <TableRow key={product.id}>
              <TableCell>{format(product.updatedAt, "dd/MM/yyyy")}</TableCell>
              <TableCell>{product.barCode}</TableCell>
              <TableCell>{`${product.album} - ${product.artist}`}</TableCell>
              <TableCell>{product.quantityInStock}</TableCell>
              <TableCell>{`R$ ${product.price},00`}</TableCell>
              <TableCell>
                <IssueButton onClick={()=> setIncreaseForm(product.id)}>Atualizar</IssueButton>
              </TableCell>
            </TableRow>
          ))}
        </TableContainer>
      </Content>
      {increaseForm && (
        <ModalIncreaseStock closeModal={() => setIncreaseForm(null)} id={increaseForm}/>
      )}
    </Container>
  );
};

export default Stock;
