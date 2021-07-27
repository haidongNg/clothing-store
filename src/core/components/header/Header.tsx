import { FC } from 'react';
import {
  HeaderContainer,
  Options,
  Option,
  LogoContainer,
} from './Header.style';
import { ReactComponent as Logo } from '../../../assets/crown.svg';
import { connect } from 'react-redux';
import { RootState } from '../../../store/store';
import { MemberInfo } from '../../models/member-info.model';
import { logout } from '../../../store/actions';
import CartIcon from '../cart-icon/CartIcon';
import CartDropdown from '../cart-dropdown/CartDropdown';
// Type
type HeaderProps = {
  currentMember?: MemberInfo;
  logout: () => void;
  hidden?: boolean;
};

const Header: FC<HeaderProps> = ({ currentMember, logout, hidden }) => {
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo />
      </LogoContainer>
      <Options>
        <Option to="/shop">SHOP</Option>
        <Option to="/contact">CONTACT</Option>
        <Option to="/blog">BLOG</Option>
        {currentMember && Object.keys(currentMember).length > 0 ? (
          <Option to="/" onClick={() => logout()}>
            LOGOUT
          </Option>
        ) : (
          <Option to="/signin">SIGNIN</Option>
        )}
        <CartIcon />
      </Options>
      {!hidden && <CartDropdown />}
    </HeaderContainer>
  );
};

// Get store
const mapStateToProps = ({ member: { currentMember }, cart: { hidden } }: RootState) => ({
  currentMember: currentMember,
  hidden: hidden,
});

const conector = connect(mapStateToProps, { logout });
export default conector(Header);
