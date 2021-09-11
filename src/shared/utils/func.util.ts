/**
 * Check multiple items to cart
 *
 * @param cartItems cartList
 * @param cartItemToAdd item add
 * @returns
 */
export const addItemToCart = (cartItems: any[], cartItemToAdd: any) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id,
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: (cartItem.quantity ? cartItem.quantity : 1) + 1 }
        : cartItem,
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

/**
 * Remove item cart
 * 
 * @param cartItems list current Item
 * @param cartItemRemove item remove
 * @returns 
 */
export const removeItemFromCart = (cartItems: any[], cartItemRemove: any) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemRemove.id,
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== cartItemRemove.id);
  }

  return  cartItems.map(cartItem => cartItem.id === cartItemRemove.id ? {...cartItem, quantity: (cartItem.quantity - 1)} : cartItem);
}