import { FC, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getAllProduct } from '../../store/actions/index';
import { Product } from '../../core/models';

// Type Props
type ShopProps = {
  getAllProduct: (callback: (val: Product[]) => void) => void;
}

// Component
const Shop: FC<ShopProps> = (props) => {
  const [productList, setProductList] = useState<Product[]>([]);

  useEffect(() => {
    const unsubscription = props.getAllProduct((val: Product[]) => {
      if (val) {
        setProductList(val);
      }
    });
  // eslint-disable-next-line
  }, []);

  return (
    <div>
      
    </div>
  );
};

const connector = connect(null, { getAllProduct });

export default connector(Shop);
