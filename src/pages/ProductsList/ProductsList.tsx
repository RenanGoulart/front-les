import { useParams } from "react-router-dom";
import { useState } from "react";
import { Container } from "./styles";
import Header from "../../components/Header/Header";
import NavBar from "../../components/NavBar/NavBar";
import { ProductsGrid } from "../../components/ProductsGrid/ProductsGrid";
import { Footer } from "../../components/Footer/Footer";

const ProductsList = () => {
  const [searchValue, setSearchValue] = useState("");
  const { category } = useParams();

  return (
    <Container>
      <Header searchValue={searchValue} setSearchValue={setSearchValue} />
      <NavBar />
      <ProductsGrid
        searchValue={searchValue}
        category={category?.toUpperCase()}
      />
      <Footer />
    </Container>
  );
};

export default ProductsList;
