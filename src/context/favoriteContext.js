import React, { useReducer } from "react";
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
  const a = () => {
    console.log("gggggggggggg");
  };
  //------------------------
  return (
    <favoriteContext.Provider value={{ a }}>
      {children}
    </favoriteContext.Provider>
  );
};

export default FavoriteContextProvider;
