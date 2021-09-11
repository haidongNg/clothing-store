import { FC } from 'react';
import { connect } from 'react-redux'
import { CheckoutItemContainer, CheckoutItemImageContainer, CheckoutItemImage, CheckoutItemSpan, CheckoutItemRemoveBtn, CheckoutItemArrow, CheckoutItemValue } from './CheckoutItem.style';
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
        <CheckoutItemContainer>
            <CheckoutItemImageContainer>
                <CheckoutItemImage imgUrl={checkoutItem.imageUrl} alt="item" />
            </CheckoutItemImageContainer>
            <CheckoutItemSpan className="name">{checkoutItem.name}</CheckoutItemSpan>
            <CheckoutItemSpan className="quantity">
                <CheckoutItemArrow onClick={() => addItem(checkoutItem)}>&#10094;</CheckoutItemArrow>
                <CheckoutItemValue>{checkoutItem.quantity}</CheckoutItemValue>
                <CheckoutItemArrow onClick={() => removeItem(checkoutItem)}>&#10095;</CheckoutItemArrow>
            </CheckoutItemSpan>
            <CheckoutItemSpan className="price">{checkoutItem.price}</CheckoutItemSpan>
            <CheckoutItemRemoveBtn onClick={() => clearItemFromCart(checkoutItem)}>&#10005;</CheckoutItemRemoveBtn>
        </CheckoutItemContainer>
    )
}

const connector = connect(null, { clearItemFromCart, addItem, removeItem })
export default connector(CheckoutItem);
