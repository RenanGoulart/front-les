import styled from "styled-components";

export const Container = styled.section`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 5rem;
`;

export const Row = styled.div`
  width: 90%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin: 24px 0;
`;

export const TableContainer = styled.table`
  width: 90%;
  border-collapse: collapse;
`;

export const TableRow = styled.tr`
  justify-content: space-between;
`;

export const TableHeaderColumn = styled.th`
  padding: 10px;
  text-align: start;
  padding-bottom: 10px;
  border-bottom: 1px solid black;
`;

export const TableColumn = styled.td`
  padding: 10px;
  text-align: start;
  border-bottom: 1px solid black;
  padding-right: 0;
`;
