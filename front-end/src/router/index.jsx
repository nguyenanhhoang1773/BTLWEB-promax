import Cart from "../Pages/CartPage";
import Detail from "../Pages/DetailPage";
import Home from "../Pages/HomePage";

export const paths = {
  Home: "/",
  Detail: "/detail",
  Cart: "/cart",
};
const routes = [
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/Detail",
    Component: Detail,
  },
  {
    path: "/Cart",
    Component: Cart,
  },
];
export default routes;
