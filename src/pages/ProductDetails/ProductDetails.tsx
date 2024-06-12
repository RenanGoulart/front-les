import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
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
  TrackRow,
  TrackList,
  TrackText,
} from "./styles";
import Header from "../../components/Header/Header";
import NavBar from "../../components/NavBar/NavBar";
import { Footer } from "../../components/Footer/Footer";
import brain from "../../assets/icons/brain.svg";
import { formatCurrency } from "../../utils/format";
import Product from "../../services/product/Product";
import { useCart } from "../../contexts/useCart";
import { ITrack } from "../../services/product/dto/ProductDTO";
import { useState } from "react";
import ModalCuriosities from "../../components/ModalCuriosities/ModalCuriosities";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [ isCuriosity, setCuriosity ] = useState(false);

  const { handleAddToCart } = useCart();

  const closeModal = () => {
    setCuriosity(false);
  };

  const { data: product } = useQuery({
    queryKey: ["productDetails", id],
    queryFn: () => (id ? Product.findById(id) : null),
  });

  const renderTracks = (tracks: ITrack[]) => {
    if (tracks.length < 12) {
      return (
        <TrackList>
          {product?.tracks.map((track, index) => (
            <TrackText
              key={track.id}
            >{`${index + 1}. ${track.name} (${track.duration})`}</TrackText>
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
            .map((track, index) => (
              <TrackText
                key={track.id}
              >{`${index + 1}. ${track.name} (${track.duration})`}</TrackText>
            ))}
        </TrackList>
        <TrackList>
          {product?.tracks
            .slice(-mid)
            .map((track, index) => (
              <TrackText
                key={track.id}
              >{`${index + 1}. ${track.name} (${track.duration})`}</TrackText>
            ))}
        </TrackList>
      </>
    );
  };

  if (!product) {
    return null;
  }

  return (
    <Container>
      <Header />
      <NavBar />
      <Content>
        <ImageWrapper>
          <ProductImage src={product.photo} />
        </ImageWrapper>
        <DetailsWrapper>
          <TextWrapper>
            <ProductText isBold>{product.album}</ProductText>
            <ProductText>{product.artist}</ProductText>
            <ProductText isBold style={{ marginTop: "1rem" }}>
              {formatCurrency(product.price as number)}
            </ProductText>
          </TextWrapper>
          <ButtonsRow>
            <ButtonsColumn>
              <Button
                isOutlined
                onClick={() => {
                  handleAddToCart(product.id);
                  navigate("/checkout");
                }}
              >
                Comprar Agora
              </Button>
              <Button onClick={() => handleAddToCart(product.id)}>
                Adicionar ao Carrinho
              </Button>
            </ButtonsColumn>
            <IaButton onClick={() => setCuriosity(true)}>
              <IaIcon src={brain} />
            </IaButton>
          </ButtonsRow>
        </DetailsWrapper>
      </Content>
      <Separator />
      <ContainerTable>
        <TableRow>
          <TableCell isPurple>Nome do Artista</TableCell>
          <TableCell>{product.artist}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell isPurple>Gênero</TableCell>
          <TableCell>
            {product.categories.join(", ").replace("_", "-")}
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell isPurple>Ano</TableCell>
          <TableCell>{product.year}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell isPurple>Dimensões</TableCell>
          <TableCell>
            {product.width}cm x {product.height}cm x {product.weight}g
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell isPurple>Gravadora</TableCell>
          <TableCell>{product.producer}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell isPurple>Número de faixas</TableCell>
          <TableCell>{product.numberOfTracks}</TableCell>
        </TableRow>
      </ContainerTable>
      <TrackContainer>
        <TracksTitle>Faixas</TracksTitle>
        <TrackRow>{renderTracks(product?.tracks as ITrack[])}</TrackRow>
      </TrackContainer>
      <Footer />
      {isCuriosity && (
          <ModalCuriosities closeModal={closeModal}
            album={product.album}
          />
      )}
    </Container>
  );
};

export default ProductDetails;
