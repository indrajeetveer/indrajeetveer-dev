import { createSlice } from "@reduxjs/toolkit";

export let cartSlice = createSlice({
  name: "Cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addTocart: (state , reqData) => {
      console.log('The Data is recive in an cartSlice',reqData.payload)
    },
    deleteCart: (state) => {
      
    },
    changeQty: (state) => {
      
    },
  },
});

export const { addTocart, deleteCart, changeQty } = cartSlice.actions;
export default cartSlice.reducer;
