import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Background, Container, Label, Row } from "./styles";
import Button from "../Button/Button";

interface Props {
  closeModal: () => void;
}

const UserOrderDetails = ({ closeModal }: Props) => {
  const [isExchangeRequested, setIsExchangeRequested] = useState(false);
  const [status, setStatus] = useState("Entregue");

  const navigate = useNavigate();

  const handleRequestExchange = () => {
    setIsExchangeRequested(true);
    setStatus("Em troca");
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
          <Label isStatus>{status}</Label>
        </Row>
        <h4>Informações do Pedido</h4>
        <hr />
        <Row>
          <Label isTitle>Número do Pedido:</Label>
          <Label>#44</Label>
        </Row>
        <Row>
          <Label isTitle>Produto:</Label>
          <Label>Brand New Eyes | Paramore</Label>
        </Row>
        <Row>
          <Label isTitle>Data: </Label>
          <Label>02/02/2024</Label>
        </Row>
        {!isExchangeRequested ? (
          <Button
            onClick={handleRequestExchange}
            data-cy="btn-request-exchange"
          >
            Solicitar Troca
          </Button>
        ) : (
          <>
            <h4 style={{ alignSelf: "center" }}>Troca solicitada!</h4>
            <p style={{ alignSelf: "center" }}>
              Aguarde a notificação de autorização da troca!
            </p>
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
