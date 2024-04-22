import * as Yup from "yup";

export type CheckoutForm = Yup.InferType<typeof CheckoutSchema>;

export const CheckoutSchema = Yup.object({
  address: Yup.string().required("Endereço é obrigatório"),
  cards: Yup.array().of(
    Yup.object({
      label: Yup.string(),
      value: Yup.string(),
    }),
  ),
  coupon: Yup.string(),
  cardsValue: Yup.array().of(
    Yup.object({
      id: Yup.string(),
      label: Yup.string(),
      value: Yup.number(),
    }),
  ),
});
