import styled from "styled-components";

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

  border: 1px solid black;
  border-collapse: collapse;
`;

export const TableRow = styled.tr``;

export const TableHeaderColumn = styled.th`
  text-align: center;
  border: 1px solid black;
`;

export const TableColumn = styled.td`
  text-align: center;
  border: 1px solid black;
`;
