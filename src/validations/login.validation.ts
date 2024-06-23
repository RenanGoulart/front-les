import * as Yup from "yup";

export type LoginForm = Yup.InferType<typeof LoginSchema>;

export const LoginSchema = Yup.object({
  email: Yup.string().email("E-mail inválido").required("E-mail é obrigatório"),
  password: Yup.string().min(8, "A senha precisa ter no mínimo 8 caracteres").required("Senha é obrigatória"),
});
