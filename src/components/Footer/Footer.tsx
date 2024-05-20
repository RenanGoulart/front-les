import {
  Container,
  Logo,
  Row,
  Section,
  SocialMedia,
  Text,
  Title,
} from "./styles";

import LogoName from "../../assets/img/logo-name.svg";
import Instagram from "../../assets/img/instagram.svg";
import Facebook from "../../assets/img/facebook.svg";
import { useNavigate } from "react-router-dom";

export const Footer = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Section>
        <Title>Menu</Title>
        <Text>Home</Text>
        <Text>Meus Pedidos</Text>
        <Text>Meus Cartões de Crédito</Text>
        <Text>Meus Endereços</Text>
      </Section>

      <Section style={{ width: "10%" }}>
        <Title>Gênero</Title>
        <Row>
          <Text onClick={() => navigate("/productsList/rock")}>Rock</Text>
          <Text onClick={() => navigate("/productsList/pop")}>Pop</Text>
        </Row>
        <Row>
          <Text onClick={() => navigate("/productsList/hip-hop")}>Hip-Hop</Text>
          <Text onClick={() => navigate("/productsList/mpb")}>MPB</Text>
        </Row>
        <Row>
          <Text onClick={() => navigate("/productsList/blues")}>Blues</Text>
          <Text onClick={() => navigate("/productsList/soul")}>Soul</Text>
        </Row>
        <Row>
          <Text onClick={() => navigate("/productsList/funk")}>Funk</Text>
          <Text onClick={() => navigate("/productsList/reggae")}>Reggae</Text>
        </Row>
      </Section>
      <Section>
        <Logo src={LogoName} alt="Logo" />
        <Row style={{ justifyContent: "flex-start", gap: 10 }}>
          <SocialMedia src={Instagram} alt="Instagram" />
          <SocialMedia src={Facebook} alt="Facebook" />
        </Row>
      </Section>
    </Container>
  );
};
