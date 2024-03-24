import { TbMinus, TbPlus, TbTrash } from "react-icons/tb";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  gap: 2rem;

  padding: 1.25rem;

  border: 2px solid ${({ theme }) => theme.colors.purple_1f};
  border-radius: 0.5rem;
`;

export const Image = styled.img`
  width: 190px;
  height: 160px;

  object-fit: cover;
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;

  position: relative;

  margin-right: 1rem;
`;

export const Text = styled.span<{ isBold?: boolean }>`
  font-size: 1.5rem;
  font-weight: ${({ isBold }) => (isBold ? "bold" : "normal")};
`;

export const Row = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;

  margin-top: auto;
`;

export const QuantityContainer = styled.div`
  width: 100px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const IconWrapper = styled.div`
  width: 25px;
  height: 25px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.black_00};

  cursor: pointer;
`;

export const PlusIcon = styled(TbPlus)`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.white_ff};
`;

export const MinusIcon = styled(TbMinus)`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.white_ff};
`;

export const TrashIcon = styled(TbTrash)`
  position: absolute;
  right: 0;

  font-size: 2rem;
  color: ${({ theme }) => theme.colors.black_00};
`;
