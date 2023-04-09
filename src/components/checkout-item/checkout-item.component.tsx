import React, { useContext } from "react";
import {CheckoutItemContainer, CheckoutItemImageContainer, CheckoutItemQuantity, CheckoutItemRemove, } from './checkout-item.styles';
import { ICartItem } from "../../types/cart.interface";
import { CartContext } from "../../contexts/cart.context";

interface IProps {
  cartItem: ICartItem;
}
const CheckoutItem: React.FunctionComponent<IProps> = ({ cartItem }) => {
  const { name, imageUrl, quantity, price } = cartItem;
  const { clearItemToCart, addItemToCart, removeItemToCart } =
    useContext(CartContext);

  const clearItemHandler = () => clearItemToCart(cartItem);
  const addItemHandler = () => addItemToCart(cartItem);
  const removeItemHandler = () => removeItemToCart(cartItem);
  return (
    <CheckoutItemContainer>
      <CheckoutItemImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </CheckoutItemImageContainer>
      <span>{name}</span>
      <CheckoutItemQuantity>
        <div onClick={removeItemHandler}>
          &#10094;
        </div>
        <span>{quantity}</span>
        <div onClick={addItemHandler}>
          &#10095;
        </div>
      </CheckoutItemQuantity>
      <span>${price}</span>
      <CheckoutItemRemove onClick={clearItemHandler}>
        &#10005;
      </CheckoutItemRemove>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
