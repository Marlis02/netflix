import React, { useContext, useEffect } from "react";
import { favoriteContext } from "../../context/favoriteContext";
import { productContext } from "../../context/productContext";
import { authContext } from "../../context/authContext";
import { cartContext } from "../../context/cartContext";

const Home = () => {
  const { cart } = useContext(cartContext);
  cart();
  return (
    <div>
      <h3>Home</h3>
    </div>
  );
};

export default Home;
