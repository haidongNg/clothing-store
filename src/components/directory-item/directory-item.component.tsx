import React from "react";
import "./directory-item.styles.scss";

interface IProps {
  category: { id: number; title: string; imageUrl: string };
};

const DirectoryItem: React.FunctionComponent<IProps> = ({ category }) => {
  const { id, title, imageUrl } = category;
  return (
    <div key={id} className="directory-item-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url('${imageUrl}')` }}
      />
      <div className="directory-item-body-container">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};
export default DirectoryItem;
