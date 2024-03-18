import styled from "styled-components";

export const Container = styled.main`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: row;
  justify-content: center;
  position: relative;
  padding-top: 5rem;
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
