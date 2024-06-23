import styled from "styled-components";

export const Container = styled.main`
  width: 100vw;
  height: 100vh;

  display: flex;
`;

export const LoginContainer = styled.form`
  width: 50%;

  display: flex;
  flex-direction: column;

  padding: 4rem 5rem;

  overflow-y: auto;

  background-color: ${({ theme }) => theme.colors.purple_1f};
`;

export const ImageContainer = styled.div`
  width: 50%;
  overflow: hidden;

  position: relative;
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const TextOverlay = styled.h3`
  width: 70%;

  position: absolute;
  bottom: 10%;
  right: 5%;

  text-align: right;

  font-size: 24px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.white_ff};
`;

export const LoginTitle = styled.span`
  font-weight: 600;
  font-size: 28px;

  color: ${({ theme }) => theme.colors.white_ff};

  margin: 2rem 0rem;
`;

export const Logo = styled.img`
  height: 150px;
`;

export const Label = styled.label`
  margin: 20px 0;

  font-size: 18px;

  color: ${({ theme }) => theme.colors.white_ff};
`;

export const Button = styled.button`
  width: 100%;
  height: 54px;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 40px;

  font-weight: 600;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.purple_1f};

  border-radius: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.purple_1f};
  background-color: ${({ theme }) => theme.colors.white_ff};

  cursor: pointer;
`;
