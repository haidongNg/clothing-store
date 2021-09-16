import { FC } from 'react';
import { connect } from 'react-redux';
import { RootState } from '../../../store/store';
import { toggleCartHidden } from '../../../store/actions';
import CartItem from '../cart-item/CartItem';
import {Link} from 'react-router-dom';
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
const CartDropdown: FC<CartDropdownProps> = ({ cartItems, toggleCartHidden }) => {
  return (
    <>
      {/* This example requires Tailwind CSS v2.0+ */}
      <div
        className="fixed inset-0 overflow-hidden z-50"
        aria-labelledby="slide-over-title"
        role="dialog"
        aria-modal="true" onClick={() => toggleCartHidden()}
      >
        <div className="absolute inset-0 overflow-hidden">
          {/*
Background overlay, show/hide based on slide-over state.
Entering: "ease-in-out duration-500"
  From: "opacity-0"
  To: "opacity-100"
Leaving: "ease-in-out duration-500"
  From: "opacity-100"
  To: "opacity-0"
    */}
          <div
            className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
            aria-hidden="true"
          />
          <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex">
            {/*
  Slide-over panel, show/hide based on slide-over state.

  Entering: "transform transition ease-in-out duration-500 sm:duration-700"
    From: "translate-x-full"
    To: "translate-x-0"
  Leaving: "transform transition ease-in-out duration-500 sm:duration-700"
    From: "translate-x-0"
    To: "translate-x-full"
*/}
            <div className="w-screen max-w-md">
              <div className="h-full flex flex-col bg-white shadow-xl overflow-y-scroll">
                <div className="flex-1 py-6 overflow-y-auto px-4 sm:px-6">
                  <div className="flex items-start justify-between">
                    <h2
                      className="text-lg font-medium text-gray-900"
                      id="slide-over-title"
                    >
                      Shopping cart
                    </h2>
                    <div className="ml-3 h-7 flex items-center">
                      <button
                        type="button"
                        className="-m-2 p-2 text-gray-400 hover:text-gray-500" onClick={() => toggleCartHidden()}
                      >
                        <span className="sr-only">Close panel</span>
                        {/* Heroicon name: outline/x */}
                        <svg
                          className="h-6 w-6"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
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
                        {/* More products... */}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                  <div className="flex justify-between text-base font-medium text-gray-900">
                    <p>Subtotal</p>
                    <p>$262.00</p>
                  </div>
                  <p className="mt-0.5 text-sm text-gray-500">
                    Shipping and taxes calculated at checkout.
                  </p>
                  <div className="mt-6">
                    <Link
                      to="/checkout"
                      className="flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                    >
                      Checkout
                    </Link>
                  </div>
                  <div className="mt-6 flex justify-center text-sm text-center text-gray-500">
                    <p>
                      or{" "}
                      <button
                        type="button"
                        className="text-indigo-600 font-medium hover:text-indigo-500"
                      >
                        Continue Shopping<span aria-hidden="true"> →</span>
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  );
};

// Store
const mapStateToProps = (state: RootState) => ({
  cartItems: state.cart.cartItems,
});

const contector = connect(mapStateToProps, { toggleCartHidden });
export default withRouter(contector(CartDropdown));
