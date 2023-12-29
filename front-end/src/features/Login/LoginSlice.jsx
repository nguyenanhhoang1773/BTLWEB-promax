import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: "logIn",
  initialState: {
    name: null,
    isLogin: false,
  },
  reducers: {
    logIn: (state, action) => {
      state.name += action.payload;
      state.isLogin = true;
    },
    logOut: (state) => {
      state.name = null;
      state.isLogin = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { logIn, logOut } = loginSlice.actions;

export default loginSlice.reducer;
