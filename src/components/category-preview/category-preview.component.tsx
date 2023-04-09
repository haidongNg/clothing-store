import React from "react";
import "./category-preview.styles.scss";
import { IProduct } from "../../types/product.interface";
import ProductCard from "../product-card/product-card.component";
import { Link } from "react-router-dom";

interface IProps {
  title: string;
  products: IProduct[];
}
const CategoryPreview: React.FunctionComponent<IProps> = ({
  title,
  products,
}) => {
  return (
    <div className="category-preview-container">
      <h2>
        <Link className="title" to={title}>
          {title && title.toUpperCase()}
        </Link>
      </h2>
      <div className="preview">
        {products &&
          products
            .filter((_, idx) => idx < 4)
            .map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
      </div>
    </div>
  );
};

export default CategoryPreview;
