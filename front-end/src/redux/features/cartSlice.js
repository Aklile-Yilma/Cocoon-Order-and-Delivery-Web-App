import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "order",
  initialState: {
    orders: [],
    totalQuantity: 0,
    totalPrice: 0,
  },
  reducers: {
    addItem: (state, action) => {
      const order = state.orders.find(
        (order) => order.item._id === action.payload.item._id
      );

      if (order) {
        if (action.payload.type === "inc") {
          order.quantity += 1;
          state.totalQuantity += 1;
          state.totalPrice += action.payload.item.price;
        } else {
          order.quantity -= 1;
          state.totalQuantity -= 1;
          state.totalPrice -= action.payload.item.price;
        }
        if (order.quantity === 0) {
          state.orders = state.orders.filter(
            (order) => order.item._id !== action.payload.item._id
          );
        }
      } else {
        state.orders.push({ item: action.payload.item, quantity: 1 });
        state.totalQuantity += 1;
        state.totalPrice += action.payload.item.price;
      }
    },
  },
});

export const { addItem } = cartSlice.actions;
export default cartSlice.reducer;