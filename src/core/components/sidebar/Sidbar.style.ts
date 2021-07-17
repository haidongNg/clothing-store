import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: white;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen = false }: { isOpen?: boolean }) =>
    isOpen ? '100%' : '0'};
  top: ${({ isOpen = false }: { isOpen?: boolean }) =>
    isOpen ? '0' : '-100%'};
  /* top: 0;   */
`;

export const CloseIcon = styled.span`
  color: #1b2437;
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
`;

export const SidebarWrapper = styled.div`
  color: #1b2437;
`;

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
`;

export const SidebarLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: #1b2437;
  cursor: pointer;

  &:hover {
    color: #eda3b5;
    transition: 0.2s ease-in-out;
  }
`;
