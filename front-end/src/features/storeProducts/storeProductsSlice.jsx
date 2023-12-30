import { createSlice } from "@reduxjs/toolkit";

export const storePdSlice = createSlice({
  name: "storeProducts",
  initialState: {
    Products: null,
  },
  reducers: {
    storePd: (state, action) => {
      state.Products = action.payload;
    },
    removePd: (state) => {
      state.Products = null;
    },
  },
});

export const { storePd, removePd } = storePdSlice.actions;

export default storePdSlice.reducer;
