import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: false,
    isError: false,
  },
  reducers: {
    logInStart: (state) => {
      state.isFetching = true;
    },
    logInSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
    },
    logInFailure: (state) => {
      state.isFetching = false;
      state.isError = true;
    },
  },
});

export const { logInFailure, logInSuccess, logInStart } = authSlice.actions;
export default authSlice.reducer;
