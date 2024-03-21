import Input from "../Input/Input";
import {
  Background,
  Container,
  Row,
} from "./styles";
import Button from "../Button/Button";
import { CreateCouponForm, CreateCouponSchema } from "../../validations/createCoupon.validation";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

interface Props {
  closeModal: () => void;
}

const ModalCreateCoupon = ({ closeModal } : Props) => {
  const { control } = useForm<CreateCouponForm>({
    resolver: yupResolver(CreateCouponSchema),
  });

  return (
    <Background onClick={closeModal}>
      <Container onClick={(e) => e.stopPropagation()}>
        <h1>Adicionar Cupom</h1>
        <Row>
          <Input
            control={control}
            name="codCoupon"
            label="Código do Cupom"
            placeholder="Ex: DISCO15"
            containerStyle={{ width: "100%" }}
          />
        </Row>
        <Row>
          <Input
            control={control}
            name="qtdCoupon"
            label="Quantidade"
            placeholder="ex: 100"
            type="number"
            containerStyle={styles.elementStyle}
          />
          <Input
            control={control}
            name="expirationDate"
            label="Data de Validade"
            placeholder="ex: 02/06/2024"
            type="date"
            containerStyle={styles.elementStyle}
          />
        </Row>
        <Row>
          <Input
            control={control}
            name="priceDiscount"
            label="Valor"
            placeholder="ex: 100,00"
            containerStyle={styles.elementStyle}
          />
          <Button style={styles.elementStyle} onClick={closeModal}>
           Salvar
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

export default ModalCreateCoupon;
