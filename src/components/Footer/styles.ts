import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;
  height: 20vh;

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.purple_1f};
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.h3`
  margin-bottom: 0.5rem;

  font-size: 1rem;
  color: ${({ theme }) => theme.colors.white_ff};
`;

export const Text = styled.p`
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.white_ff};
`;

export const Logo = styled.img`
  width: 90px;

  margin-bottom: 1rem;
`;

export const SocialMedia = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;
