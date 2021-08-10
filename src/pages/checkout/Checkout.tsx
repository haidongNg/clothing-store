import { FC } from 'react';
import { connect } from 'react-redux';
import { CheckoutItem } from '../../core/components';
import { RootState } from '../../store/store';
import { CheckoutContainer, CheckoutHeader, CheckoutHeaderBlock, CheckoutHeaderSpan, CheckoutTotal } from './Checkout.style';
// Type
type CheckoutProps = {
    cartItems: any[];
    total: number;
};

// Component
const Checkout: FC<CheckoutProps> = ({ cartItems, total = 0 }) => {
    return (
        <CheckoutContainer>
            {/* Header */}
            <CheckoutHeader>
                <CheckoutHeaderBlock>
                    <CheckoutHeaderSpan>Product</CheckoutHeaderSpan>
                </CheckoutHeaderBlock>
                <CheckoutHeaderBlock>
                    <CheckoutHeaderSpan>Description</CheckoutHeaderSpan>
                </CheckoutHeaderBlock>
                <CheckoutHeaderBlock>
                    <CheckoutHeaderSpan>Quantity</CheckoutHeaderSpan>
                </CheckoutHeaderBlock>
                <CheckoutHeaderBlock>
                    <CheckoutHeaderSpan>Price</CheckoutHeaderSpan>
                </CheckoutHeaderBlock>
                <CheckoutHeaderBlock>
                    <CheckoutHeaderSpan>Remove</CheckoutHeaderSpan>
                </CheckoutHeaderBlock>
            </CheckoutHeader>
            {
                cartItems.map((cartItem, idx) => (<CheckoutItem key={idx} checkoutItem={cartItem} />))
            }
            <CheckoutTotal>
                <span>TOTAL: ${total}</span>
            </CheckoutTotal>
        </CheckoutContainer>
    )
}

// Store
const mapStateToProps = ({ cart: { cartItems } }: RootState) => ({
    cartItems: cartItems,
});

const connector = connect(mapStateToProps, null);
export default connector(Checkout);
