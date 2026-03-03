import { Link } from "react-router-dom";
import { useShoppingCartProvider } from "../../Context";
import Layout from "../../components/Layout";
import OrdersCard from "../../components/OrdersCard";

function MyOrders() {
  const { order } = useShoppingCartProvider();

  return (
    <Layout>
      <div className="w-full max-w-screen-lg">
        <div className="flex items-center justify-center mb-8 sm:mb-10">
          <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-apple-text">
            My Orders
          </h1>
        </div>

        {order.length > 0 ? (
          <div className="flex flex-col items-center gap-2 px-0 sm:px-4">
            {order.map((o, index) => (
              <Link
                key={index}
                to={`/my-orders/${index}`}
                className="w-full flex justify-center"
              >
                <OrdersCard
                  totalPrice={o.totalPrice}
                  totalProducts={o.totalItems}
                />
              </Link>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center gap-3 py-20 text-apple-secondary">
            <span className="text-5xl">📦</span>
            <p className="text-lg font-semibold text-apple-text">No orders yet</p>
            <p className="text-sm">Your completed orders will appear here</p>
          </div>
        )}
      </div>
    </Layout>
  );
}

export default MyOrders;
