import { FC } from 'react';
import { connect } from 'react-redux';
import { RootState } from '../../../store/store';
import CartItem from '../cart-item/CartItem';
import { CartDropdownContainer, CartDropdownItems, CardDropdownBtn } from './CartDropdown.style';
type CartDropdownProps = {
    cartItems?: any;
};
const CartDropdown: FC<CartDropdownProps> = ({ cartItems }) => {
    return (
        <CartDropdownContainer>
            <CartDropdownItems>
                {cartItems.map((cartItem: any) => (<CartItem key={cartItem.id} cartItem={cartItem} />))}
            </CartDropdownItems>
            <CardDropdownBtn>GO TO CHECKOUT</CardDropdownBtn>
        </CartDropdownContainer>
    )
}

const mapStateToProps = (state: RootState) => ({
    cartItems: state.cart.cartItems,
});

const contector = connect(mapStateToProps, null);
export default contector(CartDropdown);
