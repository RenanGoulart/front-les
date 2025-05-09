import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../Input/Input";
import { Background, Container, Row } from "./styles";
import Select from "../Select/Select";
import Button from "../Button/Button";
import {
  CreateCreditCardForm,
  CreateCreditCardSchema,
} from "../../validations/createClient.validation";
import { cardBrandOptions } from "../../data/createClientOptions";
import useUser from "../../hooks/useUser";
import { ICreditCardResponse } from "../../services/card/dto/CardDTO";
import { useEffect } from "react";

interface Props {
  closeModal: () => void;
  card?: ICreditCardResponse;
}

const ModalCreateUserCreditCard = ({ card, closeModal }: Props) => {
  const { user, handleCreateCard, handleUpdateCard } = useUser();

  const { control, handleSubmit, reset } = useForm<CreateCreditCardForm>({
    resolver: yupResolver(CreateCreditCardSchema),
  });

  const onSubmit = (data: CreateCreditCardForm) => {
    const formattedCard = {
      cardBrand: data.cardBrand,
      number: data.number,
      cvv: data.cvv,
      cardHolder: data.cardHolder,
      isMain: true,
      userId: user?.id as string
    };
    if(card){
      const uptadedCard = {
        ...formattedCard,
        id: card.id,
      }
      handleUpdateCard(uptadedCard);
      return closeModal();
    }
    handleCreateCard(formattedCard);
    closeModal();
  };

  useEffect(()=>{
    if(card){
      reset(card)
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
            Cadastrar
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

export default ModalCreateUserCreditCard;
