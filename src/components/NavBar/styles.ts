import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-evenly;
  padding: 1rem;

  background-color: ${({ theme }) => theme.colors.purple_1f};
  box-shadow: 0 2px 6px ${({ theme }) => theme.colors.black_00};
`;

export const NavigationCategory = styled.div`
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

interface NavigationItemProps {
  isActive: boolean;
}

export const NavigationCategoryText = styled.span<NavigationItemProps>`
  font-size: 1.2rem;
  font-style: italic;
  color: ${({ theme }) => theme.colors.white_ff};

  text-decoration: ${({ isActive }) => (isActive ? "underline" : "none")};
`;
