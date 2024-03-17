import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;    

  display: flex;
  justify-content: center;
  position: fixed;
  top: 5.5rem;
  left: 0;  
  padding: 1rem;
  z-index: 1000;

  background-color: ${({ theme }) => theme.colors.purple_1f};
  color: white;
  box-shadow: 0 2px 6px ${({ theme }) => theme.colors.black_00};
`;

export interface NavigationItemProps {
  isActive: boolean;
}

export const NavigationCategory = styled.div<NavigationItemProps>`
  
  display: flex;
  align-items: center;
  gap: 5rem;

  font-style: italic;
 
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }`;

export const CategoriesWrapper = styled.div`  
  width: auto;
  
  display: flex;
  align-items: center;
  gap: 4rem;
`;


