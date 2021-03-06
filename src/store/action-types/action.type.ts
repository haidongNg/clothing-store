/**
 * Product
 */
export namespace ActionTypeProduct {
  export const GET_ALL_PRODUCT = 'GET_ALL_PRODUCT';
}

/**
 * User
 */
export namespace ActionTypeUser {
  export const SET_CURRENT_MEMBER = 'SET_CURRENT_MEMBER';
  export const SET_CURRENT_MEMBER_EMPTY = 'SET_CURRENT_MEMBER_EMPTY';
}

/**
 * Cart
 */
export namespace ActionTypeCart {
  export const TOGGLE_CART_HIDDEN = 'TOGGLE_CART_HIDDEN';
  export const ADD_ITEM = 'ADD_ITEM';
  export const REMOVE_ITEM = 'REMOVE_ITEM';
  export const CLEAR_ITEM_FROM_CART = 'CLEAR_ITEM_FROM_CART';
}
