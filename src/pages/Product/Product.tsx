import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import {
  Container,
  TableContainer,
  TableRow,
  TableHeader,
  Content,
  TableCell,
  Title,
  DetailsIcon,
  StyledEditIcon,
} from "./styles";
import Button from "../../components/Button/Button";
import SideBar from "../../components/SideBar/SideBar";
import ModalCreateProduct from "../../components/ModalCreateProduct/ModalCreateProduct";
import ProductDetails from "../../components/ProductDetails/ProductDetails";
import ModalChangeProductStatus from "../../components/ModalChangeProductStatus/ModalChangeProductStatus";
import Switch from "../../components/Switch/Switch";
import { IProductListResponse, listProducts } from "../../services/product";

const Products = () => {
  const [form, setForm] = useState(false);
  const [details, setDetails] = useState(false);
  const [isActive, setIsActive] = useState(true);
  const [status, setStatus] = useState(false);

  const closeModal = () => {
    setForm(false);
  };

  const { data: products } = useQuery<IProductListResponse[]>({
    queryKey: ["products"],
    queryFn: () => listProducts() as Promise<IProductListResponse[]>,
  });

  const handleCheck = () => {
    if (isActive) {
      setStatus(true);
    }
    setIsActive(!isActive);
    setStatus(false);
  };

  return (
    <Container>
      <SideBar />
      <Content>
        <TableHeader>
          <Title>Produtos</Title>
          <Button onClick={() => setForm(true)}>Adicionar Produto</Button>
        </TableHeader>
        <TableContainer>
          <TableRow isHeader>
            <TableCell>Categoria</TableCell>
            <TableCell>Álbum</TableCell>
            <TableCell>Artista</TableCell>
            <TableCell>Preço</TableCell>
            <TableCell>Ativo/Inativo</TableCell>
            <TableCell />
          </TableRow>
          {products?.map((product) => (
            <TableRow key={product.id}>
              <TableCell>{product.categories}</TableCell>
              <TableCell>{product.album}</TableCell>
              <TableCell>{product.artist}</TableCell>
              <TableCell>{product.price}</TableCell>
              <TableCell>
                <Switch isChecked={isActive} onChange={handleCheck} />
              </TableCell>
              <TableCell style={{ justifyContent: "flex-end" }}>
                <StyledEditIcon onClick={() => setForm(true)} />
              </TableCell>
              <TableCell style={{ justifyContent: "flex-end" }}>
                <DetailsIcon onClick={() => setDetails(true)} />
              </TableCell>
            </TableRow>
          ))}
        </TableContainer>
      </Content>
      {status && (
        <ModalChangeProductStatus closeModal={() => setStatus(false)} />
      )}
      {form && <ModalCreateProduct closeModal={() => setForm(false)} />}
      {details && <ProductDetails closeModal={() => setDetails(false)} />}
    </Container>
  );
};

export default Products;
