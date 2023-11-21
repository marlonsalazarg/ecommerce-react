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
    <aside
      className={`${
        isCheckoutMenuOpen ? "flex" : "hidden"
      } scrollable-cards flex flex-col fixed right-0 border bg-white border-black rounded-lg w-[360px] h-[calc(100vh-80px)] z-10`}
    >
      <div className="flex justify-between items-center p-4">
        <h2 className="font-medium text-xl">My order</h2>
        <button>
          <IoCloseCircle className="w-6 h-6" onClick={closeCheckoutMenu} />
        </button>
      </div>
      <div className="px-3 flex-1">
        {cartProducts.map((product) => (
          <OrderCard
            key={product.id}
            id={product.id}
            title={product.title}
            imageUrl={product.image}
            price={product.price}
            handleDelete={handleDelete}
          />
        ))}
      </div>

      <div className="px-6 mb-2">
        <p className="flex justify-between items-center mb-2">
          <span className="font-light">Total:</span>
          <span className="font-medium text-xl">
            ${totalPrice(cartProducts)}
          </span>
        </p>
        <Link to="/my-orders/last">
          <button
            className="bg-black py-3 text-white w-full rounded-lg"
            onClick={handleCheckout}
          >
            Checkout
          </button>
        </Link>
      </div>
    </aside>
  );
};

export default CheckoutSideMenu;
