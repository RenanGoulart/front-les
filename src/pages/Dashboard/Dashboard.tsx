<<<<<<< HEAD
import ModalCreateAddress from "../../components/ModalCreateAddress/ModalCreateAddress";
import ModalCreateClient from "../../components/ModalCreateClient/ModalCreateClient";
import ModalCreateCreditCard from "../../components/ModalCreateCreditCard/ModalCreateCreditCard";
import { Menu, MenuItem, ProfileCircle, SideBar } from "./styles";
=======
import { useState } from "react";
import { Container, Menu, MenuItem, ProfileCircle, SideBar } from "./styles";
import Clients from "../../components/Clients/Clients";

type Pages = 'clients' | 'dashboard';
>>>>>>> 35e988b9228f3c80d29fa04a06bfc7af82e634e3

const Dashboard = () => {
  const [page, setPage] = useState<Pages>('clients');

  const renderPage = () => {
    switch (page) {
      case 'dashboard':
        return <h1>Dashboard</h1>;
      case 'clients':
        return <Clients />;
    }
  }

  return (
    <Container>
      <SideBar>
        <ProfileCircle />
        <Menu>
          <MenuItem onClick={() => setPage('dashboard')}>Dashboard</MenuItem>
          <MenuItem onClick={() => setPage('clients')}>Clients</MenuItem>
        </Menu>
      </SideBar>
<<<<<<< HEAD
      <ModalCreateClient />
      <ModalCreateAddress />
      <ModalCreateCreditCard />
    </>
=======
      {renderPage()}
    </Container>
>>>>>>> 35e988b9228f3c80d29fa04a06bfc7af82e634e3
  )
}

export default Dashboard;