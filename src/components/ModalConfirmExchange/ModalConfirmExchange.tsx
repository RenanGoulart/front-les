import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import Input from "../Input/Input";
import { Background, Container, Row } from "./styles";
import Button from "../Button/Button";
import {
  ConfirmExchangeForm,
  ConfirmExchangeSchema,
} from "../../validations/confirmExchange.validation";
import { OrderItem } from "../../services/order/dto/OrderDTO";
import useOrder from "../../hooks/useOrder";

interface Props {
  item: OrderItem;
  closeModal: () => void;
}

const ModalConfirmExchange = ({ item, closeModal }: Props) => {
  const { handleRequestOrderItemExchange } = useOrder();

  const { control, handleSubmit, setError } = useForm<ConfirmExchangeForm>({
    resolver: yupResolver(ConfirmExchangeSchema),
    defaultValues: {
      quantity: 1,
    },
  });

  const onSubmit = async (data: ConfirmExchangeForm) => {
    if (data.quantity > item.quantity) {
      return setError("quantity", {
        type: "manual",
        message:
          "A quantidade a ser trocada não pode ser maior que a quantidade comprada.",
      });
    }
    await handleRequestOrderItemExchange(
      item.id,
      item.orderId,
      data.quantity,
      "TROCA_SOLICITADA",
    );
    closeModal();
  };

  return (
    <Background onClick={closeModal}>
      <Container
        onClick={(e) => e.stopPropagation()}
        data-cy="modal-user-order-details"
        >
        <h1>
          Trocar: {item.product.album} - {item.product.artist}
        </h1>

        <Row>
          <Input
            control={control}
            name="quantity"
            label={`Quantidade a ser trocada (Máximo: ${item.quantity})`}
            placeholder="Ex: 1"
            type="number"
            data-cy="input-quantityOfExchange"
          />
          <Button
            onClick={handleSubmit(onSubmit)}
            data-cy="btn-confirm-exchange"
          >
            Confirmar Troca</Button>
        </Row>
      </Container>
    </Background>
  );
};

export default ModalConfirmExchange;
