import { IoCloseCircle } from "react-icons/io5";
import { useShoppingCartProvider } from "../../Context";

const ProductDetail = () => {
  const { isProductDetailOpen, closeProductDetail } = useShoppingCartProvider();
  return (
    <aside
      className={`${
        isProductDetailOpen ? "flex" : "hidden"
      } flex flex-col fixed right-0 border bg-white border-black rounded-lg w-[360px] h-[calc(100vh-80px)]`}
    >
      <div className="flex justify-between items-center">
        <h2 className="font-medium text-xl">Detail</h2>
        <button>
          <IoCloseCircle className="w-6 h-6" onClick={closeProductDetail} />
        </button>
      </div>
    </aside>
  );
};

export default ProductDetail;
