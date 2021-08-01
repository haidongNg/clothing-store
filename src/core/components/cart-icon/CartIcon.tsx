import { FC } from 'react';
import { CartIconContainer, ItemCount } from './CartIcon.style';
import { ReactComponent as ShoppingBag } from '../../../assets/shopping-bag.svg';
import { toggleCartHidden } from '../../../store/actions';
import { connect } from 'react-redux';
import { RootState } from '../../../store/store';

type CartIconProps = {
  toggleCartHidden: () => void;
  itemCount: number;
};

const CartIcon: FC<CartIconProps> = ({ toggleCartHidden, itemCount }) => {
  return (
    <CartIconContainer onClick={() => toggleCartHidden()}>
      <ShoppingBag width="24px" height="24px" />
      <ItemCount>{itemCount}</ItemCount>
    </CartIconContainer>
  );
};

const mapStateToProps = ({cart: {cartItems}}: RootState) => ({
  itemCount: cartItems.reduce((accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity, 0),
});

const connector = connect(mapStateToProps, { toggleCartHidden });
export default connector(CartIcon);
