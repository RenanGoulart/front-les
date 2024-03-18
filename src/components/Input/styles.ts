import styled from "styled-components";
import InputMask from "react-input-mask";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: normal;
  color: ${({ theme }) => theme.colors.purple_1f};
`;

export const TextInput = styled.input`
  min-height: 50px;

  padding: 10px;

  font-size: 16px;

  border-radius: 5px;
  border: 2px solid ${({ theme }) => theme.colors.purple_80};

  outline: none;
`;

export const MaskedTextInput = styled(InputMask)`
  min-height: 50px;

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
