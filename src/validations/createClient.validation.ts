import * as Yup from 'yup';

export type CreateClientForm = Yup.InferType<typeof CreateClientSchema>;

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
