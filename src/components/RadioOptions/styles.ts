import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const RadioRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  gap: 5px;

  cursor: pointer;
`;

export const RadioCircle = styled.div`
  width: 20px;
  height: 20px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 10px;
  border: 2px solid ${({ theme }) => theme.colors.purple_80};
  background-color: ${({ theme }) => theme.colors.white_ff};
`;

export const RadioCheck = styled.div`
  width: 14px;
  height: 14px;

  border-radius: 7px;
  background-color: ${({ theme }) => theme.colors.purple_1f};
`;

export const RadioLabel = styled.label`
  font-size: 14px;
  font-weight: normal;
  color: ${({ theme }) => theme.colors.purple_1f};

  cursor: pointer;
`;
