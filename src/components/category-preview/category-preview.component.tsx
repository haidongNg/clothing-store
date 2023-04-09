import React from "react";
import {
  CategoryPreviewContainer,
  CategoryPreviewTitle,
  CategoryPreviewBody,
} from "./category-preview.styles";
import { IProduct } from "../../types/product.interface";
import ProductCard from "../product-card/product-card.component";

interface IProps {
  title: string;
  products: IProduct[];
}
const CategoryPreview: React.FunctionComponent<IProps> = ({
  title,
  products,
}) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <CategoryPreviewTitle to={title}>{title}</CategoryPreviewTitle>
      </h2>
      <CategoryPreviewBody>
        {products &&
          products
            .filter((_, idx) => idx < 4)
            .map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
      </CategoryPreviewBody>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
