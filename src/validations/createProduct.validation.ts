import * as Yup from "yup";

export type CreateProductForm = Yup.InferType<typeof CreateProductSchema>;

export const CreateProductSchema = Yup.object({
  album: Yup.string().required("Nome do Álbum Obrigatório"),
  year: Yup.string().required("Nome do Álbum Obrigatório"),
  artist: Yup.string().required("Nome do Artista Obrigatório"),
  producer: Yup.string().required("Nome do Produtor Obrigatório"),
  height: Yup.number().required("Altura do Produto Obrigatória"),
  width: Yup.number().required("Largura do Produto Obrigatória"),
  weight: Yup.number().required("Peso do Produto Obrigatório"),
  photo: Yup.mixed().required("Foto Obrigatória"),
  quantityInStock: Yup.number().required("Quantidade em Estoque Obrigatória"),
  linkVideo: Yup.string().required("Link do Vídeo Obrigatório"),
  categories: Yup.array().of(
    Yup.object({
      label: Yup.string(),
      value: Yup.string(),
    }),
  ),
  pricingGroup: Yup.string().required("Grupo de Precificação Obrigatório"),
  costPrice: Yup.number().required("Preço Obrigatório"),
  tracks: Yup.array().of(
    Yup.object({
      name: Yup.string(),
      duration: Yup.string(),
    }),
  ),
});

export type ChangeProductStatusForm = Yup.InferType<
  typeof ChangeProductStatusSchema
>;

export const ChangeProductStatusSchema = Yup.object({
  statusReason: Yup.string().required("Motivo Obrigatório"),
});
