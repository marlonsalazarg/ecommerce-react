import { createContext, useContext, useState } from "react";

const ShoppingCartContext = createContext();

const ShoppingCartProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const [productToShow, setProductToShow] = useState({});
  const [cartProducts, setCartProducts] = useState([{}]);
  const [isCheckoutMenuOpen, setIsCheckoutMenuOpen] = useState(false);

  const addToCart = () => setCount((prevCount) => prevCount + 1);

  const openProductDetail = () => setIsProductDetailOpen(true);

  const closeProductDetail = () => setIsProductDetailOpen(false);

  const showProductDetail = (product) => {
    closeCheckoutMenu();
    openProductDetail();
    setProductToShow(product);
    // console.log(product);
  };

  // Checkout Side Menu · Open/Close
  const openCheckoutMenu = () => setIsCheckoutMenuOpen(true);
  const closeCheckoutMenu = () => setIsCheckoutMenuOpen(false);

  const addProductToCart = (product) => {
    addToCart();
    setCartProducts((prevCartProducts) => [...prevCartProducts, product]);
    openCheckoutMenu();
    closeProductDetail();
    // console.log(cartProducts);
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        count,
        closeProductDetail,
        isProductDetailOpen,
        productToShow,
        showProductDetail,
        addProductToCart,
        cartProducts,
        isCheckoutMenuOpen,
        closeCheckoutMenu,
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
