/* eslint-disable no-restricted-syntax */
/* eslint-disable no-await-in-loop */
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
  exchangeFinalOptions,
  exchangeOptions,
  finalOptions,
  initialOptions,
  intermediateOptions,
} from "../../data/createOrderOptions";
import {
  IOrderResponse,
  OrderItem,
  OrderStatus,
} from "../../services/order/dto/OrderDTO";
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
  const { renderStatus, handleUpdateOrder, handleUpdateOrderItem } = useOrder();

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
      return exchangeFinalOptions;
    }
    if (data.status.includes("TROCA")) {
      return exchangeOptions;
    }
    return initialOptions;
  };

  const dropdownItemOptions = (status: OrderStatus | null) => {
    if (status === "TROCADO") {
      return exchangeFinalOptions;
    }
    return exchangeOptions;
  };

  const defaultItemOption = (item: IOrderResponse | OrderItem) => {
    return dropdownItemOptions(item.status).find(
      (option) => option.value === item.status,
    );
  };

  const defaultOption = (item: IOrderResponse | OrderItem) => {
    return dropdownOptions().find((option) => option.value === item.status);
  };

  const updateOrderItemsSequentially = async (
    orderItems: { key: string; value: string }[],
  ) => {
    for (const orderItem of orderItems) {
      await handleUpdateOrderItem(orderItem.key, orderItem.value);
    }
    closeModal();
  };

  const handleUpdate = async () => {
    if (Object.keys(selectedItems).length === 0) {
      return closeModal();
    }

    const orderItems = Object.entries(selectedItems)
      .map(([key, item]) => {
        if (item.type === "orderItem") {
          return {
            key,
            value: item.value,
          };
        }
        return null;
      })
      .filter((orderItem) => orderItem !== null);

    if (orderItems.length > 0) {
      updateOrderItemsSequentially(orderItems);
    }

    const isOrder = Object.values(selectedItems).some(
      (item) => item.type === "order",
    );
    if (isOrder) {
      await handleUpdateOrder(data.id, selectedItems[data.id].value);
      return closeModal();
    }
  };

  const isExchangeEnable = (itemStatus: string | null) => {
    if (itemStatus === "TROCADO") {
      return false;
    }
    if (itemStatus?.includes("TROCA")) {
      return true;
    }

    return false;
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
                {isExchangeEnable(item.status) && (
                  <Select
                    options={dropdownItemOptions(item.status)}
                    placeholder="Selecione o status"
                    defaultValue={defaultItemOption(item)}
                    onChange={(selectedItem) =>
                      handleSelect(
                        item.id,
                        selectedItem as DropdownOption,
                        "orderItem",
                      )
                    }
                    classNamePrefix="order-item-status"
                  />
                )}
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
          isDisabled={data.status === "ENTREGUE" || data.status === "TROCADO"}
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
