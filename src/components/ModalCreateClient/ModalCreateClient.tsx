import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { format } from "date-fns";
import Input from "../Input/Input";
import {
  Background,
  Container,
  GenderWrapper,
  Label,
  PhoneWrapper,
  Row,
  StatusWrapper,
} from "./styles";
import Select from "../Select/Select";
import {
  CreateClientForm,
  CreateClientSchema,
} from "../../validations/createClient.validation";
import RadioOptions from "../RadioOptions/RadioOptions";
import {
  genderOptions,
  phoneTypeOptions,
  statusOptions,
} from "../../data/createClientOptions";
import Button from "../Button/Button";
import { FormType } from "../Clients/Clients";
import { useClient } from "../../hooks/useClient";
import { IUserResponse, findUserById, updateUser } from "../../services/user";

interface Props {
  changeForm: (form: FormType) => void;
  closeModal: () => void;
}

const ModalCreateClient = ({ changeForm, closeModal }: Props) => {
  const { setCreateFormData, currentUserId } = useClient();

  const { control, handleSubmit, setValue } = useForm<CreateClientForm>({
    resolver: yupResolver(CreateClientSchema),
  });

  const onSubmit = (data: CreateClientForm) => {
    if (currentUserId) {
      const formattedUser = {
        ...data,
        birthDate: new Date(data.birthDate as string).toISOString(),
        id: currentUserId,
      };

      updateUser(formattedUser);
      return closeModal();
    }

    setCreateFormData(data);
    changeForm("address");
  };

  const setUserFields = async (userData: IUserResponse) => {
    setValue("name", userData.name);
    setValue("gender", userData.gender);
    setValue("birthDate", format(userData.birthDate, "yyyy-MM-dd"));
    setValue("cpf", userData.cpf);
    setValue("ddd", userData.ddd);
    setValue("phone", userData.phone);
    setValue("phoneType", userData.phoneType);
    setValue("email", userData.email);
    setValue("status", userData.status);
  };

  const getUserInfo = async (userId: string) => {
    const userInfo = await findUserById(userId);
    if (userInfo) {
      return setUserFields(userInfo);
    }
  };

  useEffect(() => {
    if (currentUserId) {
      getUserInfo(currentUserId);
    }
  }, []);

  return (
    <Background onClick={closeModal}>
      <Container onClick={(e) => e.stopPropagation()}>
        <Row>
          <h1>Informações do Cliente</h1>
          <StatusWrapper>
            <Label>Status</Label>
            <RadioOptions
              control={control}
              name="status"
              options={statusOptions}
            />
          </StatusWrapper>
        </Row>
        <Row>
          <Input
            control={control}
            name="name"
            label="Nome"
            placeholder="Maria Alice"
            containerStyle={styles.elementStyle}
          />
          <GenderWrapper>
            <Label>Gênero</Label>
            <RadioOptions
              control={control}
              name="gender"
              options={genderOptions}
            />
          </GenderWrapper>
        </Row>
        <Row>
          <Input
            control={control}
            name="birthDate"
            label="Data de Nascimento"
            type="date"
            containerStyle={styles.elementStyle}
          />
          <Input
            control={control}
            name="cpf"
            label="CPF"
            placeholder="100.200.300.40"
            mask="999.999.999-99"
            containerStyle={styles.elementStyle}
          />
        </Row>
        <Row>
          <PhoneWrapper>
            <Input
              control={control}
              name="ddd"
              label="DDD"
              placeholder="11"
              mask="99"
              containerStyle={{ width: "18%" }}
            />
            <Input
              control={control}
              name="phone"
              label="Telefone"
              placeholder="99999-9999"
              mask="99999-9999"
              containerStyle={{ width: "80%" }}
            />
          </PhoneWrapper>
          <Select
            control={control}
            name="phoneType"
            label="Tipo de Telefone"
            options={phoneTypeOptions}
            containerStyle={styles.elementStyle}
          />
        </Row>
        <Row>
          <Input
            control={control}
            name="email"
            label="E-mail"
            placeholder="maria@gmail.com"
            containerStyle={styles.elementStyle}
          />
          <Input
            control={control}
            name="password"
            label="Senha"
            placeholder="********"
            containerStyle={styles.elementStyle}
            type="password"
          />
        </Row>
        <Row>
          <Input
            control={control}
            name="confirmPassword"
            label="Confirmar Senha"
            placeholder="********"
            containerStyle={styles.elementStyle}
            type="password"
          />
          <Button style={styles.elementStyle} onClick={handleSubmit(onSubmit)}>
            {currentUserId ? "Atualizar" : "Continuar"}
          </Button>
        </Row>
      </Container>
    </Background>
  );
};

const styles = {
  elementStyle: {
    width: "48%",
  },
};

export default ModalCreateClient;
