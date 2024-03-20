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

export const Footer = () => {
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
          <Text>Rock</Text>
          <Text>Pop</Text>
        </Row>
        <Row>
          <Text>Hip-Hop</Text>
          <Text>MPB</Text>
        </Row>
        <Row>
          <Text>Blues</Text>
          <Text>Soul</Text>
        </Row>
        <Row>
          <Text>Funk</Text>
          <Text>Reggae</Text>
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
