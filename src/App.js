import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Routing from "./Routing";
import Navbar from "./components/Navbar/Navbar";
import FavoriteContextProvider from "./context/favoriteContext";
import ProductContextProvider from "./context/productContext";
import AuthContextProvider from "./context/authContext";
import CartContextProvider from "./context/cartContext";

function App() {
  return (
    <AuthContextProvider>
      <ProductContextProvider>
        <FavoriteContextProvider>
          <CartContextProvider>
            <BrowserRouter>
              <Navbar />
              <Routing />
            </BrowserRouter>
          </CartContextProvider>
        </FavoriteContextProvider>
      </ProductContextProvider>
    </AuthContextProvider>
  );
}

export default App;
