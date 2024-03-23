import {
  Background,
  Container,
  Label,
  Row,
} from './styles'
import Button from '../Button/Button'

interface Props {
  closeModal: () => void;
}

const OrderDetails= ({ closeModal } : Props) => {
    return (
       <Background onClick={closeModal}>
        <Container onClick={(e) => e.stopPropagation()}>
          <h1>Detalhes do Pedido</h1>
          <Row>
            <Label isTitle>Status: </Label>
            <Label isStatus>Em processamento</Label>
          </Row>
          <h4>Informações do Pedido</h4>
          <hr/>
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
            <Button onClick={closeModal}>Atualizar Pedido</Button>
        </Container>
       </Background>
    )
}

export default OrderDetails;
