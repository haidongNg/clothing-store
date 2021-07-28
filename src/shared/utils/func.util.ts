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

  return [...cartItems, { ...cartItemToAdd }];
};
