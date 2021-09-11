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

/**
 *  Arrow item remove
 * @param item Item
 * @returns 
 */
export const removeItem = (item: any) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: ActionTypeCart.REMOVE_ITEM,
      payload: item,
    })
  }
}

/**
 * Clear item from cart
 * @param item Item
 * @returns 
 */
export const clearItemFromCart = (item: any) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: ActionTypeCart.CLEAR_ITEM_FROM_CART,
      payload: item,
    })
  }
}