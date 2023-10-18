import React, { useContext, useEffect } from "react";
import { productContext } from "../../context/productContext";
import { useParams } from "react-router-dom";

const DetailPage = () => {
  const { getProductById, oneProduct } = useContext(productContext);
  const { id } = useParams();

  useEffect(() => {
    getProductById(id);
  }, []);
  console.log(oneProduct.image, "one");
  return (
    <div>
      <h3>Detail Page</h3>
      {oneProduct && (
        <div>
          <h3>{oneProduct.title}</h3>
          <div style={{ width: "600px", height: "300px" }}>
            <img
              style={{ width: "600px", height: "300px" }}
              src={oneProduct.image}
              alt="ывалыовао"
            />
          </div>

          <video
            style={{ width: "500px", height: "300px" }}
            src={oneProduct.url}
            controls
          ></video>
        </div>
      )}
    </div>
  );
};

export default DetailPage;
