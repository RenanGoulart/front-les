import { useForm } from "react-hook-form";
import Input from "../Input/Input";
import { Background, Button, Container, Row } from "./styles";
import Select from "../Select/Select";
import { CreateAddressSchema, CreateAddressForm } from "../../validations/createClient.validation";
import { yupResolver } from "@hookform/resolvers/yup";
import { addressTypesOptions, residenceTypeOptions, streetTypeOptions} from "../../data/createClientOptions";
import { useEffect } from "react";

interface Props {
  closeModal: () => void;
}

const ModalCreateAddress = ({ closeModal }: Props) => {
  const { control, handleSubmit, watch, setValue } = useForm<CreateAddressForm>({
    resolver: yupResolver(CreateAddressSchema)
  });
  const zipCode = watch('zipCode');

  const onSubmit = (data: CreateAddressForm) => {
    console.log(data);
  }

  const handleZipCodeBlur = async () => {
    try {
      const response = await fetch(`https://viacep.com.br/ws/${zipCode.replace(/\D/g, '')}/json/`, {
        method: "GET",
        mode: "cors",
        headers: {
            'content-type': 'application/json;charset=utf-8',
        }
    });
      const data = await response.json();
      setValue('street', data.logradouro);
      setValue('state', data.uf);
      setValue('district', data.bairro);
      setValue('city', data.localidade);
      setValue('country', 'Brasil');
      console.log(data);
    } catch (error: unknown) {
      console.log(error);
    }
  }
  
  useEffect(() => {
    if(zipCode?.length === 9) {
      console.log('fetch')
      handleZipCodeBlur();
    }
  }, [zipCode]);

  return (
    <Background onClick={closeModal}>
      <Container onClick={e => e.stopPropagation()}>
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