import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { InputBase } from '../../styles/base.style';

export const Nav = styled.nav`
  background: white;
  height: 80px;
  /* margin-top: -80px; */
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  &.nav-menu {
    @media screen and (max-width: 786px) {
      display: none;
    }
  }

  @media screen and (max-width: 960px) {
    transition: 0.8 all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  &.nav-menu {
    justify-content: center;
  }
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const NavLogo = styled(Link)`
  color: #1b2437;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 786px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLink = styled(Link)`
  color: #1b2437;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid #eda3b5;
  }
  &:hover {
    color: #eda3b5;
    transition: 0.2s ease-in-out;
  }
`;

export const NavInputSearch = styled(InputBase)`
  padding: 0.5rem 0.5rem 0.5rem 1.7rem;
  background-image: ${({ image }: { image: string }) => `url(${image})`};
  background-repeat: no-repeat;
  background-position: 0px 8px;
  border: none;
  border-bottom: 2px solid #eda3b5;
  &:focus {
    border: none;
    border-bottom: 2px solid #eda3b5;
  }
`;
