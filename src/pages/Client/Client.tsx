import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import ModalCreateClient from "../../components/ModalCreateClient/ModalCreateClient";
import {
  Container,
  TableRow,
  TableContainer,
  StyledCreditCardIcon,
  StyledAddressIcon,
  StyledEditIcon,
  StyledDeleteIcon,
  Content,
  TableHeader,
  Title,
  TableCell,
} from "./styles";
import Button from "../../components/Button/Button";
import ModalCreateAddress from "../../components/ModalCreateAddress/ModalCreateAddress";
import ModalCreateCreditCard from "../../components/ModalCreateCreditCard/ModalCreateCreditCard";
import { IUserResponse, deleteUser, listUsers } from "../../services/user";
import { useClient } from "../../hooks/useClient";
import SideBar from "../../components/SideBar/SideBar";
import Input from "../../components/Input/Input";

export type FormType = "client" | "address" | "address2" | "creditCard" | null;

const Client = () => {
  const navigate = useNavigate();

  const { control } = useForm();

  const { setCurrentUserId } = useClient();

  const [form, setForm] = useState<FormType>(null);
  const [clients, setClients] = useState([] as IUserResponse[]);

  const handleChangeForm = (formName: FormType) => {
    setForm(formName);
  };

  const closeModal = () => {
    setForm(null);
  };

  const navigateToList = (userId: string, page: "creditCard" | "address") => {
    setCurrentUserId(userId);
    navigate(`/${page}`);
  };

  const getUsers = async () => {
    const allUsers = await listUsers();
    if (allUsers) {
      setClients(allUsers);
    }
  };

  const handleDeleteClient = async (clientId: string) => {
    await deleteUser(clientId);
    getUsers();
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <Container>
      <SideBar />
      <Content>
        <TableHeader>
          <Title>Clientes</Title>
          <Button
            onClick={() => {
              setCurrentUserId("");
              setForm("client");
            }}
          >
            Adicionar Cliente
          </Button>
        </TableHeader>
        <Input
          control={control}
          name="search"
          placeholder="Pesquise por nome, CPF ou e-mail"
        />
        <TableContainer>
          <TableRow isHeader>
            <TableCell>Nome</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>CPF</TableCell>
            <TableCell>Telefone</TableCell>
            <TableCell>Gênero</TableCell>
            <TableCell>Cartões</TableCell>
            <TableCell>Endereços</TableCell>
            <TableCell />
            <TableCell />
          </TableRow>
          {clients.map((client) => (
            <TableRow key={client.id}>
              <TableCell>{client.name}</TableCell>
              <TableCell>{client.status}</TableCell>
              <TableCell>{client.cpf}</TableCell>
              <TableCell>{`(${client.ddd}) ${client.phone}`}</TableCell>
              <TableCell>{client.gender?.substring(0, 3) || "N/I"}</TableCell>
              <TableCell>
                <StyledCreditCardIcon
                  onClick={() => navigateToList(client.id, "creditCard")}
                />
              </TableCell>
              <TableCell>
                <StyledAddressIcon
                  onClick={() => navigateToList(client.id, "address")}
                />
              </TableCell>
              <TableCell style={{ justifyContent: "flex-end" }}>
                <StyledEditIcon
                  onClick={() => {
                    setCurrentUserId(client.id);
                    setForm("client");
                  }}
                />
              </TableCell>
              <TableCell>
                <StyledDeleteIcon
                  onClick={() => handleDeleteClient(client.id)}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableContainer>
      </Content>

      {form === "client" && (
        <ModalCreateClient
          changeForm={handleChangeForm}
          closeModal={closeModal}
        />
      )}
      {form === "address" && (
        <ModalCreateAddress
          formName="address"
          changeForm={handleChangeForm}
          closeModal={closeModal}
        />
      )}
      {form === "address2" && (
        <ModalCreateAddress
          formName="address2"
          changeForm={handleChangeForm}
          closeModal={closeModal}
        />
      )}
      {form === "creditCard" && (
        <ModalCreateCreditCard closeModal={closeModal} />
      )}
    </Container>
  );
};

export default Client;
