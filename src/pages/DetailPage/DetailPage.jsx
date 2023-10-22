import React, { useContext, useEffect } from "react";
import { productContext } from "../../context/productContext";
import { useParams } from "react-router-dom";
import "./style.css";

const DetailPage = () => {
  const { getProductById, oneProduct } = useContext(productContext);
  const { id } = useParams();

  useEffect(() => {
    getProductById(id);
  }, []);
  console.log(oneProduct.image, "one");
  return (
    <div
      style={{
        width: "100%",
        height: "1500px",
        // background: "blue",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "auto",
          // background: "red",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        {oneProduct && (
          <div
            style={{
              width: "100%",
              height: "auto",
              // background: "red",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "auto",
                // background: "red",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                className="img-detail"
                src={oneProduct.image}
                alt="ывалыовао"
              />
              <div className="detail_desc">
                <h3>{oneProduct.title}</h3>
                <p>{oneProduct.description}</p>
              </div>
            </div>
            <div style={{ marginTop: "50px" }}>
              <video
                style={{ width: "1100px", height: "700px" }}
                src={oneProduct.url}
                controls
              ></video>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DetailPage;
