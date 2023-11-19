import { createContext, useContext, useState } from "react";

const ShoppingCartContext = createContext();

const ShoppingCartProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const [productToShow, setProductToShow] = useState({});

  const addToCart = () => setCount((prevCount) => prevCount + 1);

  const openProductDetail = () => setIsProductDetailOpen(true);

  const closeProductDetail = () => setIsProductDetailOpen(false);

  const showProductDetail = (product) => {
    openProductDetail();
    setProductToShow(product);
    // console.log(product);
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        addToCart,
        count,
        closeProductDetail,
        isProductDetailOpen,
        productToShow,
        showProductDetail,
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
