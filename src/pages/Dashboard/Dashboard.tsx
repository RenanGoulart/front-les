import { Menu, MenuItem, ProfileCircle, SideBar } from "./styles";

const Dashboard = () => {
  return (
    <SideBar>
      <ProfileCircle />
      <Menu>
        <MenuItem to='/dashboard'>Dashboard</MenuItem>
        <MenuItem to='/clients'>Clients</MenuItem>
      </Menu>
    </SideBar>
  )

}

export default Dashboard;