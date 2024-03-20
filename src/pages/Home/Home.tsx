import { Container } from "./styles";
import Header from "../../components/Header/Header";
import NavBar from "../../components/NavBar/NavBar";
import { ProductsGrid } from "../../components/ProductsGrid/ProductsGrid";
import { Footer } from "../../components/Footer/Footer";

const Home = () => {
  return (
    <Container>
      <Header />
      <NavBar />
      <ProductsGrid />
      <Footer />
    </Container>
  );
};

export default Home;
