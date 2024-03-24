import { useState } from "react";
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
import photoProduct from "../../assets/img/photo-product.png";

export const CheckoutProductCard = () => {
  const [quantity, setQuantity] = useState(1);

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  return (
    <Container>
      <Image src={photoProduct} />
      <Content>
        <TrashIcon />
        <Text isBold>Flower Boy</Text>
        <Text>Tyler The Creator</Text>
        <Row>
          <Text>R$ 100,00</Text>
          <QuantityContainer>
            <IconWrapper onClick={handleDecrement}>
              <MinusIcon />
            </IconWrapper>
            <Text>{quantity}</Text>
            <IconWrapper onClick={handleIncrement}>
              <PlusIcon />
            </IconWrapper>
          </QuantityContainer>
        </Row>
      </Content>
    </Container>
  );
};
