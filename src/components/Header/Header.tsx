import { useNavigate } from "react-router-dom";
import {
  Container,
  Logo,
  NavigationItem,
  UserIcon,
  IconsWrapper,
  AdminIcon,
} from "./styles";
import logo from "../../assets/img/logo.svg";
import SearchBar from "../SearchBar/SearchBar";
import CheckoutButton from "../CheckoutButton/CheckoutButton";

const Header = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <a href="/user">
        <Logo src={logo} alt="Logo" />
      </a>
      <SearchBar isSearchable />
      <IconsWrapper>
        <NavigationItem onClick={() => navigate("/checkout")}>
          <CheckoutButton />
        </NavigationItem>
        <NavigationItem onClick={() => navigate("/profile")}>
          <UserIcon />
        </NavigationItem>
        <NavigationItem onClick={() => navigate("/dashboard")}>
          <AdminIcon />
        </NavigationItem>
      </IconsWrapper>
    </Container>
  );
};

export default Header;
