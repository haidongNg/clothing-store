import React, { SetStateAction, createContext, useState } from "react";

export interface ICartContextType {
  isCartOpen: boolean;
  setIsCartOpen: React.Dispatch<SetStateAction<any>>;
}

export const CartContext = createContext<ICartContextType>({
  isCartOpen: false,
  setIsCartOpen: () => null,
});

interface IProps {
  children?: React.ReactNode;
}
export const CartProvider: React.FunctionComponent<IProps> = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  return (
    <CartContext.Provider value={{ isCartOpen, setIsCartOpen }}>
      {children}
    </CartContext.Provider>
  );
};
