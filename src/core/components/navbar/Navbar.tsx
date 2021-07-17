import { FC } from 'react';
import { Nav, NavLogo, NavbarContainer, MobileIcon, NavItem, NavMenu, NavLink } from './Navbar.style';

type NavbarProps = {
    toggle: () => void;
};

const Navbar: FC<NavbarProps> = ({toggle}) => {
    return (
        <div>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/">logo</NavLogo>
                    <MobileIcon onClick={toggle}>icon</MobileIcon>
                    <NavMenu>
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
        </div>
    );
};

export default Navbar;
