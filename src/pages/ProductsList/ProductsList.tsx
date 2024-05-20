import { Container } from "./styles";
import Header from "../../components/Header/Header";
import NavBar from "../../components/NavBar/NavBar";
import { ProductsGrid } from "../../components/ProductsGrid/ProductsGrid";
import { Footer } from "../../components/Footer/Footer";
import { useParams } from "react-router-dom";

const ProductsList = () => {
  const { category } = useParams();

  return (
    <Container>
      <Header />
      <NavBar />
      <ProductsGrid category={category?.toUpperCase()}/>
      <Footer />
    </Container>
  );
};

export default ProductsList;
