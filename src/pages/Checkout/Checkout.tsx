/* eslint-disable react/no-unescaped-entities */
import { useForm } from "react-hook-form";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Container,
  Content,
  OptionsContainer,
  CartContainer,
  Title,
  Text,
  Row,
  TotalText,
  OptionsSubtitle,
  PlusIcon,
  IconWrapper,
  SubLabel,
  ApplyButton,
  InputWrapper,
  Separator,
} from "./styles";
import Header from "../../components/Header/Header";
import NavBar from "../../components/NavBar/NavBar";
import { Footer } from "../../components/Footer/Footer";
import RadioOptions from "../../components/RadioOptions/RadioOptions";
import ModalCreateAddress from "../../components/ModalCreateAddress/ModalCreateAddress";
import ModalCreateCreditCard from "../../components/ModalCreateCreditCard/ModalCreateCreditCard";
import Input from "../../components/Input/Input";
import { CheckoutProductCard } from "../../components/CheckoutProductCard/CheckoutProductCard";
import { formatCurrency } from "../../utils/format";
import Button from "../../components/Button/Button";
import { theme } from "../../styles/theme";
import {
  CheckoutForm,
  CheckoutSchema,
} from "../../validations/checkout.validation";
import OrderCompleted from "../OrderCompleted/OrderCompleted";
import { useNavigate } from "react-router-dom";

const ADDRESSES = [
  {
    label: "Rua Guilherme Lima, 456, Bairro Oliveira Guino",
    value: "0",
  },
  {
    label: "Rua Mariana Almeida, 11, Jardim Goulart",
    value: "1",
  },
];

const CARDS = [
  {
    label: "Elo - Final 4444",
    value: "0",
  },
];

const CREDITS = 20;

const Checkout = () => {
  const { control, watch } = useForm<CheckoutForm>({
    resolver: yupResolver(CheckoutSchema),
    defaultValues: {
      coupon: "",
      credit: 0,
    },
  });

  const [isVisibleAddressModal, setIsVisibleAddressModal] = useState(false);
  const [isVisibleCardModal, setIsVisibleCardModal] = useState(false);
  const navigate = useNavigate();

  return (
    <Container>
      <Header />
      <NavBar />
      <Title>Carrinho de Compras</Title>
      <Content>
        <OptionsContainer>
          <OptionsSubtitle>
            Endereço de entrega{" "}
            <IconWrapper onClick={() => setIsVisibleAddressModal(true)}>
              <PlusIcon />
            </IconWrapper>
          </OptionsSubtitle>
          <RadioOptions
            control={control}
            name="address"
            options={ADDRESSES}
            labelStyle={styles.radioLabelStyle}
          />
          <OptionsSubtitle style={{ marginTop: "1.5rem" }}>
            Forma de pagamento{" "}
            <IconWrapper onClick={() => setIsVisibleCardModal(true)}>
              <PlusIcon />
            </IconWrapper>
          </OptionsSubtitle>
          <Text style={{ marginBottom: ".5rem" }}>Cartão de crédito</Text>
          <RadioOptions
            control={control}
            name="card"
            options={CARDS}
            containerStyle={{ marginBottom: "1rem" }}
            labelStyle={styles.radioLabelStyle}
          />
          <InputWrapper>
            <Input
              control={control}
              name="coupon"
              label="Cupom promocional"
              containerStyle={{ width: "78%" }}
              style={{ borderRadius: "0.5rem" }}
              labelStyle={styles.labelStyle}
            />
            <ApplyButton>Aplicar</ApplyButton>
          </InputWrapper>
          <Input
            control={control}
            name="credit"
            label="Utilizar créditos"
            style={{ borderRadius: "0.5rem" }}
            labelStyle={styles.labelStyle}
          />
          <SubLabel>
            (Disponível: {formatCurrency(CREDITS - (watch("credit") || 0))})
          </SubLabel>
        </OptionsContainer>
        <CartContainer>
          <Text style={{ marginBottom: "1rem" }}>
            Confirme os itens da sua compra
          </Text>
          <CheckoutProductCard />
          <Row style={{ marginTop: "2rem" }}>
            <Text>Subtotal</Text>
            <Text>R$ 220,00</Text>
          </Row>
          <Row>
            <Text>Créditos</Text>
            <Text isDimmed>R$ 10,00</Text>
          </Row>
          <Row>
            <Text>Frete</Text>
            <Text isDimmed>R$ 6,00</Text>
          </Row>
          <Separator />
          <Row>
            <TotalText>Total</TotalText>
            <TotalText isBold>R$ 216,00</TotalText>
          </Row>
          <Button style={styles.buttonStyle} onClick={() => navigate("/orderCompleted")}>Finalizar Pagamento</Button>
        </CartContainer>
      </Content>
      <Footer />
      {isVisibleAddressModal && (
        <ModalCreateAddress
          closeModal={() => setIsVisibleAddressModal(false)}
        />
      )}
      {isVisibleCardModal && (
        <ModalCreateCreditCard
          closeModal={() => setIsVisibleCardModal(false)}
        />
      )}
    </Container>
  );
};

export default Checkout;

const styles = {
  labelStyle: {
    fontSize: "1.5rem",
    marginTop: "1rem",
    marginBottom: ".5rem",
  },
  radioLabelStyle: {
    fontSize: "1.25rem",
  },
  buttonStyle: {
    alignSelf: "flex-end",
    marginTop: "2rem",
    borderRadius: "0.5rem",
    backgroundColor: theme.colors.purple_1f,
  },
};
