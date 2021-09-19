import { FC } from 'react';
import { connect } from 'react-redux';
import { CheckoutItem } from '../../core/components';
import { RootState } from '../../store/store';
// Type
type CheckoutProps = {
    cartItems: any[];
    total: number;
};

// Component
const Checkout: FC<CheckoutProps> = ({ cartItems, total = 0 }) => {
    return (
        <div>
            {
                cartItems.map((cartItem, idx) => (<CheckoutItem key={idx} checkoutItem={cartItem} />))
            }
            <div>
                <span>TOTAL: ${total}</span>
            </div>
        </div>
    )
}

// Store
const mapStateToProps = ({ cart: { cartItems } }: RootState) => ({
    cartItems: cartItems,
});

const connector = connect(mapStateToProps, null);
export default connector(Checkout);
