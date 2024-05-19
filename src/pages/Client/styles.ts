import styled from "styled-components";
import { FaTrash, FaEdit, FaRegCreditCard } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";

export const Container = styled.main`
  width: 100vw;
  height: 100vh;

  display: flex;

  overflow-x: hidden;
`;
export const Content = styled.section`
  width: 85%;
  margin-left: 15%;

  padding: 2rem 8rem;
`;

export const TableHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 24px 0 12px;
`;

export const Title = styled.h1`
  margin-bottom: 1rem;
`;

export const TableContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
`;

export const TableRow = styled.div<{ isHeader?: boolean }>`
  display: grid;
  grid-template-columns: repeat(9, minmax(9rem, 1fr));
  align-items: center;

  border-bottom: 1px solid black;

  font-weight: ${({ isHeader }) => (isHeader ? "bold" : "normal")};
`;

export const TableCell = styled.div`
  display: flex;

  font-size: 1rem;
  padding: 1rem;
`;

export const StyledCreditCardIcon = styled(FaRegCreditCard)`
  margin: 0rem 1.8rem;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.purple_1f};
  cursor: pointer;
`;

export const StyledAddressIcon = styled(FaMapLocationDot)`
  margin: 0rem 1.8rem;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.purple_1f};
  cursor: pointer;
`;

export const StyledEditIcon = styled(FaEdit)`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.purple_1f};
  cursor: pointer;
`;

export const StyledDeleteIcon = styled(FaTrash)`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.purple_1f};
  cursor: pointer;
`;
