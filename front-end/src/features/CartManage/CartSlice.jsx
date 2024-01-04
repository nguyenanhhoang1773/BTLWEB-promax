import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  name: "cartManage",
  initialState: {
    amount: 0,
    products: [],
  },
  reducers: {
    setProducts: (state, action) => {
      state.amount = action.payload.amount;
      state.products = [...action.payload.products];
    },
    addProduct: (state, action) => {
      state.amount += 1;
      state.products.push(action.payload);
    },
    removeProduct: (state, action) => {
      state.amount -= 1;
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
    },
    clearProducts: (state, action) => {
      state.amount = 0;
      state.products = [];
    },
  },
});

export const { setProducts, addProduct, removeProduct, clearProducts } =
  CartSlice.actions;

export default CartSlice.reducer;
