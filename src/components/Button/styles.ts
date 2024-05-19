import styled from "styled-components";

export const ButtonContainer = styled.button`
  min-width: 200px;
  height: 50px;

  align-self: flex-end;

  background-color: ${({ theme }) => theme.colors.purple_48};
  border: none;
  border-radius: 5px;

  font-size: 16px;
  color: ${({ theme }) => theme.colors.white_ff};

  cursor: pointer;
`;
