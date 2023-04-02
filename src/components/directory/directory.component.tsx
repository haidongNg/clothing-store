import React from "react";
import CategoryItem from "../category-item/category-item.component";
import './directory.styles.scss';

interface IProps {
  categories: { id: number; title: string; imageUrl: string }[];
};

const Directory: React.FunctionComponent<IProps> = ({ categories }) => {
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;
