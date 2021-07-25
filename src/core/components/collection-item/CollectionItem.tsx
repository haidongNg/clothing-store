import { FC } from 'react';
import {
  CollectionItemContainer,
  CollectionImage,
  CollectionFooter,
  CollectionName,
  CollectionPrice,
} from './CollectionItem.style';

type CollectionItemProps = {
  image: string;
  name: string;
  price: string;
};
const CollectionItem: FC<CollectionItemProps> = ({
  image,
  name,
  price,
  ...props
}) => {
  return (
    <CollectionItemContainer>
      <CollectionImage src={image} />
      <CollectionFooter>
        <CollectionName>{name}</CollectionName>
        <CollectionPrice>{price}</CollectionPrice>
      </CollectionFooter>
    </CollectionItemContainer>
  );
};

export default CollectionItem;
