 
import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./features/cartSlice";

export default configureStore({
  reducer: {
    cart: cartReducer,
  },
});