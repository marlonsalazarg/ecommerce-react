import { FaChevronRight } from "react-icons/fa";

const OrdersCard = ({ totalPrice, totalProducts }) => {
  return (
    <div className="flex justify-between items-center mb-4 border border-black rounded-lg w-80 p-4">
      <div className="flex justify-between w-full">
        <p className="flex flex-col">
          <span className="font-light">01.02.23</span>
          <span className="font-light">{totalProducts} articles</span>
        </p>
        <p className="flex items-center gap-2">
          <span className="font-medium text-2xl">${totalPrice}</span>
          <button>
            <FaChevronRight className="w-4 h-4" />
          </button>
        </p>
      </div>
    </div>
  );
};

export default OrdersCard;
