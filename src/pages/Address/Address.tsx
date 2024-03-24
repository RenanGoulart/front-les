import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  TableRow,
  TableContainer,
  StyledEditIcon,
  StyledDeleteIcon,
  StyledCheckIcon,
  TableCell,
  Title,
  Content,
  TableHeader,
} from "./styles";
import Button from "../../components/Button/Button";
import ModalCreateAddress from "../../components/ModalCreateAddress/ModalCreateAddress";
import { IAddress, deleteAddress, listAddresses } from "../../services/user";
import { useClient } from "../../hooks/useClient";
import SideBar from "../../components/SideBar/SideBar";

export type FormType = "client" | "address" | "address2" | "creditCard" | null;

const Address = () => {
  const navigate = useNavigate();

  const { currentUserId, setCurrentAddressId } = useClient();

  const [form, setForm] = useState<FormType>(null);
  const [addresses, setAddresses] = useState([] as IAddress[]);

  const handleChangeForm = (formName: FormType) => {
    setForm(formName);
  };

  const closeModal = () => {
    setForm(null);
  };

  const getAddresses = async () => {
    const allAddresses = await listAddresses(currentUserId as string);
    if (allAddresses) {
      setAddresses(allAddresses);
    }
  };

  const handleDeleteAddress = async (addressId: string) => {
    await deleteAddress(addressId);
    getAddresses();
  };

  useEffect(() => {
    getAddresses();
  }, []);

  return (
    <Container>
      <SideBar />
      <Content>
        <button type="button" onClick={() => navigate("/client")}>
          Voltar
        </button>
        <TableHeader>
          <Title>Endereços</Title>
          <Button
            onClick={() => {
              setCurrentAddressId("");
              setForm("address");
            }}
          >
            Adicionar Endereço
          </Button>
        </TableHeader>
        <TableContainer>
          <TableRow isHeader>
            <TableCell>CEP</TableCell>
            <TableCell>Rua</TableCell>
            <TableCell>Nº</TableCell>
            {/* <TableCell>Bairro</TableCell> */}
            {/* <TableCell>Cidade</TableCell> */}
            <TableCell>Estado</TableCell>
            <TableCell>País</TableCell>
            <TableCell>Tipo de Endereço</TableCell>
            <TableCell>Tipo de Logradouro</TableCell>
            <TableCell>Tipo de Residência</TableCell>
            <TableCell>Preferencial</TableCell>
            <TableCell />
            <TableCell />
          </TableRow>
          {addresses.map((address) => (
            <TableRow key={address.id}>
              <TableCell> {`${address.zipCode.substring(0, 5)}...`}</TableCell>
              <TableCell>{address.street}</TableCell>
              <TableCell>{address.number}</TableCell>
              {/* <TableCell>{address.district}</TableCell> */}
              {/* <TableCell>{address.city.name}</TableCell> */}
              <TableCell>{address.state.name}</TableCell>
              <TableCell>{address.country.name}</TableCell>
              <TableCell>{address.addressType}</TableCell>
              <TableCell>{address.streetType}</TableCell>
              <TableCell>{address.residenceType}</TableCell>
              <TableCell>
                {" "}
                {address.isMain ? <StyledCheckIcon /> : null}
              </TableCell>
              <TableCell style={{justifyContent: 'flex-end'}}>
                {" "}
                <StyledEditIcon
                  onClick={() => {
                    setCurrentAddressId(address.id);
                    setForm("address");
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

      {form === "address" && (
        <ModalCreateAddress
          changeForm={handleChangeForm}
          closeModal={closeModal}
        />
      )}
    </Container>
  );
};

export default Address;
