import { useState } from "react";
import Select from "react-select";
import { Background, Container, Label, Row } from "./styles";
import Button from "../Button/Button";
import { statusOptions } from "../../data/createOrderOptions";

interface DropdownOption {
  value: string;
  label: string;
}
interface Props {
  closeModal: () => void;
}

const OrderDetails = ({ closeModal }: Props) => {
  const [selectedOption, setSelectedOption] = useState<DropdownOption | null>(
    null,
  );
  const [statusLabel, setStatusLabel] = useState<string>("Em Processamento");

  const handleSelect = (selectedItem: DropdownOption) => {
    setSelectedOption(selectedItem);
  };

  const handleUpdate = () => {
    if (selectedOption) {
      setStatusLabel(selectedOption.label);
      console.log(selectedOption);
    }
  };

  return (
    <Background onClick={closeModal}>
      <Container onClick={(e) => e.stopPropagation()}>
        <h1>Detalhes do Pedido</h1>
        <Row>
          <Label isTitle>Status: </Label>
          <Label isStatus>{statusLabel}</Label>
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
        <Label isTitle>Atualizar Status do Pedido:</Label>
        <Select
          options={statusOptions}
          placeholder="Selecione o status"
          onChange={(selectedItem) =>
            handleSelect(selectedItem as DropdownOption)
          }
        />
        <Button style={{ justifyContent: "flex-end" }} onClick={handleUpdate}>
          Atualizar
        </Button>
      </Container>
    </Background>
  );
};

export default OrderDetails;
