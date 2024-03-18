import { useEffect, useState } from "react";
import {
  Container,
  ButtonContainer,
  Button,
  Image,
  ImageContainer,
  TextOverlay,
  StyledLogoutIcon,
  StyledShoppingBagIcon,
  StyledAddressIcon,
  StyledCreditCardIcon,
  Logout
} from "./styles";
import { useClient } from "../../hooks/useClient";
import { ProfilePagesType } from "../../pages/Profile/Profile";
import { useQuery } from "@tanstack/react-query";
import profileimg from "../../assets/img/profileimg.png"

export type FormType = "userProfile" | "orders" | "addresses" | "creditCards" | null;

interface Props {
  navigateTo: (page: ProfilePagesType) => void;
}

const UserProfile = ({ navigateTo }: Props) => {
  const { currentUserId, setCurrentCreditCardId } = useClient();

  return (
    <Container>
      <ImageContainer>
        <Image src={profileimg} alt="Vinil" />
        <TextOverlay>Meu Perfil</TextOverlay>
      </ImageContainer>
      <ButtonContainer>
        <Button onClick={() => {}}>
          <StyledShoppingBagIcon />
          Meus Pedidos
        </Button>
        <Button onClick={() => {}}>
          <StyledAddressIcon />
          Meus Endereços
        </Button>
        <Button onClick={() => {}}>
          <StyledCreditCardIcon />
          Meus Cartões
        </Button>
        <Logout onClick={() => {}}>
          <StyledLogoutIcon />
          Sair
        </Logout>
      </ButtonContainer>
    </Container>
  );
};

export default UserProfile;
