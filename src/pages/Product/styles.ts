import styled from "styled-components";
import { TbVinyl } from "react-icons/tb";
import { FaEdit } from "react-icons/fa";

export const Container = styled.main`
  width: 100vw;
  height: 100vh;

  display: flex;
`;

export const Content = styled.section`
  width: 85%;

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
  grid-template-columns: repeat(8, minmax(0, 1fr));
  align-items: center;

  border-bottom: 1px solid black;

  font-weight: ${({ isHeader }) => (isHeader ? "bold" : "normal")};
`;

export const TableCell = styled.div`
  display: flex;

  font-size: 1rem;
  padding: 1rem;
`;

export const AlbumCover = styled.img`
  width: 75%;
  height: 75%;
`;

export const DetailsIcon = styled(TbVinyl)`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.purple_1f};
  cursor: pointer;
`;

export const StyledEditIcon = styled(FaEdit)`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.purple_1f};
  cursor: pointer;
`;
