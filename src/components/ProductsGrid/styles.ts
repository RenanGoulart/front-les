import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  margin: 2rem auto;

  display: flex;
  flex-direction: column;
`;

export const ContainerGrid = styled.div`
  width: 100%;

  align-self: center;

  display: grid;
  grid-template-columns: repeat(3, minmax(300px, 1fr));
  grid-template-rows: auto;
  justify-items: center;
  row-gap: 4rem;

  margin-top: 2rem;
`;

export const SelectFilter = styled.select`
  width: 180px;

  align-self: flex-end;

  padding: 0.5rem;
  margin-top: 1rem;

  font-size: 1rem;

  border: none;
  outline: none;
  border-radius: 0.5rem;
  box-shadow: 4px 4px 15px 0px ${({ theme }) => theme.colors.black_00 + 20};

  cursor: pointer;
`;
