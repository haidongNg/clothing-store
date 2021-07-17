import { FC } from 'react';
import { Nav, NavLogo, NavbarContainer, MobileIcon, NavItem, NavMenu, NavLink, NavInputSearch } from './Navbar.style';
import SearchIcon from '../../../assets/search.svg';
type NavbarProps = {
    toggle: () => void;
};

const Navbar: FC<NavbarProps> = ({ toggle }) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/">logo</NavLogo>
                    <MobileIcon onClick={toggle}>icon</MobileIcon>
                    <NavMenu>
                        <NavInputSearch image={SearchIcon} type="text" placeholder="Search for product ..." />
                    </NavMenu>
                    <NavMenu>
                    <NavItem>
                            <NavLink to="/contact">Signin</NavLink>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
            <Nav className="nav-menu">
                <NavbarContainer className="nav-menu">
                    <NavMenu>
                        <NavItem>
                            <NavLink to="/">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/shop">Shop</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/blog">Blog</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/contact">Contact</NavLink>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    );
};

export default Navbar;
