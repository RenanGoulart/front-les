import { TypeAnimation } from "react-type-animation";
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

interface Props {
  closeModal: () => void;
  curiosity: string;
}

const ModalCuriosities = ({ closeModal, curiosity }: Props) => {
  return (
    <Background onClick={closeModal}>
      <Container onClick={(e) => e.stopPropagation()}>
        <Row>
          <IaIcon src={sparkler} />
          <Text>Curiosidades</Text>
          <CloseIcon onClick={closeModal} />
        </Row>
        <Row>
          <TextArea>
            <TypeAnimation
              sequence={[curiosity, 1000]}
              wrapper="span"
              repeat={1}
              speed={80}
              style={{
                fontSize: "1.2em",
                display: "inline-block",
                color: theme.colors.white_ff,
              }}
            />
            {/* <ContentText>{curiosity}</ContentText> */}
          </TextArea>
        </Row>
      </Container>
    </Background>
  );
};

export default ModalCuriosities;
