import styled from "styled-components";
import { FaTrash, FaEdit, FaCheckCircle} from "react-icons/fa";

export const Container = styled.section`
  width: 85%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;

  padding: 24px;
`;

export const Row = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  margin: 24px 0;
`;

export const TableContainer = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableRow = styled.tr``;

export const TableHeaderColumn = styled.th`
  padding:  5px;
  text-align: start;
  padding-bottom: 10px;
  border-bottom: 1px solid black;
`;

export const TableColumn = styled.td`
  padding-inline: 5px;
  text-align: start;
  border-bottom: 1px solid black;
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
  font-size: 20px;
  color: ${({ theme }) => theme.colors.purple_1f}; 
`;