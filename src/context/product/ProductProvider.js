import React, { useContext, createContext } from "react";
import { database } from "../../firebase/database";

let ProductContext = createContext();

export const useProduct = () => {
  return useContext(ProductContext);
};

function ProductProvider({ children }) {
  let insert = (product) => {
    return database.ref("Products").push(product);
  };

  const value = { insert };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
}

export default ProductProvider;
