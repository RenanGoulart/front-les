/* eslint-disable react/no-unescaped-entities */
import { useForm } from "react-hook-form";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
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
  ApplyButton,
  InputWrapper,
  Separator,
  EmptyContainer,
} from "./styles";
import Header from "../../components/Header/Header";
import NavBar from "../../components/NavBar/NavBar";
import { Footer } from "../../components/Footer/Footer";
import RadioOptions from "../../components/RadioOptions/RadioOptions";
import ModalCreateAddress from "../../components/ModalCreateAddress/ModalCreateAddress";
import ModalCreateCreditCard from "../../components/ModalCreateCreditCard/ModalCreateCreditCard";
import Input from "../../components/Input/Input";
import { CheckoutProductCard } from "../../components/CheckoutProductCard/CheckoutProductCard";
import Button from "../../components/Button/Button";
import { theme } from "../../styles/theme";
import {
  CheckoutForm,
  CheckoutSchema,
} from "../../validations/checkout.validation";
import { ICoupon, useCart } from "../../hooks/useCart";
import { formatCurrency } from "../../utils/format";

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
  {
    label: "Visa - Final 4237",
    value: "1",
  },
  {
    label: "Mastercard - Final 7563",
    value: "2",
  },
];

const Checkout = () => {
  const navigate = useNavigate();
  const { cart, user, handleApplyCoupon, handleCloseCart } = useCart();

  const [coupon, setCoupon] = useState<ICoupon | null>(null);
  const [isVisibleAddressModal, setIsVisibleAddressModal] = useState(false);
  const [isVisibleCardModal, setIsVisibleCardModal] = useState(false);

  const { control, getValues, setValue } = useForm<CheckoutForm>({
    resolver: yupResolver(CheckoutSchema),
    defaultValues: {
      coupon: "",
    },
  });

  const handleSetCoupon = () => {
    const couponCode = getValues("coupon");
    const existingCoupon = handleApplyCoupon(couponCode as string);

    if (existingCoupon) {
      setCoupon(existingCoupon);
    }
    setValue("coupon", "");
  };

  const calculateTotal = () =>
    cart.total + user.freight - user.credits - (coupon?.discount || 0);

  return (
    <Container>
      <Header />
      <NavBar />
      <Title>Carrinho de Compras</Title>
      <Content>
        {cart?.cartItems?.length > 0 ? (
          <>
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
              <Select
                options={CARDS}
                isMulti
                placeholder="Selecione um ou mais cartões"
                noOptionsMessage={() => "Nenhum cartão encontrado"}
                styles={{
                  control(base) {
                    return {
                      ...base,
                      minHeight: 50,
                      paddingTop: "0.5rem",
                      paddingBottom: "0.5rem",
                      fontSize: "1rem",
                      borderRadius: "0.5rem",
                      borderColor: theme.colors.purple_1f,
                      boxShadow: "none",
                      "&:hover": {
                        borderColor: theme.colors.purple_1f,
                      },
                    };
                  },
                  option(base, state) {
                    return {
                      ...base,
                      backgroundColor: state.isSelected
                        ? theme.colors.purple_1f
                        : "white",
                      color: state.isSelected ? "white" : "black",
                      "&:hover": {
                        backgroundColor: theme.colors.purple_48,
                        color: "white",
                      },
                    };
                  },
                }}
                classNamePrefix="credit-cards"
              />
              <InputWrapper style={{ marginTop: "auto" }}>
                <Input
                  control={control}
                  name="coupon"
                  label="Cupom promocional"
                  containerStyle={{ width: "78%" }}
                  style={{ borderRadius: "0.5rem" }}
                  labelStyle={styles.labelStyle}
                />
                <ApplyButton
                  onClick={handleSetCoupon}
                  data-cy="btn-apply-coupon"
                >
                  Aplicar
                </ApplyButton>
              </InputWrapper>
            </OptionsContainer>
            <CartContainer>
              <Text style={{ marginBottom: "1rem" }}>
                Confirme os itens da sua compra
              </Text>
              {cart.cartItems.map((item) => (
                <CheckoutProductCard key={item.id} data={item} />
              ))}
              <Row style={{ marginTop: "2rem" }}>
                <Text>Subtotal</Text>
                <Text data-cy="value-subtotal">{formatCurrency(cart.total)}</Text>
              </Row>
              <Row>
                <Text>Créditos</Text>
                <Text isDimmed>-{formatCurrency(user.credits)}</Text>
              </Row>
              {coupon && (
                <Row>
                  <Text>Cupom ({coupon.code})</Text>
                  <Text isDimmed>-{formatCurrency(coupon.discount)}</Text>
                </Row>
              )}
              <Row>
                <Text>Frete</Text>
                <Text isDimmed>{formatCurrency(user.freight)}</Text>
              </Row>
              <Separator />
              <Row>
                <TotalText>Total</TotalText>
                <TotalText isBold>{formatCurrency(calculateTotal())}</TotalText>
              </Row>
              <Button
                style={styles.buttonStyle}
                onClick={() => {
                  handleCloseCart();
                  navigate("/orderCompleted");
                }}
                data-cy="btn-finish-payment"
              >
                Finalizar Pagamento
              </Button>
            </CartContainer>
          </>
        ) : (
          <EmptyContainer>
            <Text>
              Carrinho está vazio, adicione produtos ao carrinho para prosseguir
            </Text>
            <Button
              style={{ ...styles.buttonStyle, alignSelf: "center" }}
              onClick={() => navigate("/product")}
            >
              Produtos
            </Button>
          </EmptyContainer>
        )}
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
