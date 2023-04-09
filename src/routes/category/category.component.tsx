import React, { useContext, useEffect, useState } from "react";
import "./category.styles.scss";
import { useParams } from "react-router-dom";
import { CategoriesContext } from "../../contexts/categories.context";
import { IProduct } from "../../types/product.interface";
import ProductCard from "../../components/product-card/product-card.component";

interface IProps {}

const Category: React.FunctionComponent<IProps> = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    if (
      category &&
      Object.keys(categoriesMap).includes(category.toLowerCase())
    ) {
      setProducts(categoriesMap[category]);
    }
  }, [category, categoriesMap]);

  return (
    <>
      <h2 className="category-title">{category && category.toUpperCase()}</h2>
      <div className="category-container">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </>
  );
};

export default Category;
