import { FC } from 'react';
import { CartContainer, CartImage, CartDetails, CartName, CartPrice } from './CartItem.style';

type Item = {
    imageUrl?: string;
    name?: string;
    price: number;
    quantity: number;
}

type CardItemProps = {
    cartItem: Item;
};

const CartItem: FC<CardItemProps> = ({ cartItem }) => {
    return (
        <CartContainer>
            <CartImage src={cartItem.imageUrl} alt="item" />
            <CartDetails>
                <CartName>{cartItem.name}</CartName>
                <CartPrice>{cartItem.quantity} x {cartItem.price}</CartPrice>
            </CartDetails>
        </CartContainer>
    )
}

export default CartItem;
