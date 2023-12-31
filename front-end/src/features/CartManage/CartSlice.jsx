import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  name: "CartManage",
  initialState: {
    amount: 0,
    products: [],
  },
  reducers: {
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

export const { addProduct, removeProduct, clearProducts } = CartSlice.actions;

export default CartSlice.reducer;
