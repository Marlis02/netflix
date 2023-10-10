import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/AboutUs/About";
import CreateCategory from "./pages/CreateCategory/CreateCategory";
import CreateProduct from "./pages/CreateProduct/CreateProduct";
import MyList from "./pages/MyList/MyList";
import Movies from "./pages/Movies/Movies";
import SignUp from "./pages/SignUp/SignUp";
import SignIn from "./pages/SignIn/SignIn";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import Favorite from "./pages/Favorites/Favorite";

const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/create-category" element={<CreateCategory />} />
        <Route path="/create-product" element={<CreateProduct />} />
        <Route path="/my-list" element={<MyList />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/favorites" element={<Favorite />} />
      </Routes>
    </div>
  );
};

export default Routing;
