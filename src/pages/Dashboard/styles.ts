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

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
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
