import React, { useContext, useEffect } from "react";
import Button from "@mui/material/Button";
import "./style.css";
import { LuBookmark } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import { productContext } from "../../context/productContext";
import { MdDeleteForever } from "react-icons/md";
import { FiEdit3 } from "react-icons/fi";
import { favoriteContext } from "../../context/favoriteContext";
import { toast } from "react-toastify";

const CustomCard = ({ product, mylist, fav }) => {
  const navigate = useNavigate();
  const { products, getProducts, getProductById, deleteProductById } =
    useContext(productContext);
  const { removeProductIdFromLocalStorage } = useContext(favoriteContext);
  useEffect(() => {
    getProducts();
  }, []);

  const handleProductDetails = (productId) => {
    getProductById(productId);
    navigate(`/detail/${productId}`);
  };

  const handleEditClick = (productId) => {
    navigate(`/editproduct/${productId}`);
  };

  const deleteProd = (id) => {
    deleteProductById(id);
  };

  const removeFromFav = (id, title) => {
    removeProductIdFromLocalStorage(id, title);
  };

  // const onFavorite = (productId) => {
  //   localStorage.setItem("id", productId);
  //   console.log(productId);
  // };

  const onFavorite = (productId, title) => {
    // Получаем текущий массив из localStorage или создаем новый пустой массив
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    // Проверяем, содержится ли productId в массиве
    if (!favorites.includes(productId)) {
      // Если нет, добавляем productId в массив
      favorites.push(productId);

      // Сохраняем обновленный массив в localStorage
      localStorage.setItem("favorites", JSON.stringify(favorites));

      toast.success(title + " добавлен в избранное");
    } else {
      // Если productId уже есть в массиве, можно решить удалить его или проигнорировать
      toast.warning(`${title} уже находится в избранном`);
    }
  };

  return (
    <div className="card_container">
      <img className="card_img" src={product.image} alt="aaa" />
      <div className="card_desc_container">
        <p className="card_p">
          <span className="rating">7.7</span>
          {product.title}
        </p>
        <div className="card_desc_btns">
          <button
            onClick={() => handleProductDetails(product.id)}
            className="card_btn1"
          >
            Подробнее
          </button>

          {mylist && (
            <>
              <button className="card_btn2">
                <FiEdit3
                  color="white"
                  size={20}
                  onClick={() => handleEditClick(product.id)}
                />
              </button>
              <button
                onClick={() => deleteProd(product.id)}
                className="card_btn2"
              >
                <MdDeleteForever color="white" size={20} />
              </button>
            </>
          )}
          {fav ? (
            <>
              <button
                onClick={() => removeFromFav(product.id, product.title)}
                className="card_btn2"
              >
                <MdDeleteForever color="white" size={20} />
              </button>
            </>
          ) : (
            <button className="card_btn2">
              <LuBookmark
                color="white"
                size={20}
                onClick={() => onFavorite(product.id, product.title)}
              />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CustomCard;
