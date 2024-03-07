import * as Yup from 'yup';

export type CreateClientForm = Yup.InferType<typeof CreateClientSchema>;
export type CreateAddressForm = Yup.InferType<typeof CreateAddressSchema>;
export type CreateCreditCardForm = Yup.InferType<typeof CreateCreditCardSchema>;

export const CreateClientSchema = Yup.object({
  name: Yup.string().required('Nome Obrigatório'),
  gender: Yup.string().required('Gênero Obrigatório'),
  birthDate: Yup.string().required('Data de Nascimento Obrigatória'),
  cpf: Yup.string().required('CPF Obrigatório'),
  ddd: Yup.string().required('DDD Obrigatório'),
  phone: Yup.string().required('Telefone Obrigatório'),
  phoneType: Yup.string().required('Tipo de Telefone Obrigatório'),
  email: Yup.string().email('Email Inválido').required('Email Obrigatório'),
  password: Yup.string()
    .min(8, 'A senha deve ter ao menos 8 dígitos')
    .required('Senha Obrigatória'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'A senha de confirmação não confere')
    .required('Confirmação de senha obrigatória'),
});

export const CreateAddressSchema = Yup.object({
  street: Yup.string().required('Rua Obrigatória'),
  number: Yup.string().required('Número Obrigatório'),
  district: Yup.string().required('Bairro Obrigatório'),
  zipCode: Yup.string().required('CEP Obrigatório'),
  country: Yup.string().required('País Obrigatório'),
  state: Yup.string().required('Estado Obrigatório'),
  city: Yup.string().required('Cidade Obrigatória'),
  streetType: Yup.string().required('Tipo de Rua Obrigatório'),
  addressType: Yup.string().required('Tipo de Endereço Obrigatório'),
  residenceType: Yup.string().required('Tipo de Residência Obrigatório'),
  observation: Yup.string().required('Observação Obrigatória'),
  isMain: Yup.string().required('Preferencial Obrigatório'),  
});

export const CreateCreditCardSchema = Yup.object({
  number: Yup.string().required('Número do Cartão Obrigatório'),
  cardHolder: Yup.string().required('Nome do Titular Obrigatório'),
  cvv: Yup.string().required('Código de Segurança Obrigatório'),
  isMain: Yup.string().required('Preferencial Obrigatório'),
  cardBrand: Yup.string().required('Bandeira do Cartão Obrigatória'),
});