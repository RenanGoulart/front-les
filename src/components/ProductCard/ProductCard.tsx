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
import { formatCurrency } from "../../utils/format";
import { IProductResponse } from "../../services/product/dto/ProductDTO";
import { useCart } from "../../contexts/useCart";

interface Props {
  data: IProductResponse;
}

export const ProductCard = ({ data }: Props) => {
  const navigate = useNavigate();

  const { handleAddToCart } = useCart();

  return (
    <Container>
      <Pressable onClick={() => navigate(`/product/${data.id}`)}>
        <Image src={data.photo} alt="Capa Album" />
        <AlbumName>{data.album}</AlbumName>
        <ArtistName>{data.artist}</ArtistName>
        <Price>{formatCurrency(data.price)}</Price>
      </Pressable>
      <Button
        onClick={() => handleAddToCart(data.id)}
        data-cy="btn-add-to-cart"
      >
        Adicionar ao carrinho
      </Button>
    </Container>
  );
};
