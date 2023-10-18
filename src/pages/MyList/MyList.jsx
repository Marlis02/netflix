import React, { useContext, useEffect } from "react";
import { productContext } from "../../context/productContext";
import "./style.css";
import { useNavigate } from "react-router-dom";
import CustomCard from "../../components/CustomCard/CustomCard";

const MyList = () => {
  const { products, getProducts, getProductById } = useContext(productContext);
  useEffect(() => {
    getProducts();
  }, []);
  console.log(products, "sdfkh");
  return (
    <div className="mylist_container">
      <h3>MyList</h3>
      <div className="mylist_container_block">
        {products &&
          products.map((item, id) => (
            <CustomCard product={item} key={id} mylist />
          ))}
      </div>
    </div>
  );
};

export default MyList;
