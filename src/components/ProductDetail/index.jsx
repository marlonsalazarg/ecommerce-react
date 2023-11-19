import { IoCloseCircle } from "react-icons/io5";
import { useShoppingCartProvider } from "../../Context";

const ProductDetail = () => {
  const { isProductDetailOpen, closeProductDetail, productToShow } =
    useShoppingCartProvider();
  return (
    <aside
      className={`${
        isProductDetailOpen ? "flex" : "hidden"
      } flex flex-col fixed right-0 border bg-white border-black rounded-lg w-[360px] h-[calc(100vh-80px)]`}
    >
      <div className="flex justify-between items-center p-4">
        <h2 className="font-medium text-xl">Detail</h2>
        <button>
          <IoCloseCircle className="w-6 h-6" onClick={closeProductDetail} />
        </button>
      </div>
      <figure className="px-6">
        <img
          className="w-full h-full rounded-lg"
          src={productToShow.image}
          alt="product"
        />
      </figure>
      <p className="flex flex-col p-6">
        <span className="font-medium text-2xl mb-2">
          ${productToShow.price}
        </span>
        <span className="font-medium text-md">{productToShow.title}</span>
        <span className="font-light text-sm">{productToShow.description}</span>
      </p>
    </aside>
  );
};

export default ProductDetail;
