import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
`;

export const SearchContainer = styled.div`
  width: 50%;
  height: 2.75rem;

  display: flex;
  align-items: center;

  position: relative;
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 2.75rem;

  padding: 0 1.5rem;

  border-radius: 10px;

  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.purple_1f};

  outline: none;

  &::placeholder {
    color: ${({ theme }) => theme.colors.purple_1f};
  }
`;

export const SearchIcon = styled.img`
  width: 1rem;

  position: absolute;
  right: 1.25rem;

  color: ${({ theme }) => theme.colors.purple_1f};
`;
