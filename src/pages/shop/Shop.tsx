import { FC, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Collection, Product } from '../../core/models';
import { CollectionPreview } from '../../core/components';
import { ShopContainer } from './Shop.style';
import SHOP_DATA from './shop.data.js';
// Type Props
type ShopProps = {
  getAllProduct: (callback: (val: Product[]) => void) => void;
}

// Component
const Shop: FC<ShopProps> = (props) => {
  // eslint-disable-next-line
  const [collectionList, setcollectionList] = useState<Collection[]>(SHOP_DATA);

  useEffect(() => {

    // eslint-disable-next-line
  }, []);

  return (
    <ShopContainer>
      {collectionList.map(({ id, ...otherCollectioProps }) => <CollectionPreview key={id} {...otherCollectioProps} />)}
    </ShopContainer>
  );
};

const connector = connect(null, {});

export default connector(Shop);
