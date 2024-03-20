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

  padding: 2rem 5rem;

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

  margin-bottom: 1rem;
`;

export const Logo = styled.img`
  height: 150px;
`;

export const Label = styled.label`
  margin: 10px 0;

  font-size: 18px;

  color: ${({ theme }) => theme.colors.white_ff};
`;

export const Input = styled.input`
  width: 100%;
  height: 3.375rem;

  display: flex;
  align-items: center;

  margin-bottom: 10px;
  padding: 0 3rem 0 2rem;

  font-weight: 400;
  font-size: 0.875rem;

  border-radius: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.white_ff};
  background-color: ${({ theme }) => theme.colors.purple_1f};

  color: ${({ theme }) => theme.colors.white_ff};

  &::placeholder {
    color: ${({ theme }) => theme.colors.white_ff}50;
  }

  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.purple_af};
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 54px;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 20px;

  font-weight: 600;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.purple_1f};

  border-radius: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.purple_1f};
  background-color: ${({ theme }) => theme.colors.white_ff};

  cursor: pointer;
`;
