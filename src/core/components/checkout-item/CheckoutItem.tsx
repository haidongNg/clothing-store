import { FC } from 'react';
import { connect } from 'react-redux'
import { clearItemFromCart, addItem, removeItem } from '../../../store/actions';

type CheckoutItemProps = {
    checkoutItem: {
        imageUrl: string;
        name: string;
        quantity: string;
        price: number;
    };
    clearItemFromCart: (item: any) => void;
    addItem: (item: any) => void;
    removeItem: (item: any) => void;
};

const CheckoutItem: FC<CheckoutItemProps> = ({ checkoutItem, clearItemFromCart, addItem, removeItem }) => {
    return (
        <div>
            <div>
                <img src={checkoutItem.imageUrl} alt="item" />
            </div>
            <span className="name">{checkoutItem.name}</span>
            <select 
                className="px-4 py-3">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            <span>
                <div onClick={() => addItem(checkoutItem)}>&#10094;</div>
                <span>{checkoutItem.quantity}</span>
                <div onClick={() => removeItem(checkoutItem)}>&#10095;</div>
            </span>
            <span className="price">{checkoutItem.price}</span>
            <div onClick={() => clearItemFromCart(checkoutItem)}>&#10005;</div>
        </div>
    )
}

const connector = connect(null, { clearItemFromCart, addItem, removeItem })
export default connector(CheckoutItem);
