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
  gap: 15px;
`;

interface LabelProps {
  isTitle?: boolean;
  isStatus?: boolean;
}

export const Label = styled.label<LabelProps>`
  font-size: 14px;
  font-weight: normal;
  color: ${({ theme }) => theme.colors.purple_1f};

  margin-right:  ${({ isTitle }) => (isTitle ? "5px" : "0")};
  font-weight: ${({ isTitle }) => (isTitle ? "bold" : "normal")};

  color: ${({ isStatus }) => (isStatus? "green": "")};
`;

export const Row = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
`;
