import { useState } from "react";
import Select from "react-select";
import { format } from "date-fns";
import {
  Background,
  Container,
  Label,
  Row,
  TableCell,
  TableContainer,
  TableRow,
} from "./styles";
import Button from "../Button/Button";
import {
  deliveredOptions,
  exchangedOptions,
  exchangeOptions,
  finalOptions,
  initialOptions,
  intermediateOptions,
} from "../../data/createOrderOptions";
import { IOrderResponse, OrderItem } from "../../services/order/dto/OrderDTO";
import useOrder from "../../hooks/useOrder";

type ItemType = "order" | "orderItem";

interface DropdownOption {
  value: string;
  label: string;
  type: ItemType;
}
interface Props {
  data: IOrderResponse;
  closeModal: () => void;
}

const OrderDetails = ({ data, closeModal }: Props) => {
  const { renderStatus, handleUpdateOrder } = useOrder();

  const [selectedItems, setSelectedItems] = useState<
    Record<string, DropdownOption>
  >({});

  const handleSelect = (
    itemId: string,
    selectedItem: DropdownOption,
    type: ItemType,
  ) => {
    setSelectedItems((prevState) => ({
      ...prevState,
      [itemId]: { ...selectedItem, type },
    }));
  };

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
    if (data.status === "ENTREGUE") {
      return deliveredOptions;
    }
    if (data.status === "TROCADO") {
      return exchangedOptions;
    }
    if (data.status.includes("TROCA")) {
      return exchangeOptions;
    }
    return initialOptions;
  };

  const defaultOption = (item: IOrderResponse | OrderItem) => {
    return dropdownOptions().find((option) => option.value === item.status);
  };

  const handleUpdate = async () => {
    const isOrder = Object.values(selectedItems).some(
      (item) => item.type === "order",
    );
    if (isOrder) {
      await handleUpdateOrder(data.id, selectedItems[data.id].value);
      return closeModal();
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
          <Label data-cy="details-order-code">#{data.code}</Label>
        </Row>
        <Label isTitle>Produto(s):</Label>
        <TableContainer>
          <TableRow isHeader>
            <TableCell>Nome</TableCell>
            <TableCell>Quantidade</TableCell>
            <TableCell>Status</TableCell>
            <TableCell />
          </TableRow>
          {data.orderItems.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.product.album}</TableCell>
              <TableCell>{item.quantity}</TableCell>
              <TableCell>
                {item.status
                  ? renderStatus(item.status)
                  : renderStatus(data.status)}
              </TableCell>
              <TableCell>
                {/* {isExchangeStatus(item.status) && (
                  <Select
                    options={dropdownOptions()}
                    placeholder="Selecione o status"
                    defaultValue={defaultOption(item)}
                    onChange={(selectedItem) =>
                      handleSelect(item.id, selectedItem as DropdownOption)
                    }
                    classNamePrefix="order-item-status"
                  />
                )} */}
              </TableCell>
            </TableRow>
          ))}
        </TableContainer>
        <Row>
          <Label isTitle>Data: </Label>
          <Label>{format(data.createdAt, "dd/MM/yyyy")}</Label>
        </Row>
        <Label isTitle>Atualizar Status do Pedido:</Label>
        <Select
          options={dropdownOptions()}
          placeholder="Selecione o status"
          defaultValue={defaultOption(data)}
          onChange={(selectedItem) =>
            handleSelect(data.id, selectedItem as DropdownOption, "order")
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
