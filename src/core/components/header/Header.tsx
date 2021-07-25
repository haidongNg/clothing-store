import { FC } from 'react';
import {
  HeaderContainer,
  Options,
  Option,
  LogoContainer,
} from './Header.style';
import { ReactComponent as Logo } from '../../../assets/crown.svg';
type HeaderProps = {};
const Header: FC<HeaderProps> = () => {
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo />
      </LogoContainer>
      <Options>
        <Option to="/shop">SHOP</Option>
        <Option to="/contact">CONTACT</Option>
        <Option to="/blog">BLOG</Option>
        <Option to="/signin">SIGNIN</Option>
      </Options>
    </HeaderContainer>
  );
};

export default Header;
