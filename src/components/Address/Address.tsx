import { useEffect, useState } from 'react';
import { Container, TableRow, TableContainer, TableColumn, TableHeaderColumn, Row, StyledEditIcon, StyledDeleteIcon, StyledCheckIcon} from './styles';
import Button from '../Button/Button';
import ModalCreateAddress from '../ModalCreateAddress/ModalCreateAddress';
import { IAddress, deleteAddress, listAddresses } from '../../service/user';
import { useClient } from '../../hooks/useClient';
import { ClientPagesType } from '../../pages/Dashboard/Dashboard';

export type FormType = 'client' | 'address' | 'address2' | 'creditCard' | null;

interface Props {
  navigateTo: (page: ClientPagesType) => void;
}

const Address = ({ navigateTo }: Props) => {
  const { currentUserId, setCurrentAddressId } = useClient();

  const [form, setForm] = useState<FormType>(null);
  const [addresses, setAddresses] = useState([] as IAddress[]);

  const handleChangeForm = (form: FormType) => {
    setForm(form);
  }

  const closeModal = () => {
    setForm(null);
  }

  const getAddresses = async () => {
    const allAddresses = await listAddresses(currentUserId as string);
    if (allAddresses) {
      setAddresses(allAddresses);
    }
  }

  const handleDeleteAddress = async (addressId: string) => {
    await deleteAddress(addressId);
    getAddresses();
  }

  useEffect(() => {
    getAddresses();
  }, []);

  return (
    <Container>
      <h4 onClick={() => navigateTo('clients')}>Voltar</h4>
      <Row>
        <h1>Endereços</h1>
        <Button onClick={() => {
            setCurrentAddressId('');
            setForm('address');
          }}
        >
          Criar Endereço
        </Button>
      </Row>

      <TableContainer>
        <thead>
          <TableRow>
            <TableHeaderColumn>CEP</TableHeaderColumn>
            <TableHeaderColumn>Rua</TableHeaderColumn>
            <TableHeaderColumn>Nº</TableHeaderColumn>
            <TableHeaderColumn>Bairro</TableHeaderColumn>            
            <TableHeaderColumn>Cidade</TableHeaderColumn>
            <TableHeaderColumn>Estado</TableHeaderColumn>
            <TableHeaderColumn>País</TableHeaderColumn>
            <TableHeaderColumn>Tipo de Endereço</TableHeaderColumn>
            <TableHeaderColumn>Tipo de Logradouro</TableHeaderColumn>
            <TableHeaderColumn>Tipo de Residência</TableHeaderColumn>
            <TableHeaderColumn>Preferencial</TableHeaderColumn>
            <TableHeaderColumn></TableHeaderColumn>
            <TableHeaderColumn></TableHeaderColumn>
          </TableRow>
        </thead>
        <tbody>
          {addresses.map((address) => (
            <TableRow key={address.id}>
              <TableColumn>{address.zipCode.substring(0, 5) + '...'}</TableColumn>
              <TableColumn>{address.street}</TableColumn>
              <TableColumn>{address.number}</TableColumn>
              <TableColumn>{address.district}</TableColumn>              
              <TableColumn>{address.city.name}</TableColumn>
              <TableColumn>{address.state.name}</TableColumn>
              <TableColumn>{address.country.name}</TableColumn>
              <TableColumn>{address.addressType}</TableColumn>
              <TableColumn>{address.streetType}</TableColumn>
              <TableColumn>{address.residenceType}</TableColumn>
              <TableColumn>{address.isMain ? <StyledCheckIcon /> : address.isMain ? 'SIM' : ''}</TableColumn>
              <TableColumn>
                <StyledEditIcon onClick={() => {
                    setCurrentAddressId(address.id);
                    setForm('address');
                  }}
                /> 
              </TableColumn>
              <TableColumn>
                <StyledDeleteIcon onClick={() => handleDeleteAddress(address.id)}/>
              </TableColumn>
            </TableRow>
          ))}
        </tbody>
      </TableContainer>
      
      {form === 'address' && <ModalCreateAddress changeForm={handleChangeForm} closeModal={closeModal} />}
    </Container>
  )
}

export default Address;

