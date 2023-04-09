import React from "react";
import DirectoryItem from "../directory-item/directory-item.component";
import './directory.styles.scss';

interface IProps {
  categories: { id: number; title: string; imageUrl: string }[];
};

const Directory: React.FunctionComponent<IProps> = ({ categories }) => {
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;
