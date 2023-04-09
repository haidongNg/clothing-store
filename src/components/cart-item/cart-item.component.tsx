import React from "react";
import { CartItemContainer, ItemDetails } from "./cart-item.styles";
import { ICartItem } from "../../types/cart.interface";

interface IProps {
  cartItem: ICartItem;
}

const CartItem: React.FunctionComponent<IProps> = ({ cartItem }) => {
  const { name, quantity, imageUrl, price } = cartItem;
  return (
    <CartItemContainer>
      <img src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <span>{name}</span>
        <span>
          {quantity} x ${price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
