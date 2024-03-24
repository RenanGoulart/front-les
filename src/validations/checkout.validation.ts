import * as Yup from "yup";

export type CheckoutForm = Yup.InferType<typeof CheckoutSchema>;

export const CheckoutSchema = Yup.object({
  address: Yup.string(),
  card: Yup.string(),
  coupon: Yup.string(),
  credit: Yup.number(),
});
