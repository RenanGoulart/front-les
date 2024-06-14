import styled from "styled-components";
import { FaUser } from "react-icons/fa";
import { MdAdminPanelSettings } from "react-icons/md";

export const Container = styled.header`
  width: 100%;

  display: flex;
  align-items: center;

  padding: 1rem 2rem;

  background-color: ${({ theme }) => theme.colors.purple_1f};
  color: ${({ theme }) => theme.colors.white_ff};
`;

export const Logo = styled.img`
  width: 8rem;
`;

export const IconsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  margin-left: auto;
`;

export const NavigationItem = styled.div`
  width: 100%;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

export const UserIcon = styled(FaUser)`
  font-size: 1.6rem;
`;

export const AdminIcon = styled(MdAdminPanelSettings)`
  font-size: 2rem;
`;
