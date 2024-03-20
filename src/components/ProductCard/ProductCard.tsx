import {
  AlbumName,
  ArtistName,
  Button,
  Container,
  Image,
  Price,
} from "./styles";
import photoProduct from "../../assets/img/photo-product.png";

export const ProductCard = () => {
  return (
    <Container>
      <Image src={photoProduct} alt="Capa Album" />
      <AlbumName>Flower Boy</AlbumName>
      <ArtistName>Tyler The Creator</ArtistName>
      <Price>R$ 259,90</Price>
      <Button>Adicionar ao carrinho</Button>
    </Container>
  );
};
