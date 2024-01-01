import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: "logIn",
  initialState: {
    id: null,
    isLogin: false,
  },
  reducers: {
    logIn: (state, action) => {
      state.id += action.payload;
      state.isLogin = true;
    },
    logOut: (state) => {
      state.id = null;
      state.isLogin = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { logIn, logOut } = loginSlice.actions;

export default loginSlice.reducer;
