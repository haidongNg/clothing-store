import { FC, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getAllProduct } from '../../store/actions/index';
import { Product } from '../../core/models';
import { CardItem } from '../../core/components';
import image18 from '../../assets/image18.png';
// Type Props
type ShopProps = {
  getAllProduct: (callback: (val: Product[]) => void) => void;
}

// Component
const Shop: FC<ShopProps> = (props) => {
  const [productList, setProductList] = useState<Product[]>([]);

  useEffect(() => {
    props.getAllProduct((val: Product[]) => {
      if (val) {
        setProductList(val);
      }
    });

    // eslint-disable-next-line
  }, []);

  return (
    <div>
      {productList.map((val, index) => (<CardItem key={index} img={image18} name={val.name}></CardItem>))}
    </div>
  );
};

const connector = connect(null, { getAllProduct });

export default connector(Shop);
