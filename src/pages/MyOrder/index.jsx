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
      <div className="flex items-center justify-center relative w-80 mb-6">
        <Link to="/my-orders" className="absolute left-0">
          <IoMdArrowRoundBack className="h-6 w-6 cursor-pointer" />
        </Link>
        <h1>My Order</h1>
      </div>
      <div className="px-3">
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
    </Layout>
  );
}

export default MyOrder;
