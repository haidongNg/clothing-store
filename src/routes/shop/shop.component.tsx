import React, { useContext } from "react";
import "./shop.component.scss";
import { ProductContext } from "../../contexts/product.context";
import ProductCard from "../../components/product-card/product-card.component";
interface IProps {}

const Shop: React.FunctionComponent<IProps> = () => {
  const { products } = useContext(ProductContext);

  return (
    <div className="product-container">
      {products.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </div>
  );
};

export default Shop;
