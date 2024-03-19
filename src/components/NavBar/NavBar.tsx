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
      <NavigationCategory onClick={() => navigate("/rock")}>
        <NavigationCategoryText isActive={location.pathname.includes("/rock")}>
          Rock
        </NavigationCategoryText>
      </NavigationCategory>
      <NavigationCategory onClick={() => navigate("/pop")}>
        <NavigationCategoryText isActive={location.pathname.includes("/pop")}>
          Pop
        </NavigationCategoryText>
      </NavigationCategory>
      <NavigationCategory onClick={() => navigate("/hiphop")}>
        <NavigationCategoryText
          isActive={location.pathname.includes("/hiphop")}
        >
          Hip-Hop
        </NavigationCategoryText>
      </NavigationCategory>
      <NavigationCategory onClick={() => navigate("/mpb")}>
        <NavigationCategoryText isActive={location.pathname.includes("/mpb")}>
          MPB
        </NavigationCategoryText>
      </NavigationCategory>
      <NavigationCategory onClick={() => navigate("/blues")}>
        <NavigationCategoryText isActive={location.pathname.includes("/blues")}>
          Blues
        </NavigationCategoryText>
      </NavigationCategory>
      <NavigationCategory onClick={() => navigate("/soul")}>
        <NavigationCategoryText isActive={location.pathname.includes("/soul")}>
          Soul
        </NavigationCategoryText>
      </NavigationCategory>
      <NavigationCategory onClick={() => navigate("/funk")}>
        <NavigationCategoryText isActive={location.pathname.includes("/funk")}>
          Funk
        </NavigationCategoryText>
      </NavigationCategory>
      <NavigationCategory onClick={() => navigate("/reggae")}>
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
