import { useNavigate } from "react-router-dom";
import {
  Button,
  OptionsWrapper,
  Container,
  Content,
  CreditsText,
  Image,
  ImageContent,
  StyledAddressIcon,
  StyledCreditCardIcon,
  StyledLogoutIcon,
  StyledShoppingBagIcon,
  StyledCreditsIcon,
  TextOverlay,
} from "./styles";
import Header from "../../components/Header/Header";
import NavBar from "../../components/NavBar/NavBar";
import profileimg from "../../assets/img/profile-img.png";
import useUser from "../../hooks/useUser";

const Profile = () => {
  const navigate = useNavigate();
  const { user } = useUser();

  return (
    <Container>
      <Header />
      <NavBar />
      <Content>
        <ImageContent>
          <Image src={profileimg} alt="Vinil" />
          <TextOverlay>Meu Perfil</TextOverlay>
        </ImageContent>
        <OptionsWrapper>
          <CreditsText>
            <StyledCreditsIcon />
            Créditos: {user?.credits || 0}
          </CreditsText>
            <Button
              isOutline
              onClick={() => navigate("/orders")}
              data-cy="btn-my-orders"
            >
              <StyledShoppingBagIcon />
              Meus Pedidos
            </Button>
            <Button
              isOutline
              onClick={() => navigate("/userAddresses")}
              data-cy="btn-my-addresses"
            >
              <StyledAddressIcon />
              Meus Endereços
            </Button>
            <Button
              isOutline
              onClick={() => navigate("/userCreditCards")}
              data-cy="btn-my-creditCards"
            >
              <StyledCreditCardIcon />
              Meus Cartões
            </Button>
            <Button onClick={() => navigate("/")}>
              <StyledLogoutIcon />
              Sair
            </Button>
        </OptionsWrapper>
      </Content>
    </Container>
  );
};

export default Profile;
