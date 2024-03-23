import { useState } from "react";
import {
  Container,
  TableContainer,
  TableRow,
  TableHeader,
  Content,
  TableCell,
  Title,
  DetailsIcon,
} from "./styles";
import Button from "../../components/Button/Button";
import SideBar from "../../components/SideBar/SideBar";
import ModalCreateProduct from "../../components/ModalCreateProduct/ModalCreateProduct";
import ProductDetails from "../../components/ProductDetails/ProductDetails";

const Products = () => {
  const [form, setForm] = useState(false);
  const [details, setDetails] = useState(false);

  const openModal = () => {
    setForm(true);
  };

  const closeModal = () => {
    setForm(false);
  };

  const openDetails = () => {
    setDetails(true);
  };

  const closeDetails = () => {
    setDetails(false);
  };


  return (
    <Container>
      <SideBar />
      <Content>
        <TableHeader>
          <Title>Produtos</Title>
          <Button onClick={openModal}>Adicionar Produto</Button>
        </TableHeader>
        <TableContainer>
          <TableRow isHeader>
            <TableCell>Código do Produto</TableCell>
            <TableCell>Categoria</TableCell>
            <TableCell>Álbum</TableCell>
            <TableCell>Artista</TableCell>
            <TableCell>Preço</TableCell>
            <TableCell />
          </TableRow>
          <TableRow>
            <TableCell>#441</TableCell>
            <TableCell>Rock</TableCell>
            <TableCell>Ten</TableCell>
            <TableCell>Pearl Jam</TableCell>
            <TableCell>200,00</TableCell>
            <TableCell style={{ justifyContent: "flex-end"}}>
              <DetailsIcon onClick={openDetails}/>
            </TableCell>
          </TableRow>
        </TableContainer>
      </Content>
      {form && <ModalCreateProduct closeModal={closeModal} />}
      {details && <ProductDetails closeModal={closeDetails} />}
    </Container>
  );
};

export default Products;
