import styled from "styled-components";
import { IoLogOut } from "react-icons/io5";
import { BiSolidShoppingBags } from "react-icons/bi";
import { FaRegCreditCard } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";

export const Container = styled.section`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 4rem;
`;

export const ButtonContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 55px;
`;

export const Button = styled.button`
  width: 852px;
  height: 40px;

  display:flex;

  border: 1px solid ${({ theme }) => theme.colors.purple_1f};
  background-color: ${({ theme }) => theme.colors.white_ff};
  border-radius: 10px;

  font-weight: 600;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.purple_1f};

  align-items: center;
  justify-content: center;

  margin-bottom: 20px;

  cursor: pointer;
`;

export const Logout = styled.button`
  width: 852px;
  height: 50px;

  display:flex;

  border: none;
  background-color: ${({ theme }) => theme.colors.purple_1f};
  border-radius: 10px;

  font-weight: 600;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.white_ff};

  align-items: center;
  justify-content: center;

  margin-bottom: 35px;

  cursor: pointer;
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const Image = styled.img`
  width: 100%;
`;

export const TextOverlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  text-align: center;

  font-size: 36px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.white_ff};
`;

export const StyledShoppingBagIcon = styled(BiSolidShoppingBags)`
  width: 10%;
  font-size: 24px;
  color: ${({ theme }) => theme.colors.purple_1f};

  cursor: pointer;
`

export const StyledCreditCardIcon = styled(FaRegCreditCard)`
  width: 10%;
  font-size: 24px;
  color: ${({ theme }) => theme.colors.purple_1f};

  cursor: pointer;
`;

export const StyledAddressIcon = styled(FaMapLocationDot)`
  width: 10%;
  font-size: 24px;
  color: ${({ theme }) => theme.colors.purple_1f};

  cursor: pointer;
`;

export const StyledLogoutIcon = styled(IoLogOut)`
  width:5%;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 24px;
  color: ${({ theme }) => theme.colors.white_ff};

  cursor: pointer;
`
