import { createContext, useContext, useState } from "react";

const ShoppingCartContext = createContext();

const ShoppingCartProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);

  const addToCart = () => setCount((prevCount) => prevCount + 1);

  const openProductDetail = () => setIsProductDetailOpen(true);

  const closeProductDetail = () => setIsProductDetailOpen(false);

  return (
    <ShoppingCartContext.Provider
      value={{
        addToCart,
        count,
        openProductDetail,
        closeProductDetail,
        isProductDetailOpen,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

function useShoppingCartProvider() {
  return useContext(ShoppingCartContext);
}

export { ShoppingCartProvider, useShoppingCartProvider };
