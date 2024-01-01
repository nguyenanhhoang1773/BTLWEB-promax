import Cart from "../Pages/CartPage";
import Detail from "../Pages/DetailPage";
import Home from "../Pages/HomePage";
import Login from "../Pages/LoginPage";
import Register from "../Pages/RegisterPage";
export const paths = {
  Home: "/",
  Detail: "/detail/:slug",
  Cart: "/cart",
  Login: "/login",
  Register: "/register",
};
const routes = [
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/detail/:slug",
    Component: Detail,
  },
  {
    path: "/cart",
    Component: Cart,
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/register",
    Component: Register,
  },
];
export default routes;
