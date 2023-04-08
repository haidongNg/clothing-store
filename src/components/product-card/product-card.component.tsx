import React from "react";
import "./product-card.component.scss";
import Button from "../button/button.component";
import { Product } from "../../types/product.interface";

interface IProps {
  product: Product;
}

const ProductCard: React.FunctionComponent<IProps> = ({ product }) => {
  const { name, imageUrl, price } = product;
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType="inverted">Add to card</Button>
    </div>
  );
};

export default ProductCard;
