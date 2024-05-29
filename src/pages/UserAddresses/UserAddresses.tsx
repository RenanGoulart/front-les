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
import Button from "../../components/Button/Button";
import useUser from "../../hooks/useUser";
import { IAddressResponse } from "../../services/address/dto/AddressDTO";
import ModalCreateUserAddress from "../../components/ModalCreateUserAddress/ModalCreateUserAddress";

const UserAddresses = () => {
  const [ isAddressModalVisible, setIsAddressModalVisible] = useState(false);
  const [ address, setAddress ] = useState<IAddressResponse | null>(null);
  const { addresses, handleDeleteAddress } = useUser();

  return (
    <Container>
      <Header />
      <NavBar />
      <Content>
        <Title>Meus Endereços</Title>
        <Button
          onClick={() => {
          setIsAddressModalVisible(true);
        }}
          data-cy="btn-add-user-address"
        >
          Adicionar Endereço
        </Button>
        <TableContainer>
          <TableRow isHeader>
            <TableCell>CEP</TableCell>
            <TableCell>Rua</TableCell>
            <TableCell>Nº</TableCell>
            <TableCell>Estado</TableCell>
            <TableCell>País</TableCell>
            <TableCell>Tipo de Endereço</TableCell>
            <TableCell>Tipo de Logradouro</TableCell>
            <TableCell>Tipo de Residência</TableCell>
            <TableCell>Preferencial</TableCell>
            <TableCell />
            <TableCell />
          </TableRow>
          {addresses && addresses.map((address) => (
            <TableRow key={address.id}>
              <TableCell> {`${address.zipCode.substring(0, 5)}...`}</TableCell>
              <TableCell>{address.street}</TableCell>
              <TableCell>{address.number}</TableCell>
              <TableCell>{address.city.state.name}</TableCell>
              <TableCell>{address.city.state.country.name}</TableCell>
              <TableCell>{address.addressType}</TableCell>
              <TableCell>{address.streetType}</TableCell>
              <TableCell>{address.residenceType}</TableCell>
              <TableCell>
                {" "}
                {address.isMain ? <StyledCheckIcon /> : null}
              </TableCell>
              <TableCell style={{ justifyContent: "flex-end" }}>
                {" "}
                <StyledEditIcon
                  onClick={() => {
                    setAddress(address);
                  }}
                />
              </TableCell>
              <TableCell>
                <StyledDeleteIcon
                  onClick={() => handleDeleteAddress(address.id)}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableContainer>
      </Content>
      {(address || isAddressModalVisible) && (
        <ModalCreateUserAddress
        closeModal={() =>  {
          setIsAddressModalVisible(false);
          setAddress(null)
        }}
          address={address as IAddressResponse}
        />
      )}
    </Container>
  );
};

export default UserAddresses;
