import { useForm } from "react-hook-form";
import Input from "../Input/Input";
import { Background, Button, Container, Row } from "./styles";
import Select from "../Select/Select";
import { CreateCreditCardForm, CreateCreditCardSchema } from "../../validations/createClient.validation";
import { yupResolver } from "@hookform/resolvers/yup";
import { cardBrandOptions } from "../../data/createClientOptions";

interface Props {
  closeModal: () => void;
}

const ModalCreateCreditCard = ({ closeModal }: Props) => {
  const { control, handleSubmit } = useForm<CreateCreditCardForm>({
    resolver: yupResolver(CreateCreditCardSchema)
  });

  const onSubmit = (data: CreateCreditCardForm) => {
    console.log(data);
  }
  
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
          <Button onClick={handleSubmit(onSubmit)}>Cadastrar</Button>          
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