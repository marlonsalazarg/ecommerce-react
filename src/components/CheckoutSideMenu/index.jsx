import { IoCloseCircle } from "react-icons/io5";
import { useShoppingCartProvider } from "../../Context";
import OrderCard from "../OrderCard";
import "./styles.css";

const CheckoutSideMenu = () => {
  const {
    isCheckoutMenuOpen,
    closeCheckoutMenu,
    cartProducts,
    setCartProducts,
  } = useShoppingCartProvider();

  const handleDelete = (id) => {
    const newCartProducts = cartProducts.filter((product) => product.id !== id);
    setCartProducts(newCartProducts);
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
      <div className="px-3">
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
    </aside>
  );
};

export default CheckoutSideMenu;
