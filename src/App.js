import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Routing from "./Routing";
import Navbar from "./components/Navbar/Navbar";
import FavoriteContextProvider from "./context/favoriteContext";
import ProductContextProvider from "./context/productContext";
import AuthContextProvider from "./context/authContext";
import CartContextProvider from "./context/cartContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer.jsx/Footer";

function App() {
  return (
    <AuthContextProvider>
      <ProductContextProvider>
        <FavoriteContextProvider>
          <CartContextProvider>
            <ToastContainer position="top-center" />
            <BrowserRouter>
              <Navbar />
              <Routing />
              <Footer />
            </BrowserRouter>
          </CartContextProvider>
        </FavoriteContextProvider>
      </ProductContextProvider>
    </AuthContextProvider>
  );
}

export default App;

//aaaaaaaaaaaaaaaaaaaaa
