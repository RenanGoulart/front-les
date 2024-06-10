import styled from "styled-components";

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

export const ChartWrapper = styled.div`
  display: flex;
  justify-content: center;

  padding: 2rem 0 4rem;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 16px;

  margin: 24px 0 12px;
`;

export const PageTitle = styled.h1`
  margin-bottom: 1rem;
`;

export const FilterRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const FilterLabel = styled.label`
  margin-top: 24px;

  font-size: 1rem;
`;

export const FilterSelect = styled.select`
  min-height: 50px;

  padding: 10px;

  font-size: 16px;

  border-radius: 5px;
  border: 2px solid ${({ theme }) => theme.colors.purple_80};

  outline: none;
`;
