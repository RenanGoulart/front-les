import { TypeAnimation } from "react-type-animation";
import { useForm } from "react-hook-form";
import {
  Background,
  Container,
  IaIcon,
  Row,
  TextArea,
  Text,
  CloseIcon,
} from "./styles";
import sparkler from "../../assets/icons/sparkler.svg";
import { theme } from "../../styles/theme";
import useChat from "../../hooks/useChat";
import Input from "../Input/Input";
import Button from "../Button/Button";

interface Props {
  productId: string;
  curiosity: string;
  closeModal: () => void;
}

const ModalCuriosities = ({ productId, curiosity, closeModal }: Props) => {
  const { handleSendMessage } = useChat();

  const { control, watch, reset } = useForm();

  const handleSend = async () => {
    const message = watch("message");
    if (message) {
      const response = await handleSendMessage(productId, message);
      console.log("response", response);
      reset();
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
          <TypeAnimation
            sequence={[curiosity, 1000]}
            wrapper="span"
            repeat={Infinity}
            speed={99}
            style={{
              fontSize: "1.2em",
              display: "inline-block",
              color: theme.colors.white_ff,
              paddingRight: 32,
            }}
          />
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
