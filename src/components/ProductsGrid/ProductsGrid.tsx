import { ProductCard } from "../ProductCard/ProductCard";
import { Container, ContainerGrid, SelectFilter } from "./styles";

const PRODUCTS = Array.from({ length: 10 }, (_, index) => ({
  id: index,
}));

export const ProductsGrid = () => {
  return (
    <Container>
      <SelectFilter>
        <option value="" disabled selected>
          Filtar por...
        </option>
        <option value="1">Relevantes</option>
        <option value="2">Mais vendidos</option>
      </SelectFilter>
      <ContainerGrid>
        {PRODUCTS.map((product) => (
          <ProductCard key={product.id} />
        ))}
      </ContainerGrid>
    </Container>
  );
};
