import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../features/Login/LoginSlice.jsx";
import storePdReducer from "../features/storeProducts/storeProductsSlice.jsx";
export default configureStore({
  reducer: {
    login: loginReducer,
    storeProducts: storePdReducer,
  },
});
