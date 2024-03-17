import { Container } from "./styles";
import { useState } from "react";
import Clients from "../../components/Clients/Clients";
import Address from "../../components/Address/Address";
import CreditCard from "../../components/CreditCards/CreditCards";
import NavBar from "../../components/NavBar/NavBar";
import NavigationCategory from "../../components/NavigationCategories/NavigationCategories";

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
      case 'creditCards':
        return <CreditCard navigateTo={navigateTo} />;
    }
  }

  return (
    <Container>
      <NavBar />
        <NavigationCategory/>      
      {renderPage()}
    </Container>
  )
}

export default Dashboard;