import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin: 1rem auto;

  display: flex;
  flex-direction: column;
`;

export const ContainerGrid = styled.div`
  width: 100%;

  align-self: center;

  display: grid;
  grid-template-columns: repeat(4, minmax(300px, 1fr));
  grid-template-rows: auto;
  justify-items: center;
  row-gap: 4rem;

  margin: 2rem 0;
`;

export const NotFoundContainer = styled.div`
  width: 100%;
  height: 50vh;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NotFoundText = styled.h3`
  font-size: 1.5rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.black_00};
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
