import React, { useContext } from "react";
import {
  ProductCartContainer,
  ProductCartFooter,
  FooterName,
  FooterPrice,
} from "./product-card.styles";
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
    <ProductCartContainer>
      <img src={imageUrl} alt={`${name}`} />
      <ProductCartFooter>
        <FooterName className="name">{name}</FooterName>
        <FooterPrice className="price">${price}</FooterPrice>
      </ProductCartFooter>
      <Button
        buttonType="inverted"
        buttonOptions={{ onClick: () => addItemToCart(product) }}
      >
        Add to card
      </Button>
    </ProductCartContainer>
  );
};

export default ProductCard;
