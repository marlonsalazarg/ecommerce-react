import { Link } from "react-router-dom";
import { IoCloseCircle } from "react-icons/io5";
import { useShoppingCartProvider } from "../../Context";
import OrderCard from "../OrderCard";
import { totalPrice } from "../../utils";
import "./styles.css";

const CheckoutSideMenu = () => {
  const {
    isCheckoutMenuOpen,
    closeCheckoutMenu,
    cartProducts,
    setCartProducts,
    setOrder,
    setSearchByTitle,
  } = useShoppingCartProvider();

  const handleDelete = (id) => {
    const newCartProducts = cartProducts.filter((product) => product.id !== id);
    setCartProducts(newCartProducts);
  };

  const handleCheckout = () => {
    if (cartProducts.length === 0) return;
    const orderToAdd = {
      date: "2021-10-10",
      products: cartProducts,
      totalItems: cartProducts.length,
      totalPrice: totalPrice(cartProducts),
    };

    setOrder((prevOrder) => [...prevOrder, orderToAdd]);
    setCartProducts([]);
    closeCheckoutMenu();
    setSearchByTitle("");
  };

  return (
    <>
      {/* Backdrop overlay */}
      {isCheckoutMenuOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-[29] backdrop-blur-[2px]"
          onClick={closeCheckoutMenu}
        />
      )}

      <aside
        className={`${
          isCheckoutMenuOpen ? "flex" : "hidden"
        } flex-col fixed right-0 top-0 bg-white border-l border-apple-border w-full sm:w-[380px] h-screen z-30 shadow-panel`}
      >
        <div className="flex justify-between items-center px-6 py-5 border-b border-apple-border-light">
          <h2 className="text-base font-semibold text-apple-text">My Cart</h2>
          <button
            onClick={closeCheckoutMenu}
            className="text-apple-secondary hover:text-apple-text transition-colors"
          >
            <IoCloseCircle className="w-5 h-5" />
          </button>
        </div>

        <div className="px-6 flex-1 overflow-y-auto py-2 scrollable-cards">
          {cartProducts.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-3 text-apple-secondary">
              <span className="text-5xl">🛒</span>
              <p className="font-medium text-apple-text">Your cart is empty</p>
              <p className="text-sm text-center">Add products to start your order</p>
            </div>
          ) : (
            cartProducts.map((product) => (
              <OrderCard
                key={product.id}
                id={product.id}
                title={product.title}
                imageUrl={product.image}
                price={product.price}
                handleDelete={handleDelete}
              />
            ))
          )}
        </div>

        <div className="px-6 py-5 border-t border-apple-border-light">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm text-apple-secondary">Total</span>
            <span className="text-2xl font-bold text-apple-text">
              ${totalPrice(cartProducts)}
            </span>
          </div>
          <Link to="/my-orders/last">
            <button
              className="w-full bg-apple-blue hover:bg-apple-blue-hover disabled:bg-apple-border text-white text-sm font-medium py-3.5 rounded-xl transition-colors disabled:cursor-not-allowed"
              onClick={handleCheckout}
              disabled={cartProducts.length === 0}
            >
              Checkout · ${totalPrice(cartProducts)}
            </button>
          </Link>
        </div>
      </aside>
    </>
  );
};

export default CheckoutSideMenu;
