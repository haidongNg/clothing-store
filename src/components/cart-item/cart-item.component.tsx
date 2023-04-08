import React from "react";
import "./cart-item.component.scss";
import { ICartItem } from "../../types/cart.interface";

interface IProps {
  cartItem: ICartItem;
}

const CartItem: React.FunctionComponent<IProps> = ({ cartItem }) => {
  const { name, quantity, imageUrl, price } = cartItem;
  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
