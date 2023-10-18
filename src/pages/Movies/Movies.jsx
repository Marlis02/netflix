import React, { useContext, useEffect } from "react";
import { productContext } from "../../context/productContext";
import CustomCard from "../../components/CustomCard/CustomCard";
import "./style.css";

const Movies = () => {
  const { products, getProducts, getProductById } = useContext(productContext);
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div className="mylist_container">
      <h3>Movies</h3>
      <div className="mylist_container_block">
        {products &&
          products.map((item, id) => <CustomCard product={item} key={id} />)}
      </div>
    </div>
  );
};

export default Movies;
