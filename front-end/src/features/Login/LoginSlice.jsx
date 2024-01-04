import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: "logIn",
  initialState: {
    id: null,
    isLogin: false,
    name: null,
  },
  reducers: {
    logIn: (state, action) => {
      state.id = action.payload.id;
      state.name += action.payload.name;
      state.isLogin = true;
    },
    logOut: (state) => {
      state.id = null;
      state.name = null;
      state.isLogin = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { logIn, logOut } = loginSlice.actions;

export default loginSlice.reducer;
