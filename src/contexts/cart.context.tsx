import React, {
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from "react";
import { ICartItem } from "../types/cart.interface";
import { IProduct } from "../types/product.interface";

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

export interface ICartContextType {
  isCartOpen: boolean;
  setIsCartOpen: React.Dispatch<SetStateAction<boolean>>;
  cartItems: ICartItem[];
  addItemToCart: React.Dispatch<SetStateAction<any>>;
  cartCount: number;
}

export const CartContext = createContext<ICartContextType>({
  isCartOpen: false,
  setIsCartOpen: () => null,
  cartItems: [],
  addItemToCart: () => null,
  cartCount: 0,
});

interface IProps {
  children?: React.ReactNode;
}
export const CartProvider: React.FunctionComponent<IProps> = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<ICartItem[]>([]);
  const [cartCount, setCartCount] = useState<number>(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total: number, cartItem: ICartItem) => total + cartItem.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);
  /**
   * Add item to cart
   * @param productToAdd
   */
  const addItemToCart = (productToAdd: IProduct) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };
  return (
    <CartContext.Provider
      value={{ isCartOpen, setIsCartOpen, cartItems, addItemToCart, cartCount }}
    >
      {children}
    </CartContext.Provider>
  );
};
