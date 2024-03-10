import { Container, Menu, MenuItem, ProfileCircle, SideBar } from "./styles";
import { useState } from "react";
import Clients from "../../components/Clients/Clients";
import Address from "../../components/Address/Address";

export type ClientPagesType = 'clients' | 'addresses' | 'creditCards';

const Dashboard = () => {
  const [page, setPage] = useState<ClientPagesType>('clients');

  const navigateTo = (page: ClientPagesType) => {
    setPage(page);
  }

  const renderPage = () => {
    switch (page) {
      case 'clients':
        return <Clients navigateTo={navigateTo} />;
      case 'addresses':
        return <Address navigateTo={navigateTo} />;
    }
  }

  return (
    <Container>
      <SideBar>
        <ProfileCircle />
        <Menu>
          <MenuItem onClick={() => setPage('clients')}>Clientes</MenuItem>
        </Menu>
      </SideBar>
      {renderPage()}
    </Container>
  )
}

export default Dashboard;