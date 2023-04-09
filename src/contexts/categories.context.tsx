import React, { SetStateAction, createContext, useEffect } from "react";
import { useState } from "react";
import { getCategoriesAndDocuments } from "../utils/firebase/firebas.utils";
import { IProduct } from "../types/product.interface";

type TCategory = {
  [key: string]: IProduct[] | any;
};
export interface ICategoriesContextType {
  categoriesMap: TCategory;
  setCategoriesMap: React.Dispatch<SetStateAction<any>>;
}

export const CategoriesContext = createContext<ICategoriesContextType>({
  categoriesMap: {},
  setCategoriesMap: () => null,
});

interface IProps {
  children?: React.ReactNode;
}
export const CategoriesProvider: React.FunctionComponent<IProps> = ({
  children,
}) => {
  const [categoriesMap, setCategoriesMap] = useState({});
  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      setCategoriesMap(categoryMap);
    };
    getCategoriesMap();
  }, []);
  return (
    <CategoriesContext.Provider value={{ categoriesMap, setCategoriesMap }}>
      {children}
    </CategoriesContext.Provider>
  );
};
