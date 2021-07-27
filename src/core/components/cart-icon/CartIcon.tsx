import { FC } from 'react';
import { CartIconContainer, ItemCount } from './CartIcon.style';
import { ReactComponent as ShoppingBag } from '../../../assets/shopping-bag.svg';
import { toggleCartHidden } from '../../../store/actions';
import { connect } from 'react-redux';

type CartIconProps = {
  toggleCartHidden: () => void;
};

const CartIcon: FC<CartIconProps> = ({toggleCartHidden}) => {
  return (
    <CartIconContainer onClick={() => toggleCartHidden()}>
      <ShoppingBag width="24px" height="24px" />
      <ItemCount>0</ItemCount>
    </CartIconContainer>
  );
};

const connector = connect(null, { toggleCartHidden });
export default connector(CartIcon);
