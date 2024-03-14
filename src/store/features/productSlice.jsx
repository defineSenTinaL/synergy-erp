import { createSlice } from "@reduxjs/toolkit";
import products from "../../data/products";

export const productsSlice = createSlice({
  name: "products",
  initialState: products,
  reducers: {
    addProduct: (state, action) => {
      state.push(action.payload);
    },
    deleteProduct: (state, action) => {
        const index = state.findIndex(product => product.id === action.payload);
        if (index !== -1) {
          state.splice(index, 1);
        }
      },
    updateProduct: (state, action) => {
      const index = state.findIndex(
        (product) => product.id === action.payload.id
      );
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
  },
});

export const { addProduct, deleteProduct, updateProduct } =
  productsSlice.actions;

export default productsSlice.reducer;
