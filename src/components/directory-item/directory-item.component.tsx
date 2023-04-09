import React from "react";
import {
  DirectoryItemContainer,
  BackgroundImage,
  Body,
} from "./directory-item.styles";
import { useNavigate } from "react-router-dom";

interface IProps {
  category: { id: number; title: string; imageUrl: string; route: string };
}

const DirectoryItem: React.FunctionComponent<IProps> = ({ category }) => {
  const { id, title, imageUrl, route } = category;
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);
  return (
    <DirectoryItemContainer key={id} onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
};
export default DirectoryItem;
