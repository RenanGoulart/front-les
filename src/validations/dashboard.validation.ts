import * as Yup from "yup";

export type DashboardForm = Yup.InferType<typeof DashboardSchema>;

export const DashboardSchema = Yup.object({
  startDate: Yup.string(),
  endDate: Yup.string(),
});
