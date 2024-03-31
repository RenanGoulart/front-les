 import {
   CartQuantity,
   SellIcon,
   Container,
 } from "./styles";

 const CheckoutButton = () => {
    return (
      <Container>
        <SellIcon />
          <CartQuantity>2</CartQuantity>
      </Container>
    );
  }

  export default CheckoutButton;
