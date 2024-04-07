import styled from "styled-components";

export const Container = styled.main`
  width: 100vw;
  height: 100vh;

  overflow-x: auto;
`;

export const Content = styled.section`
  width: 100%;
  height: 80vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  gap: 20px;
`;

export const Logo = styled.img`
  width: 12rem;
`;
