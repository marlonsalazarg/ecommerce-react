import { IoClose } from "react-icons/io5";
import { reduceProductName } from "../../utils";

const OrderCard = ({ id, title, imageUrl, price, handleDelete }) => {
  return (
    <div className="flex justify-between items-center mb-4">
      <div className="flex items-center gap-4">
        <figure className="w-20 h-20">
          <img
            className="w-full h-full rounded-lg object-cover"
            src={imageUrl}
            alt="product"
          />
        </figure>
        <p className="text-sm font-light">{reduceProductName(title)}</p>
      </div>
      <div className="flex items-center gap-2">
        <p className="text-lg font-medium">${price}</p>
        <button>
          <IoClose onClick={() => handleDelete(id)} className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default OrderCard;
