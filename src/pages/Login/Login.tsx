import {
  Container,
  Logo,
  LoginContainer,
  LoginTitle,
  ImageContainer,
  Image,
  TextOverlay,
  Label,
  Button,
} from "./styles";

import logo from "../../assets/img/logo-name.svg";
import photoLogin from "../../assets/img/photo-login.jpg";
import { useNavigate } from "react-router-dom";
import { userAuthenticate } from "../../services/auth";
import { LoginForm, LoginSchema } from "../../validations/login.validation";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../../components/Input/Input";

const Login = () => {
  const { control, handleSubmit } = useForm<LoginForm>({
    resolver: yupResolver(LoginSchema),
  });
  const navigate = useNavigate();

  const onSubmit = async (data: LoginForm) => {
    try {
      const response = await userAuthenticate(data.email, data.password);
      if (response.status == 200) {
        if (response.role == "ADMIN") {
          navigate("/dashboard");
        } else {
          navigate("/");
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

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
            control={control}
            name="email"
            type="email"
            placeholder="Ex: email@gmail.com"
          />
          <Label>Senha</Label>
          <Input
            control={control}
            name="password"
            type="password"
            placeholder="**********"
          />
          <Button onClick={handleSubmit(onSubmit)}>Entrar</Button>
      </LoginContainer>
    </Container>
  );
};

export default Login;
