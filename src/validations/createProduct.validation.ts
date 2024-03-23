import * as Yup from "yup";

export type CreateProductForm = Yup.InferType<typeof CreateProductSchema>;

export const CreateProductSchema = Yup.object({
  artist: Yup.string().required("Nome do Artista Obrigatório"),
  album: Yup.string().required("Nome do Álbum Obrigatório"),
  producer: Yup.string().required("Nome do Produtor Obrigatório"),
  numberOfTracks: Yup.string().required("Quantidade de Faixas Obrigatória"),
  height: Yup.string().required("Altura do Produto Obrigatória"),
  width: Yup.string().required("Largura do Produto Obrigatória"),
  weight: Yup.string().required("Peso do Produto Obrigatório"),
  pricingGroup: Yup.string().required("Grupo de Precificação Obrigatório"),
  barCode: Yup.string().required("Código de Barras Obrigatório"),
  price: Yup.string().required("Preço Obrigatório"),
});
