import { useEffect } from "react";
import { useShoppingCartProvider } from "../../Context";
import Card from "../../components/Card";
import Layout from "../../components/Layout";
import ProductDetail from "../../components/ProductDetail";

function Home() {
  const { setSearchByTitle, searchByTitle, filteredItems } =
    useShoppingCartProvider();

  const currentPath = window.location.pathname;
  let index = currentPath.substring(currentPath.lastIndexOf("/") + 1);

  const renderView = () => {
    const itemsToRender = index
      ? filteredItems
          ?.filter((item) => item.category === index)
          .map((item) => <Card key={item.id} productData={item} />)
      : filteredItems?.map((item) => <Card key={item.id} productData={item} />);

    if (
      searchByTitle?.length > 0 &&
      (!itemsToRender || itemsToRender.length === 0)
    ) {
      return <div>Product not found {":("}</div>;
    } else {
      return itemsToRender;
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
      <div className="grid gap-4 justify-items-center grid-cols-4 w-full max-w-screen-lg">
        {renderView()}
      </div>
      <ProductDetail />
    </Layout>
  );
}

export default Home;
