import styled from "styled-components";
import { IoLogOut } from "react-icons/io5";
import { BiSolidShoppingBags } from "react-icons/bi";
import { FaRegCreditCard } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";

export const Container = styled.main`
  width: 100vw;
  height: 100vh;
`;

export const Content = styled.section`
  width: 100%;
`;

export const ButtonsWrapper = styled.div`
  margin-top: 3rem;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Button = styled.button<{ isOutline?: boolean }>`
  width: 50%;
  height: 2.75rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;

  margin-bottom: 20px;

  font-size: 18px;
  color: ${({ theme, isOutline }) =>
    isOutline ? theme.colors.purple_1f : theme.colors.white_ff};

  background-color: ${({ theme, isOutline }) =>
    isOutline ? theme.colors.white_ff : theme.colors.purple_1f};
  border: 1px solid ${({ theme }) => theme.colors.purple_1f};
  border-radius: 10px;
`;

export const ImageContent = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.img`
  width: 100%;
`;

export const TextOverlay = styled.h1`
  position: absolute;

  font-size: 36px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.white_ff};
`;

export const StyledShoppingBagIcon = styled(BiSolidShoppingBags)`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.purple_1f};
`;

export const StyledCreditCardIcon = styled(FaRegCreditCard)`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.purple_1f};
`;

export const StyledAddressIcon = styled(FaMapLocationDot)`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.purple_1f};
`;

export const StyledLogoutIcon = styled(IoLogOut)`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.white_ff};
`;
