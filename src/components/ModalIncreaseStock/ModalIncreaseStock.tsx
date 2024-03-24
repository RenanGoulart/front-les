import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../Input/Input";
import { Background, Container, Row } from "./styles";
import Button from "../Button/Button";
import {
  IncreaseStockForm,
  IncreaseStockSchema,
} from "../../validations/stock.validation";

interface Props {
  closeModal: () => void;
}

const ModalIncreaseStock = ({ closeModal }: Props) => {
  const { control, handleSubmit } = useForm<IncreaseStockForm>({
    resolver: yupResolver(IncreaseStockSchema),
  });

  const onSubmit = (data: any) => {
    console.log(data);
    closeModal();
  };

  return (
    <Background onClick={closeModal}>
      <Container onClick={(e) => e.stopPropagation()}>
        <h1>Dar entrada no estoque</h1>
        <Row>
          <Input
            control={control}
            name="rise"
            label="Quantidade"
            placeholder="Ex: 20"
            containerStyle={styles.elementStyle}
          />
        </Row>
        <Row>
          <Input
            control={control}
            name="entryDate"
            label="Data de entrada"
            type="date"
            containerStyle={styles.elementStyle}
          />
        </Row>
        <Button onClick={handleSubmit(onSubmit)}>Salvar</Button>
      </Container>
    </Background>
  );
};

const styles = {
  elementStyle: {
    width: "100%",
  },
};

export default ModalIncreaseStock;
