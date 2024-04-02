import {
  Background,
  Container,
  Label,
  Row,
} from './styles'
import Button from '../Button/Button'
import Select from '../Select/Select';
import { statusOptions } from '../../data/createOrderOptions';
import { useForm } from 'react-hook-form';

interface Props {
  closeModal: () => void;
}

const OrderDetails= ({ closeModal } : Props) => {
  const { control } = useForm();

    return (
       <Background onClick={closeModal}>
        <Container onClick={(e) => e.stopPropagation()}>
          <h1>Detalhes do Pedido</h1>
          <Row>
            <Label isTitle>Status: </Label>
            <Label isStatus>Em Processamento</Label>
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
          <Row>
            <Select
              control={control}
              name="status"
              label="Atualizar Status do Pedido"
              options={statusOptions}
              containerStyle={{ width: '100%' }}
            />
          </Row>
          <Button style={{ justifyContent: 'flex-end' }}>
              Atualizar
          </Button>
        </Container>
       </Background>
    )
}

export default OrderDetails;
