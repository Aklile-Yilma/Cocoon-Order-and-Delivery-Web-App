 
import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./features/cartSlice";
import authReducer from "./features/authSlice"
export default configureStore({
  reducer: {
    cart: cartReducer,
    auth : authReducer
  },
});