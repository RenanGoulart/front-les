import { productsList } from "../../mock/products";
import { ProductCard } from "../ProductCard/ProductCard";
import { Container, ContainerGrid, SelectFilter } from "./styles";

export const ProductsGrid = () => {
  return (
    <Container>
      <SelectFilter>
        <option value="" disabled selected>
          Filtrar por...
        </option>
        <option value="1">Relevantes</option>
        <option value="2">Mais vendidos</option>
      </SelectFilter>
      <ContainerGrid>
        {productsList.map((product) => (
          <ProductCard key={product.id} data={product} />
        ))}
      </ContainerGrid>
    </Container>
  );
};
