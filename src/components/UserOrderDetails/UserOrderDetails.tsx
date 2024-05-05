import { useState } from "react";
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

  const [isExchangeRequested, setIsExchangeRequested] = useState(false);

  const navigate = useNavigate();

  const handleRequestExchange = () => {
    handleUpdateExchange(data.id, "TROCA_SOLICITADA");
    setIsExchangeRequested(true);
  };

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
                {!item.status?.includes("TROCA") && (
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
        {!data.status.includes("TROCA") || isExchangeRequested ? (
          <Button
            onClick={handleRequestExchange}
            data-cy="btn-request-exchange"
          >
            Solicitar Troca
          </Button>
        ) : (
          <>
            <h4 style={{ alignSelf: "center" }}>
              {renderStatus(data.status)}!
            </h4>
            <p style={{ alignSelf: "center" }}>{renderMessage(data.status)}</p>
            <Button onClick={() => navigate("/home")} data-cy="btn-close-modal">
              Voltar
            </Button>
          </>
        )}
      </Container>
    </Background>
  );
};

export default UserOrderDetails;
