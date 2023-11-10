import React from "react";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/AboutUs/About";
import CreateProduct from "./pages/CreateProduct/CreateProduct";
import MyList from "./pages/MyList/MyList";
import Movies from "./pages/Movies/Movies";
import SignUp from "./pages/SignUp/SignUp";
import SignIn from "./pages/SignIn/SignIn";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import Favorite from "./pages/Favorites/Favorite";
import DetailPage from "./pages/DetailPage/DetailPage";
import EditProduct from "./pages/EditProduct/EditProduct";

const Routing = () => {
  // const PrivateRoutes = () => {
  //   const user = localStorage.getItem("email");

  //   return user ? (
  //     <div>
  //       <Outlet />
  //     </div>
  //   ) : (
  //     <Navigate to="/sign-in" />
  //   );
  // };
  return (
    <div>
      <Routes>
        <Route>
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* <Route element={<PrivateRoutes />}> */}
          <Route path="/create-product" element={<CreateProduct />} />
          <Route path="/my-list" element={<MyList />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/favorites" element={<Favorite />} />
          <Route path="/detail/:id" element={<DetailPage />} />
          <Route path="/editproduct/:id" element={<EditProduct />} />
          {/* </Route> */}
        </Route>
      </Routes>
    </div>
  );
};

export default Routing;
