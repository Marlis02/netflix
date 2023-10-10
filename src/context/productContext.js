import axios from "axios";
import React, { useContext, useReducer } from "react";
export const productContext = React.createContext();
export const useProduct = () => {
  return useContext(productContext);
};
const API = "http://localhost:8000";

const product = () => {
  console.log("product");
};

const ProductContextProvider = ({ children }) => {
  return (
    <productContext.Provider value={{ product }}>
      {children}
    </productContext.Provider>
  );
};

export default ProductContextProvider;
