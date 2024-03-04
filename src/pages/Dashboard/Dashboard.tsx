import ModalCreateClient from "../../components/ModalCreateClient/ModalCreateClient";
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
    </>
  )
}

export default Dashboard;