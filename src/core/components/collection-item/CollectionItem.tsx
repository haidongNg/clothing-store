import { FC } from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../../store/actions';
import { Product } from '../../models';

type CollectionItemProps = {
  item: Product;
  addItem: (item: any) => void;
};
const CollectionItem: FC<CollectionItemProps> = ({ item, addItem }) => {
  return (
    <div className="group relative" onClick={() => addItem(item)}>
      <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
        <img src={item.imageUrl} alt="Product" className="w-full h-full object-center lg:w-full lg:h-full" />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
            <h3 className="text-sm text-gray-700">
              <a href="#a">
                <span aria-hidden="true" className="absolute inset-0" />
                {item.name}
              </a>
            </h3>
        </div>
        <p className="text-sm font-medium text-gray-900">{item.price}</p>
      </div>
      <button onClick={() => addItem(item)}>ADD TO CART</button>
    </div>
  );
};


const conector = connect(null, { addItem })
export default conector(CollectionItem);
