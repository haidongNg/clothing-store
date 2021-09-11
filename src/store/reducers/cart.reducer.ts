import { addItemToCart, removeItemFromCart } from '../../shared/utils/func.util';
import { ActionTypeCart } from '../action-types/action.type';

// Model
interface CartState {
  hidden: boolean;
  cartItems: any[];
}

const initialState: CartState = {
  hidden: true,
  cartItems: [],
};

type Action = {
  type: string;
  payload?: any;
};

const cartReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionTypeCart.TOGGLE_CART_HIDDEN:
      return { ...state, hidden: !state.hidden };
    case ActionTypeCart.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    case ActionTypeCart.REMOVE_ITEM:
      return { ...state, cartItems: removeItemFromCart(state.cartItems, action.payload) }
    case ActionTypeCart.CLEAR_ITEM_FROM_CART:
      return { ...state, cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id) }
    default:
      return state;
  }
};

export default cartReducer;
