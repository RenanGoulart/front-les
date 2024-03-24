import Input from "../Input/Input";
import {
  Background,
  Container,
  Row,
} from "./styles";
import Button from "../Button/Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ReduceStockForm, ReduceStockSchema } from "../../validations/stock.validation";

interface Props {
  closeModal: () => void;
}

const ModalReduceStock = ({ closeModal } : Props) => {
  const { control, handleSubmit } = useForm<ReduceStockForm>({
    resolver: yupResolver(ReduceStockSchema),
  });

  const onSubmit = (data: any) => {
    console.log(data);
    closeModal();
  };

  return (
    <Background onClick={closeModal}>
      <Container onClick={(e) => e.stopPropagation()}>
        <h1>Dar baixa no estoque</h1>
        <Row>
          <Input
            control={control}
            name="discount"
            label="Quantidade"
            placeholder="Ex: 15"
            type="number"
            containerStyle={styles.elementStyle}
          />
        </Row>
        <Row>
          <Input
            control={control}
            name="issueDate"
            label="Data de saída"
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

export default ModalReduceStock;
