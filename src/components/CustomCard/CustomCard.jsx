import React, { useContext, useEffect } from "react";
import Button from "@mui/material/Button";
import "./style.css";
import { LuBookmark } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import { productContext } from "../../context/productContext";
import { MdDeleteForever } from "react-icons/md";
import { FiEdit3 } from "react-icons/fi";

const CustomCard = ({ product, mylist }) => {
  const navigate = useNavigate();
  const { products, getProducts, getProductById, deleteProductById } =
    useContext(productContext);
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
          <button className="card_btn2">
            <LuBookmark color="white" size={20} />
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
        </div>
      </div>
    </div>
  );
};

export default CustomCard;
