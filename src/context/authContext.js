import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
export const authContext = React.createContext();
//==========================================================
const API = "http://34.141.12.192/";

const AuthContextProvider = ({ children }) => {
  //----------------test-----------
  const auth = () => {
    console.log("auth");
  };

  const handleSignUp = async (data, navigate) => {
    try {
      await axios.post(`http://34.141.12.192/api/v1/account/register/`, data);
      navigate("/sign-in");
      toast.success("yes");
    } catch (error) {
      console.log(error);
    }
  };
  const handleSignIn = async (data, navigate) => {
    try {
      const response = await axios.post(
        "http://34.141.12.192/api/v1/account/login/",
        data
      );

      const tokens = response.data;

      // Сохраняем токены в локальное хранилище
      localStorage.setItem("tokens", JSON.stringify(tokens));
      localStorage.setItem("email", data.email);

      toast.success("Успешная аутентификация!");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignOut = () => {
    localStorage.removeItem("tokens");
    localStorage.removeItem("email");
  };

  const changePassword = async (data, navigate) => {
    try {
      await axios.post(
        `http://34.141.12.192/api/v1/account/change_password/`,
        data
      );
      navigate("/sign-in");
      toast.success("yes");
    } catch (error) {
      console.log(error);
    }
  };
  //-------------------------------
  return (
    <authContext.Provider
      value={{
        auth,
        handleSignUp,
        handleSignIn,
        handleSignOut,
      }}
    >
      {children}
    </authContext.Provider>
  );
};

export default AuthContextProvider;
