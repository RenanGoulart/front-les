import styled from "styled-components";

export const Container = styled.main`
  width: 100vw;
  height: 100vh;

  overflow-x: auto;
`;

export const Content = styled.section`
  display: flex;
  justify-content: space-between;

  padding: 6rem 0 0;
`;

export const ImageWrapper = styled.div`
  width: 48%;
  display: flex;
  justify-content: flex-end;
`;

export const ProductImage = styled.img`
  max-width: 500px;
`;

export const DetailsWrapper = styled.div`
  width: 48%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 3rem 0 0;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProductText = styled.h2<{ isBold?: boolean }>`
  font-size: 2rem;
  font-weight: ${({ isBold }) => (isBold ? "bold" : "normal")};
`;

export const ButtonsRow = styled.div`
  width: calc(310px + 120px + 1.5rem);

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonsColumn = styled.div`
  height: 120px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Button = styled.button<{ isOutlined?: boolean }>`
  width: 310px;
  height: 50px;

  border-radius: 10px;
  border: ${({ theme, isOutlined }) =>
    isOutlined ? `1px solid ${theme.colors.purple_1f}` : theme.colors.white_ff};
  background-color: ${({ theme, isOutlined }) =>
    isOutlined ? theme.colors.white_ff : theme.colors.purple_1f};

  color: ${({ theme, isOutlined }) =>
    isOutlined ? theme.colors.purple_1f : theme.colors.white_ff};
`;

export const IaButton = styled.button`
  width: 120px;
  height: 120px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.purple_1f};
`;

export const IaIcon = styled.img`
  width: 64px;
  height: 64px;
`;

export const Separator = styled.div`
  width: 50%;
  height: 1px;

  margin: 4rem auto;

  background-color: ${({ theme }) => theme.colors.gray_cc};
`;

export const ContainerTable = styled.div`
  width: 60%;

  display: flex;
  flex-direction: column;

  margin: 0 auto;

  overflow-x: hidden;

  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.purple_1f};
`;

export const TableRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TableCell = styled.div<{ isPurple?: boolean }>`
  display: flex;
  flex: 1;

  font-size: 1rem;
  padding: 1rem;

  background-color: ${({ theme, isPurple }) =>
    isPurple ? theme.colors.purple_1f : theme.colors.white_ff};
  border-bottom: 1px solid
    ${({ theme, isPurple }) =>
      isPurple ? theme.colors.white_ff : theme.colors.purple_1f};

  font-size: 1.5rem;
  color: ${({ theme, isPurple }) =>
    isPurple ? theme.colors.white_ff : theme.colors.purple_1f};
`;

export const TrackContainer = styled.section`
  width: 60%;

  display: flex;
  flex-direction: column;

  margin: 3rem auto 5rem;
`;

export const TracksTitle = styled.h2`
  font-size: 1.5rem;
  margin: 2rem 0;
`;

export const TrackRow = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;

  margin: 1rem auto;
`;

export const TrackList = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TrackText = styled.span`
  font-size: 1.25rem;
`;
