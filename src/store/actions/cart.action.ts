import { Dispatch } from 'redux';
import { ActionTypeCart } from '../action-types/action.type';

export const toggleCartHidden = () => {
  return (dispatch: Dispatch) => {
    dispatch({ type: ActionTypeCart.TOGGLE_CART_HIDDEN });
  };
};
