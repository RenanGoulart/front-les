import styled from "styled-components";

export const Container = styled.main`
  width: 100vw;
  height: 100vh;

  display: flex;
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

interface TableRowProps {
  isHeader?: boolean;
}

export const TableRow = styled.div<TableRowProps>`
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  align-items: center;

  border-bottom: 1px solid black;

  font-weight: ${({ isHeader }) => (isHeader ? "bold" : "normal")};
`;

export const TableCell = styled.div`
  display: flex;

  font-size: 1rem;
  padding: 1rem;
`;

export const DecreaseButton = styled.div`
  padding: 0.5rem;
  border-radius: 0.25rem;

  background-color: ${({ theme }) => theme.colors.red_fc};
  color: ${({ theme }) => theme.colors.white_ff};

  cursor: pointer;
`;

export const IssueButton = styled.div`
  padding: 0.5rem;
  border-radius: 0.25rem;

  background-color: ${({ theme }) => theme.colors.purple_af};
  color: ${({ theme }) => theme.colors.white_ff};
  font-weight: bold;

  cursor: pointer;
`;
