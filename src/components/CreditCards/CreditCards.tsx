import { useEffect, useState } from 'react';
import { Container, TableRow, TableContainer, TableColumn, TableHeaderColumn, Row } from './styles';
import Button from '../Button/Button';
import ModalCreateClient from '../ModalCreateClient/ModalCreateClient';
import ModalCreateCreditCard from '../ModalCreateCreditCard/ModalCreateCreditCard';
import ModalCreateAddress from '../ModalCreateAddress/ModalCreateAddress';
import { ICreditCardResponse, listCreditCards } from '../../service/user';
import { useClient } from '../../hooks/useClient';
import { ClientPagesType } from '../../pages/Dashboard/Dashboard';


export type FormType = 'client' | 'address' | 'creditCard' | null;

interface Props {
  navigateTo: (page: ClientPagesType) => void;
}

const CreditCard = ({ navigateTo }: Props) => {
  const { currentUserId } = useClient();

  const [form, setForm] = useState<FormType>(null);
  const [cards, setCards] = useState([] as ICreditCardResponse[]);

  const handleChangeForm = (form: FormType) => {
    setForm(form);
  }

  const closeModal = () => {
    setForm(null);
  }

  const getUsers = async () => {
    const allUsers = await listCreditCards(currentUserId as string);
    if (allUsers) {
      setCards(allUsers);
    }
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <Container>
      <h4 onClick={() => navigateTo('clients')}>Voltar</h4>
      <Row>
        <h1>Cartões de Crédito</h1>
        <Button onClick={() => setForm('creditCard')}>Criar Cartão</Button>
      </Row>

      <TableContainer>
        <thead>
          <TableRow>
            <TableHeaderColumn>Titular do Cartão</TableHeaderColumn>
            <TableHeaderColumn>Bandeira do Cartão</TableHeaderColumn>
            <TableHeaderColumn>Número do Cartão</TableHeaderColumn>
            <TableHeaderColumn>CVV</TableHeaderColumn>
            <TableHeaderColumn>Preferencial</TableHeaderColumn>
            <TableHeaderColumn>Editar</TableHeaderColumn>
            <TableHeaderColumn>Excluir</TableHeaderColumn>
          </TableRow>
        </thead>
        <tbody>
          {cards.map((cards) => (
            <TableRow key={cards.id}>
              <TableColumn>{cards.cardHolder}</TableColumn>
              <TableColumn>{cards.cardBrand}</TableColumn>
              <TableColumn>{cards.number}</TableColumn>
              <TableColumn>{cards.cvv}</TableColumn>
              <TableColumn>{cards.isMain ? 'SIM' : 'NÃO'}</TableColumn>
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

export default CreditCard;

