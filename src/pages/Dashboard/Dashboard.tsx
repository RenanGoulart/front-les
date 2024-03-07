import ModalCreateAddress from "../../components/ModalCreateAddress/ModalCreateAddress";
import ModalCreateClient from "../../components/ModalCreateClient/ModalCreateClient";
import ModalCreateCreditCard from "../../components/ModalCreateCreditCard/ModalCreateCreditCard";
import { Menu, MenuItem, ProfileCircle, SideBar } from "./styles";

const Dashboard = () => {
  return (
    <>
      <SideBar>
        <ProfileCircle />
        <Menu>
          <MenuItem to='/dashboard'>Dashboard</MenuItem>
          <MenuItem to='/clients'>Clients</MenuItem>          
        </Menu>
      </SideBar>
      <ModalCreateClient />
      <ModalCreateAddress />
      <ModalCreateCreditCard />
    </>
  )
}

export default Dashboard;