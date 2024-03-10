import { useEffect, useState } from 'react';
import ModalCreateClient from '../ModalCreateClient/ModalCreateClient';
import { Container, TableRow, TableContainer, TableColumn, TableHeaderColumn, Row } from './styles';
import Button from '../Button/Button';
import ModalCreateAddress from '../ModalCreateAddress/ModalCreateAddress';
import ModalCreateCreditCard from '../ModalCreateCreditCard/ModalCreateCreditCard';
import { IAddressResponse, listAddresses } from '../../service/user';
import { useClient } from '../../hooks/useClient';
import { ClientPagesType } from '../../pages/Dashboard/Dashboard';

export type FormType = 'client' | 'address' | 'creditCard' | null;

interface Props {
  navigateTo: (page: ClientPagesType) => void;
}

const Address = ({ navigateTo }: Props) => {
  const { currentUserId } = useClient();

  const [form, setForm] = useState<FormType>(null);
  const [addresses, setAddresses] = useState([] as IAddressResponse[]);

  const handleChangeForm = (form: FormType) => {
    setForm(form);
  }

  const closeModal = () => {
    setForm(null);
  }

  const getUsers = async () => {
    const allUsers = await listAddresses(currentUserId as string);
    if (allUsers) {
      setAddresses(allUsers);
    }
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <Container>
      <h4 onClick={() => navigateTo('clients')}>Voltar</h4>
      <Row>
        <h1>Endereços</h1>
        <Button onClick={() => setForm('address')}>Criar Endereço</Button>
      </Row>

      <TableContainer>
        <thead>
          <TableRow>
            <TableHeaderColumn>Rua</TableHeaderColumn>
            <TableHeaderColumn>Número</TableHeaderColumn>
            <TableHeaderColumn>Bairro</TableHeaderColumn>
            <TableHeaderColumn>CEP</TableHeaderColumn>
            <TableHeaderColumn>Cidade</TableHeaderColumn>
            <TableHeaderColumn>Estado</TableHeaderColumn>
            <TableHeaderColumn>País</TableHeaderColumn>
            <TableHeaderColumn>Tipo de Endereço</TableHeaderColumn>
            <TableHeaderColumn>Tipo de Logradouro</TableHeaderColumn>
            <TableHeaderColumn>Tipo de Residência</TableHeaderColumn>
            <TableHeaderColumn>Preferencial</TableHeaderColumn>
            <TableHeaderColumn>Editar</TableHeaderColumn>
            <TableHeaderColumn>Excluir</TableHeaderColumn>
          </TableRow>
        </thead>
        <tbody>
          {addresses.map((address) => (
            <TableRow key={address.id}>
              <TableColumn>{address.street}</TableColumn>
              <TableColumn>{address.number}</TableColumn>
              <TableColumn>{address.district}</TableColumn>
              <TableColumn>{address.zipCode}</TableColumn>
              <TableColumn>{address.cityId}</TableColumn>
              <TableColumn>ESTADO</TableColumn>
              <TableColumn>PAÍS</TableColumn>
              <TableColumn>{address.addressType}</TableColumn>
              <TableColumn>{address.streetType}</TableColumn>
              <TableColumn>{address.residenceType}</TableColumn>
              <TableColumn>{address.isMain ? 'SIM' : 'NÃO'}</TableColumn>
              <TableColumn>
                <button>Editar</button>  
              </TableColumn>
              <TableColumn>
                <button>Excluir</button>  
              </TableColumn>
            </TableRow>
          ))}
        </tbody>
      </TableContainer>
      

      {form === 'client' && <ModalCreateClient changeForm={handleChangeForm} closeModal={closeModal} />}
      {form === 'address' && <ModalCreateAddress changeForm={handleChangeForm} closeModal={closeModal} />}
      {form === 'creditCard' && <ModalCreateCreditCard  changeForm={handleChangeForm} closeModal={closeModal} />}
    </Container>
  )
}

export default Address;

