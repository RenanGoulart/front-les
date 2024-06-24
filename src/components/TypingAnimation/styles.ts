import styled from "styled-components";

export const Text = styled.span`
  display: inline-block;

  padding-right: 32px;

  font-size: 1.2em;
  color: ${({ theme }) => theme.colors.white_ff};
`;
