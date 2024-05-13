/* eslint-disable react/jsx-no-constructed-context-values */
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Product from "../services/product/Product";
import { ICreateProductDTO } from "../services/product/dto/ProductDTO";

const useProduct = () => {
  const queryClient = useQueryClient();

  const { data: products } = useQuery({
    queryKey: ["products"],
    queryFn: () => Product.findAll(),
  });

  const { mutateAsync: createProduct } = useMutation({
    mutationFn: Product.create,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });

  const handleCreateProduct = async (body: ICreateProductDTO) => {
    await createProduct(body);
  };

  return {
    products,
    handleCreateProduct,
  };
};

export default useProduct;
