import { useCart } from "../../contexts/useCart";
import { CartQuantity, SellIcon, Container } from "./styles";

const CheckoutButton = () => {
  const { quantityOfProducts } = useCart();

  return (
    <Container data-cy="btn-cart">
      <SellIcon />
      <CartQuantity data-cy="text-cart-quantity">
        {quantityOfProducts}
      </CartQuantity>
    </Container>
  );
};

export default CheckoutButton;
