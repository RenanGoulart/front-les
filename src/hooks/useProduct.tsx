/* eslint-disable react/jsx-no-constructed-context-values */
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Product from "../services/product/Product";
import { CreateProductForm } from "../validations/createProduct.validation";
import { handleSuccess } from "../lib/toastify";
import { ProductStatus } from "../services/product/dto/ProductDTO";

const useProduct = () => {
  const queryClient = useQueryClient();

  const { data: products, refetch: refetchProducts } = useQuery({
    queryKey: ["products"],
    queryFn: () => Product.findAll(),
  });

  const { mutateAsync: createProduct } = useMutation({
    mutationFn: Product.create,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      handleSuccess("Produto criado com sucesso!");
    },
  });

  const { mutateAsync: updateProduct } = useMutation({
    mutationFn: Product.update,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      handleSuccess("Produto atualizado com sucesso!");
    },
  });

  const { mutateAsync: updateProductInStock } = useMutation({
    mutationFn: Product.updateInStock,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      handleSuccess("Estoque atualizado com sucesso!");
    },
  });

  const { mutateAsync: updateProductStatus } = useMutation({
    mutationFn: Product.updateStatus,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      handleSuccess("Produto atualizado com sucesso!");
    },
  });

  const formatProduct = async (body: CreateProductForm) => {
    const formData = new FormData();
    formData.append("artist", body.artist);
    formData.append("album", body.album);
    formData.append("year", body.year);
    formData.append("producer", body.producer);
    formData.append("height", String(body.height));
    formData.append("width", String(body.width));
    formData.append("weight", String(body.weight));
    formData.append("pricingGroup", body.pricingGroup);
    body.categories?.forEach((category, index) => {
      formData.append(`categories[${index}]`, category.value as string);
    });
    formData.append("costPrice", String(body.costPrice));
    formData.append("quantityInStock", String(body.quantityInStock));

    if ((body.photo as File).name) {
      const extension = (body.photo as File).name.split(".").pop();
      formData.append(
        "photo",
        body.photo as Blob,
        `${body.album}-${body.artist}.${extension}`
          .replace(/\s/g, "_")
          .toLowerCase(),
      );
    }

    body.tracks?.forEach((track, index) => {
      formData.append(`tracks[${index}][name]`, track.name as string);
      formData.append(`tracks[${index}][duration]`, track.duration as string);
    });

    return formData;
  };

  const handleCreateProduct = async (body: CreateProductForm) => {
    const data = await formatProduct(body);
    await createProduct(data);
  };

  const handleUpdateProduct = async (id: string, body: CreateProductForm) => {
    const data = await formatProduct(body);
    await updateProduct({ id, product: data });
  };

  const handleUpdateStatus = async (
    id: string,
    status: ProductStatus,
    statusReason: string,
  ) => {
    await updateProductStatus({
      id,
      status,
      statusReason,
    });
  };

  const handleUpdateStock = async (
    id: string,
    quantityInStock: number,
    costPrice: number,
  ) => {
    await updateProductInStock({ id, quantityInStock, costPrice });
  };

  return {
    products,
    refetchProducts,
    handleCreateProduct,
    handleUpdateStock,
    handleUpdateProduct,
    handleUpdateStatus,
  };
};

export default useProduct;
