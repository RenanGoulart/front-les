import { useNavigate } from "react-router-dom";
import {
  Container,
  Logo,
  NavigationItem,
  UserIcon,
  IconsWrapper,
  AdminIcon,
} from "./styles";
import logo from "../../assets/img/logo-name.svg";
import SearchBar from "../SearchBar/SearchBar";
import CheckoutButton from "../CheckoutButton/CheckoutButton";

interface Props {
  searchValue?: string;
  setSearchValue?: (value: string) => void;
}

const Header = ({ searchValue, setSearchValue }: Props) => {
  const navigate = useNavigate();

  return (
    <Container>
      <a href="/user">
        <Logo src={logo} alt="Logo" />
      </a>
      {searchValue && setSearchValue && (
        <SearchBar
          search={searchValue}
          setSearch={setSearchValue}
          isSearchable
        />
      )}
      <IconsWrapper>
        <NavigationItem onClick={() => navigate("/checkout")}>
          <CheckoutButton />
        </NavigationItem>
        <NavigationItem onClick={() => navigate("/profile")} data-cy="btn-user">
          <UserIcon />
        </NavigationItem>
        <NavigationItem
          onClick={() => navigate("/dashboard")}
          data-cy="btn-admin"
        >
          <AdminIcon />
        </NavigationItem>
      </IconsWrapper>
    </Container>
  );
};

export default Header;
