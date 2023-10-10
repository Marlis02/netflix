import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export const authContext = React.createContext();
//==========================================================

const AuthContextProvider = ({ children }) => {
  //----------------test-----------
  const auth = () => {
    console.log("auth");
  };
  //-------------------------------
  return (
    <authContext.Provider value={{ auth }}>{children}</authContext.Provider>
  );
};

export default AuthContextProvider;
