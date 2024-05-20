import { useQuery } from "@tanstack/react-query";
import { ProductCard } from "../ProductCard/ProductCard";
import { Container, ContainerGrid, NotFoundContainer, NotFoundText, SelectFilter } from "./styles";
import Product from "../../services/product/Product";
import { useEffect, useState } from "react";
import { IProductResponse } from "../../services/product/dto/ProductDTO";

interface Props {
  category?: string;
}

export const ProductsGrid = ({ category }: Props)  => {
  const [filteredProducts, setFilteredProducts] = useState<IProductResponse[]>([]);

  const { data: products } = useQuery({
    queryKey: ["products"],
    queryFn: () => Product.findAll(),
  });

  useEffect(() => {
    if (category && products) {
      const filtered = products.filter(
        (product) => product.categories.includes(category)
      );
      setFilteredProducts(filtered);
    }
  }, [products, category])

  const renderErrorMessage = () => {
    if (category && filteredProducts?.length === 0 || products?.length === 0) {
      return (
        <NotFoundContainer>
          <NotFoundText>Nenhum produto encontrado...😭</NotFoundText>
        </NotFoundContainer>
      );
    }
  }

  const renderProducts = () => {
    if (!products) {
      return null;
    }
    if (category) {
      return filteredProducts.map((product) => product.quantityInStock > 0 ? (
        <ProductCard key={product.id} data={product} />
      ) : null);
    }
    return products.map((product) => product.quantityInStock > 0 ? (
      <ProductCard key={product.id} data={product} />
    ) : null);
  }

  return (
    <Container>
      {renderErrorMessage()}
      <ContainerGrid>
        {renderProducts()}
      </ContainerGrid>
    </Container>
  );
};
