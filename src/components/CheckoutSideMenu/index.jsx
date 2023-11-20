import { IoCloseCircle } from "react-icons/io5";
import { useShoppingCartProvider } from "../../Context";

const CheckoutSideMenu = () => {
  const { isCheckoutMenuOpen, closeCheckoutMenu } = useShoppingCartProvider();
  return (
    <aside
      className={`${
        isCheckoutMenuOpen ? "flex" : "hidden"
      } flex flex-col fixed right-0 border bg-white border-black rounded-lg w-[360px] h-[calc(100vh-80px)] z-10`}
    >
      <div className="flex justify-between items-center p-4">
        <h2 className="font-medium text-xl">My order</h2>
        <button>
          <IoCloseCircle className="w-6 h-6" onClick={closeCheckoutMenu} />
        </button>
      </div>
    </aside>
  );
};

export default CheckoutSideMenu;
