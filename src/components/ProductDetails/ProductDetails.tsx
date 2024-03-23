import {
  Background,
  CloseIcon,
  Container,
  Label,
  LabelContainer,
  HeaderContainer,
  Row,
} from './styles'

interface Props {
  closeModal: () => void;
}

const ProductDetails= ({ closeModal } : Props) => {
    return (
       <Background onClick={closeModal}>
        <Container onClick={(e) => e.stopPropagation()}>
          <HeaderContainer>
            <h1>Detalhes do Produto</h1>
            <CloseIcon onClick={closeModal}/>
          </HeaderContainer>
          <LabelContainer>
            <Row>
              <Label isTitle>Artista: </Label>
              <Label isStatus>Pearl Jam</Label>
            </Row>
            <Row>
              <Label isTitle>Álbum:</Label>
              <Label>Ten</Label>
            </Row>
          </LabelContainer>
          <LabelContainer>
            <Row>
              <Label isTitle>Produtor:</Label>
              <Label>Epic Records</Label>
            </Row>
            <Row>
              <Label isTitle>Data: </Label>
              <Label>27/08/1991</Label>
            </Row>
          </LabelContainer>
          <LabelContainer>
            <Row>
              <Label isTitle>Peso: </Label>
              <Label>300g</Label>
            </Row>
            <Row>
              <Label isTitle>Número de Faixas: </Label>
              <Label>11</Label>
            </Row>
          </LabelContainer>
          <LabelContainer>
            <Row>
              <Label isTitle>Altura: </Label>
              <Label>30cm</Label>
            </Row>
            <Row>
              <Label isTitle>Largura: </Label>
              <Label>35cm</Label>
            </Row>
          </LabelContainer>
          <LabelContainer>
            <Row>
              <Label isTitle>Grupo de Precificação: </Label>
              <Label>Rock</Label>
            </Row>
            <Row>
              <Label isTitle>Código de Barras: </Label>
              <Label>2345612378645</Label>
            </Row>
          </LabelContainer>
          <LabelContainer>
            <Row>
              <Label isTitle>Preço: </Label>
              <Label>R$ 200,00</Label>
            </Row>
          </LabelContainer>
        </Container>
       </Background>
    )
}

export default ProductDetails;
