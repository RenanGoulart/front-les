import { useEffect, useState } from 'react';
import { Container, TableRow, TableContainer, TableColumn, TableHeaderColumn, Row } from './styles';
import Button from '../Button/Button';
import ModalCreateCreditCard from '../ModalCreateCreditCard/ModalCreateCreditCard';
import { ICreditCardResponse, deleteCreditCard, listCreditCards } from '../../service/user';
import { useClient } from '../../hooks/useClient';
import { ClientPagesType } from '../../pages/Dashboard/Dashboard';


export type FormType = 'client' | 'address' | 'creditCard' | null;

interface Props {
  navigateTo: (page: ClientPagesType) => void;
}

const CreditCard = ({ navigateTo }: Props) => {
  const { currentUserId, setCurrentCreditCardId } = useClient();

  const [form, setForm] = useState<FormType>(null);
  const [cards, setCards] = useState([] as ICreditCardResponse[]);

  const closeModal = () => {
    setForm(null);
  }

  const getCreditCards = async () => {
    const allCreditCards = await listCreditCards(currentUserId as string);
    if (allCreditCards) {
      setCards(allCreditCards);
    }
  }

  const handleDeleteCreditCard = async (creditCardId: string) => {
    await deleteCreditCard(creditCardId);
    getCreditCards();
  }

  useEffect(() => {
    getCreditCards();
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
          {cards.map((card) => (
            <TableRow key={card.id}>
              <TableColumn>{card.cardHolder}</TableColumn>
              <TableColumn>{card.cardBrand}</TableColumn>
              <TableColumn>{card.number}</TableColumn>
              <TableColumn>{card.cvv}</TableColumn>
              <TableColumn>{card.isMain ? 'SIM' : 'NÃO'}</TableColumn>
              <TableColumn>
                <button onClick={() => {
                    setCurrentCreditCardId(card.id);
                    setForm('creditCard');
                  }}
                >
                  Editar
                </button>  
              </TableColumn>
              <TableColumn onClick={() => handleDeleteCreditCard(card.id)}>
                <button>Excluir</button>  
              </TableColumn>
            </TableRow>
          ))}
        </tbody>
      </TableContainer>      

      {form === 'creditCard' && <ModalCreateCreditCard closeModal={closeModal} refetch={getCreditCards} />}
    </Container>
  )
}

export default CreditCard;

