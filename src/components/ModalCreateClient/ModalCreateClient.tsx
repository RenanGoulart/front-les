import { useForm } from "react-hook-form";
import Input from "../Input/Input";
import { Background, Button, Container, GenderWrapper, Label, PhoneWrapper, Row } from "./styles";
import Select from "../Select/Select";
import { CreateClientForm, CreateClientSchema } from "../../validations/createClient.validation";
import { yupResolver } from "@hookform/resolvers/yup";
import RadioOptions from "../RadioOptions/RadioOptions";
import { genderOptions, phoneTypeOptions } from "../../data/createClientOptions";

const ModalCreateClient = () => {
  const { control, handleSubmit } = useForm<CreateClientForm>({
    resolver: yupResolver(CreateClientSchema)
  });

  const onSubmit = (data: CreateClientForm) => {
    console.log(data);
  }
  
  return (
    <Background>
      <Container>
        <h1>Informações do Cliente</h1>
        <Row>
          <Input 
            control={control} 
            name='name' 
            label='Nome' 
            placeholder='Maria Alice' 
            containerStyle={styles.inputStyle}
          />
          <GenderWrapper>
            <Label>Gênero</Label>
            <RadioOptions 
              control={control}
              name='gender'
              options={genderOptions}
            />
          </GenderWrapper>
        </Row>
        <Row>
          <Input 
            control={control} 
            name='birth_date' 
            label='Data de Nascimento' 
            type="date"
            containerStyle={styles.inputStyle}
          />
          <Input 
            control={control} 
            name='cpf' 
            label='CPF' 
            placeholder='100.200.300.40' 
            mask="999.999.999-99"
            containerStyle={styles.inputStyle}
          />
        </Row>
        <Row>
          <PhoneWrapper>
            <Input 
              control={control} 
              name='ddd' 
              label='DDD' 
              placeholder='11' 
              mask="99"
              containerStyle={{ width: '18%' }}
              />
            <Input 
              control={control} 
              name='phone' 
              label='Telefone' 
              placeholder='99999-9999' 
              mask="99999-9999"
              containerStyle={{ width: '80%' }}
            />
          </PhoneWrapper>
          <Select 
            control={control}
            name="phone_type" 
            label='Tipo de Telefone'
            options={phoneTypeOptions}  
            containerStyle={styles.inputStyle}
          />
        </Row>
        <Row>
          <Input 
            control={control} 
            name='email' 
            label='E-mail' 
            placeholder='maria@gmail.com' 
            containerStyle={styles.inputStyle}
          />
          <Input 
            control={control} 
            name='password' 
            label='Senha' 
            placeholder='********' 
            containerStyle={styles.inputStyle}
            type="password"
          />
        </Row>
        <Row>
          <Input
            control={control} 
            name='confirm_password' 
            label='Confirmar Senha' 
            placeholder='********' 
            containerStyle={styles.inputStyle}
            type="password"
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

export default ModalCreateClient;