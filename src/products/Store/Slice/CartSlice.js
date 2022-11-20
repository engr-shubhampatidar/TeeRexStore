import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
    removeProduct: (state, action) => {
      state.products = state.products.filter(
        (item) => item.id !== action.payload
      );
    },
    changeQuantity: (state, action) => {
      state.products = state.products.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, cartQuantity: action.payload.quantity };
        }
        return item;
      });
    },
  },
});

export const { addProduct, removeProduct, changeQuantity } = cartSlice.actions;
export default cartSlice.reducer;
