import { useQuery } from "@tanstack/react-query";
import Product from "../../services/product/Product";
import {
  Background,
  CloseIcon,
  Container,
  Label,
  LabelContainer,
  HeaderContainer,
  Row,
} from "./styles";
import { formatCurrency } from "../../utils/format";

interface Props {
  id: string;
  closeModal: () => void;
}

const ProductDetails = ({ id, closeModal }: Props) => {
  const { data: product } = useQuery({
    queryKey: ["product", id],
    queryFn: () => Product.findById(id),
  });

  if (!product) {
    return null;
  }

  return (
    <Background onClick={closeModal}>
      <Container onClick={(e) => e.stopPropagation()}>
        <HeaderContainer>
          <h1>Detalhes do Produto</h1>
          <CloseIcon onClick={closeModal} />
        </HeaderContainer>
        <LabelContainer>
          <Row>
            <Label isTitle>Artista: </Label>
            <Label isStatus>{product.artist}</Label>
          </Row>
          <Row>
            <Label isTitle>Álbum:</Label>
            <Label>{product.album}</Label>
          </Row>
        </LabelContainer>
        <LabelContainer>
          <Row>
            <Label isTitle>Produtor:</Label>
            <Label>{product.producer}</Label>
          </Row>
          <Row>
            <Label isTitle>Ano: </Label>
            <Label>{product.year}</Label>
          </Row>
        </LabelContainer>
        <LabelContainer>
          <Row>
            <Label isTitle>Peso: </Label>
            <Label>{product.weight}g</Label>
          </Row>
          <Row>
            <Label isTitle>Número de Faixas: </Label>
            <Label>{product.numberOfTracks}</Label>
          </Row>
        </LabelContainer>
        <LabelContainer>
          <Row>
            <Label isTitle>Altura: </Label>
            <Label>{product.height}cm</Label>
          </Row>
          <Row>
            <Label isTitle>Largura: </Label>
            <Label>{product.width}cm</Label>
          </Row>
        </LabelContainer>
        <LabelContainer>
          <Row>
            <Label isTitle>Grupo de Precificação: </Label>
            <Label>{product.categories.join(", ").replace("_", "-")}</Label>
          </Row>
          <Row>
            <Label isTitle>Código de Barras: </Label>
            <Label>{product.barCode}</Label>
          </Row>
        </LabelContainer>
        <LabelContainer>
          <Row>
            <Label isTitle>Preço: </Label>
            <Label>{formatCurrency(product.price)}</Label>
          </Row>
        </LabelContainer>
        <hr />
        <LabelContainer>
          <Row>
            <Label isTitle>{product.status === "INATIVO" ? "Motivo de Inativação" : "Motivo de Ativação"}:</Label>
            <Label>{product.statusReason}</Label>
          </Row>
        </LabelContainer>
      </Container>
    </Background>
  );
};

export default ProductDetails;
