import { useState } from "react";
import { Container } from "./styles";
import NavBar from "../../components/NavBar/NavBar";
import NavigationCategory from "../../components/NavigationCategories/NavigationCategories";
import UserProfile from "../../components/UserProfile/UserProfile";

export type ProfilePagesType =  "userProfile" | "orders" |"addresses" | "creditCards";

const Profile = () => {
  const [page, setPage] = useState<ProfilePagesType>("userProfile");

  const navigateTo = (pageName: ProfilePagesType) => {
    setPage(pageName);
  };

  const renderPage = () => {
    switch (page) {
      case "userProfile":
        return <UserProfile navigateTo={navigateTo} />;
    }
  };

  return (
    <Container>
      <NavBar />
      <NavigationCategory />
      {renderPage()}
    </Container>
  );
};

export default Profile;
