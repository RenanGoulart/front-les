import { useNavigate } from "react-router-dom";
import {
  Container,
  Logo,
  Menu,
  MenuItem,
} from "./styles";
import logo from "../../assets/img/logo.svg";
import SearchBar from "../SearchBar/SearchBar";

const SideBar = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Menu>
        <MenuItem onClick={() => navigate("/user")}>
          Cadastrar Clientes
        </MenuItem>
        <MenuItem onClick={() => navigate("/products")}>
          Cadastrar Produtos
        </MenuItem>
        <MenuItem onClick={() => navigate("/coupons")}>
          Cadastrar Cupons
        </MenuItem>
        <MenuItem onClick={() => navigate("/stock")}>
          Estoque
        </MenuItem>
        <MenuItem onClick={() => navigate("/allOrders")}>
          Pedidos
        </MenuItem>
      </Menu>
      <a href="/vinyl">
        <Logo src={logo} alt="Logo" />
      </a>
    </Container>
  );
};

export default SideBar;
