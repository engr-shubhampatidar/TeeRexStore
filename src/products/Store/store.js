import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./Slice/CartSlice";
export const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});
