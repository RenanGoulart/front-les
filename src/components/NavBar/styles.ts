import styled from "styled-components";
import { FaUser } from "react-icons/fa";
import { IoCartSharp } from "react-icons/io5";

export const Container = styled.div`
  width: 100%;

  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  padding: 1rem;
  z-index: 1000;

  background-color: ${({ theme }) => theme.colors.purple_1f};
  color: white;
`;

export const Logo = styled.img`
  width: auto;
  height: 3.5rem;
`;

export interface NavigationItemProps {
  isActive: boolean;
}

export const NavigationItem = styled.div<NavigationItemProps>`
  width: 100%;
  height: 3.75rem;

  display: flex;
  align-items: center;
  gap: 0.625rem;
  padding-right: 8px;

  background: ${({ isActive }) => (isActive ? "#7653F6" : "transparent")};

  border-radius: 2rem 0 0 2rem;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

export const UserIcon = styled(FaUser)`
  font-size: 1.6rem;
`;

export const SellIcon = styled(IoCartSharp)`
  font-size: 2rem;
`;

export const IconsWrapper = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 1rem;
`;
