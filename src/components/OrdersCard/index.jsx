import { FaChevronRight } from "react-icons/fa";

const OrdersCard = ({ totalPrice, totalProducts }) => {
  return (
    <div className="flex justify-between items-center bg-white border border-apple-border hover:border-apple-blue rounded-2xl w-full max-w-md p-4 sm:p-5 cursor-pointer transition-all duration-200 hover:shadow-card group">
      <div className="flex flex-col gap-0.5">
        <span className="text-xs text-apple-secondary">01.02.23</span>
        <span className="text-sm font-medium text-apple-text">
          {totalProducts} {totalProducts === 1 ? "article" : "articles"}
        </span>
      </div>
      <div className="flex items-center gap-3">
        <span className="text-xl font-bold text-apple-text">${totalPrice}</span>
        <FaChevronRight className="w-3 h-3 text-apple-secondary group-hover:text-apple-blue transition-colors" />
      </div>
    </div>
  );
};

export default OrdersCard;
