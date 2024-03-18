import { useLocation, useNavigate } from "react-router-dom";
import {
  Container,
  Logo,
  NavigationItem,
  UserIcon,
  SellIcon,
  IconsWrapper,
} from "./styles";
import logo from "../../assets/img/logo.svg";
import Header from "../Header/Header";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Container>
      <a href="/user">
        <Logo src={logo} alt="Logo" />
      </a>
      <Header isSearchable />
      <IconsWrapper>
        <NavigationItem
          isActive={location.pathname.includes("/checkout")}
          onClick={() => navigate("/checkout")}
        >
          <SellIcon />
        </NavigationItem>
        <NavigationItem
          isActive={location.pathname.includes("/user")}
          onClick={() => navigate("/user")}
        >
          <UserIcon />
        </NavigationItem>
      </IconsWrapper>
    </Container>
  );
};

export default Navbar;
