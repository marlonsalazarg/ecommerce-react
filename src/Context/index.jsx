import { createContext, useContext, useEffect, useState } from "react";
import { getProducts } from "../services/product-service";

const ShoppingCartContext = createContext();

const ShoppingCartProvider = ({ children }) => {
  // get products
  const [items, setItems] = useState([]);
  const [searchByTitle, setSearchByTitle] = useState(""); // search by title
  const [filteredItems, setFilteredItems] = useState([]); // filtered items
  useEffect(() => {
    getProducts().then((data) => {
      setItems(data);
    });
  }, []);

  const filteredItemsByTitle = items.filter((item) => {
    return item.title.toLowerCase().includes(searchByTitle.toLowerCase());
  });

  useEffect(() => {
    if (!searchByTitle) setFilteredItems(items);

    if (searchByTitle) setFilteredItems(filteredItemsByTitle);
  }, [items, searchByTitle]);

  // ...
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const [productToShow, setProductToShow] = useState({});
  const [cartProducts, setCartProducts] = useState([]);
  const [isCheckoutMenuOpen, setIsCheckoutMenuOpen] = useState(false);
  const [order, setOrder] = useState([]);

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
    setCartProducts((prevCartProducts) => [...prevCartProducts, product]);
    openCheckoutMenu();
    closeProductDetail();
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        items,
        setItems,
        closeProductDetail,
        isProductDetailOpen,
        productToShow,
        showProductDetail,
        addProductToCart,
        cartProducts,
        isCheckoutMenuOpen,
        closeCheckoutMenu,
        setCartProducts,
        setOrder,
        order,
        searchByTitle,
        setSearchByTitle,
        filteredItems,
        openCheckoutMenu,
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
