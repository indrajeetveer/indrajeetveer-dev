import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./CounterSlice";
import  cartSlice  from "./CartSlice";

export let store = configureStore({
  reducer: {
    counterStore: counterSlice,
    cartCounter : cartSlice
  },
});
