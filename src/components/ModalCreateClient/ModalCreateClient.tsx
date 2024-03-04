import { useForm } from "react-hook-form";
import Input from "../Input/Input";
import { Background, Container, GenderWrapper, Label, PhoneWrapper, Row } from "./styles";
import RadioInput from "../RadioInput/RadioInput";
import Select from "../Select/Select";

const ModalCreateClient = () => {
  const { control } = useForm();
  
  return (
    <Background>
      <Container>
        <h1>Informações do Cliente</h1>
        <Row >
          <Input 
            control={control} 
            name='name' 
            label='Nome' 
            placeholder='Maria Alice' 
            containerStyle={styles.inputStyle}
          />
          <GenderWrapper>
            <Label>Gênero</Label>
            <RadioInput 
              control={control}
              name="gender"
              value='MASCULINO'
              label='Masculino'
              checked
            />
            <RadioInput 
              control={control}
              name="gender"
              value='FEMININO'
              label='Feminino'
            />
            <RadioInput 
              control={control}
              name="gender"
              value='NAO_INFORMADO'
              label='Prefiro não informar'
            />
          </GenderWrapper>
        </Row>
        <Row>
          <Input control={control} 
            name='birthDate' 
            label='Data de 
            Nascimento' type="date"
            containerStyle={styles.inputStyle}
          />
          <Input control={control} 
            name='cpf' 
            label='CPF' 
            placeholder='100.200.300.40' 
            mask="999.999.999-99"
            containerStyle={styles.inputStyle}
          />
        </Row>
        <Row>
          <PhoneWrapper>
            <Input control={control} 
              name='ddd' 
              label='DDD' 
              placeholder='11' 
              mask="99"
              containerStyle={{ width: '18%' }}
              />
            <Input control={control} 
              name='phone' 
              label='Telefone' 
              placeholder='99999-9999' 
              mask="99999-9999"
              containerStyle={{ width: '80%' }}
            />
          </PhoneWrapper>
          <Select 
            control={control}
            name="phoneType" 
            label='Tipo de Telefone'
            options={[{ value: 'CELULAR', label: 'Celular' }, { value: 'RESIDENCIAL', label: 'Residencial' }]}  
            containerStyle={styles.inputStyle}
          />
        </Row>
        <Row>
          <Input control={control} 
            name='email' 
            label='E-mail' 
            placeholder='maria@gmail.com' 
            containerStyle={styles.inputStyle}
          />
          <Input control={control} 
            name='password' 
            label='Senha' 
            placeholder='********' 
            containerStyle={styles.inputStyle}
          />
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