import { useNavigate, useParams } from "react-router-dom";
import { Container, Content, Logo } from "./styles";
import Header from "../../components/Header/Header";
import NavBar from "../../components/NavBar/NavBar";
import Button from "../../components/Button/Button";
import { Footer } from "../../components/Footer/Footer";
import logo from "../../assets/img/logo.svg";

const OrderCompleted = () => {
  const { code } = useParams();
  const navigate = useNavigate();
  return (
    <Container>
      <Header />
      <NavBar />
      <Content>
        <Logo src={logo} />
        <h1>Pedido Efetuado!</h1>
        <p>Obrigado por fazer o seu pedido conosco.</p>
        <h3>ID do pedido: #{code}</h3>
        <Button
          onClick={() => navigate("/orders")}
          style={{ marginTop: "20px", alignSelf: 'center' }}
          data-cy="btn-my-orders"
        >
          Ver Meus Pedidos
        </Button>
      </Content>
      <Footer />
    </Container>
  );
};

export default OrderCompleted;
