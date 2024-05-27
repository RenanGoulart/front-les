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
import { useCart } from "../../contexts/useCart";
import { formatCurrency } from "../../utils/format";
import { ICartItem } from "../../services/cart/dto/CartDTO";

interface Props {
  data: ICartItem;
}

export const CheckoutProductCard = ({ data }: Props) => {
  const { handleAddToCart, handleSubFromCart, handleRemoveFromCart } =
    useCart();
  const { product } = data;

  return (
    <Container>
      <Image src={product.photo} />
      <Content>
        <TrashIcon onClick={() => handleRemoveFromCart(product.id)} />
        <Text isBold>{product.album}</Text>
        <Text>{product.artist}</Text>
        <Row>
          <Text data-cy='value-product'>{formatCurrency(product.price * data.quantity)}</Text>
          <QuantityContainer>
            {data.quantity > 1 && (
              <IconWrapper
                onClick={() => handleSubFromCart(product.id)}
                data-cy="btn-minus"
                role="button"
                >
                <MinusIcon/>
              </IconWrapper>
            )}
            <Text data-cy='qtd-product'>{data.quantity}</Text>
            <IconWrapper
              onClick={() => handleAddToCart(product.id)}
              data-cy="btn-plus"
              role="button"
              >
              <PlusIcon/>
            </IconWrapper>
          </QuantityContainer>
        </Row>
      </Content>
    </Container>
  );
};
