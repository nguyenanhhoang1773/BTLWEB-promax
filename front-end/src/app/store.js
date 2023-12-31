import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../features/Login/LoginSlice.jsx";
import storePdReducer from "../features/storeProducts/storeProductsSlice.jsx";
import cartReducer from "../features/CartManage/CartSlice.jsx";
export default configureStore({
  reducer: {
    login: loginReducer,
    storeProducts: storePdReducer,
    cartManage: cartReducer,
  },
});
