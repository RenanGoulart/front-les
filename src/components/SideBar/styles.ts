import styled from "styled-components";

export const Container = styled.aside`
  width: 15%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  padding: 20px;

  background-color: ${({ theme }) => theme.colors.purple_1f};
  border-top-right-radius: 45px;
`;

export const Logo = styled.img`
  width: 7rem;
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 40px;
`;

export const MenuItem = styled.li`
  list-style: none;

  font-size: 1rem;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.white_ff};

  padding: 16px 0;

  border-bottom: 2px solid ${({ theme }) => theme.colors.white_ff};

  cursor: pointer;
`;

export const NavigationItem = styled.div`
  width: 100%;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;
