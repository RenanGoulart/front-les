import { TbPlus } from "react-icons/tb";
import styled from "styled-components";

export const Container = styled.main`
  width: 100vw;
  height: 100vh;

  overflow-x: auto;
`;

export const Content = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  margin: 0 6rem 6rem;
`;

export const Title = styled.h1`
  font-size: 2.25rem;
  margin: 6rem 6rem 2rem;
`;

export const EmptyContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 100%;
`;

export const OptionsContainer = styled.div`
  width: 48%;
  max-height: 550px;

  display: flex;
  flex-direction: column;

  padding: 2rem;

  border-radius: 0.5rem;
  border: 2px solid ${({ theme }) => theme.colors.purple_1f};
`;

export const OptionsSubtitle = styled.h2`
  font-size: 1.75rem;
  font-weight: 600;

  display: flex;
  align-items: center;
  gap: 1rem;

  margin-bottom: 0.5rem;
`;

export const IconWrapper = styled.div`
  width: 25px;
  height: 25px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.purple_1f};

  cursor: pointer;
`;

export const PlusIcon = styled(TbPlus)`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.white_ff};
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;

export const ApplyButton = styled.button`
  width: 20%;
  height: 50px;

  font-size: 1.25rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.purple_1f};

  border-radius: 0.5rem;
  border: 2px solid ${({ theme }) => theme.colors.purple_80};
  background-color: ${({ theme }) => theme.colors.purple_80 + 50};

  cursor: pointer;
`;

export const CartContainer = styled.div`
  width: 48%;

  display: flex;
  flex-direction: column;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Text = styled.span<{ isDimmed?: boolean }>`
  font-size: 1.5rem;
  color: ${({ theme, isDimmed }) =>
    isDimmed ? theme.colors.black_00 + 70 : theme.colors.black_00};
`;

export const Separator = styled.div`
  width: 100%;
  height: 2px;

  background-color: ${({ theme }) => theme.colors.purple_1f};

  margin: 1rem 0;
`;

export const TotalText = styled.span<{ isBold?: boolean }>`
  font-size: 2rem;
  font-weight: ${(props) => (props.isBold ? "bold" : "normal")};
`;
