import { Dispatch } from 'redux';
import { ActionTypeCart } from '../action-types/action.type';

/**
 * Toggle show cart
 * 
 * @returns 
 */
export const toggleCartHidden = () => {
  return (dispatch: Dispatch) => {
    dispatch({ type: ActionTypeCart.TOGGLE_CART_HIDDEN });
  };
};

/**
 * Add item cart
 * 
 * @param item product
 * @returns 
 */
export const addItem = (item: any) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: ActionTypeCart.ADD_ITEM,
      payload: item,
    });
  };
};
