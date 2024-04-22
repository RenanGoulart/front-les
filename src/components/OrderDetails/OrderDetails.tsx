import { useState } from "react";
import Select from "react-select";
import { format } from "date-fns";
import { Background, Container, Label, Row } from "./styles";
import Button from "../Button/Button";
import {
  finalOptions,
  initialOptions,
  intermediateOptions,
} from "../../data/createOrderOptions";
import { IOrderResponse } from "../../services/order/dto/OrderDTO";
import useOrder from "../../hooks/useOrder";

interface DropdownOption {
  value: string;
  label: string;
}
interface Props {
  data: IOrderResponse;
  closeModal: () => void;
}

const OrderDetails = ({ data, closeModal }: Props) => {
  const { renderStatus, handleUpdateOrder } = useOrder();
  const [selectedOption, setSelectedOption] = useState<DropdownOption | null>(
    null,
  );

  const dropdownOptions = () => {
    if (data.status === "EM_PROCESSAMENTO") {
      return initialOptions;
    }
    if (data.status === "APROVADA") {
      return intermediateOptions;
    }
    if (data.status === "EM_TRANSITO") {
      return finalOptions;
    }
    return initialOptions;
  };

  const handleSelect = (selectedItem: DropdownOption) => {
    setSelectedOption(selectedItem);
  };

  const handleUpdate = async () => {
    if (selectedOption) {
      const status =
        selectedOption.value === "CANCELADA"
          ? "REPROVADA"
          : selectedOption.value;
      await handleUpdateOrder(data.id, status);
      closeModal();
    }
  };

  return (
    <Background onClick={closeModal}>
      <Container
        onClick={(e) => e.stopPropagation()}
        data-cy="modal-order-details"
      >
        <h1>Detalhes do Pedido</h1>
        <Row data-cy="row-status">
          <Label isTitle>Status: </Label>
          <Label isStatus>{renderStatus(data.status)}</Label>
        </Row>
        <h4>Informações do Pedido</h4>
        <hr />
        <Row>
          <Label isTitle>Número do Pedido:</Label>
          <Label>#{data.code}</Label>
        </Row>
        <Row>
          <Label isTitle>Produto(s):</Label>
          <Label>
            {data.orderItems.map((item) => item.product.album).join(", ")}
          </Label>
        </Row>
        <Row>
          <Label isTitle>Data: </Label>
          <Label>{format(data.createdAt, "dd/MM/yyyy")}</Label>
        </Row>
        <Label isTitle>Atualizar Status do Pedido:</Label>
        <Select
          options={dropdownOptions()}
          placeholder="Selecione o status"
          defaultValue={dropdownOptions()?.[0]}
          onChange={(selectedItem) =>
            handleSelect(selectedItem as DropdownOption)
          }
          classNamePrefix="order-status"
        />
        <Button
          style={{ justifyContent: "flex-end" }}
          onClick={handleUpdate}
          data-cy="btn-update"
        >
          Atualizar
        </Button>
      </Container>
    </Background>
  );
};

export default OrderDetails;
