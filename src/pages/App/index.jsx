import { useRoutes, BrowserRouter } from "react-router-dom";
import { ShoppingCartProvider } from "../../Context";
import Home from "../Home";
import MyAccount from "../MyAccount";
import MyOrder from "../MyOrder";
import MyOrders from "../MyOrders";
import NotFound from "../NotFound";
import SignIn from "../SignIn";
import NavBar from "../../components/NavBar";
import CheckoutSideMenu from "../../components/CheckoutSideMenu";
import "./App.css";

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/my-account", element: <MyAccount /> },
    { path: "/my-order", element: <MyOrder /> },
    { path: "/my-orders", element: <MyOrders /> },
    { path: "/my-orders/last", element: <MyOrder /> },
    { path: "/sign-in", element: <SignIn /> },
    { path: "*", element: <NotFound /> },
  ]);

  return routes;
};
const App = () => {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <CheckoutSideMenu />
        <AppRoutes />
        <NavBar />
      </BrowserRouter>
    </ShoppingCartProvider>
  );
};

export default App;
