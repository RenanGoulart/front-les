import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  
  gap: 10px;
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: normal;
  color: ${({ theme }) => theme.colors.purple_1f};
`;

export const TextInput = styled.input`
  padding: 10px;

  font-size: 16px;

  border-radius: 5px;
  border: 2px solid ${({ theme }) => theme.colors.purple_80};

  outline: none;
`;

export const ErrorMessage = styled.span`
  font-size: 12px;
  font-weight: normal;
  color: ${({ theme }) => theme.colors.red_fc};
`;