import styled from "styled-components";
import { IoMdArrowRoundBack } from "react-icons/io";
import { FaTrash } from "react-icons/fa";

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

export const Row = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const TracksWrapper = styled.div`
  width: 100%;
  max-height: 700px;

  overflow-y: auto;
`;

export const TrackNumber = styled.span`
  font-size: 1.25rem;
`;

export const TrackRow = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;

  margin-bottom: 1.5rem;
`;

export const RemoveButton = styled.button`
  width: 50px;
  height: 50px;

  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.red_fc};
  border-radius: 10px;
  cursor: pointer;
`;

export const StyledDeleteIcon = styled(FaTrash)`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.white_ff};
  cursor: pointer;
`;

export const AddButton = styled.button`
  width: 150px;
  height: 50px;

  display: flex;
  align-items: center;
  justify-content: center;

  margin: 0 auto 1.5rem;

  background-color: ${({ theme }) => theme.colors.green_56};
  border-radius: 10px;

  font-size: 1rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.white_ff};

  cursor: pointer;
`;

export const ReturnIcon = styled(IoMdArrowRoundBack)`
  align-self: center;
  font-size: 25px;

  color: ${({ theme }) => theme.colors.purple_1f};

  cursor: pointer;
`;

export const CalculateButton = styled.div`
  margin-top: 25px;
  padding: 0.25rem;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.white_ff};
  border: 1px solid ${({ theme }) => theme.colors.purple_1f};
  border-radius: 5px;

  color: ${({ theme }) => theme.colors.purple_1f};
  font-weight: bold;

  cursor: pointer;
`;

export const Image = styled.img`
  width: 25%;
  aspect-ratio: 1;

  object-fit: cover;
`;
