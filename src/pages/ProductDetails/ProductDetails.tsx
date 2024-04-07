/* eslint-disable react/no-unescaped-entities */
import { useNavigate, useParams } from "react-router-dom";
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
import brain from "../../assets/icons/brain.svg";
import { IProduct, ITrack, productsList } from "../../mock/products";
import { formatCurrency } from "../../utils/format";
import { useCart } from "../../hooks/useCart";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { handleAddToCart } = useCart();
  const product = productsList.find((item) => item.id === Number(id));

  const renderTracks = (tracks: ITrack[]) => {
    if (tracks.length < 12) {
      return (
        <TrackList>
          {product?.tracks.map((track) => (
            <TrackText
              key={track.id}
            >{`${track.id}. ${track.name} (${track.duration})`}</TrackText>
          ))}
        </TrackList>
      );
    }

    const mid = Math.floor(tracks.length / 2);
    return (
      <>
        <TrackList>
          {product?.tracks
            .slice(0, mid)
            .map((track) => (
              <TrackText
                key={track.id}
              >{`${track.id}. ${track.name} (${track.duration})`}</TrackText>
            ))}
        </TrackList>
        <TrackList>
          {product?.tracks
            .slice(-mid)
            .map((track) => (
              <TrackText
                key={track.id}
              >{`${track.id}. ${track.name} (${track.duration})`}</TrackText>
            ))}
        </TrackList>
      </>
    );
  };

  return (
    <Container>
      <Header />
      <NavBar />
      <Content>
        <ImageWrapper>
          <ProductImage src={product?.image} />
        </ImageWrapper>
        <DetailsWrapper>
          <TextWrapper>
            <ProductText isBold>{product?.album}</ProductText>
            <ProductText>{product?.artist}</ProductText>
            <ProductText isBold style={{ marginTop: "1rem" }}>
              {formatCurrency(product?.price as number)}
            </ProductText>
          </TextWrapper>
          <ButtonsRow>
            <ButtonsColumn>
              <Button
                isOutlined
                onClick={() => {
                  handleAddToCart(product as IProduct);
                  navigate("/checkout");
                }}
              >
                Compra Agora
              </Button>
              <Button onClick={() => handleAddToCart(product as IProduct)}>
                Adicionar ao Carrinho
              </Button>
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
          <TableCell>{product?.artist}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell isPurple>Gênero</TableCell>
          <TableCell>{product?.genre}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell isPurple>Ano</TableCell>
          <TableCell>{product?.year}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell isPurple>Dimensões</TableCell>
          <TableCell>{product?.dimensions}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell isPurple>Gravadora</TableCell>
          <TableCell>{product?.recordCompany}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell isPurple>Número de faixas</TableCell>
          <TableCell>{product?.numberOfTracks}</TableCell>
        </TableRow>
      </ContainerTable>
      <TrackContainer>
        <TracksTitle>Faixas</TracksTitle>
        <TrackRow>{renderTracks(product?.tracks as ITrack[])}</TrackRow>
      </TrackContainer>
      <Footer />
    </Container>
  );
};

export default ProductDetails;
