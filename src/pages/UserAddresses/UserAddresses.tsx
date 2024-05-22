import { useState } from "react";
import {
  Container,
  TableContainer,
  TableRow,
  Content,
  TableCell,
  Title,
  StyledCheckIcon,
  StyledEditIcon,
  StyledDeleteIcon,
} from "./styles";
import Header from "../../components/Header/Header";
import NavBar from "../../components/NavBar/NavBar";
import ModalCreateAddress from "../../components/ModalCreateAddress/ModalCreateAddress";
import Button from "../../components/Button/Button";

const UserAddresses = () => {
  const [isAddressModalVisible, setIsAddressModalVisible] = useState(false);

  return (
    <Container>
      <Header />
      <NavBar />
      <Content>
        <Title>Meus Endereços</Title>
        <Button
          onClick={() => {setIsAddressModalVisible(true)}}
          data-cy="btn-add-user-address"
        >
          Adicionar Endereço
        </Button>
        <TableContainer>
          <TableRow isHeader>
            <TableCell>CEP</TableCell>
            <TableCell>Rua</TableCell>
            <TableCell>Nº</TableCell>
            <TableCell>Bairro</TableCell>
            <TableCell>Cidade</TableCell>
            <TableCell>Estado</TableCell>
            <TableCell>País</TableCell>
            <TableCell>Tipo de Endereço</TableCell>
            <TableCell>Tipo de Logradouro</TableCell>
            <TableCell>Tipo de Residência</TableCell>
            <TableCell>Preferencial</TableCell>
            <TableCell />
            <TableCell />
          </TableRow>
          <TableRow>
            <TableCell>12948-180</TableCell>
            <TableCell>Rua do Portão</TableCell>
            <TableCell>100</TableCell>
            <TableCell>Estância Santa Maria do Portão</TableCell>
            <TableCell>Atibaia</TableCell>
            <TableCell>São Paulo</TableCell>
            <TableCell>Brasil</TableCell>
            <TableCell>Entrega</TableCell>
            <TableCell>Rua</TableCell>
            <TableCell>Casa</TableCell>
            <TableCell>
              <StyledCheckIcon />
            </TableCell>
            <TableCell>
              <StyledEditIcon
                onClick={() => setIsAddressModalVisible(true)}
                data-cy="btn-edit-user-address"
              />
            </TableCell>
            <TableCell>
              <StyledDeleteIcon
                onClick={() => null}
                data-cy="btn-delete-user-address"
              />
            </TableCell>
          </TableRow>
        </TableContainer>
      </Content>
      {isAddressModalVisible && (
        <ModalCreateAddress
          closeModal={() => setIsAddressModalVisible(false)}
        />
      )}
    </Container>
  );
};

export default UserAddresses;
