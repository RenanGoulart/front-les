import React, { useState } from 'react';
import ModalCreateClient from '../ModalCreateClient/ModalCreateClient';
import { Container, TableCell, TableContainer } from './styles';
import Button from '../Button/Button';

const Clients = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <Container>
      <h1>Clients</h1>
      <Button onClick={() => setOpenModal(true)}>Create Client</Button>

      <TableContainer>
        <TableCell>
          <h4>Nome</h4>
        </TableCell>
        <TableCell>
          <h4>CPF</h4>
        </TableCell>
        <TableCell>
          <h4>E-mail</h4>
        </TableCell>
        <TableCell>
          <h4>Gênero</h4>
        </TableCell>
        <TableCell>
          <h4>Data de Nascimento</h4>
        </TableCell>
        <TableCell>
          <h4>Telefone</h4>
        </TableCell>
        <TableCell>
          <h4>Status</h4>
        </TableCell>
        <TableCell>
          <h4>Cartões</h4>
        </TableCell>
        <TableCell>
          <h4>Endereços</h4>
        </TableCell>
        <TableCell>
          <h4>Editar</h4>
        </TableCell>
        <TableCell>
          <h4>Excluir</h4>
        </TableCell>


        <TableCell>
          <p>Maria Alice</p>
        </TableCell>
        <TableCell>
          <p>100.200.300.40</p>
        </TableCell>
        <TableCell>
          <p>mamaicegatinha@gmail.com</p>
        </TableCell>
        <TableCell>
          <p>Feminino</p>
        </TableCell>
        <TableCell>
          <p>07/10/2003</p>
        </TableCell>
        <TableCell>
          <p>(11) 95041-2323</p>
        </TableCell>
        <TableCell>
          <p>ATIVO</p>
        </TableCell>
        <TableCell>
          <button>Ver cartões</button>
        </TableCell>
        <TableCell>
          <button>Ver endereços</button>
        </TableCell>
        <TableCell>
          <button>Editar</button>
        </TableCell>
        <TableCell>
          <button>Excluir</button>
        </TableCell>
      </TableContainer>

      {/* <TableContainer>
        <TableHeader>
          <TableColumn>
            <h4>Nome</h4>
          </TableColumn>
          <TableColumn>
            <h4>CPF</h4>
          </TableColumn>
          <TableColumn>
            <h4>E-mail</h4>
          </TableColumn>
          <TableColumn>
            <h4>Gênero</h4>
          </TableColumn>
          <TableColumn>
            <h4>Data de Nascimento</h4>
          </TableColumn>
          <TableColumn>
            <h4>Telefone</h4>
          </TableColumn>
          <TableColumn>
            <h4>Status</h4>
          </TableColumn>
          <TableColumn>
            <h4>Cartões</h4>
          </TableColumn>
          <TableColumn>
            <h4>Endereços</h4>
          </TableColumn>
        </TableHeader>
        <TableRow>
          <TableColumn>
            <p>Maria Alice</p>
          </TableColumn>
          <TableColumn>
            <p>100.200.300.40</p>
          </TableColumn>
          <TableColumn>
            <p>mamaicegatinha@gmail.com</p>
          </TableColumn>
          <TableColumn>
            <p>Maria Alice</p>
          </TableColumn>
          <TableColumn>
            <p>Maria Alice</p>
          </TableColumn>
          <TableColumn>
            <p>Maria Alice</p>
          </TableColumn>
          <TableColumn>
            <p>Maria Alice</p>
          </TableColumn>
          <TableColumn>
            <p>Maria Alice</p>
          </TableColumn>
          <TableColumn>
            <p>Maria Alice</p>
          </TableColumn>
        </TableRow>
      </TableContainer> */}

      {openModal && <ModalCreateClient closeModal={() => setOpenModal(false)} />}
    </Container>
  )
}

export default Clients;