import axios from "axios";
import React, { useContext, useReducer } from "react";
import { toast } from "react-toastify";
import { db } from "../firebase";
import {
  Firestore,
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
} from "firebase/firestore";
export const productContext = React.createContext();
export const useProduct = () => {
  return useContext(productContext);
};
const API = "http://localhost:8000";

const product = () => {
  console.log("product");
};

const INIT_STATE = {
  categories: [],
  category: null,
  pages: 0,
  products: [],
  oneProduct: [],
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_CATEGORIES":
      return {
        ...state,
        categories: action.payload,
      };
    case "GET_CATEGORY":
      return {
        ...state,
        category: action.payload,
      };
    case "GET_PRODUCTS":
      return {
        ...state,
        products: action.payload.data,
        // pages: Math.ceil(action.payload.total / LIMIT),
      };
    case "GET_PRODUCT":
      return {
        ...state,
        oneProduct: action.payload,
      };
    default:
      return state;
  }
}

const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  //==================category===================

  const getCategories = async () => {
    try {
      const snapshot = await getDocs(collection(db, "category"));
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      dispatch({
        type: "GET_CATEGORIES",
        payload: { data },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const getCategoryById = async (categoryId) => {
    try {
      const categoryDocRef = doc(db, "category", categoryId);
      const categoryDocSnap = await getDoc(categoryDocRef);

      if (categoryDocSnap.exists()) {
        const categoryData = {
          id: categoryDocSnap.id,
          ...categoryDocSnap.data(),
        };
        dispatch({
          type: "GET_CATEGORY",
          payload: categoryData,
        });
      } else {
        console.log("Category not found!");
      }
    } catch (error) {
      console.error("Error getting category:", error);
    }
  };
  //--------------------------------------------
  //==============================product====================================
  const createProduct = (product) => {
    const productsRef = collection(db, "products");
    addDoc(productsRef, product)
      .then((docRef) => {
        console.log("Документ создан с ID: ", docRef.id);
      })
      .catch((error) => {
        console.error("Ошибка при добавлении документа: ", error);
      });
  };

  const getProducts = async () => {
    try {
      const snapshot = await getDocs(collection(db, "products"));
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      dispatch({
        type: "GET_PRODUCTS",
        payload: { data },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const getProductById = async (productId) => {
    try {
      const docRef = doc(db, "products", productId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const productData = { id: docSnap.id, ...docSnap.data() };
        dispatch({
          type: "GET_PRODUCT",
          payload: productData,
        });
      } else {
        console.log("Документ не найден!");
      }
    } catch (error) {
      console.error("Ошибка при получении документа:", error);
    }
  };

  const editProduct = async (productId, newData) => {
    const productRef = doc(db, "products", productId);

    try {
      await setDoc(productRef, newData, { merge: true });
      console.log("Product successfully updated!");
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  const deleteProductById = async (productId) => {
    const productRef = doc(db, "products", productId);

    try {
      await deleteDoc(productRef);
      console.log("Product successfully deleted!");
      toast.success("deleted");
      getProducts();
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };
  return (
    <productContext.Provider
      value={{
        product,
        createProduct,
        products: state.products,
        getProducts,
        getProductById,
        oneProduct: state.oneProduct,
        getCategories,
        categories: state.categories.data,
        getCategoryById,
        category: state.category,
        editProduct,
        deleteProductById,
      }}
    >
      {children}
    </productContext.Provider>
  );
};

export default ProductContextProvider;
