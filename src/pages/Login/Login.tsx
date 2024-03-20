import {
  Container,
  Logo,
  LoginContainer,
  LoginTitle,
  ImageContainer,
  Image,
  TextOverlay,
  Label,
  Input,
  Button,
} from "./styles";

import logo from "../../assets/img/logo.svg";
import photoLogin from "../../assets/img/photo-login.jpg";

const Login = () => {
  return (
    <Container>
      <ImageContainer>
        <Image src={photoLogin} alt="Segurando Vinil" />
        <TextOverlay>
          Explore a arte do vinil, onde cada nota é um portal para o tempo.
        </TextOverlay>
      </ImageContainer>
      <LoginContainer>
        <a href="/" style={{ alignSelf: "center" }}>
          <Logo src={logo} alt="Logo" />
        </a>
        <LoginTitle>Login</LoginTitle>
        <Label>E-mail</Label>
        <Input
          type="email"
          id="email"
          placeholder="Ex: kelvinmendes@gmail.com"
        />
        <Label>Senha</Label>
        <Input type="password" id="password" placeholder="**********" />
        <Button onClick={() => {}}>Entrar</Button>
      </LoginContainer>
    </Container>
  );
};

export default Login;
