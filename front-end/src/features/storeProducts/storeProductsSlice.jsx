import { createSlice } from "@reduxjs/toolkit";

export const storePdSlice = createSlice({
  name: "storeProducts",
  initialState: {
    all: null,
    stock: null,
  },
  reducers: {
    storePd: (state, action) => {
      state.all = action.payload.all;
      state.stock = action.payload.stock;
    },
    removePd: (state) => {
      state.all = null;
      state.stock = null;
    },
  },
});

export const { storePd, removePd } = storePdSlice.actions;

export default storePdSlice.reducer;
