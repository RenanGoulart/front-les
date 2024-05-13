import * as Yup from "yup";

export type CreateProductForm = Yup.InferType<typeof CreateProductSchema>;

export const CreateProductSchema = Yup.object({
  artist: Yup.string().required("Nome do Artista Obrigatório"),
  album: Yup.string().required("Nome do Álbum Obrigatório"),
  year: Yup.string().required("Nome do Álbum Obrigatório"),
  producer: Yup.string().required("Nome do Produtor Obrigatório"),
  numberOfTracks: Yup.string().required("Quantidade de Faixas Obrigatória"),
  height: Yup.string().required("Altura do Produto Obrigatória"),
  width: Yup.string().required("Largura do Produto Obrigatória"),
  weight: Yup.string().required("Peso do Produto Obrigatório"),
  pricingGroup: Yup.string().required("Grupo de Precificação Obrigatório"),
  categories: Yup.string().required("Categoria Obrigatória"),
  photo: Yup.string().required("Foto Obrigatória"),
  price: Yup.string().required("Preço Obrigatório"),
  quantityInStock: Yup.number().required("Quantidade em Estoque Obrigatória"),
});

export type ChangeProductStatusForm = Yup.InferType<
  typeof ChangeProductStatusSchema
>;

export const ChangeProductStatusSchema = Yup.object({
  reason: Yup.string().required("Motivo Obrigatório"),
});
