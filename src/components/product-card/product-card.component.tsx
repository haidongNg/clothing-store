import React, { useContext } from "react";
import "./product-card.component.scss";
import Button from "../button/button.component";
import { IProduct } from "../../types/product.interface";
import { CartContext } from "../../contexts/cart.context";

interface IProps {
  product: IProduct;
}

const ProductCard: React.FunctionComponent<IProps> = ({ product }) => {
  const { name, imageUrl, price } = product;
  const { addItemToCart } = useContext(CartContext);

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button
        buttonType="inverted"
        buttonOptions={{ onClick: () => addItemToCart(product) }}
      >
        Add to card
      </Button>
    </div>
  );
};

export default ProductCard;
