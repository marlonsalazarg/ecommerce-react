import { useShoppingCartProvider } from "../../Context";
import Card from "../../components/Card";
import Layout from "../../components/Layout";
import ProductDetail from "../../components/ProductDetail";

function Home() {
  const { setSearchByTitle, filteredItems } = useShoppingCartProvider();

  const currentPath = window.location.pathname;
  let index = currentPath.substring(currentPath.lastIndexOf("/") + 1);

  const filteredItemsByCategory = filteredItems?.filter((item) => {
    let category = item.category;
    category = category.replace(/'/g, "");
    category = category.replace(/ /g, "-");
    return category === index;
  });

  console.log(filteredItemsByCategory);
  const renderView = () => {
    if (filteredItemsByCategory.length > 0) {
      return filteredItemsByCategory.map((item) => {
        return <Card key={item.id} productData={item} />;
      });
    } else if (filteredItems.length > 0) {
      return filteredItems.map((item) => {
        return <Card key={item.id} productData={item} />;
      });
    } else {
      return <p>Product not found</p>;
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
