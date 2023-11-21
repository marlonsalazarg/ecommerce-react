import { useShoppingCartProvider } from "../../Context";
import Card from "../../components/Card";
import Layout from "../../components/Layout";
import ProductDetail from "../../components/ProductDetail";

function Home() {
  const { items, setSearchByTitle } = useShoppingCartProvider();

  return (
    <Layout>
      <div className="flex items-center justify-center relative w-80 mb-6">
        <h1 className="font-medium text-xl">Exclusive Products</h1>
      </div>
      <input
        type="text"
        placeholder="Search a product"
        className="border border-black rounded-lg w-80 p-4 mb-4 focus:outline-none"
        onChange={(e) => {
          setSearchByTitle(e.target.value);
        }}
      />
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {items.map((item) => {
          return <Card key={item.id} productData={item} />;
        })}
      </div>
      <ProductDetail />
    </Layout>
  );
}

export default Home;
