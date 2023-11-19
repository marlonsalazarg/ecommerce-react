import { useState, useEffect } from "react";
import Card from "../../components/Card";
import Layout from "../../components/Layout";
import { getProducts } from "../../services/product-service";

function Home() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getProducts().then((data) => {
      setItems(data);
    });
  }, []);

  return (
    <Layout className="bg-red-100">
      Home
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {items.map((item) => {
          return <Card key={item.id} {...item} />;
        })}
      </div>
    </Layout>
  );
}

export default Home;
