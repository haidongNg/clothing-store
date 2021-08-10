import { FC } from 'react';
import { CheckoutItemContainer, CheckoutItemImageContainer, CheckoutItemImage, CheckoutItemSpan, CheckoutItemRemoveBtn } from './CheckoutItem.style';
type CheckoutItemProps = {
    checkoutItem: {
        imageUrl: string;
        name: string;
        quantity: string;
        price: number;
    };
};

const CheckoutItem: FC<CheckoutItemProps> = ({ checkoutItem }) => {
    return (
        <CheckoutItemContainer>
            <CheckoutItemImageContainer>
                <CheckoutItemImage imgUrl={checkoutItem.imageUrl} alt="item" />
            </CheckoutItemImageContainer>
            <CheckoutItemSpan className="name">{checkoutItem.name}</CheckoutItemSpan>
            <CheckoutItemSpan className="quantity">{checkoutItem.quantity}</CheckoutItemSpan>
            <CheckoutItemSpan className="price">{checkoutItem.price}</CheckoutItemSpan>
            <CheckoutItemRemoveBtn>&#10005;</CheckoutItemRemoveBtn>
        </CheckoutItemContainer>
    )
}

export default CheckoutItem;
