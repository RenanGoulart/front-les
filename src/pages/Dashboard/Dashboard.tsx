import { useState } from "react";
import { Container } from "./styles";
import Clients from "../../components/Clients/Clients";
import Address from "../../components/Address/Address";
import CreditCard from "../../components/CreditCards/CreditCards";
import SideBar from "../../components/SideBar/SideBar";

export type ClientPagesType = "clients" | "addresses" | "creditCards";

const Dashboard = () => {
  const [page, setPage] = useState<ClientPagesType>("clients");

  const navigateTo = (pageName: ClientPagesType) => {
    setPage(pageName);
  };

  const renderPage = () => {
    switch (page) {
      case "clients":
        return <Clients navigateTo={navigateTo} />;
      case "addresses":
        return <Address navigateTo={navigateTo} />;
      case "creditCards":
        return <CreditCard navigateTo={navigateTo} />;
      default:
        return <Clients navigateTo={navigateTo} />;
    }
  };

    return (
      <Container>
        <SideBar />
        {renderPage()}
      </Container>
    );
  };

export default Dashboard;
