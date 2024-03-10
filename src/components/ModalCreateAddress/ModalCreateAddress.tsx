import { useForm } from "react-hook-form";
import Input from "../Input/Input";
import { Background, Button, Container, Row } from "./styles";
import Select from "../Select/Select";
import { CreateAddressSchema, CreateAddressForm } from "../../validations/createClient.validation";
import { yupResolver } from "@hookform/resolvers/yup";
import { addressTypesOptions, residenceTypeOptions, streetTypeOptions} from "../../data/createClientOptions";
import { FormType } from "../Clients/Clients";
import { useClient } from "../../hooks/useClient";
import { useEffect, useState } from "react";
import { listCitiesByStateId, listCountries, listStatesByCountryId } from "../../service/address";

interface DropdownOption {
  value: string;
  label: string;
}

interface Props {
  changeForm: (form: FormType) => void;
  closeModal: () => void;
}

const ModalCreateAddress = ({ changeForm, closeModal }: Props) => {
  const { createFormData, setCreateFormData } = useClient();
  const [countries, setCountries] = useState<DropdownOption[]>([]);
  const [states, setStates] = useState<DropdownOption[]>([]);
  const [cities, setCities] = useState<DropdownOption[]>([]);

  const { control, handleSubmit, watch } = useForm<CreateAddressForm>({
    resolver: yupResolver(CreateAddressSchema)
  });

  const country = watch('country');
  const state = watch('state');

  const onSubmit = (data: CreateAddressForm) => {
    const formattedAddress = {
      zipCode: data.zipCode,
      street: data.street,
      number: data.number,
      district: data.district,
      cityId: "48b1135e-2409-4664-806e-eea46270acbb", // mudar para data.city
      observation: data.observation,
      addressType: data.addressType,
      streetType: data.streetType,
      residenceType: data.residenceType,
      isMain: true
    }

    setCreateFormData({ ...createFormData, addresses: [formattedAddress]});
    changeForm('creditCard');
  }

  const getCountries = async () => {
    const allCountries = await listCountries();
    if (allCountries) {
      const formattedCountries = allCountries.map((country) => ({ value: country.id, label: country.name }));
      setCountries(formattedCountries);
    }
  }

  const getStates = async (countryId: string) => {
    const allStates = await listStatesByCountryId(countryId);
    if (allStates) {
      const formattedStates = allStates.map((state) => ({ value: state.id, label: state.name }));
      setStates(formattedStates);
    }
  }

  const getCities = async (stateId: string) => {
    const allCities = await listCitiesByStateId(stateId);
    if (allCities) {
      const formattedCities = allCities.map((city) => ({ value: city.id, label: city.name }));
      setCities(formattedCities);
    }
  }

  console.log(countries, states, cities);

  useEffect(() => {
    getCountries();
  }, []);

  useEffect(() => {
    if (country) {
      getStates(country);
    }
  }, [country]);

  useEffect(() => {
    if (state) {
      getCities(state);
    }
  }, [state]);

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
          <Select 
            control={control}
            name="country" 
            label='País'
            options={countries || []}
            containerStyle={styles.inputStyle}
          />              
          <Select 
            control={control}
            name="state" 
            label='Estado'
            options={states || []}
            containerStyle={styles.inputStyle}
          />           
        </Row>  
        <Row>
          <Select 
            control={control}
            name="city" 
            label='Cidade'
            options={cities || []}
            containerStyle={styles.inputStyle}
          />
          <Input 
            control={control} 
            name='street'  
            label='Rua' 
            placeholder='Rua Joaquim Afonso' 
            containerStyle={{ width: '30%' }}            
          />   
          <Input 
            control={control} 
            name='number' 
            label='Número' 
            placeholder='100' 
            containerStyle={{ width: '14%' }}
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
          <Button onClick={handleSubmit(onSubmit)}>Continuar</Button>
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