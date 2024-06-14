import styled from "styled-components";

export const Container = styled.main`
  width: 100vw;
  height: 100vh;

  overflow-x: auto;
`;
export const ImageContent = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.img`
  width: 100%;
`;

export const Logo = styled.img`
  width: 400px;
  position: absolute;
  margin-top: 25rem;
`;

export const ContentWrapper = styled.div`
  width: 100%;
  padding: 0 10rem;
  margin-top: 5rem;

  box-sizing: border-box;
`;

export const Text = styled.span`
  margin-bottom: 1rem;

  display: block;

  font-size: 2.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.black_00};
`;

