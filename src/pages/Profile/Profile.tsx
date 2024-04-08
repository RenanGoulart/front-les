import { useNavigate } from "react-router-dom";
import {
  Button,
  ButtonsWrapper,
  Container,
  Content,
  Image,
  ImageContent,
  StyledAddressIcon,
  StyledCreditCardIcon,
  StyledLogoutIcon,
  StyledShoppingBagIcon,
  TextOverlay,
} from "./styles";
import Header from "../../components/Header/Header";
import NavBar from "../../components/NavBar/NavBar";
import profileimg from "../../assets/img/profile-img.png";

const Profile = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Header />
      <NavBar />
      <Content>
        <ImageContent>
          <Image src={profileimg} alt="Vinil" />
          <TextOverlay>Meu Perfil</TextOverlay>
        </ImageContent>
        <ButtonsWrapper>
          <Button
            isOutline
            onClick={() => navigate("/orders")}
            data-cy="btn-my-orders"
          >
            <StyledShoppingBagIcon />
            Meus Pedidos
          </Button>
          <Button isOutline onClick={() => navigate("/userAddresses")}>
            <StyledAddressIcon />
            Meus Endereços
          </Button>
          <Button isOutline onClick={() => navigate("/userCreditCards")}>
            <StyledCreditCardIcon />
            Meus Cartões
          </Button>
          <Button onClick={() => navigate("/")}>
            <StyledLogoutIcon />
            Sair
          </Button>
        </ButtonsWrapper>
      </Content>
    </Container>
  );
};

export default Profile;
