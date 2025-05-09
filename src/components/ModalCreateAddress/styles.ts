import styled from "styled-components";

export const Background = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 0;
  left: 0;
  z-index: 1001;

  background-color: ${({ theme }) => theme.colors.black_00}50;
`;

export const Container = styled.div`
  width: 40%;
  padding: 30px;

  background-color: ${({ theme }) => theme.colors.white_ff};
  border-radius: 20px;

  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const IsMainWrapper = styled.div`
  width: 48%;
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: normal;
  color: ${({ theme }) => theme.colors.purple_1f};
`;

export const Row = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const PhoneWrapper = styled.div`
  width: 48%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const GenderWrapper = styled.div`
  width: 48%;
`;

export const Button = styled.button`
  width: 48%;
  height: 50px;

  align-self: center;

  background-color: ${({ theme }) => theme.colors.purple_48};
  border: none;
  border-radius: 5px;

  font-size: 16px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.white_ff};

  cursor: pointer;
`;



