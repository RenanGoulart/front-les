import { useNavigate } from "react-router-dom";
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
import { IOrderResponse } from "../../services/order/dto/OrderDTO";
import useOrder from "../../hooks/useOrder";

interface Props {
  data: IOrderResponse;
  closeModal: () => void;
}

const UserOrderDetails = ({ data, closeModal }: Props) => {
  const { renderStatus, handleUpdateExchange } = useOrder();

  const navigate = useNavigate();

  const renderMessage = (status: string) => {
    switch (status) {
      case "TROCA_SOLICITADA":
        return "Aguarde a autorização de troca da loja!";
      case "TROCA_AUTORIZADA":
        return "Envie o produto para troca!";
      case "TROCADO":
        return "Produto trocado!";
      default:
        return "";
    }
  };

  const isExchangeEnable = (orderStatus: string, itemStatus: string | null) => {
    if (
      itemStatus === "TROCADO" ||
      itemStatus === "TROCA_AUTORIZADA" ||
      itemStatus === "TROCA_SOLICITADA"
    ) {
      return false;
    }

    return (
      orderStatus === "ENTREGUE" ||
      orderStatus === "TROCA_SOLICITADA" ||
      orderStatus === "TROCA_AUTORIZADA"
    );
  };

  const renderExchangeButton = (status: string) => {
    const allOrderItemsStatus = data.orderItems.every(
      (item) => item.status === "TROCA_SOLICITADA",
    );
    if (allOrderItemsStatus) {
      return null;
    }

    if (status === "ENTREGUE") {
      return (
        <Button
          onClick={() => handleUpdateExchange(data.id, "TROCA_SOLICITADA")}
          data-cy="btn-request-exchange"
        >
          Solicitar Troca
        </Button>
      );
    }
    if (status.includes("TROCA")) {
      return (
        <>
          <h4 style={{ alignSelf: "center" }}>{renderStatus(data.status)}!</h4>
          <p style={{ alignSelf: "center" }}>{renderMessage(data.status)}</p>
          <Button onClick={() => navigate("/home")} data-cy="btn-close-modal">
            Voltar
          </Button>
        </>
      );
    }
    return null;
  };

  return (
    <Background onClick={closeModal}>
      <Container
        onClick={(e) => e.stopPropagation()}
        data-cy="modal-order-details"
      >
        <h1>Detalhes do Pedido</h1>
        <Row>
          <Label isTitle>Status: </Label>
          <Label isStatus>{renderStatus(data.status)}</Label>
        </Row>
        <h4>Informações do Pedido</h4>
        <hr />
        <Row>
          <Label isTitle>Número do Pedido:</Label>
          <Label>#{data.code}</Label>
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
                {isExchangeEnable(data.status, item.status) && (
                  <Button
                    onClick={() =>
                      handleUpdateExchange(item.id, "TROCA_SOLICITADA")
                    }
                  >
                    Solicitar Troca
                  </Button>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableContainer>
        <Row>
          <Label isTitle>Data: </Label>
          <Label>{format(data.createdAt, "dd/MM/yyyy")}</Label>
        </Row>
        {renderExchangeButton(data.status)}
      </Container>
    </Background>
  );
};

export default UserOrderDetails;
