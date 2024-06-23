import styled from "styled-components";
import { IoIosCloseCircleOutline } from "react-icons/io";

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
  width: 50%;
  height: 70vh;

  display: flex;
  flex-direction: column;
  gap: 20px;

  padding: 30px;

  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.purple_1f};
`;
export const Row = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
`;

export const TextArea = styled.div`
  width: 100%;

  display: flex;
  flex: 1;

  overflow-y: auto;
`;

export const Text = styled.div`
  margin: auto 2rem;

  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.white_ff};
`;

export const IaIcon = styled.img`
  width: 60px;
  height: 60px;
`;

export const CloseIcon = styled(IoIosCloseCircleOutline)`
  width: 30px;
  height: 30px;

  margin-left: auto;

  color: ${({ theme }) => theme.colors.white_ff};

  cursor: pointer;
`;

export const LoadingText = styled.span`
  padding-right: 32px;

  font-size: 1.2em;
  color: ${({ theme }) => theme.colors.white_ff};
`;
