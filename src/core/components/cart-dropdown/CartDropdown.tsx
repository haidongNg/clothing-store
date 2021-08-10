import { FC } from 'react';
import { connect } from 'react-redux';
import { RootState } from '../../../store/store';
import { toggleCartHidden } from '../../../store/actions';
import CartItem from '../cart-item/CartItem';
import {
  CartDropdownContainer,
  CartDropdownItems,
  CardDropdownBtn,
  CardEmptyMessage,
} from './CartDropdown.style';
import { withRouter, RouteComponentProps, } from 'react-router-dom';
// Type
interface CartDropdownProps extends RouteComponentProps {
  cartItems?: any;
  toggleCartHidden: () => void;
}

// Component
const CartDropdown: FC<CartDropdownProps> = ({ cartItems, history, toggleCartHidden }) => {
  return (
    <CartDropdownContainer>
      <CartDropdownItems>
        {cartItems && cartItems.length > 0 ? (
          cartItems.map((cartItem: any) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <CardEmptyMessage>Your cart is empty</CardEmptyMessage>
        )}
      </CartDropdownItems>
      <CardDropdownBtn onClick={() => { toggleCartHidden(); history.push('/checkout'); }}>GO TO CHECKOUT</CardDropdownBtn>
    </CartDropdownContainer>
  );
};

// Store
const mapStateToProps = (state: RootState) => ({
  cartItems: state.cart.cartItems,
});

const contector = connect(mapStateToProps, { toggleCartHidden });
export default withRouter(contector(CartDropdown));
