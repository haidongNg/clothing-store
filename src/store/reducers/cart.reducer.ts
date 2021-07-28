import { addItemToCart } from '../../shared/utils/func.util';
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
    default:
      return state;
  }
};

export default cartReducer;
