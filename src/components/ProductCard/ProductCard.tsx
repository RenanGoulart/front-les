import { useNavigate } from "react-router-dom";
import {
  AlbumName,
  ArtistName,
  Button,
  Container,
  Image,
  Pressable,
  Price,
} from "./styles";
import { IProduct } from "../../mock/products";
import { formatCurrency } from "../../utils/format";
import { useCart } from "../../hooks/useCart";

interface Props {
  data: IProduct;
}

export const ProductCard = ({ data }: Props) => {
  const navigate = useNavigate();
  const { handleAddToCart } = useCart();

  return (
    <Container>
      <Pressable onClick={() => navigate(`/product/${data.id}`)}>
        <Image src={data.image} alt="Capa Album" />
        <AlbumName>{data.album}</AlbumName>
        <ArtistName>{data.artist}</ArtistName>
        <Price>{formatCurrency(data.price)}</Price>
      </Pressable>
      <Button onClick={() => handleAddToCart(data)}>
        Adicionar ao carrinho
      </Button>
    </Container>
  );
};
