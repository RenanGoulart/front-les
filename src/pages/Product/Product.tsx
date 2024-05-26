import { useState } from "react";
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
import useProduct from "../../hooks/useProduct";
import {
  IProductResponse,
  ProductStatus,
} from "../../services/product/dto/ProductDTO";

const Products = () => {
  const { control } = useForm();

  const [form, setForm] = useState(false);
  const [editForm, setEditForm] = useState<string | null>(null);
  const [details, setDetails] = useState<string | null>(null);
  const [currentProduct, setCurrentProduct] = useState<IProductResponse | null>(
    null,
  );
  const [search, setSearch] = useState("");

  const { products } = useProduct();

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

  console.log(products);

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
                <Switch
                  isChecked={product.status === ProductStatus.ACTIVE}
                  onChange={() => setCurrentProduct(product)}
                />
              </TableCell>
              <TableCell style={{ justifyContent: "flex-end" }}>
                <StyledEditIcon onClick={() => setEditForm(product.id)} />
              </TableCell>
              <TableCell style={{ justifyContent: "flex-end" }}>
                <DetailsIcon onClick={() => setDetails(product.id)} />
              </TableCell>
            </TableRow>
          ))}
        </TableContainer>
      </Content>
      {currentProduct && (
        <ModalChangeProductStatus
          product={currentProduct}
          closeModal={() => setCurrentProduct(null)}
        />
      )}
      {editForm && (
        <ModalCreateProduct
          id={editForm}
          closeModal={() => {
            setEditForm(null);
          }}
        />
      )}
      {form && <ModalCreateProduct closeModal={() => setForm(false)} />}
      {details && (
        <ProductDetails closeModal={() => setDetails(null)} id={details} />
      )}
    </Container>
  );
};

export default Products;
