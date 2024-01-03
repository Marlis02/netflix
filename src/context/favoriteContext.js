import { doc, getDoc } from "firebase/firestore";
import React, { useReducer } from "react";
import { db } from "../firebase";
import { toast } from "react-toastify";
export const favoriteContext = React.createContext();
//==========================================================
const API = " http://localhost:8000";

const INIT_STATE = {
  favorites: [],
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_FAVORITES":
      return {
        ...state,
        favorites: action.payload,
      };
    default:
      return state;
  }
}

//=============================================
const FavoriteContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  //test-------------------
  // const a = () => {
  //   console.log("gggggggggggg");
  // };
  //------------------------

  const getProductsById = async (productIds) => {
    try {
      // Создаем массив Promise для каждого запроса продукта
      const productPromises = productIds.map(async (productId) => {
        const docRef = doc(db, "products", productId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          return { id: docSnap.id, ...docSnap.data() };
        } else {
          console.log(`Продукт с ID ${productId} не найден`);
          return null;
        }
      });

      // Выполняем все запросы параллельно с помощью Promise.all
      const productsData = await Promise.all(productPromises);

      // Обрабатываем результаты запросов, например, отправляем их в redux
      dispatch({
        type: "GET_FAVORITES",
        payload: productsData.filter((data) => data !== null), // Фильтруем null значения (ненайденные продукты)
      });
    } catch (error) {
      console.error("Ошибка при получении продуктов:", error);
      throw error;
    }
  };

  // =======================================================

  const removeProductIdFromLocalStorage = (productId, title) => {
    // Получаем текущий массив из localStorage
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    // Проверяем, содержится ли productId в массиве
    const index = favorites.indexOf(productId);
    if (index !== -1) {
      // Если productId найден, удаляем его из массива
      favorites.splice(index, 1);

      // Обновляем массив в localStorage
      localStorage.setItem("favorites", JSON.stringify(favorites));

      toast.success(`${title} удален из избранного`);
      getProductsById(favorites);
    } else {
      console.log(productId, "не найден в избранном");
    }
  };

  // Пример использования:

  return (
    <favoriteContext.Provider
      value={{
        getProductsById,
        favorites: state.favorites,
        removeProductIdFromLocalStorage,
      }}
    >
      {children}
    </favoriteContext.Provider>
  );
};

export default FavoriteContextProvider;
