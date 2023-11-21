import { useShoppingCartProvider } from "../../Context";
import Card from "../../components/Card";
import Layout from "../../components/Layout";
import ProductDetail from "../../components/ProductDetail";

function Home() {
  const { items, setSearchByTitle, searchByTitle, filteredItems } =
    useShoppingCartProvider();

  const renderView = () => {
    const itemsToRender = searchByTitle ? filteredItems : items;
    if (itemsToRender.length === 0) {
      return <p className="text-center">No product found...</p>;
    } else {
      return itemsToRender.map((item) => {
        return <Card key={item.id} productData={item} />;
      });
    }
  };

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
        {renderView()}
      </div>
      <ProductDetail />
    </Layout>
  );
}

export default Home;
