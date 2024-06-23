import { useForm } from "react-hook-form";
import { useState } from "react";
import {
  Background,
  Container,
  IaIcon,
  Row,
  TextArea,
  Text,
  CloseIcon,
  LoadingText,
} from "./styles";
import sparkler from "../../assets/icons/sparkler.svg";
import useChat from "../../hooks/useChat";
import Input from "../Input/Input";
import Button from "../Button/Button";
import TypingAnimation from "../TypingAnimation/TypingAnimation";

interface Props {
  productId: string;
  curiosity: string;
  closeModal: () => void;
}

const ModalCuriosities = ({ productId, curiosity, closeModal }: Props) => {
  const { handleSendMessage, loadingChat } = useChat();

  const [currentResponse, setCurrentResponse] = useState(curiosity);

  const { control, watch, setValue } = useForm();

  const handleSend = async () => {
    const message = watch("message");
    if (message) {
      const response = await handleSendMessage(productId, message);
      setCurrentResponse(response);
      setValue("message", "");
    }
  };

  return (
    <Background onClick={closeModal}>
      <Container onClick={(e) => e.stopPropagation()}>
        <Row>
          <IaIcon src={sparkler} />
          <Text>Curiosidades</Text>
          <CloseIcon onClick={closeModal} />
        </Row>
        <TextArea>
          {loadingChat ? (
            <LoadingText>Carregando...</LoadingText>
          ) : (
            <TypingAnimation text={currentResponse} />
          )}
        </TextArea>
        <Row style={{ gap: 10, marginTop: "auto" }}>
          <Input
            control={control}
            name="message"
            containerStyle={{ flex: 1 }}
          />
          <Button onClick={handleSend}>Enviar</Button>
        </Row>
      </Container>
    </Background>
  );
};

export default ModalCuriosities;
