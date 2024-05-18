import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
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
  AlbumCover,
} from "./styles";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import SideBar from "../../components/SideBar/SideBar";
import ModalCreateProduct from "../../components/ModalCreateProduct/ModalCreateProduct";
import ProductDetails from "../../components/ProductDetails/ProductDetails";
import ModalChangeProductStatus from "../../components/ModalChangeProductStatus/ModalChangeProductStatus";
import Switch from "../../components/Switch/Switch";
import Product from "../../services/product/Product";

const Products = () => {
  const { control } = useForm();

  const [form, setForm] = useState(false);
  const [details, setDetails] = useState(false);
  const [isActive, setIsActive] = useState(true);
  const [status, setStatus] = useState(false);
  const [search, setSearch] = useState("");

  const { data: products } = useQuery({
    queryKey: ["products"],
    queryFn: () => Product.findAll(),
  });

  const filterProducts =
    products?.filter(
      (product) =>
        product.album.toLowerCase().includes(search.toLowerCase()) ||
        product.artist.toLowerCase().includes(search.toLowerCase()) ||
        product.barCode.includes(search) ||
        product.categories.some((category) =>
          category.toLowerCase().includes(search.toLowerCase()),
        ) ||
        product.year.includes(search),
    ) ?? [];

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
        <Input
          control={control}
          name="search"
          placeholder="Pesquise por pelo nome do álbum, artista, categoria, ano e/ou código de barras"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <TableContainer>
          <TableRow isHeader>
            <TableCell>Capa</TableCell>
            <TableCell>Categoria</TableCell>
            <TableCell>Álbum</TableCell>
            <TableCell>Artista</TableCell>
            <TableCell>Preço</TableCell>
            <TableCell>Ativo/Inativo</TableCell>
            <TableCell />
          </TableRow>
          {filterProducts?.map((product) => (
            <TableRow key={product.id}>
              <TableCell>
                <AlbumCover
                  src={product.photo}
                  alt={`Capa ${product.album} - ${product.artist}`}
                />
              </TableCell>
              <TableCell>
                {product.categories.map((category, index) =>
                  `${category}${index === product.categories.length - 1 ? "" : ", "}`.replace(
                    "_",
                    "-",
                  ),
                )}
              </TableCell>
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
