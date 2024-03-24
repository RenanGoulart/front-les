import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../Input/Input";
import { Background, Container } from "./styles";
import Button from "../Button/Button";
import {
  ChangeProductStatusForm,
  ChangeProductStatusSchema,
} from "../../validations/createProduct.validation";

interface Props {
  closeModal: () => void;
}

const ModalChangeProductStatus = ({ closeModal }: Props) => {
  const { control, handleSubmit } = useForm<ChangeProductStatusForm>({
    resolver: yupResolver(ChangeProductStatusSchema),
  });

  const onSubmit = (data: any) => {
    console.log(data);
    closeModal();
  };

  return (
    <Background onClick={closeModal}>
      <Container onClick={(e) => e.stopPropagation()}>
        <h1>Inativar produto: #441 - Ten</h1>
        <Input
          control={control}
          name="reason"
          label="Motivo"
          placeholder="Ex: Falta de estoque"
        />
        <Button onClick={handleSubmit(onSubmit)}>Salvar</Button>
      </Container>
    </Background>
  );
};

export default ModalChangeProductStatus;
