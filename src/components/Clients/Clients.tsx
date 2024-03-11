import { useEffect, useState } from 'react';
import ModalCreateClient from '../ModalCreateClient/ModalCreateClient';
import { Container, TableRow, TableContainer, TableColumn, TableHeaderColumn, Row, StyledCreditCardIcon, StyledAddressIcon, StyledEditIcon, StyledDeleteIcon} from './styles';
import Button from '../Button/Button';
import ModalCreateAddress from '../ModalCreateAddress/ModalCreateAddress';
import ModalCreateCreditCard from '../ModalCreateCreditCard/ModalCreateCreditCard';
import { IUserResponse, deleteUser, listUsers } from '../../service/user';
import { format } from 'date-fns';
import { ClientPagesType } from '../../pages/Dashboard/Dashboard';
import { useClient } from '../../hooks/useClient';

export type FormType = 'client' | 'address' | 'address2' | 'creditCard' | null;

interface Props {
  navigateTo: (page: ClientPagesType) => void;
}

const Clients = ({ navigateTo }: Props) => {
  const { setCurrentUserId } = useClient();

  const [form, setForm] = useState<FormType>(null);
  const [clients, setClients] = useState([] as IUserResponse[]);

  const handleChangeForm = (form: FormType) => {
    setForm(form);
  }

  const closeModal = () => {
    setForm(null);
  }

  const navigateToList = (userId: string, page: ClientPagesType) => {
    setCurrentUserId(userId);
    navigateTo(page);
  }

  const getUsers = async () => {
    const allUsers = await listUsers();
    if (allUsers) {
      setClients(allUsers);
    }
  }

  const handleDeleteClient = async (clientId: string) => {
    await deleteUser(clientId);
    getUsers();
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <Container>
      <Row>
        <h1>Clientes</h1>
        <Button onClick={() => {
            setCurrentUserId('');
            setForm('client');
          }}
        >
          Criar Cliente
        </Button>
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
            <TableHeaderColumn></TableHeaderColumn>
            <TableHeaderColumn></TableHeaderColumn>
          </TableRow>
        </thead>
        <tbody>
          {clients.map((client) => (
            <TableRow key={client.id}>
              <TableColumn>{client.name}</TableColumn>
              <TableColumn>{client.cpf}</TableColumn>
              <TableColumn>{client.email}</TableColumn>
              <TableColumn>{client.gender === 'FEMININO' ? 'FEM' : client.gender === 'MASCULINO' ? 'MAS' : 'N/I'}
              </TableColumn>
              <TableColumn>{format(client.birthDate, 'dd/MM/yyyy')}</TableColumn>
              <TableColumn>{`(${client.ddd}) ${client.phone}`}</TableColumn>
              <TableColumn style={{ color: client.status === 'ATIVO' ? 'green' : 'red', fontWeight: 'bold' }}>
                {client.status}
              </TableColumn>
              <TableColumn>
                <StyledCreditCardIcon onClick={() => navigateToList(client.id, 'creditCards')}></StyledCreditCardIcon>
              </TableColumn>
              <TableColumn>
                <StyledAddressIcon onClick={() => navigateToList(client.id, 'addresses')}></StyledAddressIcon>
              </TableColumn>
              <TableColumn>
                  <StyledEditIcon onClick={() => {
                    setCurrentUserId(client.id);
                    setForm('client');
                  }}
                  />
              </TableColumn>
              <TableColumn>
                  <StyledDeleteIcon onClick={() => handleDeleteClient(client.id)}/>
              </TableColumn>
            </TableRow>
          ))}
        </tbody>
      </TableContainer>
      

      {form === 'client' && <ModalCreateClient changeForm={handleChangeForm} closeModal={closeModal} />}
      {form === 'address' && <ModalCreateAddress formName='address' changeForm={handleChangeForm} closeModal={closeModal} />}
      {form === 'address2' && <ModalCreateAddress formName='address2' changeForm={handleChangeForm} closeModal={closeModal} />}
      {form === 'creditCard' && <ModalCreateCreditCard closeModal={closeModal} />}
    </Container>
  )
}

export default Clients;

