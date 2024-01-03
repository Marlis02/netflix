import axios from "axios";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { auth } from "../firebase";
export const authContext = React.createContext();
//==========================================================
const API = "http://34.141.12.192/";

const AuthContextProvider = ({ children }) => {
  //----------------test-----------

  const handleSignUp = async (data) => {
    try {
      await createUserWithEmailAndPassword(auth, data.email, data.password);
      toast.success("yes");
    } catch (error) {
      console.log(error);
    }
  };
  const handleSignIn = async (data, navigate) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      const user = userCredential.user;

      // Токен доступа (ID token)
      const idToken = await user.getIdToken();

      // Токен обновления (Refresh token)
      const refreshToken = user.refreshToken;

      // Другие данные пользователя, если необходимо
      const displayName = user.displayName;
      const email = user.email;

      // Сохранение данных в localStorage или другое место по вашему выбору
      localStorage.setItem("idToken", idToken);
      localStorage.setItem("refreshToken", refreshToken);
      localStorage.setItem("displayName", displayName);
      localStorage.setItem("email", email);
      localStorage.setItem("favorites", JSON.stringify([]));

      toast.success("Успешный вход");

      setTimeout(() => {
        // Обновление страницы после успешного выхода
        navigate("/");
        window.location.reload(true);
      }, 1000);
    } catch (error) {
      console.error("Ошибка при входе пользователя:", error);
      toast.error("Ошибка входа. Пожалуйста, проверьте ваш email и пароль.");
    }
  };

  // const handleSignIn = async (data, navigate) => {
  //   try {
  //     const response = await axios.post(
  //       "http://34.141.12.192/api/v1/account/login/",
  //       data
  //     );

  //     const tokens = response.data;

  //     // Сохраняем токены в локальное хранилище
  //     localStorage.setItem("tokens", JSON.stringify(tokens));
  //     localStorage.setItem("email", data.email);

  //     toast.success("Успешная аутентификация!");
  //     navigate("/");
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const handleSignOut = () => {
  //   localStorage.removeItem("tokens");
  //   localStorage.removeItem("email");
  // };
  const handleSignOut = async () => {
    try {
      await auth.signOut();
      localStorage.removeItem("idToken");
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("displayName");
      localStorage.removeItem("email");
      localStorage.removeItem("favorites");
      toast.success("Выход выполнен успешно");

      setTimeout(() => {
        // Обновление страницы после успешного выхода
        window.location.reload(true);
      }, 1500);
    } catch (error) {
      console.error("Ошибка при выходе пользователя:", error);
      toast.error("Ошибка выхода. Пожалуйста, попробуйте ещё раз.");
    }
  };

  const forgotPass = async (email) => {
    try {
      await sendPasswordResetEmail(auth, email);
      alert("Письмо для сброса пароля отправлено на " + email);
      // navigate("/sign-in");
    } catch (error) {
      console.error("Ошибка при отправке письма для сброса пароля:", error);
    }
  };
  //-------------------------------
  return (
    <authContext.Provider
      value={{
        handleSignUp,
        handleSignIn,
        handleSignOut,
        forgotPass,
      }}
    >
      {children}
    </authContext.Provider>
  );
};

export default AuthContextProvider;
