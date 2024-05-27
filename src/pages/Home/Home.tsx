import { useState } from "react";
import { Container } from "./styles";
import Header from "../../components/Header/Header";
import NavBar from "../../components/NavBar/NavBar";
import { ProductsGrid } from "../../components/ProductsGrid/ProductsGrid";
import { Footer } from "../../components/Footer/Footer";

const Home = () => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <Container>
      <Header searchValue={searchValue} setSearchValue={setSearchValue} />
      <NavBar />
      <ProductsGrid searchValue={searchValue} />
      <Footer />
    </Container>
  );
};

export default Home;
