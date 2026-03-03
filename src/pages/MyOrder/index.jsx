import { Link } from "react-router-dom";
import { useShoppingCartProvider } from "../../Context";
import Layout from "../../components/Layout";
import OrderCard from "../../components/OrderCard";
import { IoMdArrowRoundBack } from "react-icons/io";

function MyOrder() {
  const { order } = useShoppingCartProvider();
  const currentPath = window.location.pathname;
  let index = currentPath.substring(currentPath.lastIndexOf("/") + 1);
  if (index === "last") index = order?.length - 1;

  return (
    <Layout>
      <div className="w-full max-w-md px-0 sm:px-4">
        <div className="flex items-center mb-6 sm:mb-8 gap-3">
          <Link
            to="/my-orders"
            className="text-apple-secondary hover:text-apple-text transition-colors"
          >
            <IoMdArrowRoundBack className="h-5 w-5" />
          </Link>
          <h1 className="text-xl sm:text-2xl font-semibold text-apple-text">My Order</h1>
        </div>

        <div className="bg-white rounded-2xl border border-apple-border px-5 py-2 shadow-card">
          {order?.[index]?.products.map((product) => (
            <OrderCard
              key={product.id}
              id={product.id}
              title={product.title}
              imageUrl={product.image}
              price={product.price}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default MyOrder;
