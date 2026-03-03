import { useShoppingCartProvider } from "../../Context";
import { reduceProductName } from "../../utils";
import { IoMdAdd } from "react-icons/io";
import { FaCheck } from "react-icons/fa6";

const Card = ({ productData }) => {
  const { addProductToCart, showProductDetail, cartProducts } =
    useShoppingCartProvider();

  const isInCart = cartProducts.find((product) => product.id === productData.id);

  return (
    <div
      className="bg-white cursor-pointer w-full rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 ease-out group hover:-translate-y-1"
      onClick={() => showProductDetail(productData)}
    >
      <figure className="relative w-full h-40 sm:h-44 md:h-48 bg-apple-bg flex items-center justify-center">
        <span className="absolute top-2.5 left-2.5 bg-white/90 backdrop-blur-sm text-apple-secondary text-[10px] font-medium rounded-full px-2.5 py-1 capitalize z-10 leading-none">
          {productData.category.replace(/-/g, " ")}
        </span>
        <img
          className="w-full h-full object-contain p-4 sm:p-5"
          src={productData.image}
          alt={productData.title}
        />
        <button
          onClick={(e) => {
            if (!isInCart) {
              e.stopPropagation();
              addProductToCart(productData);
            }
          }}
          className={`absolute bottom-2.5 right-2.5 flex items-center justify-center w-8 h-8 rounded-full shadow-md transition-all duration-200 ${
            isInCart
              ? "bg-apple-green"
              : "bg-apple-blue opacity-0 group-hover:opacity-100 hover:scale-110"
          }`}
        >
          {isInCart ? (
            <FaCheck className="text-white w-3 h-3" />
          ) : (
            <IoMdAdd className="text-white w-4 h-4" />
          )}
        </button>
      </figure>

      <div className="px-3 py-3">
        <p className="text-xs text-apple-secondary mb-1 truncate leading-snug">
          {reduceProductName(productData.title)}
        </p>
        <p className="text-apple-blue font-semibold text-sm">
          ${productData.price}
        </p>
      </div>
    </div>
  );
};

export default Card;
