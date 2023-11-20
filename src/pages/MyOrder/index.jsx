import { useShoppingCartProvider } from "../../Context";
import Layout from "../../components/Layout";
import OrderCard from "../../components/OrderCard";

function MyOrder() {
  const { order } = useShoppingCartProvider();
  return (
    <Layout>
      <div className="px-3">
        {order.length > 0 ? (
          order
            .slice(-1)[0]
            .products.map((product) => (
              <OrderCard
                key={product.id}
                id={product.id}
                title={product.title}
                imageUrl={product.image}
                price={product.price}
              />
            ))
        ) : (
          <p className="text-center">No order yet</p>
        )}
      </div>
    </Layout>
  );
}

export default MyOrder;
