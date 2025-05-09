import { FaCheckCircle, FaEdit, FaTrash } from "react-icons/fa";
import styled from "styled-components";

export const Container = styled.main`
  width: 100vw;
  height: 100vh;
`;

export const Content = styled.section`
  width: 100%;

  padding: 2rem 8rem;
`;

export const Title = styled.h1`
  margin: 24px 0 12px;
`;

export const TableContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
`;

interface TableRowProps {
  isHeader?: boolean;
}

export const TableRow = styled.div<TableRowProps>`
  display: grid;
  grid-template-columns: repeat(9, minmax(0, 1fr)) 5rem 5rem;
  align-items: center;

  border-bottom: 1px solid black;

  font-weight: ${({ isHeader }) => (isHeader ? "bold" : "normal")};
`;

export const TableCell = styled.div`
  display: flex;

  font-size: 1rem;
  padding: 1rem;
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

export const StyledCheckIcon = styled(FaCheckCircle)`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  margin: 24px 0;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.purple_1f};
`;
