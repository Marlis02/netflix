import axios from "axios";
import React, { useReducer } from "react";
export const cartContext = React.createContext();
//==========================================================
const API = " http://localhost:8000";

//=============================================
const CartContextProvider = ({ children }) => {
  const cart = () => {
    console.log("cart");
  };
  return (
    <cartContext.Provider value={{ cart }}>{children}</cartContext.Provider>
  );
};

export default CartContextProvider;
