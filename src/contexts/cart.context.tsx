import React, {
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from "react";
import { ICartItem } from "../types/cart.interface";
import { IProduct } from "../types/product.interface";

/**
 * Add item
 *
 * @param cartItems
 * @param productToAdd
 * @returns
 */
const addCartItem = (
  cartItems: ICartItem[],
  productToAdd: IProduct
): ICartItem[] => {
  // find if cartItems contains productToAdd
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  // if found, increment quantity
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

/**
 * Clear item
 *
 * @param cartItems
 * @param cartItemToRemove
 * @returns
 */
const removeCartItem = (cartItems: ICartItem[], cartItemToRemove: IProduct) => {
  // find the cart item to remove
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );
  // check if quantity is equal to 1, if it is remove that item from the cart
  if (existingCartItem && existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  // return back cartitems with matching cart item with reduced quantity
  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const clearCartItem = (cartItems: ICartItem[], cartItemToClear: IProduct) =>
  cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);

export interface ICartContextType {
  isCartOpen: boolean;
  setIsCartOpen: React.Dispatch<SetStateAction<boolean>>;
  cartItems: ICartItem[];
  addItemToCart: React.Dispatch<SetStateAction<any>>;
  removeItemToCart: React.Dispatch<SetStateAction<any>>;
  clearItemToCart: React.Dispatch<SetStateAction<any>>;
  cartCount: number;
  cartTotal: number;
}

export const CartContext = createContext<ICartContextType>({
  isCartOpen: false,
  setIsCartOpen: () => null,
  cartItems: [],
  addItemToCart: () => null,
  cartCount: 0,
  removeItemToCart: () => null,
  clearItemToCart: () => null,
  cartTotal: 0,
});

interface IProps {
  children?: React.ReactNode;
}
export const CartProvider: React.FunctionComponent<IProps> = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<ICartItem[]>([]);
  const [cartCount, setCartCount] = useState<number>(0);
  const [cartTotal, setCartTotal] = useState<number>(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total: number, cartItem: ICartItem) => total + cartItem.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);

  useEffect(() => {
    const newCartTotal = cartItems.reduce(
      (total: number, cartItem: ICartItem) =>
        total + cartItem.quantity * cartItem.price,
      0
    );
    setCartTotal(newCartTotal);
  }, [cartItems]);

  /**
   * Add item to cart
   * @param productToAdd
   */
  const addItemToCart = (productToAdd: IProduct) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  /**
   * Remove item to cart
   * @param productToAdd
   */
  const removeItemToCart = (cartItemToRemove: IProduct) => {
    setCartItems(removeCartItem(cartItems, cartItemToRemove));
  };

  /**
   * Clear item to cart
   * @param productToAdd
   */
  const clearItemToCart = (cartItemToRemove: IProduct) => {
    setCartItems(clearCartItem(cartItems, cartItemToRemove));
  };

  return (
    <CartContext.Provider
      value={{
        isCartOpen,
        setIsCartOpen,
        cartItems,
        addItemToCart,
        cartCount,
        removeItemToCart,
        clearItemToCart,
        cartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
