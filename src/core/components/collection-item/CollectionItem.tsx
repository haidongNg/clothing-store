import { FC } from 'react';
import { connect } from 'react-redux';
import {
  CollectionItemContainer,
  CollectionImage,
  CollectionFooter,
  CollectionName,
  CollectionPrice,
} from './CollectionItem.style';

import { addItem } from '../../../store/actions';
import { Product } from '../../models';

type CollectionItemProps = {
  item: Product;
  addItem: (item: any) => void;
};
const CollectionItem: FC<CollectionItemProps> = ({ item, addItem }) => {
  return (
    <CollectionItemContainer>
      <CollectionImage src={item.imageUrl} />
      <CollectionFooter>
        <CollectionName>{item.name}</CollectionName>
        <CollectionPrice>{item.price}</CollectionPrice>
      </CollectionFooter>
      <button onClick={() => addItem(item)}>ADD TO CART</button>
    </CollectionItemContainer>
  );
};


const conector = connect(null, { addItem })
export default conector(CollectionItem);
