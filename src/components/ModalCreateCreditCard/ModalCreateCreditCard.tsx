import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import Input from "../Input/Input";
import { Background, Container, Row } from "./styles";
import Select from "../Select/Select";
import Button from "../Button/Button";
import {
  CreateCreditCardForm,
  CreateCreditCardSchema,
} from "../../validations/createClient.validation";
import { cardBrandOptions } from "../../data/createClientOptions";
import { useClient } from "../../hooks/useClient";
import {
  ICreditCardResponse,
  findCreditCardById,
  updateCreditCard,
} from "../../services/creditCard";

interface Props {
  closeModal: () => void;
}

const ModalCreateCreditCard = ({ closeModal }: Props) => {
  const { createClient, currentCreditCardId, createCreditCard, currentUserId } =
    useClient();
  const [cardInfo, setCardInfo] = useState<ICreditCardResponse | null>(null);

  const { control, handleSubmit, setValue } = useForm<CreateCreditCardForm>({
    resolver: yupResolver(CreateCreditCardSchema),
  });

  const onSubmit = (data: CreateCreditCardForm) => {
    if (currentCreditCardId) {
      updateCreditCard({ ...cardInfo, ...data });
      return closeModal();
    }

    if (currentUserId) {
      createCreditCard({ ...data, userId: currentUserId, isMain: false });
      return closeModal();
    }
    createClient(data);
    closeModal();
  };

  const setCreditCardFields = async (cardInfoData: ICreditCardResponse) => {
    setCardInfo(cardInfoData);
    setValue("cardBrand", cardInfoData.cardBrand);
    setValue("number", cardInfoData.number);
    setValue("cvv", cardInfoData.cvv);
    setValue("cardHolder", cardInfoData.cardHolder);
  };

  const getCreditCardInfo = async (creditCardId: string) => {
    const creditCardInfo = await findCreditCardById(creditCardId);
    if (creditCardInfo) {
      return setCreditCardFields(creditCardInfo);
    }
  };

  useEffect(() => {
    if (currentCreditCardId) {
      getCreditCardInfo(currentCreditCardId);
    }
  }, []);

  return (
    <Background onClick={closeModal}>
      <Container onClick={(e) => e.stopPropagation()}>
        <h1>Informações do Cartão de Crédito</h1>
        <Row>
          <Select
            control={control}
            name="cardBrand"
            label="Bandeira do cartão"
            options={cardBrandOptions}
            containerStyle={{ width: "100%" }}
          />
        </Row>
        <Row>
          <Input
            control={control}
            name="number"
            label="Número do cartão"
            placeholder="9999 9999 9999 9999"
            mask="9999 9999 9999 9999"
            containerStyle={styles.elementStyle}
          />
          <Input
            control={control}
            name="cvv"
            label="CVV"
            placeholder="999"
            mask="999"
            containerStyle={{ width: "48%" }}
          />
        </Row>
        <Row>
          <Input
            control={control}
            name="cardHolder"
            label="Nome do Titular"
            placeholder="Renan Goulart"
            containerStyle={styles.elementStyle}
          />
          <Button
            style={styles.elementStyle}
            onClick={handleSubmit(onSubmit)}
            data-cy="btn-submit"
          >
            {currentCreditCardId ? "Atualizar" : "Cadastrar"}
          </Button>
        </Row>
      </Container>
    </Background>
  );
};

const styles = {
  elementStyle: {
    width: "48%",
  },
};

export default ModalCreateCreditCard;
