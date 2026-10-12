import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./CounterSlice";

export let store = configureStore({
  reducer: {
    counterStore: counterSlice,
  },
});
