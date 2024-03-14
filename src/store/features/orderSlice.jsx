import { createSlice } from "@reduxjs/toolkit";
import orders from "../../data/orders";

export const ordersSlice = createSlice({
  name: "orders",
  initialState: orders,
  reducers: {
    deleteOrder: (state, action) => {
      const index = state.findIndex((order) => order.orderId === action.payload);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
    updateOrder: (state, action) => {
      const index = state.findIndex((order) => order.orderId === action.payload.orderId);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
  },
});

export const { deleteOrder, updateOrder } = ordersSlice.actions;

export default ordersSlice.reducer;
