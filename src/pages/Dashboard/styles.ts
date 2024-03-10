import styled from "styled-components";

export const Container = styled.main`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: row;  
`;

export const SideBar = styled.aside`
  width: 15%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 20px;

  background-color: ${({ theme }) => theme.colors.purple_1f};
  border-top-right-radius: 45px;
`;

export const ProfileCircle = styled.div`
  width: 100px;
  height: 100px;

  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.white_ff};
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  margin-top: 40px;
`;

export const MenuItem = styled.li`
  list-style: none;

  font-size: 1.5rem;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.white_ff};

  padding: 16px 0;

  border-bottom: 2px solid ${({ theme }) => theme.colors.white_ff};

  cursor: pointer;
`;