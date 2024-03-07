import { Container, Menu, MenuItem, ProfileCircle, SideBar } from "./styles";
import { useState } from "react";
import Clients from "../../components/Clients/Clients";
import ModalCreateCreditCard from "../../components/ModalCreateCreditCard/ModalCreateCreditCard";

type Pages = 'clients' | 'dashboard';

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
      <ModalCreateCreditCard />    
      {renderPage()}
    </Container>
  )
}

export default Dashboard;