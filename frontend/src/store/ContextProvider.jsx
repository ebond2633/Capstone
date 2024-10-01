// src/context/ContextProvider.jsx
import React, { createContext, useReducer } from "react";

const initialState = {
  products: [
    // Example products
    { id: 1, name: "Product 1", description: "Description 1", price: 100, quantity: 1 },
    { id: 2, name: "Product 2", description: "Description 2", price: 200 , quantity: 1 },
  ],
  cart: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, action.payload] };
    default:
      return state;
  }
};

export const StoreProvider = createContext();

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StoreProvider.Provider value={{ state, dispatch }}>
      {children}
    </StoreProvider.Provider>
  );
};