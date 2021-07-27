import { ActionTypeCart } from '../action-types/action.type';

interface CartState {
  hidden: boolean;
}
const initialState: CartState = {
  hidden: true,
};

type Action = {
  type: string;
  payload?: any;
};

const cartReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionTypeCart.TOGGLE_CART_HIDDEN:
      return { ...state, hidden: !state.hidden };
    default:
      return state;
  }
};

export default cartReducer;
