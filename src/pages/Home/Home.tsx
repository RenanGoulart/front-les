import { useState } from "react";
import {
  Container,
  ContentWrapper,
  Image,
  ImageContent,
  Logo,
  Text
} from "./styles";
import Header from "../../components/Header/Header";
import NavBar from "../../components/NavBar/NavBar";
import { ProductsGrid } from "../../components/ProductsGrid/ProductsGrid";
import { Footer } from "../../components/Footer/Footer";
import homeimg from "../../assets/img/home-img.jpg";
import logo from "../../assets/img/logo.svg";

const Home = () => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <Container>
      <Header searchValue={searchValue} setSearchValue={setSearchValue} />
      <NavBar />
      <ImageContent>
          <Image src={homeimg} alt="Vinil" />
          <Logo src={logo} alt="Logo" />
      </ImageContent>
      <ContentWrapper>
        <Text>Populares</Text>
      <ProductsGrid searchValue={searchValue} />
      </ContentWrapper>
      <Footer />
    </Container>
  );
};

export default Home;
