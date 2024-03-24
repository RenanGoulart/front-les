import * as Yup from "yup";

export type IncreaseStockForm = Yup.InferType<typeof IncreaseStockSchema>;
export type ReduceStockForm = Yup.InferType<typeof ReduceStockSchema>;

export const IncreaseStockSchema = Yup.object({
  rise: Yup.string().required("Quantidade Obrigatória"),
  entryDate: Yup.string().required("Data de Entrada Obrigatória"),
});

export const ReduceStockSchema = Yup.object({
  discount: Yup.string().required("Quantidade Obrigatória"),
  issueDate: Yup.string().required("Data de Saída Obrigatória"),
});
