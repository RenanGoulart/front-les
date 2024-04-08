import {
  Container,
  Content,
  IconWrapper,
  Image,
  MinusIcon,
  PlusIcon,
  QuantityContainer,
  Row,
  Text,
  TrashIcon,
} from "./styles";
import { ICartItem, useCart } from "../../hooks/useCart";
import { formatCurrency } from "../../utils/format";

interface Props {
  data: ICartItem;
}

export const CheckoutProductCard = ({ data }: Props) => {
  const { handleAddToCart, handleSubFromCart, handleRemoveFromCart } =
    useCart();
  const { product } = data;

  return (
    <Container>
      <Image src={product.image} />
      <Content>
        <TrashIcon onClick={() => handleRemoveFromCart(product)} />
        <Text isBold>{product.album}</Text>
        <Text>{product.artist}</Text>
        <Row>
          <Text>{formatCurrency(product.price * data.quantity)}</Text>
          <QuantityContainer>
            <IconWrapper onClick={() => handleSubFromCart(product)}>
              <MinusIcon data-cy="btn-minus"/>
            </IconWrapper>
            <Text>{data.quantity}</Text>
            <IconWrapper onClick={() => handleAddToCart(product)}>
              <PlusIcon data-cy="btn-plus"/>
            </IconWrapper>
          </QuantityContainer>
        </Row>
      </Content>
    </Container>
  );
};
