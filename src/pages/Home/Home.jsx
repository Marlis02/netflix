import React, { useContext, useEffect, useState } from "react";
import "./style.css";
import CustomCard from "../../components/CustomCard/CustomCard";
import { Button, TextField } from "@mui/material";
import Carousel from "../../components/Carousel/Carousel";
import { productContext } from "../../context/productContext";

const ITEMS_PER_PAGE = 4;

const Home = () => {
  const { products, getProducts } = useContext(productContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    getProducts();
  }, []);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredProducts = products
    ? products.filter((item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  const productsToShow = filteredProducts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <div className="home_page">
      <Carousel />
      <div className="home-card">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <TextField
            style={{ marginTop: "10px", width: "500px" }}
            type="text"
            placeholder="Search by title"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
        <div className="home_card_block">
          {productsToShow.length > 0 ? (
            productsToShow.map((item, id) => (
              <CustomCard product={item} key={id} />
            ))
          ) : (
            <p>No products available for this search.</p>
          )}
        </div>
        <div className="pagination" style={{ display: "flex" }}>
          <Button
            variant="contained"
            onClick={handlePrevPage}
            disabled={currentPage === 1}
          >
            Previous
          </Button>
          <span
            style={{
              width: "50px",
              // background: "red",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {currentPage}
          </span>
          <Button
            variant="contained"
            onClick={handleNextPage}
            disabled={currentPage * ITEMS_PER_PAGE >= filteredProducts.length}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
