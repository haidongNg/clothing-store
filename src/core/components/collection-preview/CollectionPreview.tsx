import { FC } from 'react';
import CollectionItem from '../collection-item/CollectionItem';
import {
  CollectionPreviewContainer,
  Title,
  Preview,
} from './CollectionPreview.style';
type CollectionPreviewProps = {
  title?: string;
  items: any[];
};

const CollectionPreview: FC<CollectionPreviewProps> = ({ title, items }) => {
  return (
    <CollectionPreviewContainer>
      <Title>{title?.toLocaleUpperCase()}</Title>
      <Preview>
        {items
          .filter((item, idx) => idx < 4)
          .map(({ ...otherProps }, index) => (
            <CollectionItem key={index} {...otherProps} />
          ))}
      </Preview>
    </CollectionPreviewContainer>
  );
};

export default CollectionPreview;
