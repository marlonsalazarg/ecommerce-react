import { IoClose } from "react-icons/io5";
import { reduceProductName } from "../../utils";

const OrderCard = ({ id, title, imageUrl, price, handleDelete }) => {
  return (
    <div className="flex justify-between items-center py-3.5 border-b border-apple-border-light last:border-0">
      <div className="flex items-center gap-3">
        <figure className="w-14 h-14 bg-apple-bg rounded-xl overflow-hidden flex-shrink-0 flex items-center justify-center">
          <img
            className="w-full h-full object-contain p-2"
            src={imageUrl}
            alt="product"
          />
        </figure>
        <p className="text-xs text-apple-text leading-snug max-w-[140px]">
          {reduceProductName(title)}
        </p>
      </div>
      <div className="flex items-center gap-2 flex-shrink-0 ml-2">
        <span className="text-sm font-semibold text-apple-text">${price}</span>
        {handleDelete && (
          <button
            onClick={() => handleDelete(id)}
            className="text-apple-secondary hover:text-apple-red transition-colors"
          >
            <IoClose className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
};

export default OrderCard;
