import React, { useContext } from "react";
import "./categories-preview.styles.scss";
import { CategoriesContext } from "../../contexts/categories.context";
import CategoryPreview from "../../components/category-preview/category-preview.component";

interface IProps {}
const CategoriesPreview: React.FunctionComponent<IProps> = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  return (
    <div className="shop-container">
      {Object.keys(categoriesMap).map((title, idx) => {
        const products = categoriesMap[title];
        return (
          products && (
            <CategoryPreview key={idx} title={title} products={products} />
          )
        );
      })}
    </div>
  );
};

export default CategoriesPreview;
