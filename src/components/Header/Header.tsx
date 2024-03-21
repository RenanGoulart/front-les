import { useNavigate } from "react-router-dom";
import {
  Container,
  Logo,
  NavigationItem,
  UserIcon,
  SellIcon,
  IconsWrapper,
  AdminIcon,
} from "./styles";
import logo from "../../assets/img/logo.svg";
import SearchBar from "../SearchBar/SearchBar";

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
          <SellIcon />
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
