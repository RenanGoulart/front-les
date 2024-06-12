import {
  Background,
  Container,
  IaIcon,
  Row,
  TextArea,
  Text,
  CloseIcon
} from "./styles";
import brain from "../../assets/icons/brain.svg";
import { useEffect, useState } from "react";
import { showCuriosity } from "../../services/product";

interface Props {
  closeModal: () => void;
  album: string;
}

const ModalCuriosities = ({ closeModal, album }: Props) => {
  const [ curiosity, setCuriosity ] = useState('');

  const getCuriosity = async (album: string) => {
    const productCuriosity = await showCuriosity(album);
    if (productCuriosity && productCuriosity.curiosity) {
      setCuriosity(productCuriosity.curiosity);
    }
  };

  useEffect(() => {
    if (album) {
      getCuriosity(album);
    }
  }, [album]);

  return (
    <Background onClick={closeModal}>
      <Container onClick={(e) => e.stopPropagation()}>
        <Row>
          <IaIcon src={brain}/>
          <Text>Curiosidades</Text>
          <CloseIcon onClick={closeModal}></CloseIcon>
        </Row>
        <Row>
          <TextArea>{curiosity}</TextArea>
        </Row>
      </Container>
    </Background>
  );
};

export default ModalCuriosities;
