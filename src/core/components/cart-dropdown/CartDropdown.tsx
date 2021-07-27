import { FC } from 'react';
import { CartDropdownContainer, CartDropdownItems, CardDropdownBtn } from './CartDropdown.style';
type CartDropdownProps = {};
const CartDropdown: FC<CartDropdownProps> = () => {
    return (
        <CartDropdownContainer>
            <CartDropdownItems />
            <CardDropdownBtn>GO TO CHECKOUT</CardDropdownBtn>
        </CartDropdownContainer>
    )
}

export default CartDropdown;
