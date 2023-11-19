import { createContext, useContext, useState } from "react";

const ShoppingCartContext = createContext();

const ShoppingCartProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  function addToCart() {
    setCount(count + 1);
  }

  return (
    <ShoppingCartContext.Provider value={{ addToCart, count }}>
      {children}
    </ShoppingCartContext.Provider>
  );
};

function useShoppingCartProvider() {
  return useContext(ShoppingCartContext);
}

export { ShoppingCartProvider, useShoppingCartProvider };
