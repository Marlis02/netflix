import { Button } from "@mui/material";
import { render } from "@testing-library/react";
import React, { useContext, useEffect, useState } from "react";
import { favoriteContext } from "../../context/favoriteContext";
import CustomCard from "../../components/CustomCard/CustomCard";

const Favorite = () => {
  // const { title, setTitle } = useState("");
  const { getProductsById, favorites } = useContext(favoriteContext);
  // const a = localStorage.getItem("title");
  // console.log(a);

  let fav = JSON.parse(localStorage.getItem("favorites"));
  // const onDelete = () => {
  //   window.location.reload();
  // };
  useEffect(() => {
    getProductsById(fav);
  }, []);

  console.log(favorites);
  fav.map((item) => {
    console.log(item);
  });
  return (
    <div>
      <h3>Favorites</h3>
      <div className="mylist_container">
        <h3>Movies</h3>
        <div className="mylist_container_block">
          {favorites &&
            favorites.map((item, id) => (
              <CustomCard product={item} key={id} fav />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Favorite;
