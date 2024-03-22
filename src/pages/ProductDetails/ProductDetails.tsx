/* eslint-disable react/no-unescaped-entities */
import {
  Button,
  ButtonsRow,
  ButtonsColumn,
  Container,
  Content,
  DetailsWrapper,
  IaButton,
  IaIcon,
  ImageWrapper,
  ProductImage,
  ProductText,
  TextWrapper,
  ContainerTable,
  TableRow,
  TableCell,
  Separator,
  TrackContainer,
  TracksTitle,
  TrackList,
  TrackText,
  TrackRow,
} from "./styles";
import Header from "../../components/Header/Header";
import NavBar from "../../components/NavBar/NavBar";
import { Footer } from "../../components/Footer/Footer";
import photoProduct from "../../assets/img/photo-product.png";
import brain from "../../assets/icons/brain.svg";

const ProductDetails = () => {
  return (
    <Container>
      <Header />
      <NavBar />
      <Content>
        <ImageWrapper>
          <ProductImage src={photoProduct} />
        </ImageWrapper>
        <DetailsWrapper>
          <TextWrapper>
            <ProductText isBold>Flower Boy</ProductText>
            <ProductText>Tyler The Creator</ProductText>
            <ProductText isBold style={{ marginTop: "1rem" }}>
              R$ 100,00
            </ProductText>
          </TextWrapper>
          <ButtonsRow>
            <ButtonsColumn>
              <Button isOutlined>Compra Agora</Button>
              <Button>Adicionar ao Carrinho</Button>
            </ButtonsColumn>
            <IaButton>
              <IaIcon src={brain} />
            </IaButton>
          </ButtonsRow>
        </DetailsWrapper>
      </Content>
      <Separator />
      <ContainerTable>
        <TableRow>
          <TableCell isPurple>Nome do Artista</TableCell>
          <TableCell>Tyler The Creator</TableCell>
        </TableRow>
        <TableRow>
          <TableCell isPurple>Gênero</TableCell>
          <TableCell>Hip-Hop</TableCell>
        </TableRow>
        <TableRow>
          <TableCell isPurple>Ano</TableCell>
          <TableCell>2017</TableCell>
        </TableRow>
        <TableRow>
          <TableCell isPurple>Dimensões</TableCell>
          <TableCell>318 × 318 × 6 mm - 499 g</TableCell>
        </TableRow>
        <TableRow>
          <TableCell isPurple>Gravadora</TableCell>
          <TableCell>COLUMBIA</TableCell>
        </TableRow>
        <TableRow>
          <TableCell isPurple>Número de faixas</TableCell>
          <TableCell>14</TableCell>
        </TableRow>
      </ContainerTable>
      <TrackContainer>
        <TracksTitle>Faixas</TracksTitle>
        <TrackRow>
          <TrackList>
            <TrackText>1. Foreword (3:13)</TrackText>
            <TrackText>2. Where This Flower Blooms (3:14)</TrackText>
            <TrackText>3. Sometimes... (0:36)</TrackText>
            <TrackText>4. See You Again (3:00)</TrackText>
            <TrackText>5. Who Dat Boy (3:24)</TrackText>
            <TrackText>6. Pothole (3:56)</TrackText>
            <TrackText>7. Garden Shed (3:43)</TrackText>
          </TrackList>
          <TrackList>
            <TrackText>1. Boredom (5:20)</TrackText>
            <TrackText>2. I Ain't Got Time! (3:26)</TrackText>
            <TrackText>3. 911 / Mr. Lonely (4:15)</TrackText>
            <TrackText>4. Droppin' Seeds (1:00)</TrackText>
            <TrackText>5. November (3:45)</TrackText>
            <TrackText>6. Glitter (3:44)</TrackText>
            <TrackText>7. Enjoy Right Now, Today (3:55)</TrackText>
          </TrackList>
        </TrackRow>
      </TrackContainer>
      <Footer />
    </Container>
  );
};

export default ProductDetails;
