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
// Type
type HeaderProps = {
  currentMember?: MemberInfo;
  logout: () => void;
};

const Header: FC<HeaderProps> = ({ currentMember, logout }) => {
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
      </Options>
    </HeaderContainer>
  );
};

// Get store
const mapStateToProps = (state: RootState) => ({
  currentMember: state.member.currentMember,
});

const conector = connect(mapStateToProps, { logout });
export default conector(Header);
