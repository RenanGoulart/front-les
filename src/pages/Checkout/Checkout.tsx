/* eslint-disable react/no-unescaped-entities */
import { Control, useFieldArray, useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
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
  CardRow,
} from "./styles";
import Header from "../../components/Header/Header";
import NavBar from "../../components/NavBar/NavBar";
import { Footer } from "../../components/Footer/Footer";
import RadioOptions from "../../components/RadioOptions/RadioOptions";
import Input from "../../components/Input/Input";
import { CheckoutProductCard } from "../../components/CheckoutProductCard/CheckoutProductCard";
import Button from "../../components/Button/Button";
import { theme } from "../../styles/theme";
import {
  CheckoutForm,
  CheckoutSchema,
} from "../../validations/checkout.validation";
import { useCart } from "../../contexts/useCart";
import { formatCurrency } from "../../utils/format";
import { ICouponResponse } from "../../services/coupon/dto/CouponDTO";
import useUser from "../../hooks/useUser";
import ModalCreateUserAddress from "../../components/ModalCreateUserAddress/ModalCreateUserAddress";
import ModalCreateUserCreditCard from "../../components/ModalCreateUserCreditCard/ModalCreateUserCreditCard";
import MultiSelect from "../../components/MultiSelect/MultiSelect";
import useOrder from "../../hooks/useOrder";
import { handleError } from "../../lib/toastify";

const freight = 15;

const Checkout = () => {
  const navigate = useNavigate();
  const { user, addresses, cards } = useUser();
  const { cart, handleApplyCoupon } = useCart();
  const { handleFinishOrder } = useOrder();

  const [coupon, setCoupon] = useState<ICouponResponse | null>(null);
  const [isVisibleAddressModal, setIsVisibleAddressModal] = useState(false);
  const [isVisibleCardModal, setIsVisibleCardModal] = useState(false);

  const { control, getValues, setValue, watch, handleSubmit } =
    useForm<CheckoutForm>({
      resolver: yupResolver(CheckoutSchema),
      defaultValues: {
        coupon: "",
      },
    });
  const cardsWatch = watch("cards");

  const { fields, append, remove } = useFieldArray({
    control,
    name: "cardsValue",
  });

  useEffect(() => {
    if (!cardsWatch) {
      return;
    }

    if (cardsWatch.length !== fields.length) {
      if (cardsWatch.length > fields.length) {
        for (let i = fields.length; i < cardsWatch.length; i++) {
          append({
            id: cardsWatch[i].value,
            label: cardsWatch[i].label,
            value: 0,
          });
        }
      } else if (cardsWatch.length < fields.length) {
        for (let i = fields.length - 1; i >= 0; i--) {
          const card = cardsWatch.find(
            (item) => item.label === fields[i].label,
          );
          if (!card) {
            remove(i);
          }
        }
      }
    }
  }, [cardsWatch]);

  const handleSetCoupon = async () => {
    const couponName = getValues("coupon");
    const existingCoupon = await handleApplyCoupon(couponName as string);

    if (existingCoupon) {
      setCoupon(existingCoupon);
    }
    setValue("coupon", "");
  };

  const calculateTotal = () =>
    (cart?.total || 0) + freight - (user?.credits || 0) - (coupon?.value || 0);

  const onSubmit = async (data: CheckoutForm) => {
    const cardsPayment = data?.cardsValue?.map((card) => ({
      id: card.id as string,
      value: card.value as number,
    }));

    const values = cardsPayment?.reduce((acc, card) => acc + card.value, 0);
    if (values !== calculateTotal()) {
      return handleError("Valores dos cartões não correspondem ao total");
    }

    const body = {
      addressId: data.address,
      cartId: cart?.id as string,
      couponId: coupon?.id || null,
      freight,
      cards: cardsPayment || [],
      creditsUsed: user?.credits || 0,
    };

    const order = await handleFinishOrder(body);
    if (order) {
      navigate(`/orderCompleted/${order.code}`);
    }
  };

  return (
    <Container>
      <Header />
      <NavBar />
      <Title>Carrinho de Compras</Title>
      <Content>
        {cart ? (
          <>
            <OptionsContainer>
              <OptionsSubtitle>
                Endereço de entrega{" "}
                <IconWrapper onClick={() => setIsVisibleAddressModal(true)}>
                  <PlusIcon />
                </IconWrapper>
              </OptionsSubtitle>
              {addresses && (
                <RadioOptions
                  control={control}
                  name="address"
                  options={addresses.map((address) => ({
                    label: `${address.street}, ${address.number}, ${address.district}`,
                    value: address.id,
                  }))}
                  labelStyle={styles.radioLabelStyle}
                />
              )}
              <OptionsSubtitle style={{ marginTop: "1.5rem" }}>
                Forma de pagamento{" "}
                <IconWrapper onClick={() => setIsVisibleCardModal(true)}>
                  <PlusIcon />
                </IconWrapper>
              </OptionsSubtitle>
              <Text style={{ marginBottom: ".5rem" }}>Cartão de crédito</Text>
              {cards && (
                <MultiSelect
                  name="cards"
                  control={control as unknown as Control}
                  options={cards.map((card) => ({
                    label: `${card.cardBrand} - Final ${card.number.slice(-4)}`,
                    value: card.id,
                  }))}
                  placeholder="Selecione um ou mais cartões"
                  noOptionsMessage={() => "Nenhum cartão encontrado"}
                  classNamePrefix="credit-cards"
                />
              )}
              {fields.map((field, index) => (
                <CardRow>
                  <Input
                    control={control}
                    name={`cardsValue.${index}.value`}
                    type="number"
                  />
                  <Text>{field.label}</Text>
                </CardRow>
              ))}
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
                <Text data-cy="value-subtotal">
                  {formatCurrency(cart.total)}
                </Text>
              </Row>
              <Row>
                <Text>Créditos</Text>
                <Text isDimmed>-{formatCurrency(user?.credits || 0)}</Text>
              </Row>
              {coupon && (
                <Row>
                  <Text>Cupom ({coupon.name})</Text>
                  <Text isDimmed>-{formatCurrency(coupon.value)}</Text>
                </Row>
              )}
              <Row>
                <Text>Frete</Text>
                <Text isDimmed>{formatCurrency(freight)}</Text>
              </Row>
              <Separator />
              <Row>
                <TotalText>Total</TotalText>
                <TotalText isBold>{formatCurrency(calculateTotal())}</TotalText>
              </Row>
              <Button
                style={styles.buttonStyle}
                onClick={handleSubmit(onSubmit)}
                disabled={!getValues("address") || !getValues("cards")}
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
        <ModalCreateUserAddress
          closeModal={() => setIsVisibleAddressModal(false)}
        />
      )}
      {isVisibleCardModal && (
        <ModalCreateUserCreditCard
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
