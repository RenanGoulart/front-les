import { useCart } from "../../hooks/useCart";
import { CartQuantity, SellIcon, Container } from "./styles";

const CheckoutButton = () => {
  const { quantityOfProducts } = useCart();

  return (
    <Container>
      <SellIcon />
      <CartQuantity>{quantityOfProducts}</CartQuantity>
    </Container>
  );
};

export default CheckoutButton;
