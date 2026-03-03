import { IoCloseCircle } from "react-icons/io5";
import { useShoppingCartProvider } from "../../Context";

const ProductDetail = () => {
  const {
    isProductDetailOpen,
    closeProductDetail,
    productToShow,
    addProductToCart,
    cartProducts,
  } = useShoppingCartProvider();

  const isInCart = cartProducts.find((p) => p.id === productToShow?.id);

  return (
    <>
      {/* Backdrop overlay */}
      {isProductDetailOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-[29] backdrop-blur-[2px]"
          onClick={closeProductDetail}
        />
      )}

      <aside
        className={`${
          isProductDetailOpen ? "flex" : "hidden"
        } flex-col fixed right-0 top-0 bg-white border-l border-apple-border w-full sm:w-[380px] h-screen z-30 shadow-panel`}
      >
        <div className="flex justify-between items-center px-6 py-5 border-b border-apple-border-light">
          <h2 className="text-base font-semibold text-apple-text">Product Detail</h2>
          <button
            onClick={closeProductDetail}
            className="text-apple-secondary hover:text-apple-text transition-colors"
          >
            <IoCloseCircle className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto">
          <figure className="bg-apple-bg mx-6 mt-6 rounded-2xl overflow-hidden h-56 sm:h-64 flex items-center justify-center">
            <img
              className="w-full h-full object-contain p-6"
              src={productToShow.image}
              alt="product"
            />
          </figure>

          <div className="px-6 py-5">
            <span className="text-3xl font-bold text-apple-text">
              ${productToShow.price}
            </span>
            <h3 className="text-sm font-medium text-apple-text mt-2 mb-3 leading-snug">
              {productToShow.title}
            </h3>
            <p className="text-xs text-apple-secondary leading-relaxed">
              {productToShow.description}
            </p>
          </div>
        </div>

        <div className="px-6 py-5 border-t border-apple-border-light">
          <button
            onClick={() => !isInCart && addProductToCart(productToShow)}
            className={`w-full py-3 rounded-xl text-sm font-medium transition-colors ${
              isInCart
                ? "bg-apple-bg text-apple-secondary cursor-default"
                : "bg-apple-blue hover:bg-apple-blue-hover text-white"
            }`}
          >
            {isInCart ? "Added to cart" : "Add to cart"}
          </button>
        </div>
      </aside>
    </>
  );
};

export default ProductDetail;
