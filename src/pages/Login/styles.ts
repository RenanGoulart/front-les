import styled from "styled-components";

export const Container = styled.main`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: row;
  position: relative;
`
export const LoginContainer = styled.form`
  width: 50%;
  height: 100%;

  display: flex;
  flex-direction: column;

  padding: 2rem 5rem;

  background: ${({ theme }) => theme.colors.purple_1f};

  overflow-y: auto;
  position: relative;
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 50%;
  overflow: hidden;
`
export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const TextOverlay = styled.div`
  position: absolute;
  bottom: 10%;
  left: 30%;
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
  width: auto;
  height: 150px;
`;

export const Label = styled.label`
  margin-top: 10px;
  margin-bottom:10px;
  font-size: 18px;

  color: ${({ theme }) => theme.colors.white_ff};
`

export const Input = styled.input`
  width: 100%;
  height: 3.375rem;

  display: flex;
  align-items: center;
  margin-bottom: 10px;

  padding: 0 3rem 0 2rem;

  background: ${({ theme }) => theme.colors.purple_1f};

  border-radius: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.white_ff};
  font-weight: 400;
  font-size: 0.875rem;

  color: ${({ theme }) => theme.colors.white_ff};

  &::placeholder {
    color: ${({ theme }) => theme.colors.white_ff}50;
  }

  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.purple_af};
  }
`

export const Button = styled.button`
  width: 100%;
  height: 49px;

  display:flex;

  border: 1px solid ${({ theme }) => theme.colors.purple_1f};
  background-color: ${({ theme }) => theme.colors.white_ff};
  border-radius: 10px;

  font-weight: 600;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.purple_1f};

  align-items: center;
  justify-content: center;

  margin-top: 20px;

  cursor: pointer;
`;
