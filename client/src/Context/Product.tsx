import React, { createContext, useEffect, useReducer } from "react";
import {
  ProductActionKind,
  ProductStateType,
  ProductType,
} from "../Models/ProductModel";
import { productReducer } from "../Reducers/ProductReducer";
import axios from "axios";
import { apiUrl, config } from "./constants";

type ProductContextType = {
  productState: ProductStateType;
  getProducts: () => Promise<void>;
};
const initialProductState: ProductStateType = {
  data: [],
  isLoading: true,
};
const initialContextState: ProductContextType = {
  productState: initialProductState,
  getProducts: () => Promise.resolve(void 0), // then here it can be () => null or () => {}
};

export const ProductContext =
  createContext<ProductContextType>(initialContextState);

interface Props {
  children: React.ReactNode;
}

const ProductProvider: React.FC<Props> = ({ children }) => {
  const [productState, dispatch] = useReducer(
    productReducer,
    initialProductState
  );

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const response = await axios.get<ProductType[]>(`${apiUrl}/product`);

      if (response.status === 200) {
        dispatch({
          type: ProductActionKind.SET_PRODUCT,
          payload: response.data,
        });
      }
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      }
    }
  };

  const dataProductContext = {
    productState,
    getProducts,
  };
  return (
    <ProductContext.Provider value={dataProductContext}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
