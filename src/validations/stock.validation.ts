import * as Yup from "yup";

export type IncreaseStockForm = Yup.InferType<typeof IncreaseStockSchema>;

export const IncreaseStockSchema = Yup.object({
  quantityInStock: Yup.number().required("Quantidade Obrigatória").min(1, "A quantidade em estoque deve ser maior e diferente de zero"),
  costPrice: Yup.number().required("Valor de Custo Obrigatório").min(1, "O preço de custo deve ser maior e diferente de zero"),
});

