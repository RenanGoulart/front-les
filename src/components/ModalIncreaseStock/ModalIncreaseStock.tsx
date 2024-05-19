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
            name="quantity"
            label="Quantidade disponível"
            placeholder="Ex: 20"
            containerStyle={styles.elementStyle}
          />
        </Row>
        <Row>
          <Input
            control={control}
            name="price"
            label="Preço de custo"
            placeholder="Ex: 200"
            containerStyle={{width: '48%'}}
          />
          <Button onClick={handleSubmit(onSubmit)}>Salvar</Button>
        </Row>

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
