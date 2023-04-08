import React, { SetStateAction, createContext } from "react";
import { useState } from "react";
import PRODUCT from "../shop-data.json";
import { Product } from "../types/product.interface";
export interface IProductContextType {
  products: Product[];
  setProducts: React.Dispatch<SetStateAction<any>>;
}

export const ProductContext = createContext<IProductContextType>({
  products: [],
  setProducts: () => null,
});

interface IProps {
  children?: React.ReactNode;
}
export const ProductProvider: React.FunctionComponent<IProps> = ({
  children,
}) => {
  const [products, setProducts] = useState(PRODUCT);
  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
};
