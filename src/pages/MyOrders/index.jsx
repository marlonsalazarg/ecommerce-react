import { Link } from "react-router-dom";
import { useShoppingCartProvider } from "../../Context";
import Layout from "../../components/Layout";
import OrdersCard from "../../components/OrdersCard";

function MyOrders() {
  const { order } = useShoppingCartProvider();

  return (
    <Layout>
      <div className="flex items-center justify-center relative w-80 mb-6">
        <h1 className="font-medium text-xl">My Orders</h1>
      </div>
      {order.length > 0 ? (
        order?.map((order, index) => {
          return (
            <Link key={index} to={`/my-orders/${index}`}>
              <OrdersCard
                totalPrice={order.totalPrice}
                totalProducts={order.totalItems}
              />
            </Link>
          );
        })
      ) : (
        <p className="text-center">No order yet...</p>
      )}
    </Layout>
  );
}

export default MyOrders;
