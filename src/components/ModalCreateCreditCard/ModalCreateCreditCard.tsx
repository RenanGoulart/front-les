import { useForm } from "react-hook-form";
import Input from "../Input/Input";
import { Background, Button, Container, Row } from "./styles";
import Select from "../Select/Select";
import { CreateCreditCardForm, CreateCreditCardSchema } from "../../validations/createClient.validation";
import { yupResolver } from "@hookform/resolvers/yup";
import { cardBrandOptions } from "../../data/createClientOptions";
import { useClient } from "../../hooks/useClient";
import { ICreditCardResponse, findCreditCardById, updateCreditCard } from "../../service/creditCard";
import { useEffect, useState } from "react";

interface Props {
  closeModal: () => void;
  refetch: () => void;
}

const ModalCreateCreditCard = ({ closeModal, refetch }: Props) => {
  const { createClient, currentCreditCardId } = useClient();
  const [cardInfo , setCardInfo] = useState<ICreditCardResponse | null>(null);

  const { control, handleSubmit, setValue } = useForm<CreateCreditCardForm>({
    resolver: yupResolver(CreateCreditCardSchema),
  });

  const onSubmit = (data: CreateCreditCardForm) => {
    if (currentCreditCardId) {
      updateCreditCard({ ...cardInfo, ...data });
      refetch();
      return closeModal();
    }
    createClient(data);
    closeModal();
  }

  const setCreditCardFields = async (cardInfo: ICreditCardResponse) => {
    setCardInfo(cardInfo);
    setValue('cardBrand', cardInfo.cardBrand);
    setValue('number', cardInfo.number);
    setValue('cvv', cardInfo.cvv);
    setValue('cardHolder', cardInfo.cardHolder);
  }

  const getCreditCardInfo = async (creditCardId: string) => {
    const creditCardInfo = await findCreditCardById(creditCardId);
    if (creditCardInfo) {
      return setCreditCardFields(creditCardInfo);
    }
  }
  
  useEffect(() => {
    if (currentCreditCardId) {
      getCreditCardInfo(currentCreditCardId);
    }
  }, []);
  
  return (
    <Background onClick={closeModal}>
      <Container onClick={e => e.stopPropagation()}>
        <h1>Informações do Cartão de Crédito</h1>
        <Row>
          <Select 
            control={control}
            name="cardBrand" 
            label='Bandeira do cartão'
            options={cardBrandOptions}  
            containerStyle={{ width: '100%' }}
          />          
        </Row>
        <Row>
          <Input 
            control={control} 
            name='number'
            label='Número do cartão' 
            placeholder='9999 9999 9999 9999' 
            mask="9999 9999 9999 9999"
            containerStyle={styles.inputStyle}
          />
          <Input 
            control={control} 
            name='cvv'
            label='CVV' 
            placeholder='999' 
            mask="999"            
            containerStyle={{ width: '48%' }}
          />
        </Row>
        <Row>          
          <Input 
            control={control} 
            name='cardHolder' 
            label='Nome do Titular' 
            placeholder='Renan Goulart' 
            containerStyle={styles.inputStyle}
          /> 
          <Button onClick={handleSubmit(onSubmit)}>{currentCreditCardId ? 'Atualizar' : 'Cadastrar'}</Button>          
        </Row>
      </Container>
    </Background>
  );
};

const styles = {
  inputStyle: {
    width: '48%',
  }
}

export default ModalCreateCreditCard;