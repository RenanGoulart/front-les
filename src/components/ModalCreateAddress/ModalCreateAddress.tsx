import { useForm } from "react-hook-form";
import Input from "../Input/Input";
import { Background, Button, Container, Row } from "./styles";
import Select from "../Select/Select";
import { CreateAddressSchema, CreateAddressForm } from "../../validations/createClient.validation";
import { yupResolver } from "@hookform/resolvers/yup";
import { addressTypesOptions, residenceTypeOptions, streetTypeOptions} from "../../data/createClientOptions";

const ModalCreateAddress = () => {
  const { control, handleSubmit } = useForm<CreateAddressForm>({
    resolver: yupResolver(CreateAddressSchema)
  });

  const onSubmit = (data: CreateAddressForm) => {
    console.log(data);
  }
  
  return (
    <Background>
      <Container>
        <h1>Informações de Endereço</h1>
        <Row>
          <Input 
            control={control} 
            name='zipCode'  
            label='CEP' 
            placeholder='99999-999'
            mask="99999-999"
            containerStyle={styles.inputStyle}
            />
        </Row>
        <Row>
          <Input 
            control={control} 
            name='street'  
            label='Rua' 
            placeholder='Rua Joaquim Afonso' 
            containerStyle={styles.inputStyle}            
          /> 
          <Input 
            control={control} 
            name='number' 
            label='Número' 
            placeholder='100' 
            containerStyle={{ width: '14%' }}
          />
          <Select 
            control={control}
            name="state" 
            label='Estado'
            options={[{ value: 'SP', label: 'São Paulo' }]}
            containerStyle={{ width: '30%' }}
          />           
        </Row>  
        <Row>
          <Input 
            control={control} 
            name='district' 
            label='Bairro' 
            placeholder='Bairro Bom Sucesso' 
            containerStyle={styles.inputStyle}
          />
          <Select 
            control={control}
            name="city" 
            label='Cidade'
            options={[{ value: 'Mogi', label: 'Mogi das Cruzes' }]}
            containerStyle={styles.inputStyle}
          />
        </Row>                
        <Row>     
          <Select 
            control={control}
            name="country" 
            label='País'
            options={[{ value: 'BR', label: 'Brasil' }]}
            containerStyle={styles.inputStyle}
          />    
          <Input 
            control={control} 
            name='observation' 
            label='Observação' 
            placeholder='100' 
            containerStyle={styles.inputStyle}
          />
        </Row>
        <Row>        
          <Select 
            control={control}
            name="addressType" 
            label='Tipo de Endereço'
            options={addressTypesOptions}  
            containerStyle={styles.inputStyle}
          />
          <Select 
            control={control}
            name="streetType" 
            label='Tipo de Logradouro'
            options={streetTypeOptions}  
            containerStyle={styles.inputStyle}
          />
         </Row>         
        <Row>          
          <Select 
            control={control}
            name="residenceType" 
            label='Tipo de Residência'
            options={residenceTypeOptions}  
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

export default ModalCreateAddress;