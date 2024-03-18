import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  height: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;
  transform: translate(-50%, -50%);

  position: fixed;
  left: 50%;
  margin-top: 30px;
  z-index: 1001;
`;

export const SearchDivider = styled.div`
  width: 50%;
  height: 2.75rem;

  display: flex;
  align-items: center;

  position: relative;
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 2.75rem;

  display: flex;
  align-items: center;

  padding: 0 2.75rem 0 2.5rem;

  border-radius: 10px;

  font-family: "Poppins";
  font-weight: 400;
  font-size: 0.875rem;

  color: ${({ theme }) => theme.colors.purple_1f};

  &::placeholder {
    color: ${({ theme }) => theme.colors.purple_1f};
  }
`;

export const SearchIcon = styled.img`
  width: 1rem;
  height: auto;

  position: absolute;
  align-self: center;
  right: 1.25rem;

  color: ${({ theme }) => theme.colors.purple_1f};
`;
