import { useLocation, useNavigate } from "react-router-dom";
import {
  Container,
  NavigationCategory,
  NavigationCategoryText,
} from "./styles";

const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Container>
      <NavigationCategory onClick={() => navigate("/productsList/rock")}>
        <NavigationCategoryText isActive={location.pathname.includes("/rock")}>
          Rock
        </NavigationCategoryText>
      </NavigationCategory>
      <NavigationCategory onClick={() => navigate("/productsList/pop")}>
        <NavigationCategoryText isActive={location.pathname.includes("/pop")}>
          Pop
        </NavigationCategoryText>
      </NavigationCategory>
      <NavigationCategory onClick={() => navigate("/productsList/hip_hop")}>
        <NavigationCategoryText
          isActive={location.pathname.includes("/hip_hop")}
        >
          Hip-Hop
        </NavigationCategoryText>
      </NavigationCategory>
      <NavigationCategory onClick={() => navigate("/productsList/mpb")}>
        <NavigationCategoryText isActive={location.pathname.includes("/mpb")}>
          MPB
        </NavigationCategoryText>
      </NavigationCategory>
      <NavigationCategory onClick={() => navigate("/productsList/blues")}>
        <NavigationCategoryText isActive={location.pathname.includes("/blues")}>
          Blues
        </NavigationCategoryText>
      </NavigationCategory>
      <NavigationCategory onClick={() => navigate("/productsList/soul")}>
        <NavigationCategoryText isActive={location.pathname.includes("/soul")}>
          Soul
        </NavigationCategoryText>
      </NavigationCategory>
      <NavigationCategory onClick={() => navigate("/productsList/funk")}>
        <NavigationCategoryText isActive={location.pathname.includes("/funk")}>
          Funk
        </NavigationCategoryText>
      </NavigationCategory>
      <NavigationCategory onClick={() => navigate("/productsList/reggae")}>
        <NavigationCategoryText
          isActive={location.pathname.includes("/reggae")}
        >
          Reggae
        </NavigationCategoryText>
      </NavigationCategory>
    </Container>
  );
};

export default NavBar;
