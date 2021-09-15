import { FC } from 'react';
import { connect } from 'react-redux';
import { RootState } from '../../../store/store';
import { toggleCartHidden } from '../../../store/actions';
import CartItem from '../cart-item/CartItem';
import {
  CardEmptyMessage,
} from './CartDropdown.style';
import { withRouter, RouteComponentProps, } from 'react-router-dom';
// Type
interface CartDropdownProps extends RouteComponentProps {
  cartItems?: any;
  toggleCartHidden: () => void;
}

// Component
const CartDropdown: FC<CartDropdownProps> = ({ cartItems, history, toggleCartHidden }) => {
  return (
    <div className="fixed inset-0 right-0 pl-10 max-w-full flex">
      <div className="w-screen max-w-md">
        <div className="h-full flex flex-col bg-white shadow-xl overflow-scroll">
          <div className="flex-1 py-6 overflow-y-auto px-4 sm:px-6">
            <div className="flex items-start justify-between">
              <h1 className="text-lg font-medium text-gray-900">Shopping cart</h1>
              <div className="ml-3 h-7 flex items-center">
                <button type="button" className="-m-2 p-2 text-gray-400 hover:text-gray-500">
                  <span className="sr-only">Close panel</span>
                  <span className="h-6 w-6" aria-hidden="true">X</span>
                </button>
              </div>
            </div>

            <div className="mt-8">
              <div className="flow-root">
                <ul className="-my-6 divide-y divide-gray-200">
                  {cartItems && cartItems.length > 0 ? (
                    cartItems.map((cartItem: any) => (
                      <CartItem key={cartItem.id} cartItem={cartItem} />
                    ))
                  ) : (
                    <CardEmptyMessage>Your cart is empty</CardEmptyMessage>
                  )}
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
            <div className="flex justify-between text-base font-medium text-gray-900">
              <p>Subtotal</p>
              <p>$262.00</p>
            </div>
            <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
            <div className="mt-6">
              <a href="#a" onClick={() => { toggleCartHidden(); history.push('/checkout'); }}
                className="flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                Checkout
              </a>
            </div>
            <div className="mt-6 flex justify-center text-sm text-center text-gray-500">
              <p>
                or{' '}
                <button
                  type="button"
                  className="text-indigo-600 font-medium hover:text-indigo-500">
                  Continue Shopping<span aria-hidden="true"> &rarr;</span>
                </button>
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

// Store
const mapStateToProps = (state: RootState) => ({
  cartItems: state.cart.cartItems,
});

const contector = connect(mapStateToProps, { toggleCartHidden });
export default withRouter(contector(CartDropdown));
