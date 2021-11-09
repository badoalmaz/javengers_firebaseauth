import React, { createContext, useReducer } from "react";
export const productContext = createContext();

const INIT_STATE = {};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "...":
    default:
      return state;
  }
};

const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer();
  return (
    <productContext.Provider value={{}}>{children}</productContext.Provider>
  );
};

export default ProductContextProvider;
