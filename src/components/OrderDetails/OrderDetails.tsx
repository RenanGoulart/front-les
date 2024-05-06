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
  exchangeOptions,
  finalOptions,
  initialOptions,
  intermediateOptions,
} from "../../data/createOrderOptions";
import { IOrderResponse, OrderItem } from "../../services/order/dto/OrderDTO";
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
  const { renderStatus, handleUpdateOrder, handleUpdateExchange } = useOrder();

  const [selectedItems, setSelectedItems] = useState<
    Record<string, DropdownOption>
  >({});

  const handleSelect = (itemId: string, selectedItem: DropdownOption) => {
    setSelectedItems((prevState) => ({ ...prevState, [itemId]: selectedItem }));
  };

  const isExchangeStatus = (status: string | null) => {
    return (
      status === "TROCA_SOLICITADA" ||
      status === "TROCA_AUTORIZADA" ||
      status === "TROCADO"
    );
  };

  const dropdownOptions = () => {
    if (data.status === "EM_PROCESSAMENTO") {
      return initialOptions;
    }
    if (data.status === "APROVADA") {
      return intermediateOptions;
    }
    if (data.status === "EM_TRANSITO" || data.status === "ENTREGUE") {
      return finalOptions;
    }
    if (isExchangeStatus(data.status)) {
      return exchangeOptions;
    }
    return initialOptions;
  };

  const defaultOption = (item: IOrderResponse | OrderItem) => {
    return dropdownOptions().find((option) => option.value === item.status);
  };

  const handleUpdate = async () => {
    const updatePromises = Object.entries(selectedItems).map(
      async ([itemId, selectedOption]) => {
        if (selectedOption && isExchangeStatus(selectedOption.value)) {
          await handleUpdateExchange(itemId, selectedOption.value);
        } else if (selectedOption) {
          await handleUpdateOrder(itemId, selectedOption.value);
        }
      },
    );

    await Promise.all(updatePromises);
    closeModal();
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
                {isExchangeStatus(item.status) && (
                  <Select
                    options={dropdownOptions()}
                    placeholder="Selecione o status"
                    defaultValue={defaultOption(item)}
                    onChange={(selectedItem) =>
                      handleSelect(item.id, selectedItem as DropdownOption)
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
          defaultValue={defaultOption(data)}
          onChange={(selectedItem) =>
            handleSelect(data.id, selectedItem as DropdownOption)
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
