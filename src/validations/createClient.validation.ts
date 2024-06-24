import * as Yup from "yup";

export type CreateClientForm = Yup.InferType<typeof CreateClientSchema>;
export type CreateAddressForm = Yup.InferType<typeof CreateAddressSchema>;
export type CreateCreditCardForm = Yup.InferType<typeof CreateCreditCardSchema>;

export const CreateClientSchema = Yup.object({
  name: Yup.string().required("Nome Obrigatório"),
  gender: Yup.string().required("Gênero Obrigatório"),
  birthDate: Yup.string().required("Data de Nascimento Obrigatória"),
  cpf: Yup.string().required("CPF Obrigatório"),
  ddd: Yup.string().required("DDD Obrigatório"),
  phone: Yup.string().required("Telefone Obrigatório"),
  phoneType: Yup.string().required("Tipo de Telefone Obrigatório"),
  email: Yup.string().email("Email Inválido").required("Email Obrigatório"),
  password: Yup.string()
    .min(8, "A senha deve ter ao menos 8 dígitos")
    .required("Senha Obrigatória")
    .matches(/[a-z]/, 'A senha deve conter pelo menos uma letra minúscula')
    .matches(/[A-Z]/, 'A senha deve conter pelo menos uma letra maiúscula')
    .matches(/[!@#$%^&*(),.?":{}|<>]/, 'A senha deve conter pelo menos um caractere especial'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "A senha de confirmação não confere")
    .required("Confirmação de senha obrigatória")
    .matches(/[a-z]/, 'A senha deve conter pelo menos uma letra minúscula')
    .matches(/[A-Z]/, 'A senha deve conter pelo menos uma letra maiúscula')
    .matches(/[!@#$%^&*(),.?":{}|<>]/, 'A senha deve conter pelo menos um caractere especial'),
  status: Yup.string(),
});

export const CreateAddressSchema = Yup.object({
  zipCode: Yup.string().required("CEP Obrigatório"),
  isMain: Yup.boolean(),
  street: Yup.string().required("Rua Obrigatória"),
  number: Yup.string().required("Número Obrigatório"),
  state: Yup.string().required("Estado Obrigatório"),
  district: Yup.string().required("Bairro Obrigatório"),
  city: Yup.string().required("Cidade Obrigatória"),
  country: Yup.string().required("País Obrigatório"),
  observation: Yup.string(),
  addressType: Yup.string().required("Tipo de Endereço Obrigatório"),
  streetType: Yup.string().required("Tipo de Rua Obrigatório"),
  residenceType: Yup.string().required("Tipo de Residência Obrigatório"),
});

export const CreateCreditCardSchema = Yup.object({
  isMain: Yup.boolean(),
  number: Yup.string().required("Número do Cartão Obrigatório"),
  cardHolder: Yup.string().required("Nome do Titular Obrigatório"),
  cvv: Yup.string().required("Código de Segurança Obrigatório"),
  cardBrand: Yup.string().required("Bandeira do Cartão Obrigatória"),
});
