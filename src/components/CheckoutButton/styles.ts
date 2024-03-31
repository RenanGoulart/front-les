import styled from "styled-components";
import { IoCartSharp } from "react-icons/io5";

export const Container = styled.div`
  position: relative;
`;

export const SellIcon = styled(IoCartSharp)`
  font-size: 2rem;
`;

export const CartQuantity = styled.span`
  width: 1.5rem;
  height: 1.5rem;

  position: absolute;
  top: -0.75rem;
  left: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;
  font-size: 1rem;
  font-weight: bold;

  background-color: ${({ theme }) => theme.colors.green_56};
`
