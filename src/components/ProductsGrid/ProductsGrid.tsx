import { useQuery } from "@tanstack/react-query";
import { ProductCard } from "../ProductCard/ProductCard";
import { Container, ContainerGrid, SelectFilter } from "./styles";
import Product from "../../services/product/Product";

export const ProductsGrid = () => {
  const { data: products } = useQuery({
    queryKey: ["products"],
    queryFn: () => Product.findAll(),
  });

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
        {products &&
          products
          .filter(product => product.quantityInStock > 0)
          .map((product) => (
            <ProductCard key={product.id} data={product} />
          ))}
      </ContainerGrid>
    </Container>
  );
};
