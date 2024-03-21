import * as Yup from "yup";

export type CreateCouponForm = Yup.InferType<typeof CreateCouponSchema>;

export const CreateCouponSchema = Yup.object({
  codCoupon: Yup.string().required("Código do Cupom Obrigatório"),
  qtdCoupon: Yup.string().required("Quantidade do Cupom Obrigatória"),
  expirationDate: Yup.string().required("Data de Validade Obrigatória"),
  priceDiscount: Yup.string().required("Valor do Cupom Obrigatório"),
});
