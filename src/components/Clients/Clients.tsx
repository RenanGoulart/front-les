import { useEffect, useState } from 'react';
import ModalCreateClient from '../ModalCreateClient/ModalCreateClient';
import { Container, TableRow, TableContainer, TableColumn, TableHeaderColumn, Row } from './styles';
import Button from '../Button/Button';
import ModalCreateAddress from '../ModalCreateAddress/ModalCreateAddress';
import ModalCreateCreditCard from '../ModalCreateCreditCard/ModalCreateCreditCard';
import { IUserResponse, listUsers } from '../../service/user';
import { format } from 'date-fns';
import { ClientPagesType } from '../../pages/Dashboard/Dashboard';

export type FormType = 'client' | 'address' | 'creditCard' | null;

interface Props {
  navigateTo: (page: ClientPagesType) => void;
}

const Clients = ({ navigateTo }: Props) => {
  const [form, setForm] = useState<FormType>(null);
  const [clients, setClients] = useState([] as IUserResponse[]);

  const handleChangeForm = (form: FormType) => {
    setForm(form);
  }

  const closeModal = () => {
    setForm(null);
  }

  const getUsers = async () => {
    const allUsers = await listUsers();
    if (allUsers) {
      setClients(allUsers);
    }
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <Container>
      <Row>
        <h1>Clientes</h1>
        <Button onClick={() => setForm('client')}>Criar Cliente</Button>
      </Row>

      <TableContainer>
        <thead>
          <TableRow>
            <TableHeaderColumn>Nome</TableHeaderColumn>
            <TableHeaderColumn>CPF</TableHeaderColumn>
            <TableHeaderColumn>E-mail</TableHeaderColumn>
            <TableHeaderColumn>Gênero</TableHeaderColumn>
            <TableHeaderColumn>Data de Nascimento</TableHeaderColumn>
            <TableHeaderColumn>Telefone</TableHeaderColumn>
            <TableHeaderColumn>Status</TableHeaderColumn>
            <TableHeaderColumn>Cartões</TableHeaderColumn>
            <TableHeaderColumn>Endereços</TableHeaderColumn>
            <TableHeaderColumn>Editar</TableHeaderColumn>
            <TableHeaderColumn>Excluir</TableHeaderColumn>
          </TableRow>
        </thead>
        <tbody>
          {clients.map((client) => (
            <TableRow key={client.id}>
              <TableColumn>{client.name}</TableColumn>
              <TableColumn>{client.cpf}</TableColumn>
              <TableColumn>{client.email}</TableColumn>
              <TableColumn>{client.gender}</TableColumn>
              <TableColumn>{format(client.birthDate, 'dd/MM/yyyy')}</TableColumn>
              <TableColumn>{`(${client.ddd}) ${client.phone}`}</TableColumn>
              <TableColumn>{client.status}</TableColumn>
              <TableColumn>
                <button onClick={() => navigateTo('creditCards')}>Ver cartões</button>  
              </TableColumn>
              <TableColumn>
                <button onClick={() => navigateTo('addresses')}>Ver endereços</button>  
              </TableColumn>
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

export default Clients;

