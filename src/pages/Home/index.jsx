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
      return (
        <div className="flex flex-col items-center gap-3 py-20 col-span-full text-apple-secondary">
          <span className="text-5xl">🔍</span>
          <p className="text-lg font-semibold text-apple-text">
            No results for &ldquo;{searchByTitle}&rdquo;
          </p>
          <p className="text-sm">Try searching for something else</p>
        </div>
      );
    }

    return itemsToRender;
  };

  return (
    <Layout>
      <div className="w-full max-w-screen-lg">
        <div className="flex flex-col items-center mb-8 sm:mb-10">
          <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-apple-text mb-5 sm:mb-6">
            Exclusive Products
          </h1>
          <div className="relative w-full max-w-md">
            <svg
              className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-apple-secondary pointer-events-none"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1 0 6.5 6.5a7.5 7.5 0 0 0 10.6 10.6z"
              />
            </svg>
            <input
              type="text"
              placeholder="Search products..."
              className="w-full bg-white border border-apple-border rounded-xl pl-10 pr-4 py-2.5 text-sm text-apple-text placeholder:text-apple-secondary focus:outline-none focus:ring-2 focus:ring-apple-blue/20 focus:border-apple-blue transition-all"
              onChange={(e) => setSearchByTitle(e.target.value)}
            />
          </div>
        </div>

        <div className="grid gap-3 sm:gap-4 lg:gap-5 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full">
          {renderView()}
        </div>
      </div>
      <ProductDetail />
    </Layout>
  );
}

export default Home;
