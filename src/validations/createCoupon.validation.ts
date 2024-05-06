import * as Yup from "yup";

export type CreateCouponForm = Yup.InferType<typeof CreateCouponSchema>;

export const CreateCouponSchema = Yup.object({
  name: Yup.string().required("Código do Cupom Obrigatório"),
  quantity: Yup.number().required("Quantidade do Cupom Obrigatória"),
  expirationDate: Yup.string().required("Data de Validade Obrigatória"),
  value: Yup.number().required("Valor do Cupom Obrigatório"),
});
