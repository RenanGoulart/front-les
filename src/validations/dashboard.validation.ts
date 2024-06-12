import * as Yup from "yup";

export type DashboardForm = Yup.InferType<typeof DashboardSchema>;

export const DashboardSchema = Yup.object({
  startDate: Yup.string(),
  endDate: Yup.string(),
  productsFilter: Yup.array().of(
    Yup.object({
      label: Yup.string(),
      value: Yup.string(),
    }),
  ),
});
