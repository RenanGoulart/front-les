import * as Yup from "yup";

export type IncreaseStockForm = Yup.InferType<typeof IncreaseStockSchema>;

export const IncreaseStockSchema = Yup.object({
  quantity: Yup.string().required("Quantidade Obrigatória"),
  price: Yup.string().required("Valor de Custo Obrigatório"),
});

