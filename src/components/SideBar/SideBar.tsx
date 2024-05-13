import { useNavigate } from "react-router-dom";
import { Container, Logo, Menu, MenuItem } from "./styles";
import logo from "../../assets/img/logo.svg";

const SideBar = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Menu>
        <MenuItem onClick={() => navigate("/dashboard")}>Dashboard</MenuItem>
        <MenuItem
          onClick={() => navigate("/client")}
          data-cy="option-create-client"
        >
          Cadastrar Clientes
        </MenuItem>
        <MenuItem onClick={() => navigate("/products")}>
          Cadastrar Produtos
        </MenuItem>
        <MenuItem
          onClick={() => navigate("/coupons")}
          data-cy="option-create-coupon"
        >
          Cadastrar Cupons
        </MenuItem>
        <MenuItem onClick={() => navigate("/stock")}>Estoque</MenuItem>
        <MenuItem
          onClick={() => navigate("/allOrders")}
          data-cy="option-orders"
        >
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
