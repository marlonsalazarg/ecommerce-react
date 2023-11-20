import { useShoppingCartProvider } from "../../Context";
import { reduceProductName } from "../../utils";
import { IoMdAdd } from "react-icons/io";

const Card = ({ productData }) => {
  const { addProductToCart, showProductDetail } = useShoppingCartProvider();
  return (
    <div
      className="bg-white cursor-pointer w-56 h-60 rounded-lg drop-shadow-md"
      onClick={() => showProductDetail(productData)}
    >
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">
          {productData.category}
        </span>
        <img
          className="w-full h-full object-cover rounded-lg"
          src={productData.image}
          alt="headphones"
        />
        <button>
          <IoMdAdd
            onClick={(e) => {
              e.stopPropagation();
              addProductToCart(productData);
            }}
            className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1"
          />
        </button>
      </figure>
      <p className="flex justify-between">
        <span className="text-sm font-light">
          {reduceProductName(productData.title)}
        </span>
        <span className="text-sm font-medium">${productData.price}</span>
      </p>
    </div>
  );
};

export default Card;
