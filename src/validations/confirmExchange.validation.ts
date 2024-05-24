import * as Yup from "yup";

export type ConfirmExchangeForm = Yup.InferType<typeof ConfirmExchangeSchema>;

export const ConfirmExchangeSchema = Yup.object({
  quantity: Yup.number()
    .required("Quantidade é Obrigatória")
    .min(1, "A quantidade para troca deve ser maior que 0"),
});
